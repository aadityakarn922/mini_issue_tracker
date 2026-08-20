const express = require("express");
const pool = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Mini Issue Tracker API" });
});

app.get("/issues", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM issues ORDER BY created_at DESC");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/issues", async (req, res) => {
  const { title, description, status, priority } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO issues (title, description, status, priority) VALUES ($1, $2, $3, $4) RETURNING *",
      [title, description, status || "open", priority || "medium"]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/health", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ status: "ok", time: result.rows[0].now });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
