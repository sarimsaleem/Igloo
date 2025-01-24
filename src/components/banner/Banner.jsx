import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CrouselVideo from '/public/assets/images/carousel.mp4';
import './banner.css';

const Banner = () => {
  return (
    <div className="banner-container">
      <video className="carousel-video" src={CrouselVideo} autoPlay loop muted />
      {/* we belive in innovation ,we belive in communication , we belive in creativity , we belive in marketing  */}
    </div>
  );
};

export default Banner;
