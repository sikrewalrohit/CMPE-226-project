import { Console } from "console";
import { connection as sql } from "../index.js";

// promise for fetching userProfile profile info
export const getAllProductsService = () => {
  return new Promise((resolve) => {
    var query = `select * from product; `;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};
