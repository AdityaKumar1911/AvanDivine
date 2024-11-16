import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/footer";
import Navbar from "../Nav/Nav";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signup.css";

// Ensure dotenv config is loaded
// require("dotenv").config();

function Signup() {
  // const history = useHistory();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const apiUrl = `${process.env.REACT_BASE_URL}/users/signup`;
      const apiUrl = `http://localhost:3000/api/users/signup`;
      const response = await axios.post(apiUrl, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phone,
        password: formData.password,
      });
      console.log(response.data);

      // Show toaster message
      toast.success("Signup successful! Please login.");

      // Clear form data
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
      });

      // Redirect to login page
      // history.push("/login");
      window.location.href = "/login";
    } catch (error) {
      console.error("There was an error making the request:", error);
      // Show toaster message for error
      toast.error("Error signing up. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid signup-container d-flex align-items-center justify-content-center">
        <div className="row w-100">
          <div className="col-12 col-md-2 "></div>
          <div className="col-12 col-md-8 ">
            <h3 className="title1 text-start">Create Account</h3>
            <form onSubmit={handleSubmit} className="form">
              <div className="form-item mb-3">
                <input
                  type="text"
                  id="firstName"
                  className="form-control"
                  autoComplete="off"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
              </div>
              <div className="form-item mb-3">
                <input
                  type="text"
                  id="lastName"
                  className="form-control"
                  autoComplete="off"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
              </div>
              <div className="form-item mb-3">
                <input
                  type="email"
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
                  type="tel"
                  id="phone"
                  className="form-control"
                  autoComplete="off"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
                <label htmlFor="phone" className="form-label">
                  Phone Number
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
              <button type="submit" className="signup-btn">
                Sign up
                <div className="arrow-wrapper">
                  <div className="arrow"></div>
                </div>
              </button>
              <p className="signin">
                Already have an account ? <Link to="/login">Sign in</Link>
              </p>
            </form>
          </div>
          <div className="col-12 col-md-2 "></div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Signup;
