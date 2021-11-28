import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useHistory } from "react-router";
import { useEffect } from "react";
import SERVER_URL from "../../config/config.js";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "@mui/material/Button";

function EmployeeToCustomers(props) {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // api fetch all Customers
    axios
      .get(SERVER_URL + `/api/customer/getAllCustomers`)
      .then((response) => {
        // console.log("=========== response==========", response.data);
        if (response.status === 200) {
          setCustomers(response.data); // might need to save in LS
          //   console.log(response.data);
        }
      })
      .catch((error) => {
        // console.log("=============error=============", error);
        if (error.response.data.msg) {
          alert(error.response.data.msg);
        } else {
          alert("Unable to fetch Customers from database.");
        }
      });
  }, []);
  return (
    <div>
      <Table striped bordered hover responsive="lg">
        <thead>
          <tr>
            <th>Customer Id</th>
            <th>Customer Name</th>
            <th>Contact Number</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Address</th>
            <th>Membership Status</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr>
              <td>{customer.customer_id}</td>
              <td>{customer.cus_name}</td>
              <td>{customer.contact_no}</td>
              <td>{customer.gender}</td>
              <td>{customer.email}</td>
              <td>{customer.address}</td>
              <td>{customer.membership}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default EmployeeToCustomers;
