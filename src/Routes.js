import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

import "./assets/css/main.scss";

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
    </div>
  );
};

export default Routes;
