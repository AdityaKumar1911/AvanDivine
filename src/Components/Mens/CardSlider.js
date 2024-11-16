// CardSlider.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CardSlider.css';
import { NextArrow, PrevArrow } from './CustomArrows';

const CardSlider = ({ cards }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {cards.map((card, index) => (
        <div key={index} className="slider-card">
          <a href={card.link} className="card-link">
            <div style={{ cursor: "pointer" }}>
              <img
                className="trendsetters-image"
                src={card.imgSrc}
                alt={card.title}
              />
              <h5 className="card-title1">{card.title}</h5>
            </div>
          </a>
        </div>
      ))}
    </Slider>
  );
};

export default CardSlider;
