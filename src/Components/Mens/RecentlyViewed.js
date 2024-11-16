import React from 'react';
import './RecentlyViewed.css';
import { FaHeart } from 'react-icons/fa';

const RecentlyViewed = ({ items }) => {
  return (
    <div className="recently-viewed-container">
      <h2 className="recently-viewed-header">Recently Viewed</h2>
      <div className="grid-container">
        {items.map((item, index) => (
          <div className="grid-item" key={index}>
            <div className="icon">
              <FaHeart />
            </div>
            <img src={item.image} alt="Product" className="product-image" />
            <div className="button-text">{item.buttonText}</div>
            <div className="price">{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
