import React from "react";
import { Route } from "react-router-dom";

import SignIn from "../components/Auth/SignIn.js";
import SignUp from "../components/Auth/SignUp.js";
import Customer from "../components/Customer/Customer.js";
import UpdateCustProfile from "../components/Customer/UpdateCustProfile.js";
import CustPayment from "../components/Customer/CustPayment.js";
import Employee from "../components/Employee/Employee.js";
import UpdateEmpProfile from "../components/Employee/UpdateEmpProfile.js";
import EmpProducts from "../components/Employee/EmpProducts.js";
import EmpTransactions from "../components/Employee/EmpTransactions.js";
import Owner from "../components/Owner/Owner.js";
import AllEmployees from "../components/Owner/AllEmployees.js";
import OwnerTransactions from "../components/Owner/OwnerTransactions.js";
import AllTransactionsChanged from "../components/Owner/OwnerTransactionRedirect/AllTransactionsChanged.js";
import pushToEmployeesWithHighSaleFromTo from "../components/Owner/OwnerTransactionRedirect/PushToEmployeesWithHighSaleFromTo.js";
import PushToCustomersWithHighPurchaseFromTo from "../components/Owner/OwnerTransactionRedirect/PushToCustomersWithHighPurchaseFromTo.js";
import pushCusWithHighestPurLastMonth from "../components/Owner/OwnerTransactionRedirect/pushCusWithHighestPurLastMonth.js";
import PushToEmployeesWithHighSaleLasMon from "../components/Owner/OwnerTransactionRedirect/PushToEmployeesWithHighSaleLasMon.js";

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={SignIn} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/Customer" component={Customer} />
      <Route path="/UpdateCustProfile" component={UpdateCustProfile} />
      <Route path="/CustPayment" component={CustPayment} />
      <Route path="/Employee" component={Employee} />
      <Route path="/UpdateEmpProfile" component={UpdateEmpProfile} />
      <Route path="/EmpProducts" component={EmpProducts} />
      <Route path="/EmpTransactions" component={EmpTransactions} />
      <Route path="/Owner" component={Owner} />
      <Route path="/AllEmployees" component={AllEmployees} />
      <Route path="/OwnerTransactions" component={OwnerTransactions} />
      <Route
        path="/AllTransactionsChanged"
        component={AllTransactionsChanged}
      />
      <Route
        path="/pushToEmployeesWithHighSaleFromTo"
        component={pushToEmployeesWithHighSaleFromTo}
      />
      <Route
        path="/PushToCustomersWithHighPurchaseFromTo"
        component={PushToCustomersWithHighPurchaseFromTo}
      />
      <Route
        path="/pushCusWithHighestPurLastMonth"
        component={pushCusWithHighestPurLastMonth}
      />
      <Route
        path="/PushToEmployeesWithHighSaleLasMon"
        component={PushToEmployeesWithHighSaleLasMon}
      />
    </div>
  );
};

export default Routes;
