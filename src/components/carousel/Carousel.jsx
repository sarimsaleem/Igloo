import React from 'react';
import "./carousel.css";
import { BASE_IMAGE_URL } from "../../util/contant"; 

const Carousel = ({ heading, breadcrumb, imageUrl, textColor }) => {
  const imageSrc = BASE_IMAGE_URL + imageUrl;

  return (
    <div
      className='carousel'
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className="container">
        <div className='carousel-overlay'>
          <h1 className='branding-carousel-heading' style={{ color: textColor }}>{heading}</h1>
          <p className='branding-carousel-sub-heading' style={{ color: textColor }} >{breadcrumb}</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
