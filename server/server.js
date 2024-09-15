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
  const { url, foodName, location, rating, place } = req.body;

  const query = `INSERT INTO food_entries (url, food_name, location, rating, place) VALUES (?, ?, ?, ?, ?)`;
  const values = [url, foodName, location, rating, place];

  db.query(query, values, (err, result) => {
    if (err) {
      console.log("Error inserting data:", err);
      return res.status(500).send("Server error");
    }

    console.log("Data inserted successfully:", {
      url,
      foodName,
      location,
      rating,
      place,
    });

    res.status(200).send("Data inserted successfully");
  });
});

app.get("/ImageStorage", (req, res) => {
  const sql = "SELECT * FROM ImageStorage;";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
