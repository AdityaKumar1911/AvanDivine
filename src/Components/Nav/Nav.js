// src/Components/Nav/Nav.js
import React, { useState } from "react";
import { useCart } from "../CartContext/CartContext"; // Import useCart hook
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/logo2.png";
import { BiUser } from "react-icons/bi";
import CartSideBar from "../CartSideBar/CartSideBar";
import MenuSidebar from "../Menu Sidebar/menu";
import "./NavBar.css";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { cart, addToCart } = useCart(); // Access cart and addToCart from context

  const toggleCart = () => {
    setIsAnimating(true);
    setIsCartOpen((prev) => !prev); // Toggle cart sidebar visibility
    setTimeout(() => setIsAnimating(false), 600); // Reset animation state
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSidebarClose = () => {
    setOpen(false); // Close the menu sidebar when clicking outside
  };

  return (
    <>
      <div className="nav p-lg-2">
        <div className="navbar-container">
          <div className="navbar-left">
            <div style={{ border: "none", background: "none" }}>
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                size={18}
                color="black"
              />
            </div>
            {isOpen && (
              <p
                className="close-text"
                style={{
                  marginTop: "15px",
                  fontSize: "20px",
                  marginRight: "10px",
                  cursor: "pointer",
                  fontFamily: "Futura Regular, sans-serif",
                }}
                onClick={handleSidebarClose}
              >
                Close
              </p>
            )}
          </div>
          <div className="navbar-center">
            <Link
              to="/"
              onClick={scrollToTop}
              style={{ textDecoration: "none" }}
            >
              <img className="logo__image" src={logo} alt="Company Logo" />
            </Link>
          </div>
          <div className="navbar-right">
            <a href="./CallUs" className="nav__link me-2 d-none d-md-inline">
              <span className="nav__text">Call Us</span>
            </a>
            <button
              onClick={toggleCart}
              className={`nav__link me-3 animated-cart ${
                isAnimating ? "animate-bounce" : ""
              }`}
              style={{ background: "none", border: "none" }}
              aria-label="Open Cart"
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABUUlEQVR4nO2WTU4CQRSEa6dcwB/WegG9gG7FhBPgBXAtwaUx6AGQA6AHQNdqPADRPdE90Z24kNWYl1RvjKNTPa+JJFTyEtIvX70CprsHWGhOtQ/gDsAHgAk/12Y1/BRAllMns/jmGYApgCMAVVaLa9bbSxngnkNs4He12LtNGWDCIes/9NbYe08ZIGPF9iV9/vKwqWVekpYdh4daUgKsEho7/AVjrq0oATYJjRwCjLi2oQTYJjR0CDDk2pYSYJeQ7Xuvs2NHgeqEBg4BBvQyz8I6INR3CNCnV0OBDgl1HQJ06dVUoGNCHYcAHXq1Feg8BspRm15nCtSL+dly1KTXhQJdxTw4OWrQ61KBbmK2zh9b+lqBHgjZgVRW4VAzz8J6ImRHclmFY/1RgV4I2aVUVuFie1agN0J2LZdVuNpfFWia4IXEPAupkmB4KHvTWuh/6QtrQbyao1wCwgAAAABJRU5ErkJggg=="
                alt="Cart Icon"
                style={{ width: "24px", height: "25px" }}
              />
              <span className="cart-count">
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            </button>
            <Link to="/login" className="nav__link">
              <BiUser className="nav__icon" fontSize="20px" />
            </Link>
          </div>
        </div>
      </div>

      {/* Pass the cart data to the CartSideBar */}
      <CartSideBar isOpen={isCartOpen} toggleSidebar={toggleCart} cart={cart} />

      {/* Menu Sidebar */}
      <MenuSidebar isOpen={isOpen} onClose={handleSidebarClose} />
    </>
  );
};

export default Nav;
