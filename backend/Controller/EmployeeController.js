import bcrypt from "bcrypt";

import {
  getEmpInfoService,
  updateEmpInfoService,
  getAllEmployeesService,
  fireEmployeeService,
} from "../Services/EmployeeService.js";

// fetch employee info
export const getEmpInfo = async (req, res) => {
  //   console.log("==========Inside Thingy=================");
  const emp_id = req.query.id;
  try {
    const [err1, result1] = await getEmpInfoService(emp_id);
    // console.log("================err1==============", err1);
    // console.log("================result1==============", result1);

    if (err1) {
      res
        .status(400)
        .json({ msg: "Unable to fetch employee information from database." });
      return;
    }

    res.status(200).json(result1);
  } catch (error) {
    // console.log("================error==============", error);
    res
      .status(400)
      .json({ msg: "Unable to fetch employee information from database." });
  }
};

// update employee info
export const updateEmpInfo = async (req, res) => {
  //   console.log("==========Inside Thingy=================");
  //   console.log(
  //     "==========Inside Thingy=================",
  //     req.body.id,
  //     req.body.name,
  //     req.body.email,
  //     req.body.address
  //   );

  try {
    const [err1, result1] = await updateEmpInfoService(
      req.body.id,
      req.body.name,
      req.body.contactNumber,
      req.body.address
    );
    // console.log("================err1==============", err1);
    // console.log("================result1 of update==============", result1);

    if (err1) {
      res
        .status(400)
        .json({ msg: "Unable to update employee information in database." });
      return;
    }

    // let insertId = result1.body.

    const [err2, result2] = await getEmpInfoService(req.body.id);
    // console.log("================err1==============", err1);
    // console.log("================result1==============", result1);

    if (err2) {
      res.status(400).json({
        msg: "Unable to fetch updated employee information from database.",
      });
      return;
    }

    res.status(200).json(result2);
  } catch (error) {
    // console.log("================error  1==============", error);
    res
      .status(400)
      .json({ msg: "Unable to update employee information in database." });
  }
};

// fetch all employees
export const getAllEmployees = async (req, res) => {
  //   console.log("==========Inside Thingy=================");
  //   console.log(
  //     "==========Inside Thingy=================",
  //     req.body.id,
  //     req.body.name,
  //     req.body.email,
  //     req.body.address
  //   );

  try {
    const [err1, result1] = await getAllEmployeesService();
    // console.log("================err1==============", err1);
    // console.log("================result1 of update==============", result1);

    if (err1) {
      res.status(400).json({ msg: "Unable to fetch employees from database." });
      return;
    }

    if (result1.length === 0) {
      res.status(400).json({ msg: "No employees to fetch." });
      return;
    }

    res.status(200).json(result1);
  } catch (error) {
    // console.log("================error  1==============", error);
    res.status(400).json({ msg: "Unable to fetch employees from database." });
  }
};

// delete employee given employee id
export const fireEmployee = async (req, res) => {
  //   console.log("==========Inside Thingy=================");

  var empId = req.query.id;

  try {
    const [err1, result1] = await fireEmployeeService(empId);
    // console.log("================err1==============", err1);
    // console.log("================result1 of update==============", result1);

    if (err1) {
      res.status(400).json({ msg: "Unable to fire employee." });
      return;
    }

    res.status(200).json(result1);
  } catch (error) {
    // console.log("================error  1==============", error);
    res.status(400).json({ msg: "Unable to fire employee." });
  }
};
