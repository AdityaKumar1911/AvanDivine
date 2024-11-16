import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import Video2Mobile from "../../Assets/Video/M1.mp4"; // Add the mobile video path
import Video3Mobile from "../../Assets/Video/M2.mp4"; // Add the mobile video path
import Video1 from "../../Assets/Video/home-video.mp4";
import Video2 from "../../Assets/Video/v6.mp4";
import Video3 from "../../Assets/Video/v2.mp4";
import Banner1 from "../../Assets/Images/Banner/Banner 1.png";
import Banner2 from "../../Assets/Images/Banner/Banner 2.png";
import Banner3 from "../../Assets/Images/Banner/Banner 3.png";
import Poster from "../../Assets/Images/poster.png";
import C1P1 from "../../Assets/Images/Product Image/Product Section1-1.png";
import C1P2 from "../../Assets/Images/Product Image/Product Section1-2.png";
import C1P3 from "../../Assets/Images/Product Image/Product Section1-3.png";
import C1P4 from "../../Assets/Images/Product Image/Product Section1-4.png";
import C1P5 from "../../Assets/Images/Product Image/Product Section1-5.png";
import C1P6 from "../../Assets/Images/Product Image/Product Section1-6.png";
import C1P7 from "../../Assets/Images/Product Image/Product Section1-7.png";
import C1P8 from "../../Assets/Images/Product Image/Product Section1-8.png";
import C4P1 from "../../Assets/Images/Last Section Images/Last Section Image 1.png";
import C4P2 from "../../Assets/Images/Last Section Images/Last Section Image 2.png";
import C4P3 from "../../Assets/Images/Last Section Images/Last Section Image 3.png";
import C3P1 from "../../Assets/Images/Product Image/Product Section3-1.png";
import C3P2 from "../../Assets/Images/Product Image/Product Section3-2.png";
import C3P3 from "../../Assets/Images/Product Image/Product Section3-3.png";
import C3P4 from "../../Assets/Images/Product Image/Product Section3-4.png";
import C2P1 from "../../Assets/Images/Product Image/Product Section2-1.png";
import C2P2 from "../../Assets/Images/Product Image/Product Section2-2.png";
import C2P3 from "../../Assets/Images/Product Image/Product Section2-3.png";
import C2P4 from "../../Assets/Images/Product Image/Product Section2-4.png";
import Navbar from "../Nav/Nav";
import Footer from "../Footer/footer";

const cardData = [
  {
    imgSrc: C1P1,
    title: "Women",
    link: "./Women",
  },
  {
    imgSrc: C1P2,
    title: "Men",
    link: "./../Mens",
  },
  {
    imgSrc: C1P3,
    title: "Unisex",
    link: "#",
  },
  {
    imgSrc: C1P4,
    title: "View more",
    link: "#",
  },
  {
    imgSrc: C1P5,
    title: "View more",
    link: "#",
  },
  {
    imgSrc: C1P6,
    title: "View more",
    link: "#",
  },
  {
    imgSrc: C1P7,
    title: "View more",
    link: "#",
  },
  {
    imgSrc: C1P8,
    title: "View more",
    link: "#",
  },
];

const men = [
  {
    imgSrc: C2P1,
    title: "Women",
    amount: "Rs. 3000",
    link: "#",
  },
  {
    imgSrc: C2P2,
    title: "Men",
    amount: "Rs. 3000",
    link: "/mens",
  },
  {
    imgSrc: C2P3,
    title: "Unisex",
    amount: "Rs. 3000",
    link: "#",
  },
  {
    imgSrc: C2P4,
    title: "View more",
    link: "#",
  },
];

const athleisur = [
  {
    imgSrc: C3P1,
    title: "Women",
    amount: "Rs. 3000",
    link: "#",
  },
  {
    imgSrc: C3P2,
    title: "Men",
    amount: "Rs. 3000",
    link: "#",
  },
  {
    imgSrc: C3P3,
    title: "Unisex",
    amount: "Rs. 3000",
    link: "#",
  },
  {
    imgSrc: C3P4,
    title: "View more",
    link: "#",
  },
];

