import bcrypt from "bcrypt";

import {
  fetchAllTransactionsService,
  updateTransactionPayDueColService,
  fetchAllTransactionsChangedService,
} from "../Services/TransactionService.js";

// fetch all transactin of a given cust --> cust id
export const fetchAllTransactions = async (req, res) => {
  // console.log("==========Inside Thingy=================");
  const cusId = req.query.id;
  try {
    const [err1, result1] = await fetchAllTransactionsService(cusId);
    // console.log("================err1==============", err1);
    // console.log("================result1==============", result1);

    if (result1.length === 0) {
      res.status(400).json({ msg: "No transactions available." });
      return;
    }
    if (err1) {
      res
        .status(400)
        .json({ msg: "Unable to fetch customer Transactions from database." });
      return;
    }

    res.status(200).json(result1);
  } catch (error) {
    // console.log("================error==============", error);
    res
      .status(400)
      .json({ msg: "Unable to fetch customer Transactions from database." });
  }
};

// given transaction id update payment due of transaction
export const updateTransactionPayDueCol = async (req, res) => {
  // console.log("==========Inside Thingy=================");
  const tranId = req.query.id;
  try {
    const [err1, result1] = await updateTransactionPayDueColService(tranId);
    // console.log("================err1==============", err1);
    // console.log("================result1==============", result1);
    if (err1) {
      res.status(400).json({ msg: "Unable to update transaction." });
      return;
    }

    res.status(200).json(result1);
  } catch (error) {
    // console.log("================error==============", error);
    res.status(400).json({ msg: "Unable to update transaction." });
  }
};

// fetch All Transactions that are changed
export const fetchAllTransactionsChanged = async (req, res) => {
  // console.log("==========Inside Thingy=================");
  const tranId = req.query.id;
  try {
    const [err1, result1] = await fetchAllTransactionsChangedService(tranId);
    // console.log("================err1==============", err1);
    // console.log("================result1==============", result1);
    if (err1) {
      res.status(400).json({ msg: "Unable to update transaction." });
      return;
    }

    res.status(200).json(result1);
  } catch (error) {
    // console.log("================error==============", error);
    res.status(400).json({ msg: "Unable to update transaction." });
  }
};
