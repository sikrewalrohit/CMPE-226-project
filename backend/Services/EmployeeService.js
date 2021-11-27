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

// promise for getting all employees
export const getAllEmployeesService = () => {
  return new Promise((resolve) => {
    var query = `select * from employee;`;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};

// promise for fetching all employees
export const getAllEmployeesFromToService = (from, to) => {
  return new Promise((resolve) => {
    var query = `SELECT e.emp_name, sum(t.total) as Total
    FROM employee e, tran t
    where e.employee_id=t.employee_id and t.tran_date between '${from}' and '${to}'
    group by e.emp_name
    order by sum(Total) DESC
    LIMIT 5;`;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};

// promise for updating userProfile profile info
export const getEmployeesWithHighSaleLasMonService = (from, to) => {
  return new Promise((resolve) => {
    var query = `call IMS.top_5('customer');`;

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

// promise for adding transaction by employee
export const addTransactionService = (
  productIdsString,
  cusId,
  empId,
  date,
  qty,
  payDue,
  discount
) => {
  return new Promise((resolve) => {
    var query = `call IMS.calculate_price(${empId},${cusId},'${date}', ${qty},${payDue},${discount}, '${productIdsString}');`;
    console.log("======query======", query);
    // var query = `call IMS.calculate_price(3,2,'2021-11-26', 2,0,10,'2,5');`;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};
