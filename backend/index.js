import express from "express";
import mysql from "mysql";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";

const app = express();

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
import AuthRoutes from "./Routes/AuthRoutes.js";

app.use("/api/auth", AuthRoutes);

//Routes
app.get("/", (req, res) => {
  res.json({ msg: "We are on home" });
});

// Connect to db
export const connection = mysql.createPool({
  connectionLimit: 10,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DATABASE,
  multipleStatements: true,
});
connection.getConnection((error) => {
  if (error) throw error;
  console.log("Successfully connected to the SQL database.");
});

//How to start listening to the server
app.listen(process.env.PORT, () =>
  console.log(`server started on port ${process.env.PORT}`)
);
