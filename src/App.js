import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import Home from "./Components/Home/Home";
import About from "./Components/About/about";
import Service from "./Components/Service/service";
import ContactUs from "./Components/ContactUs/ContactUs";
import Mens from "./Components/Mens/Mens";
import Women from "./Components/Mens/Women/Women";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import CartSideBar from "./Components/CartSideBar/CartSideBar";
import { CartProvider } from "./Components/CartContext/CartContext";

function App() {
  return (
    <>
      <Router>
        <ToastContainer /> {/* Place ToastContainer here */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/callus" element={<ContactUs />} />
          <Route exact path="/Mens" element={<Mens />} />
          <Route exact path="/Women" element={<Women />} />
          <Route exact path="/product-details" element={<ProductDetails />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/cart" element={<CartSideBar />} />
          <Route path="/product/:id" component={ProductDetails} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
