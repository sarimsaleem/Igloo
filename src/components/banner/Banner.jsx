import React, { useRef, useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CrouselVideo from '/public/assets/images/carousel.mp4';
import './banner.css';

const Banner = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true); // State to track mute status
  const [isPlaying, setIsPlaying] = useState(true); // State to track play/pause status

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => console.log('Autoplay blocked:', error));
      }
    };

    document.addEventListener('click', playVideo, { once: true });

    return () => document.removeEventListener('click', playVideo);
  }, []);

  // Function to toggle sound
  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Function to play/pause video
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="banner-container">
      <video ref={videoRef} className="carousel-video" src={CrouselVideo} autoPlay loop muted={isMuted} />
      
      <div className="video-controls">
        <button className="control-btn" onClick={togglePlayPause}>
          {isPlaying ? '⏸' : '▶'}
        </button>
        <button className="control-btn" onClick={toggleSound}>
          {isMuted ? '🔇' : '🔊'}
        </button>
      </div>
    </div>
  );
};

export default Banner;
