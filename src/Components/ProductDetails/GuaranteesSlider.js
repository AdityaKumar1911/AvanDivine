import React from 'react';
import './GuaranteesSlider.css';

const GuaranteesSlider = () => {
  const guarantees = [
    { imgSrc: "https://cdn.shopify.com/s/files/1/0735/1484/4448/files/Material_210075f3-a062-46e7-9289-f030711ce556.svg?v=1685170928", text: "Regular" },
    { imgSrc: "https://cdn.shopify.com/s/files/1/0735/1484/4448/files/Summer_Wear_b7019df0-57ce-4c29-a937-5351c4cbe2ca.svg?v=1684493919", text: "Summer" },
    { imgSrc: "https://cdn.shopify.com/s/files/1/0735/1484/4448/files/Ecofriendly_5660065a-2153-47ce-ac36-64a7a50741fd.svg?v=1684493919", text: "Handwash" },
    { imgSrc: "https://cdn.shopify.com/s/files/1/0735/1484/4448/files/Made_with_Love.svg?v=1684493919", text: "Rayon" },
  ];

  return (
    <div className="section--divider">
      <div className="page-width">
        <div className="guarantees section--padding guarantees-icon--colored">
          <div className="grid">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="grid__item">
                <div className="guarantee__item guarantee-icon--large">
                  <span className="image-animate guarantee__icon">
                    <img src={guarantee.imgSrc} alt={guarantee.text} />
                  </span>
                  <div>
                    <div className="rte typeset">
                      <p>{guarantee.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuaranteesSlider;
