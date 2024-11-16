import React from 'react';
import './ProductGallery.css';
import C2P1 from "../../Assets/Images/Product Image/Product Section2-1.png";
import C2P2 from "../../Assets/Images/Product Image/Product Section2-2.png";
import C2P3 from "../../Assets/Images/Product Image/Product Section2-3.png";
import C2P4 from "../../Assets/Images/Product Image/Product Section2-3.png";

const products = [
  {
    imageSrc: C2P1,
    title: 'AMBUSH EMBROIDERY T-SHIRT',
    price: 'Rs. 5,995'
  },
  {
    imageSrc: C2P2,
    title: 'BLACK CRANE T-SHIRT',
    price: 'Rs. 5,995'
  },
  {
    imageSrc: C2P3,
    title: 'NAKED EMOTIONS T-SHIRT',
    price: 'Rs. 3,495'
  },
  {
    imageSrc: C2P4,
    title: 'AMBUSH SATIN SHIRT',
    price: 'Rs. 5,995'
  }
];

const ProductGallery = () => {
    return (
      <div className="product-gallery">
        <h5 className='product-gallery-title'>YOU MAY ALSO LIKE</h5>
        <div className="product-cards">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.imageSrc} alt={product.title} />
            </div>
          ))}
        </div>
        <div className="product-details">
          {products.map((product, index) => (
            <div key={index} className="product-detail">
              <p className="product-title">{product.title}</p>
              <p className="product-price">{product.price}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
