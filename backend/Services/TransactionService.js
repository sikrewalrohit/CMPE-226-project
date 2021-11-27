import { Console } from "console";
import { connection as sql } from "../index.js";

// promise for fetching all transactions of cust given cust id
export const fetchAllTransactionsService = (id) => {
  return new Promise((resolve) => {
    var query = `select * from tran where customer_id = '${id}';`;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};

// promise for given transaction id update payment due of transaction
export const updateTransactionPayDueColService = (id) => {
  return new Promise((resolve) => {
    var query = `Update tran SET payment_due=1 where transaction_id='${id}';`;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};

// promise to fetch * from chnage table
export const fetchAllTransactionsChangedService = () => {
  return new Promise((resolve) => {
    var query = `SELECT * from changes;`;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};
