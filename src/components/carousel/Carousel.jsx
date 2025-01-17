import React from 'react';
import "./carousel.css";

const Carousel = ({ heading, breadcrumb, imageUrl }) => {
  return (
    <div 
      className='carousel' 
      style={{ backgroundImage: `url(/public/assets/images/${imageUrl})` }}
    >
      <div className='carousel-overlay'>
        <h1 className='branding-carousel-heading'>{heading}</h1>
        <p className='breadcrumb'>{breadcrumb}</p>
      </div>
    </div>
  );
};

export default Carousel;
