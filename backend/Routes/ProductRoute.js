import express from "express";
import { getAllProducts } from "../Controller/ProductController.js";

const router = express.Router();

router.get("/getAllProducts", getAllProducts);

export default router;
