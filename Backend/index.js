import mysql from "mysql2";
import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());

app.use(cors());

const db = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "commissions",
  })
  .promise();

app.get("/", (req, res) => {
  res.send("hello from backend!");
});

app.get("/commissions", async (req, res) => {
  try {
    const [rows, fields] = await db.query("SELECT * FROM commissions_table");
    res.send(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.get("/commissions/:commissionId", async (req, res) => {
  try {
    let commissionId = parseInt(req.params.commissionId);
    const [row, fields] = await db.query(
      "SELECT * FROM commissions_table WHERE id=?",
      commissionId
    );
    res.send(row);
  } catch (error) {
    console.error(error);
    res.status(404).send("Commission not found");
  }
});

app.post("/commissions", async (req, res) => {
  try {
    let commissionsData = [req.body.description, req.body.price];
    const insert = await db.query(
      "INSERT INTO commissions_table(description,price) VALUES (?,?)",
      commissionsData
    );
    res.send("Successful post!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.delete("/commissions/:commissionId", async (req, res) => {
  try {
    let commissionId = parseInt(req.params.commissionId);
    const [rows, fields] = await db.query(
      "DELETE FROM commissions_table WHERE id=?",
      commissionId
    );
    res.send("Commission deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(404).send("Commission not found");
  }
});

app.listen(port, () => {
  try {
    console.log(`Server is listening on port ${port}`);
  } catch (error) {
    console.error("Error starting the server:", error);
  }
});
