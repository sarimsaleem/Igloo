import React from 'react';
import "./carousel.css";
import { BASE_IMAGE_URL } from "../../utils/contant"; // Ensure correct import

const Carousel = ({ heading, breadcrumb, imageUrl }) => {
  // Construct the full image URL
  const imageSrc = BASE_IMAGE_URL + imageUrl;

  return (
    <div 
      className='carousel' 
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className='carousel-overlay'>
        <h1 className='branding-carousel-heading'>{heading}</h1>
        <p className='breadcrumb'>{breadcrumb}</p>
      </div>
    </div>
  );
};

export default Carousel;
