import express, { query } from "express";
import cors from "cors";
import mysql from "mysql2";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";

const app = express();
const PORT = 4000;
const saltRounds = 10;

app.use(cors({ origin: "http://localhost:3000" }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mY$pQL!58gN#9cD^7sZl",
  database: "Swiggy",
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to the database.");
});

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.post("/submit-form", (req, res) => {
  const {
    image_url,
    available_at,
    location,
    rating,
    time_required,
    more_items,
  } = req.body;

  const query = `INSERT INTO FoodItems (image_url, available_at, location, rating, time_required, more_items) VALUES (?, ?, ?, ?, ?, ?)`;
  const values = [
    image_url,
    available_at,
    location,
    rating,
    time_required,
    more_items,
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      console.log("Error inserting data:", err);
      return res.status(500).send("Server error");
    }

    console.log("Data inserted successfully:", {
      image_url,
      available_at,
      location,
      rating,
      time_required,
      more_items,
    });

    res.status(200).send("Data inserted successfully");
  });
});

app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  bcrypt.hash(password, saltRounds, (err) => {
    return res.json({ Error: "Error fro hashing password" });
  });

  const sql = `INSERT INTO Login (name , email , password) values (? , ? , ?)`;

  const values = [name, email, hash];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.log("Enable to SignUp", err);
      return res.status(500).send("Server error");
    } else {
      console.log("data insert successfully", {
        name,
        email,
        password,
      });
      res.status(200).send("Data inserted successfully");
    }
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const sql = `SELECT * FROM Login where email = ? AND password = ?`;
  const values = [email, password];

  db.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Server error", error: err });
    }

    if (result.length > 0) {
      res.status(200).json({ message: "Login successful", user: result[0] });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  });
});

app.get("/FoodItems", (req, res) => {
  const sql = "SELECT * FROM FoodItems;";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
