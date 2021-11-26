import express from "express";
import {
  getEmpInfo,
  updateEmpInfo,
  getAllEmployees,
  fireEmployee,
} from "../Controller/EmployeeController.js";

const router = express.Router();

router.get("/getEmpInfo", getEmpInfo);
router.put("/updateEmpInfo", updateEmpInfo);
router.get("/getAllEmployees", getAllEmployees);
router.delete("/fireEmployee", fireEmployee); // given employee id dlete emp from emp table

export default router;
