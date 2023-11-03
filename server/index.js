import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connection from "./database/db.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const db_url = process.env.MONGO_URI;
connection(db_url);

app.get("/", (req, res) => {
  res.status(200).json({ success: "success" });
});

app.listen(5000, () => {
  console.log("BlogSite server is listening on 5000");
});
