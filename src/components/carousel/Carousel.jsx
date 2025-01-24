import React from 'react';
import "./carousel.css";
import { BASE_IMAGE_URL } from "../../util/contant"; // Ensure correct import

const Carousel = ({ heading, breadcrumb, imageUrl }) => {
  // Construct the full image URL
  const imageSrc = BASE_IMAGE_URL + imageUrl;

  return (
    <div
      className='carousel'
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className="container">
        <div className='carousel-overlay'>
          <h1 className='branding-carousel-heading'>{heading}</h1>
          <p className='branding-carousel-sub-heading'>{breadcrumb}</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
