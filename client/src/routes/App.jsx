import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import SignUp from "../components/SIgnUp";

const App = () => {
  return (
    <>
      <SignUp></SignUp>
    </>
  );
};

export default App;