const trendsetters = [
  {
    imgSrc: C4P1,
    title: "Women",
    link: "#",
  },
  {
    imgSrc: C4P2,
    title: "Men",
    link: "#",
  },
  {
    imgSrc: C4P3,
    title: "Unisex",
    link: "#",
  },
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Navbar />
      <div className="home-container">
        <Slider {...settings}>
          <div>
            <div className="video-wrapper-slider">
              <video className="slider-video1" autoPlay loop muted playsInline>
                <source src={Video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div>
            <img className="slider-image" src={Banner1} alt="Banner 1" />
          </div>
          <div>
            <img className="slider-image" src={Banner2} alt="Banner 2" />
          </div>
          <div>
            <img className="slider-image" src={Banner3} alt="Banner 3" />
          </div>
        </Slider>
        <div className="text-overlay exclusive-text">
          <p id="overlay-font">Avant Divine Couture</p>
          <p id="overlay-font2" style={{ textDecoration: "underline" }}>
            Explore the Intersection of Urban Style & Timeless Elegance
          </p>
        </div>
      </div>
      <div className="top-header-content">
        <h1 className="text-center modern--class ">
          Discover The Modern Class
        </h1>
        <div className="mt-lg-5 mt-3 trendsetters-box">
          <div className="row">
            {cardData.map((card, index) => (
              <div className="col-md-3 col-6 mb-5" key={index}>
                <a href={card.link} className="card-link">
                  <div style={{ cursor: "pointer" }}>
                    <img
                      className="trendsetters-image"
                      src={card.imgSrc}
                      alt={card.title}
                    />
                    <p className="card-title">{card.title}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="text-center-discover">
          <p id="boldstatement-text" className="bold--text">
            Bold Statement
          </p>
          <a className="discover-more" href="">
            Discover More
          </a>
        </div>
        <div>
          <div className="video-wrapper">
            {/* Desktop Video */}
            <video
              className="slider-video desktop-video-2"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={Video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Mobile Video */}
            <video
              className="slider-video mobile-video-2"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={Video2Mobile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {/* <div>
          <img className="temp-image" src={Banner2} alt="Avant Divine" />
        </div> */}
        <div className="mt-lg-5 mt-3 trendsetters-box">
          <div className="row">
            {men.map((card, index) => (
              <div className="col-md-3 col-6 mb-5" key={index}>
                <a href={card.link} className="card-link">
                  <div style={{ cursor: "pointer" }}>
                    <img
                      className="trendsetters-image"
                      src={card.imgSrc}
                      alt={card.title}
                    />
                    <h5 className="card-title">{card.title}</h5>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-12">
            <img className="img-poster" src={Poster} alt="Poster" />
          </div>
          <div className="col-md-6 col-12">
            <div className="poster-text">
              <h2 className="text-center bold--text1">
                INSPIRED BY THE VIBRANT WORLD OF STREET ART
              </h2>
              <h6 className="text-center font--text">
                For The Modern Urbane On The Go
              </h6>
              <a className="discover-more" href="">
                Discover More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center-discover">
        <h1 className="bold--text">Athleisure Vibes</h1>
        <a className="discover-more" href="">
          Discover More
        </a>
      </div>
      <div>
        <div className="video-wrapper">
          {/* Desktop Video */}
          <video
            className="slider-video desktop-video-3"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={Video3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Mobile Video */}
          <video
            className="slider-video mobile-video-3"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={Video3Mobile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      {/* <div>
        <img className="temp-image" src={Banner3} alt="Avant Divine" />
      </div> */}
      <div className="mt-lg-5 mt-3 trendsetters-box">
        <div className="row">
          {athleisur.map((card, index) => (
            <div className="col-md-3 col-6 mb-5" key={index}>
              <a href={card.link} className="card-link">
                <div style={{ cursor: "pointer" }}>
                  <img
                    className="trendsetters-image"
                    src={card.imgSrc}
                    alt={card.title}
                  />
                  <h5 className="card-title">{card.title}</h5>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-center bold--text">
          Exclusive Limited Edition Drops
        </h2>
        <h6 className="text-center font--text">
          A Must Have For Colectors & Trendsetters Alike
        </h6>
        <div className="mt-lg-5 mt-3 trendsetters-box">
          <div className="row">
            {trendsetters.map((card, index) => (
              <div className="col-md-4 col-12 mb-5" key={index}>
                <a href={card.link} className="card-link">
                  <div style={{ cursor: "pointer" }}>
                    <img
                      className="trendsetters-image"
                      src={card.imgSrc}
                      alt={card.title}
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center-discover mb-5">
        <a className="discover-more" href="">
          Discover More
        </a>
      </div>

      <Footer />
    </>
  );
};

export default Home;
