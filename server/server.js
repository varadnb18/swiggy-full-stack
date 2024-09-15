import express from "express";
import cors from "cors";
import mysql from "mysql2";

const app = express();
const PORT = 4000;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

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
