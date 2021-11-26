import { Console } from "console";
import { connection as sql } from "../index.js";

// promise for fetching userProfile profile info
export const getCusInfoService = (id) => {
  return new Promise((resolve) => {
    var query = `select cus_name, contact_no, address from customer where customer_id=${id}`;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};

// promise for updating userProfile profile info
export const updateCusInfoService = (id, name, contactNumber, adress) => {
  return new Promise((resolve) => {
    var query = `UPDATE customer SET cus_name = '${name}', contact_no = '${contactNumber}', address='${adress}' WHERE customer_id = '${id}';`;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};

// promise for deleting userProfile info
export const deleteCusInfoService = (id) => {
  return new Promise((resolve) => {
    var query = `DELETE FROM customer WHERE customer_id = '${id}';`;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};

// promise for fetching cust id given cust email
export const getCustIdGivenEmailService = (cus_email) => {
  return new Promise((resolve) => {
    var query = `select customer_id from customer WHERE email = '${cus_email}';`;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};
