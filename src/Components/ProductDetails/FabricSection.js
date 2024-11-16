import React from 'react';
import './FabricSection.css';

const FabricSection = () => {
  return (
    <div className="about-section">
      <div className="text-content">
        <h2>Threads Woven with Elegance</h2>
        <p>
          Weaving the art of storytelling through each Fabric that narrates tales of craftsmanship,
          tradition, and timeless elegance. Every piece of our ethnic wear is a reflection of your
          unique story.
        </p>
        <h3>A World of Vibrant Choices</h3>
        <p>
          Just like You, our diverse range offers from celebration to the subtle grace of everyday
          wear through minimalist designs to intricate embroideries.
        </p>
        <h3>From Tradition to Trend</h3>
        <p>
          At Avant divine, tradition is not just a muse, it's a trendsetter. Our designs are a perfect
          amalgamation of timeless tradition and contemporary trend. So you can always be a step
          ahead in the world of fashion.
        </p>
      </div>
      <div className="image-content">
        <img 
          src="//baniwomen.com/cdn/shop/files/fab-750.png?v=1705663482&amp;width=1500" 
          alt="Fabric" 
          srcSet="//baniwomen.com/cdn/shop/files/fab-750.png?v=1705663482&amp;width=198 198w, 
                  //baniwomen.com/cdn/shop/files/fab-750.png?v=1705663482&amp;width=432 432w, 
                  //baniwomen.com/cdn/shop/files/fab-750.png?v=1705663482&amp;width=642 642w, 
                  //baniwomen.com/cdn/shop/files/fab-750.png?v=1705663482&amp;width=900 900w, 
                  //baniwomen.com/cdn/shop/files/fab-750.png?v=1705663482&amp;width=1320 1320w" 
          width="1500" 
          height="1500" 
          loading="lazy" 
          className="image-fit" 
          sizes="(min-width: 1600px) 899.9820003599928px,
                 (min-width: 750px) calc((100vw - 10rem) / 1.667),  
                 calc((100vw - 3rem) / 1.667)" 
        />
      </div>
    </div>
  );
};

export default FabricSection;
