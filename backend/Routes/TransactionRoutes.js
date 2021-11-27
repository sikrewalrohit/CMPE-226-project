import express from "express";
import {
  fetchAllTransactions,
  updateTransactionPayDueCol,
  fetchAllTransactionsChanged,
} from "../Controller/TransactionController.js";

const router = express.Router();

router.get("/fetchAllTransactions", fetchAllTransactions); // fetch all transactions of a cust given cust id
router.put("/updateTransactionPayDueCol", updateTransactionPayDueCol); // given transaction id update payment due of transaction
router.get("/fetchAllTransactionsChanged", fetchAllTransactionsChanged);

export default router;
