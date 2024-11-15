import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CrouselVideo from '../../assets/crousel.mp4';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-container">
      <video className="carousel-video" src={CrouselVideo} autoPlay loop muted />
    </div>
  );
};

export default Banner;
