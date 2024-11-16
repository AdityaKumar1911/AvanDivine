import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast from react-toastify
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Footer/footer";
import Navbar from "../Nav/Nav";
import "../Signup/Signup.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // For demo purposes, simulate a login process
    if (
      formData.email === "demo@example.com" &&
      formData.password === "password"
    ) {
      // Simulate a successful login
      toast.success("Login successful!");
      // Optionally redirect to another page
      // history.push("/dashboard");
    } else {
      // Simulate login failure
      toast.error("Invalid email or password. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid signup-container d-flex align-items-center justify-content-center">
        <div className="row w-100">
          <div className="col-12 col-md-2"></div>
          <div className="col-12 col-md-8">
            <h3 className="title1 text-start">Login</h3>
            <p className="login">
              Don't have an account yet ?{" "}
              <Link to="/signup">Create account</Link>
            </p>
            <form onSubmit={handleSubmit} className="form">
              <div className="form-item mb-3">
                <input
                  type="text"
                  id="email"
                  className="form-control"
                  autoComplete="off"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email" className="form-label">
                  Email
                </label>
              </div>
              <div className="form-item mb-3">
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  autoComplete="off"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
                <label htmlFor="password" className="form-label">
                  Password
                </label>
              </div>

              <Link className="login-btn" to="#">
                Forgot your password ?
              </Link>

              <button type="submit" className="signup-btn">
                Login
                <div className="arrow-wrapper">
                  <div className="arrow"></div>
                </div>
              </button>
            </form>
          </div>
          <div className="col-12 col-md-2"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
