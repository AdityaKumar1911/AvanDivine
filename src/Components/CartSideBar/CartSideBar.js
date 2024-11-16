import React, { useEffect } from "react";
import { useCart } from "../CartContext/CartContext"; // Assuming CartContext is in the correct folder
import "./CartSideBar.css";

const CartSideBar = ({ isOpen, toggleSidebar }) => {
  const { cart, removeFromCart } = useCart();

  useEffect(() => {
    // Disable background scroll when cart sidebar is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  // Calculate the total price of the cart
  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => {
      const price = product.amount || 0; // Default to 0 if price is undefined
      return total + price * product.quantity; // Multiply price by quantity for each product
    }, 0);
  };

  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <span className="cart-title">Shopping Bag</span>
        <button className="close-btn" onClick={toggleSidebar}>
          X
        </button>
      </div>
      <div className="cart-content">
        {cart.length === 0 ? (
          <div className="empty">
            <p>Your Bag is currently empty</p>
            <button
              type="submit"
              className="return2home"
              onClick={toggleSidebar}
            >
              RETURN TO SHOP
              <div className="arrow-wrapper">
                <div className="arrow"></div>
              </div>
            </button>
          </div>
        ) : (
          <div className="cart-items">
            {cart.map((product) => (
              <div
                key={`${product.id}-${product.selectedSize}`}
                className="cart-item"
              >
                <img
                  src={product.imageUrl} // Ensure your product object has an imageUrl property
                  alt={product.title}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <span className="cart-item-name">{product.title}</span>
                  <span className="cart-item-size">
                    Size: {product.selectedSize} {/* Display selected size */}
                  </span>
                  <span className="cart-item-price">
                    ₹{(product.amount * product.quantity).toFixed(2)}{" "}
                    {/* Display individual price */}
                  </span>
                  <div className="cart-item-quantity">
                    <span>Quantity: {product.quantity}</span>
                  </div>
                  <button
                    className="remove-item-btn"
                    onClick={() =>
                      removeFromCart(product.id, product.selectedSize)
                    } // Remove item by ID and selectedSize
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="cart-total">
              <span>Total Price: ₹{calculateTotalPrice().toFixed(2)}</span>{" "}
              {/* Display total price */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSideBar;
