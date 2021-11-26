import express from "express";
import {
  getCusInfo,
  updateCusInfo,
  deleteCusInfo,
  getCustIdGivenEmail,
} from "../Controller/CustomerController.js";

const router = express.Router();

router.get("/getCusInfo", getCusInfo);
router.put("/updateCusInfo", updateCusInfo);
router.delete("/deleteCusInfo", deleteCusInfo);
router.get("/getCustIdGivenEmail", getCustIdGivenEmail); // get cust id given cust email

export default router;
