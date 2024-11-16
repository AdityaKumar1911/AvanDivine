import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../CartContext/CartContext"; // Import the Cart context
import Nav from "../Nav/Nav";
import "./ProductDetails.css";
import FabricSection from "./FabricSection";
import GuaranteesSlider from "./GuaranteesSlider";
import ScrollingPromotion from "./ScrollingPromotion";
import Footer from "../Footer/footer";
import Tab from "./Tab";
import ProductGallery from "./ProductGallery";
import { FaRuler } from "react-icons/fa";
import Accordian from "./Accordian";
import axios from "axios";
import C2P1 from "../../Assets/Images/Product Image/Product Section1-2.png"; // Default image
import C2P2 from "../../Assets/Images/Product Image/Product Section2-2.png";
import C2P3 from "../../Assets/Images/Product Image/Product Section2-3.png";
import sizeGuideImage from "../../Assets/Images/SizeGuide.png"; // Add your size guide image here

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart(); // Access the addToCart function
  const [product, setProduct] = useState({
    id: id,
    title: "Sample Product",
    description: "This is a default description.",
    amount: 999,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    category: "Uncategorized",
  });
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const apiUrl = `http://localhost:3000/api/products/${id}`;
        const response = await axios.get(apiUrl);

        if (response.data.status) {
          setProduct(response.data.data);
        } else {
          console.error("Failed to fetch product details.");
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCartClick = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }
    addToCart({ ...product, selectedSize, quantity });
    alert("Product added to cart!");
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <Nav />
      <div className="container-fluid mt-3 mt-lg-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="image-container">
              <img className="product-img mb-3" src={C2P1} alt="Product 1" />
              <img className="product-img mb-3" src={C2P2} alt="Product 2" />
              <img className="product-img mb-3" src={C2P3} alt="Product 3" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 mt-lg-5">
            <div className="details-container">
              <p style={{ marginBottom: "10px" }}>
                <span style={{ cursor: "pointer" }}>Home </span>/{" "}
                {product.category}
              </p>
              <div className="breadcrumb-divider"></div>
              <p className="product-name">{product.title}</p>
              <div style={{ display: "flex" }}>
                <p className="discount-amount">₹ {product.amount}</p>
                <p className="product-amount">₹ {product.amount}</p>
              </div>
              <h6
                style={{
                  letterSpacing: "0.20rem",
                  color: "black",
                  fontSize: "15px",
                }}
              >
                SIZE
              </h6>
              <div className="size-box">
                {product.sizes && product.sizes.length > 0 ? (
                  product.sizes.map((size, index) => (
                    <div
                      key={index}
                      className={`size ${
                        selectedSize === size ? "selected" : ""
                      }`}
                      onClick={() => handleSizeClick(size)}
                    >
                      {size}
                    </div>
                  ))
                ) : (
                  <div className="size">No sizes available</div>
                )}
              </div>
              <h6 className="size-guide" onClick={togglePopup}>
                <FaRuler className="size-guide-icon" /> Size Guide
              </h6>
              <div className="center-div">
                <div className="button-row">
                  <div className="quantity-controls">
                    <button
                      className="quantity-btn"
                      onClick={handleDecreaseQuantity}
                    >
                      -
                    </button>
                    <span className="quantity">{quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={handleIncreaseQuantity}
                    >
                      +
                    </button>
                  </div>
                  <button className="cart-btn" onClick={handleAddToCartClick}>
                    ADD TO CART
                  </button>
                </div>
                <button
                  className="buynow-btn"
                  onClick={() => alert("Buy Now clicked!")}
                >
                  BUY IT NOW
                </button>
                <Accordian />
              </div>
            </div>
          </div>
          <div className="breadcrumb-divider mt-lg-5 mt-3"></div>
          <div>
            <GuaranteesSlider />
          </div>
          <FabricSection />
        </div>
        <div>
          <ScrollingPromotion />
        </div>
        <ProductGallery />
        <div>
          <Footer />
        </div>
      </div>

      {isPopupOpen && (
        <div className="popup" onClick={togglePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={togglePopup}>
              &times;
            </span>
            <img
              src={sizeGuideImage}
              alt="Size Guide"
              className="popup-image"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
