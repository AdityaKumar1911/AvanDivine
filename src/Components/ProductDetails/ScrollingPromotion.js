import React from 'react';
import './ScrollingPromotion.css'; // Import your CSS file

const promotions = [
  'FREE SHIPPING* on orders over ₹999',
  'EASY RETURNS within 07-days with no questions asked',
  '❋ Buy 2 or more products to avail 15% Use Code JOY15 ❋',
];

const ScrollingPromotion = () => {
  return (
    <section className="shopify-section section" id="shopify-section-template--21542574719264__scrolling-promotion">
      <div className="scrolling-promotion scrolling-promotion--left section--padding promotion-icon--colored" style={{ '--duration': '25.74s' }}>
        {[...Array(10)].map((_, idx) => (
          <div className="promotion promotion--animated" aria-hidden={idx > 0 ? "true" : "false"} key={idx}>
            {promotions.map((text, index) => (
              <div className="promotion__item promotion-icon--medium" key={index}>
                <div className="promotion__text heading" style={{ '--font-size': '16px' }}>
                  {text}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScrollingPromotion;
