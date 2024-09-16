import express from "express";
import cors from "cors";
import mysql from "mysql2";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

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
