import React, { useRef, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const LoginPage = () => {
  const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0 });
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleMouseMove = (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    setBackgroundPosition({ x: xAxis, y: yAxis });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Send login request to your server
    axios
      .post("http://localhost:3001/login", {
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/Home");
        } else {
          setLoginError("Email or password is incorrect. Please try again.");
        }
      })
      .catch((err) => {
        console.log(err);
        setLoginError("An error occurred during login. Please try again.");
      });

    setIsButtonClicked(true);
    setTimeout(() => {
      setIsButtonClicked(false);
      setLoginError("");
    }, 1000);
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
          <h2 className="text-primary mb-2">
            Welcome to <span className="text-info">Social</span>
          </h2>
          <p className="opacity-70">Login to your account</p>
        </div>
        <div className="login-form text-center">
          <Form action="#" method="post" onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fas fa-envelope text-primary"></i>
              </span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
                ref={emailRef}
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
                ref={passwordRef}
                required
              />
            </div>
            {loginError && (
              <div className="alert alert-danger" role="alert">
                {loginError}
              </div>
            )}
            <div className="options d-flex justify-content-between mb-3">
              <label htmlFor="remember" className="d-flex align-items-center">
                <input type="checkbox" id="remember" className="me-2" />{" "}
                Remember me
              </label>
              <a
                href="#"
                className="forgot-password text-primary text-decoration-none"
              >
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className={`btn btn-primary ${isButtonClicked ? "clicked" : ""}`}
            >
              Login
            </button>
          </Form>
        </div>
        <div className="signup-link text-center mt-3 opacity-70">
          Don't have an account?{" "}
          <a href="/SignUp" className="text-primary text-decoration-none">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
