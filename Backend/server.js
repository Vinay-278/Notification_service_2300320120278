import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Connect_db from "./config/db.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
Connect_db();

app.get("/", (req, res) => {
  res.send("Backend running ...");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
