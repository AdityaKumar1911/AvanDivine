import React from "react";
import Navbar from "../Nav/Nav";
import Footer from "../Footer/footer";
import SectionHeader from "../Mens/SectionHeader";
import FilterSort from "../Mens/FilterSort";
// import Banner1 from './../../Assets/Images/Banner/Banner 1.png';
import MenVideo from "../../Assets/Video/men-cloths.mp4";
import C1P4 from "./../../Assets/Images/Product Image/Product Section1-2.png";
import C2P1 from "../../Assets/Images/Product Image/Product Section2-1.png";
import C2P2 from "../../Assets/Images/Product Image/Product Section2-2.png";
import C2P3 from "../../Assets/Images/Product Image/Product Section2-3.png";
import C2P4 from "../../Assets/Images/Product Image/Product Section2-4.png";
import "./Mens.css";
import CardSlider from "./CardSlider";

const cardData = [
  {
    imgSrc: C1P4,
    title: "Product 1",
    amount: "₹3000",
    link: "./product-details",
  },
  { imgSrc: C1P4, title: "Product 2", amount: "₹3000", link: "#" },
  { imgSrc: C1P4, title: "Product 3", amount: "₹3000", link: "#" },
  { imgSrc: C1P4, title: "Product 4", amount: "₹3000", link: "#" },
  { imgSrc: C1P4, title: "Product 1", amount: "₹3000", link: "#" },
  { imgSrc: C1P4, title: "Product 2", amount: "₹3000", link: "#" },
  { imgSrc: C1P4, title: "Product 3", amount: "₹3000", link: "#" },
  { imgSrc: C1P4, title: "Product 4", amount: "₹3000", link: "#" },
  { imgSrc: C1P4, title: "Product 1", amount: "₹3000", link: "#" },
  { imgSrc: C1P4, title: "Product 2", amount: "₹3000", link: "#" },
  { imgSrc: C1P4, title: "Product 3", amount: "₹3000", link: "#" },
  { imgSrc: C1P4, title: "Product 4", amount: "₹3000", link: "#" },
  { imgSrc: C1P4, title: "Product 1", amount: "₹3000", link: "#" },
  { imgSrc: C1P4, title: "Product 2", amount: "₹3000", link: "#" },
  { imgSrc: C1P4, title: "Product 3", amount: "₹3000", link: "#" },
  { imgSrc: C1P4, title: "Product 4", amount: "₹3000", link: "#" },
];

const men = [
  { imgSrc: C2P1, title: "Product Name", amount: "₹3000", link: "#" },
  { imgSrc: C2P2, title: "Product Name", amount: "₹3000", link: "#" },
  { imgSrc: C2P3, title: "Product Name", amount: "₹3000", link: "#" },
  { imgSrc: C2P4, title: "Product Name", amount: "₹3000", link: "#" },
];

const categories = [
  { imgSrc: C2P1, title: "Women", amount: "₹3000", link: "#" },
  { imgSrc: C2P2, title: "Men", amount: "₹3000", link: "#" },
  { imgSrc: C2P3, title: "Unisex", amount: "₹3000", link: "#" },
  { imgSrc: C2P4, title: "View more", amount: "₹3000", link: "#" },
];

const Mens = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="video-wrapper">
          <video className="slider-video" autoPlay loop muted>
            <source src={MenVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <SectionHeader text="Men" />
      {/* <FilterSort /> */}
      <div className="mt-lg-5 mt-3 trendsetters-box1">
        <div className="row">
          {cardData.map((card, index) => (
            <div className="col-md-3 col-6 mb-" key={index}>
              <a href={card.link} className="card-link">
                <div style={{ cursor: "pointer" }}>
                  <img
                    className="trendsetters-image1"
                    src={card.imgSrc}
                    alt={card.title}
                  />
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-amount">{card.amount}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <SectionHeader text="Recently Viewed" />
      <div className="mt-lg-5 mt-3 trendsetters-box1">
        <div className="row">
          {men.map((card, index) => (
            <div className="col-md-3 col-6 mb-5" key={index}>
              <a href={card.link} className="card-link">
                <div style={{ cursor: "pointer" }}>
                  <img
                    className="trendsetters-image1"
                    src={card.imgSrc}
                    alt={card.title}
                  />
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-amount">{card.amount}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <SectionHeader text="Categories" />
      <div className="mt-lg-5 mt-3 trendsetters-box1">
        <CardSlider cards={categories} />
      </div>
      <Footer />
    </div>
  );
};

export default Mens;
