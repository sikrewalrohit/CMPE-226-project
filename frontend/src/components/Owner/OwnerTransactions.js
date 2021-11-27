import React from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useEffect } from "react";
import SERVER_URL from "../../config/config.js";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import { useCart } from "react-use-cart";
import { maxHeight } from "@mui/system";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustNavBar from "../Customer/CustNavBar.js";

const theme = createTheme();

function OwnerTransactions(props) {
  let history = useHistory();

  const pushToAllTansactionsChanged = () => {
    history.push("/AllTransactionsChanged");
  };

  const pushToEmployeesWithHighSale = () => {
    // history.push("/pushToEmployeesWithHighSaleFromTo");
    history.push({
      pathname: "/pushToEmployeesWithHighSaleFromTo",
      state: { startDate, endDate }, // your data array of objects
    });
  };

  const pushToCustomersWithHighPurchases = () => {
    // history.push("/pushToEmployeesWithHighSaleFromTo");
    history.push({
      pathname: "/PushToCustomersWithHighPurchaseFromTo",
      state: { startDate, endDate }, // your data array of objects
    });
  };
  const pushCusWithHighestPurLastMonth = () => {
    // history.push("/pushToEmployeesWithHighSaleFromTo");
    history.push("/PushCusWithHighestPurLastMonth");
  };
  const pushToEmployeesWithHighSaleLasMon = () => {
    // history.push("/pushToEmployeesWithHighSaleFromTo");
    history.push("/PushToEmployeesWithHighSaleLasMon");
  };

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  return (
    <div>
      <CustNavBar />
      <Row>
        {" "}
        <Col>
          <Card
            style={{
              margin: "5%",
              backgroundColor: "rgb(204, 207, 205)",
              maxHeight: "400px",
              minHeight: "400px",
            }}
          >
            <CardContent>
              <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                  <CssBaseline />
                  <Box
                    sx={{
                      marginTop: 8,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography component="h1" variant="h5">
                      Transactions which are changed by Employee
                    </Typography>
                    <Box
                      component="form"
                      // onSubmit={handleSubmit}
                      noValidate
                      sx={{ mt: 1 }}
                    >
                      <Button
                        type="button"
                        onClick={pushToAllTansactionsChanged}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Get Transactions
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </ThemeProvider>
            </CardContent>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              margin: "5%",
              backgroundColor: "rgb(204, 207, 205)",
              maxHeight: "400px",
              minHeight: "400px",
            }}
          >
            <CardContent>
              <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                  <CssBaseline />
                  <Box
                    sx={{
                      marginTop: 8,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography component="h1" variant="h5">
                      Get 5 Employees with highest sale
                    </Typography>
                    <Box
                      component="form"
                      // onSubmit={handleSubmit}
                      noValidate
                      sx={{ mt: 1 }}
                    >
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="startDate"
                        label="Start Date"
                        name="startDate"
                        autoComplete="startDate"
                        autoFocus
                        value={startDate}
                        onChange={handleStartDateChange}
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="endDate"
                        label="End Date"
                        name="endDate"
                        autoComplete="endDate"
                        autoFocus
                        value={endDate}
                        onChange={handleEndDateChange}
                      />
                      <Button
                        type="button"
                        onClick={pushToEmployeesWithHighSale}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Get Employees
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </ThemeProvider>
            </CardContent>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              margin: "5%",
              backgroundColor: "rgb(204, 207, 205)",
              maxHeight: "400px",
              minHeight: "400px",
            }}
          >
            <CardContent>
              <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                  <CssBaseline />
                  <Box
                    sx={{
                      marginTop: 8,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography component="h1" variant="h5">
                      Get top 5 customer with highest purchase
                    </Typography>
                    <Box
                      component="form"
                      // onSubmit={handleSubmit}
                      noValidate
                      sx={{ mt: 1 }}
                    >
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="startDate"
                        label="Start Date"
                        name="startDate"
                        autoComplete="startDate"
                        autoFocus
                        value={startDate}
                        onChange={handleStartDateChange}
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="endDate"
                        label="End Date"
                        name="endDate"
                        autoComplete="endDate"
                        autoFocus
                        value={endDate}
                        onChange={handleEndDateChange}
                      />
                      <Button
                        type="button"
                        onClick={pushToCustomersWithHighPurchases}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Get Customers
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </ThemeProvider>
            </CardContent>
          </Card>
        </Col>
      </Row>
      <Row>
        {" "}
        <Col>
          <Card
            style={{
              margin: "5%",
              backgroundColor: "rgb(204, 207, 205)",
              maxHeight: "400px",
              minHeight: "400px",
            }}
          >
            <CardContent>
              <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                  <CssBaseline />
                  <Box
                    sx={{
                      marginTop: 8,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography component="h1" variant="h5">
                      Get top 5 customer with highest purchase last month
                    </Typography>
                    <Box
                      component="form"
                      // onSubmit={handleSubmit}
                      noValidate
                      sx={{ mt: 1 }}
                    >
                      <Button
                        type="button"
                        onClick={pushCusWithHighestPurLastMonth}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Get Customers
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </ThemeProvider>
            </CardContent>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              margin: "5%",
              backgroundColor: "rgb(204, 207, 205)",
              maxHeight: "400px",
              minHeight: "400px",
            }}
          >
            <CardContent>
              <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                  <CssBaseline />
                  <Box
                    sx={{
                      marginTop: 8,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography component="h1" variant="h5">
                      Get top 5 Employees with highest sale last month
                    </Typography>
                    <Box
                      component="form"
                      // onSubmit={handleSubmit}
                      noValidate
                      sx={{ mt: 1 }}
                    >
                      <Button
                        type="button"
                        onClick={pushToEmployeesWithHighSaleLasMon}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Get Employees
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </ThemeProvider>
            </CardContent>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              margin: "5%",
              backgroundColor: "rgb(204, 207, 205)",
              maxHeight: "400px",
              minHeight: "400px",
            }}
          >
            <CardContent>
              <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                  <CssBaseline />
                  <Box
                    sx={{
                      marginTop: 8,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography component="h1" variant="h5">
                      Get top 5 customer with highest purchase
                    </Typography>
                    <Box
                      component="form"
                      // onSubmit={handleSubmit}
                      noValidate
                      sx={{ mt: 1 }}
                    >
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="startDate"
                        label="Start Date"
                        name="startDate"
                        autoComplete="startDate"
                        autoFocus
                        value={startDate}
                        onChange={handleStartDateChange}
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="endDate"
                        label="End Date"
                        name="endDate"
                        autoComplete="endDate"
                        autoFocus
                        value={endDate}
                        onChange={handleEndDateChange}
                      />
                      <Button
                        type="button"
                        onClick={pushToCustomersWithHighPurchases}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Get Customers
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </ThemeProvider>
            </CardContent>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default OwnerTransactions;
