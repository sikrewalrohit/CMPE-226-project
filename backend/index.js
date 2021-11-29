import express from "express";
import mysql from "mysql";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import winston from "winston";
import expressWinston from "express-winston";
import bunyan from "express-bunyan-logger";

const app = express();

//Middlewares
app.use(cors());
app.use(bodyParser.json());
// app.use(
//   expressWinston.logger({
//     transports: [new winston.transports.Console()],
//     format: winston.format.combine(
//       winston.format.colorize(),
//       winston.format.json()
//     ),
//     meta: false,
//     msg: "HTTP  ",
//     expressFormat: true,
//     colorize: false,
//     ignoreRoute: function (req, res) {
//       return false;
//     },
//   })
// );
// app.use(
//   bunyan({
//     name: "logger",
//     format: ":remote-address - :user-agent[major] custom logger",
//     streams: [
//       {
//         level: "info",
//         stream: process.stdout,
//       },
//     ],
//   })
// );
// app.use(bunyan.errorLogger());

//Import Routes
import AuthRoutes from "./Routes/AuthRoutes.js";
import employeeRoute from "./Routes/EmployeeRoutes.js";
import customerRoute from "./Routes/CustomerRoutes.js";
import productRoute from "./Routes/ProductRoute.js";
import transactionRoute from "./Routes/TransactionRoutes.js";

app.use("/api/auth", AuthRoutes);
app.use("/api/employee", employeeRoute);
app.use("/api/customer", customerRoute);
app.use("/api/product", productRoute);
app.use("/api/transaction", transactionRoute);

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
