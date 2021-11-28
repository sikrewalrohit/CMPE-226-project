import express from "express";
import {
  getEmpInfo,
  updateEmpInfo,
  getAllEmployees,
  fireEmployee,
  addTransaction,
  getAllEmployeesFromTo,
  getEmployeesWithHighSaleLasMon,
  sendMessageToEmployee,
} from "../Controller/EmployeeController.js";

const router = express.Router();

router.get("/getEmpInfo", getEmpInfo);
router.put("/updateEmpInfo", updateEmpInfo);
router.get("/getAllEmployees", getAllEmployees);
router.get("/getAllEmployeesFromTo", getAllEmployeesFromTo);
router.get("/getEmployeesWithHighSaleLasMon", getEmployeesWithHighSaleLasMon);
router.delete("/fireEmployee", fireEmployee); // given employee id dlete emp from emp table
router.post("/addTransaction", addTransaction); // employee makes a transaction for customer
router.put("/sendMessageToEmployee", sendMessageToEmployee);

export default router;
