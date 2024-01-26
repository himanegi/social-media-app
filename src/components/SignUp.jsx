import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {
  const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0 });
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleMouseMove = (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    setBackgroundPosition({ x: xAxis, y: yAxis });
  };

  const handleButtonClick = () => {
    setIsButtonClicked(true);
    setTimeout(() => {
      setIsButtonClicked(false);
    }, 300);
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh", overflow: "hidden" }}
    >
      <div
        className="position-fixed top-0 start-0 w-100 h-100 background"
        style={{
          backgroundImage: "url('tu-imagen.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)",
          zIndex: "-1",
          transform: `translate(${backgroundPosition.x}px, ${backgroundPosition.y}px)`,
        }}
      ></div>
      <div
        className="login-container bg-secondary bg-opacity-10 rounded p-3 shadow"
        style={{ width: "400px" }}
      >
        <div className="login-header text-center mb-4">
          <h2 className="text-primary mb-2">Create an Account</h2>
          <p className="opacity-70">Sign up to get started</p>
        </div>
        <div className="login-form text-center">
          <form action="#" method="post">
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fas fa-user text-primary"></i>
              </span>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="form-control"
                required
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fas fa-envelope text-primary"></i>
              </span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
                required
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fas fa-lock text-primary"></i>
              </span>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control"
                required
              />
            </div>
            <div className="options d-flex justify-content-between mb-3">
              <label htmlFor="agree" className="d-flex align-items-center">
                <input type="checkbox" id="agree" className="me-2" /> I agree to
                the terms
              </label>
            </div>
            <button
              type="submit"
              onClick={handleButtonClick}
              className={`btn btn-primary ${isButtonClicked ? "clicked" : ""}`}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="signup-link text-center mt-3 opacity-70">
          Already have an account?{" "}
          <a href="#" className="text-primary text-decoration-none">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
