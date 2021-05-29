import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Routing
import PrivateRoute from "./components/routing/PrivateRoute";

//Screens
import {
  PrivateScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  PasswordResetScreen,
} from "./components/screens";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <PrivateRoute exact path="/" component={PrivateScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          {/* <Route exact path="/" component={HomeScreen} />
          <PrivateRoute exact path="/browse" component={PrivateScreen} /> */}
          <Route
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          />
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={PasswordResetScreen}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
