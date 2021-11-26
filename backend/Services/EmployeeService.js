import { Console } from "console";
import { connection as sql } from "../index.js";

// promise for fetching userProfile profile info
export const getEmpInfoService = (id) => {
  return new Promise((resolve) => {
    var query = `select emp_name, contact_no, address from employee where employee_id=${id}`;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};

// promise for updating userProfile profile info
export const updateEmpInfoService = (id, name, contactNumber, adress) => {
  return new Promise((resolve) => {
    var query = `UPDATE employee SET emp_name = '${name}', contact_no = '${contactNumber}', address='${adress}' WHERE employee_id = '${id}';`;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};

// promise for updating userProfile profile info
export const getAllEmployeesService = () => {
  return new Promise((resolve) => {
    var query = `select * from employee;`;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};

// promise for updating userProfile profile info
export const fireEmployeeService = (id) => {
  return new Promise((resolve) => {
    var query = `DELETE FROM employee WHERE employee_id = '${id}';`;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};
