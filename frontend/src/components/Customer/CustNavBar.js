import * as React from "react";
import AppBar from "@mui/material/AppBar";
import axios from "axios";
import { useHistory } from "react-router";
import { useEffect } from "react";
import SERVER_URL from "../../config/config.js";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function CustNavBar() {
  // var id = 6; //fetch from local

  const userData = JSON.parse(localStorage.getItem("userData"));
  var cusId = userData.customer_id;

  const history = useHistory();

  const updateProfile = () => {
    history.push("/UpdateCustProfile");
  };

  const payment = () => {
    // history.push("/UpdateCustProfile"); push to payment page
    history.push("/CustPayment");
  };

  const logOut = () => {
    // history.push("/UpdateCustProfile"); push to payment page
    history.push("/");
    // window.localStorage.clear();
  };

  const products = () => {
    // history.push("/UpdateCustProfile"); push to payment page
    history.push("/displayAllProducts");
    // window.localStorage.clear();
  };

  const deleteAccount = () => {
    // api to delete account i.e deleting creds from db table
    axios
      .post(SERVER_URL + `/api/customer/deleteCusInfo?id=${cusId}`)
      .then((response) => {
        if (response.status === 200) {
          // console.log("===============here in 200==========", response.status);
          alert("Your account has been deleted successfully!!");
          history.push("/SignUp"); //on successful deletion
        }
      })
      .catch((error) => {
        // if (error.response.data.msg) {
        // console.log("===============here in 400==========", error);
        alert(error.response.data.sqlMessage);
        // } else {
        // alert("Unable to delete customer information from database.");
        // }
      });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* <Link
              style={{ textDecoration: "none", color: "black" }}
              id="tocustprofile"
              className="nav-link"
              to="/custProfile"
            >
              {" "}
              Payment
            </Link> */}
            <Button onClick={products} color="success" variant="contained">
              Products
            </Button>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* <Link
              style={{ textDecoration: "none", color: "black" }}
              id="tocustprofile"
              className="nav-link"
              to="/UpdateCustProfile"
            >
              {" "}
              Update Profile
            </Link> */}
            <Button
              onClick={updateProfile}
              color="secondary"
              variant="contained"
            >
              Update Profile
            </Button>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button onClick={deleteAccount} color="error" variant="contained">
              Delete Account
            </Button>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* <Link
              style={{ textDecoration: "none", color: "black" }}
              id="tocustprofile"
              className="nav-link"
              to="/custProfile"
            >
              {" "}
              Payment
            </Link> */}
            <Button onClick={payment} color="success" variant="contained">
              Paid/Pending Orders
            </Button>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button onClick={logOut} color="error" variant="contained">
              Log Out
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
