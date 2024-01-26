import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SIgnUp";

const App = () => {
  return (
    <>
      <SignUp />
      <LoginPage />
    </>
  );
};

export default App;
