import React from "react";
import Navbar from "../../Nav/Nav";
import Footer from "../../Footer/footer";
import SectionHeader from "../../Mens/SectionHeader";
import CardSlider from "../CardSlider";
import MenVideo from "../../../Assets/Video/Women1.mp4";
import W1P4 from "../../../Assets/Images/Product Image/Product Section3-1.png";
import W2P1 from "../../../Assets/Images/Product Image/Product Section1-1.png";
import W2P2 from "../../../Assets/Images/Product Image/Product Section1-6.png";
import W2P3 from "../../../Assets/Images/Product Image/Product Section3-2.png";
import W2P4 from "../../../Assets/Images/Product Image/Product Section3-4.png";
import "./Women.css";

const cardData = [
  { imgSrc: W1P4, title: "Product 1", amount: "₹3000", link: "/product-details" },
  { imgSrc: W1P4, title: "Product 2", amount: "₹3000", link: "#" },
  { imgSrc: W1P4, title: "Product 3", amount: "₹3000", link: "#" },
  { imgSrc: W1P4, title: "Product 4", amount: "₹3000", link: "#" },
  { imgSrc: W1P4, title: "Product 5", amount: "₹3000", link: "#" },
  { imgSrc: W1P4, title: "Product 6", amount: "₹3000", link: "#" },
  { imgSrc: W1P4, title: "Product 7", amount: "₹3000", link: "#" },
  { imgSrc: W1P4, title: "Product 8", amount: "₹3000", link: "#" },
];

const women = [
  { imgSrc: W2P1, title: "Product Name 1", amount: "₹3000", link: "#" },
  { imgSrc: W2P2, title: "Product Name 2", amount: "₹3000", link: "#" },
  { imgSrc: W2P3, title: "Product Name 3", amount: "₹3000", link: "#" },
  { imgSrc: W2P4, title: "Product Name 4", amount: "₹3000", link: "#" },
];

const categories = [
  { imgSrc: W2P1, title: "Women", amount: "₹3000", link: "#" },
  { imgSrc: W2P2, title: "Men", amount: "₹3000", link: "#" },
  { imgSrc: W2P3, title: "Unisex", amount: "₹3000", link: "#" },
  { imgSrc: W2P4, title: "View more", amount: "₹3000", link: "#" },
];

const Women = () => {
  return (
    <div>
      <Navbar />
      <div className="women-container">
        <div className="women-video-wrapper">
          <video className="women-slider-video" autoPlay loop muted>
            <source src={MenVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="Women-header">
        <h2> Women </h2>
      </div>
       <div className="mt-lg-5 mt-3 women-trendsetters-box">
        <div className="row">
          {cardData.map((card, index) => (
            <div className="col-md-3 col-6 mb-4" key={index}>
              <a href={card.link} className="women-card-link">
                <div className="women-card-content">
                  <img className="women-trendsetters-image" src={card.imgSrc} alt={card.title} />
                  <h5 className="women-card-title">{card.title}</h5>
                  <p className="women-card-amount">{card.amount}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="Women-header1">
        <h2>Recently Viewed</h2>
      </div>
      {/* <SectionHeader text="Recently Viewed" /> */}
      <div className="mt-lg-5 mt-3 women-trendsetters-box">
        <div className="row">
          {women.map((card, index) => (
            <div className="col-md-3 col-6 mb-5" key={index}>
              <a href={card.link} className="women-card-link">
                <div className="women-card-content">
                  <img className="women-trendsetters-image" src={card.imgSrc} alt={card.title} />
                  <h5 className="women-card-title">{card.title}</h5>
                  <p className="women-card-amount">{card.amount}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="Women-header1">
        <h2>Categories</h2>
      </div>
      {/* <SectionHeader text="Categories" /> */}
      <div className="mt-lg-5 mt-3 women-trendsetters-box">
        <CardSlider cards={categories} />
      </div>
      <Footer />
    </div>
  );
};

export default Women;
