import express from "express";
import {
  getCusInfo,
  updateCusInfo,
  deleteCusInfo,
  getCustIdGivenEmail,
  getFiveCusHighPurFromTo,
  getFiveCusHighPurLasMon,
  getMembershipStatus,
  getAllCustomers,
} from "../Controller/CustomerController.js";

const router = express.Router();

router.get("/getCusInfo", getCusInfo);
router.put("/updateCusInfo", updateCusInfo);
router.post("/deleteCusInfo", deleteCusInfo);
router.get("/getCustIdGivenEmail", getCustIdGivenEmail); // get cust id given cust email
router.get("/getFiveCusHighPurFromTo", getFiveCusHighPurFromTo);
router.get("/getFiveCusHighPurLasMon", getFiveCusHighPurLasMon);
router.get("/getMembershipStatus", getMembershipStatus);
router.get("/getAllCustomers", getAllCustomers);

export default router;
