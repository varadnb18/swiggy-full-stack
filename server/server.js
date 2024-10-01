import express, { query } from "express";
import cors from "cors";
import mysql from "mysql2";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

const app = express();
const PORT = 4000;
const saltRounds = 10;

dotenv.config();
const key = process.env.secretkey;
const password = process.env.password;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "GET", "DELETE", "PATCH"],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: password,
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

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: "You are not authenticated" });
  } else {
    jwt.verify(token, key, (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: "Token is not valid" });
      } else {
        req.name = decoded.name;
        req.role = decoded.role;
        next();
      }
    });
  }
};

const verifyAdmin = (req, res, next) => {
  const token = req.headers["authorization"];
  console.log(token);

  if (!token) {
    return res.status(401).json({ error: "You are not authenticated" });
  } else {
    jwt.verify(token, key, (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: "Token is not valid" });
      } else {
        req.name = decoded.name;

        if (decoded.role == "ADMIN") {
          next();
        }
      }
    });
  }
};

app.get("/", verifyUser, (req, res) => {
  return res.json({ Status: "Success", name: req.name, role: req.role });
  // res.send("Hello Express!");
});

app.post("/submit-form", verifyAdmin, (req, res) => {
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

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      return res.json({ Error: "Error hashing password" });
    }

    const sql = `INSERT INTO Login (name, email, password) values (?, ?, ?)`;
    const values = [name, email, hash];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.log("Unable to SignUp", err);
        return res.status(500).send("Server error");
      }

      console.log("Data inserted successfully", { name, email });
      res.status(200).send("Data inserted successfully");
    });
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const sql = `SELECT * FROM Login WHERE email = ?`;
  const values = [email];

  db.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Server error", error: err });
    }

    if (result.length > 0) {
      const user = result[0];

      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Error comparing passwords", error: err });
        }

        if (isMatch) {
          const name_temp = user.name;
          const role_temp = user.role;

          const token = jwt.sign({ name: name_temp, role: role_temp }, key, {
            expiresIn: "1d",
          });

          res.cookie("token", token, { httpOnly: true, sameSite: "strict" });

          return res.status(200).json({ message: "Login successful", token });
        } else {
          return res.status(401).json({ message: "Invalid email or password" });
        }
      });
    } else {
      return res.status(401).json({ message: "Invalid email or password" });
    }
  });
});

app.delete("/FoodItems/:id", (req, res) => {
  const foodItemId = req.params.id;

  const sql = `DELETE FROM FoodItems WHERE id = ?`;
  db.query(sql, [foodItemId], (err, result) => {
    if (err) {
      console.error("Error deleting food item:", err);
      return res.status(500).json({ message: "Server error" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Food item not found" });
    }

    return res.status(200).json({ message: "Food item deleted successfully" });
  });
});

app.patch("/update-password", (req, res) => {
  const { email, oldPassword, newPassword } = req.body;

  const getUserQuery = `SELECT * FROM Login WHERE email = ?`;
  const updatePasswordQuery = `UPDATE Login SET password = ? WHERE email = ?`;

  db.query(getUserQuery, [email], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Database error" });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = results[0];

    bcrypt.compare(oldPassword, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ message: "Error comparing passwords" });
      }

      if (!isMatch) {
        return res.status(401).json({ message: "Old password is incorrect" });
      }

      bcrypt.hash(newPassword, saltRounds, (err, hashedPassword) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Error hashing new password" });
        }

        db.query(updatePasswordQuery, [hashedPassword, email], (err) => {
          if (err) {
            return res.status(500).json({ message: "Error updating password" });
          }

          return res
            .status(200)
            .json({ message: "Password updated successfully" });
        });
      });
    });
  });
});

app.get("/FoodItems", verifyUser, (req, res) => {
  const sql = "SELECT * FROM FoodItems;";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json({
      role: req.role,
      foodItems: data,
    });
  });
});

app.get("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "strict",
    secure: false,
  });
  return res.status(200).json({ status: "Success", message: "Logged out" });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
