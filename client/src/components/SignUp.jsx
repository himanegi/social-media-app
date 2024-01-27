import React, { useRef, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const SignUp = () => {
  const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0 });
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleMouseMove = (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    setBackgroundPosition({ x: xAxis, y: yAxis });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      // Check for duplicate email and username
      const response = await axios.post(
        "http://localhost:3001/register/check-duplicate",
        {
          email,
          username,
        }
      );

      if (response.data.error) {
        // Display an error message for duplicate email or username
        setErrorMessage(response.data.error);
        return;
      }

      // No duplicate found, proceed with registration
      const registerResponse = await axios.post(
        "http://localhost:3001/register",
        {
          username,
          email,
          password,
        }
      );

      console.log("Username:", username);
      console.log("Email:", email);
      console.log("Password:", password);
      console.log(registerResponse);

      setIsButtonClicked(true);
      setTimeout(() => {
        setIsButtonClicked(false);
        navigate("/LoginPage");
      }, 300);
    } catch (error) {
      console.error("Error during registration:", error);
      setErrorMessage("Email or Username already Exists.");
    }
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
          <Form action="#" method="post" onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fas fa-user text-primary"></i>
              </span>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="form-control"
                ref={usernameRef}
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
            {errorMessage && (
              <div className="alert alert-danger mt-3" role="alert">
                {errorMessage}
              </div>
            )}
            <button
              type="submit"
              className={`btn btn-primary ${isButtonClicked ? "clicked" : ""}`}
            >
              Sign Up
            </button>
          </Form>
        </div>
        <div className="signup-link text-center mt-3 opacity-70">
          Already have an account?{" "}
          <a href="/LoginPage" className="text-primary text-decoration-none">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
