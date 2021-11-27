import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useHistory } from "react-router";
import { useEffect } from "react";
import SERVER_URL from "../../../config/config.js";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "@mui/material/Button";

function PushToEmployeesWithHighSaleLasMon(props) {
  let history = useHistory();
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    // api call to fetch all employees
    axios
      .get(SERVER_URL + `/api/employee/getEmployeesWithHighSaleLasMon`)
      .then((response) => {
        // console.log("=========== response==========", response.data);
        if (response.status === 200) {
          // setEmployees(response.data); // might need to save in LS
          console.log(response.data[0]);
        }
      })
      .catch((error) => {
        // console.log("=============error=============", error);
        if (error.response.data.msg) {
          alert(error.response.data.msg);
        } else {
          alert("Unable to fetch employees from database.");
        }
      });
  }, []);
  return (
    <div>
      <Table striped bordered hover responsive="lg">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr>
              <td>{employee.emp_name}</td>
              <td>{employee.Total}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default PushToEmployeesWithHighSaleLasMon;
