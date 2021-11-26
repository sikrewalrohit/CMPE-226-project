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
import { useState } from "react";
import Table from "react-bootstrap/Table";

const theme = createTheme();

function EmpProducts(props) {
  const [email, setEmail] = useState("");
  const [modalState, setModalState] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // api call to fetch all products
    axios
      .get(SERVER_URL + `/api/product/getAllProducts`)
      .then((response) => {
        console.log("=========== response==========", response.data);
        if (response.status === 200) {
          setProducts(response.data); // might need to save in LS
        }
      })
      .catch((error) => {
        // console.log("=============error=============", error);
        if (error.response.data.msg) {
          alert(error.response.data.msg);
        } else {
          alert("Unable to fetch products from database.");
        }
      });
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // console.log(email);

  useEffect(() => {}, []);

  const handleSubmit = async (event) => {
    // api call for to get cust id given cust email
    axios
      .get(SERVER_URL + `/api/customer/getCustIdGivenEmail?email=${email}`)
      .then((response) => {
        console.log(
          "=========== response==========",
          response.data[0].customer_id
        );
        if (response.status === 200) {
          var cusId = response.data[0].customer_id; // might need to save in LS
          setModalState(0);
        }
      })
      .catch((error) => {
        console.log("=============error=============", error);
        if (error.response.data.msg) {
          alert(error.response.data.msg);
        } else {
          alert("Unable to fetch customer information from database.");
        }
      });
  };
  return (
    <div>
      <div>
        {modalState !== 0 ? (
          <Card style={{ margin: "5%", backgroundColor: "rgb(204, 207, 205)" }}>
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
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                      <PersonIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                      Enter Customer Email
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
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={handleEmailChange}
                      />

                      <Button
                        type="button"
                        onClick={handleSubmit}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Get Customer Id
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </ThemeProvider>
            </CardContent>
          </Card>
        ) : null}

        {modalState !== 1 ? (
          <Table striped bordered hover responsive="lg">
            <thead>
              <tr>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Product Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr>
                  <td>{product.product_id}</td>
                  <td>{product.product_name}</td>
                  <td>{product.product_price}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : null}
      </div>
    </div>
  );
}

export default EmpProducts;
