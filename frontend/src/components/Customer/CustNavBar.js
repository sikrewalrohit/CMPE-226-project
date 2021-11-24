import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useHistory } from "react-router-dom";

export default function CustNavBar() {
  const history = useHistory();

  const updateProfile = () => {
    history.push("/UpdateCustProfile");
  };

  const payment = () => {
    // history.push("/UpdateCustProfile"); push to payment page
    history.push("/CustPayment");
  };

  const deleteAccount = () => {
    // api to delete account i.e deleting creds from db table
    history.push("/SignUp"); //on successful deletion
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
              Payment
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
