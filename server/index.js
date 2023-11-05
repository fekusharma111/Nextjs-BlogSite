import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connection from "./database/db.js";
import router from "./routes/router.js";
import winston from "winston";

dotenv.config();
const app = express();

// Configure the Winston logger
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp({
      format: "DD-MM-YYYY HH:mm:ss",
    }),
    winston.format.json()
  ),
  transports: [new winston.transports.File({ filename: "app.log" })],
});

// Make the logger available to other parts of your application
app.locals.logger = logger;

app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend's domain
    credentials: true,
  })
);
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

const db_url = process.env.MONGO_URI;
connection(db_url);

app.listen(5000, () => {
  console.log("BlogSite server is listening on 5000");
});
