import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./latestInsight.css";
import lastinsight1 from "/public/assets/images/lastinsight1.png";
import lastinsight2 from "/public/assets/images/lastinsight2.png";
import lastinsight3 from "/public/assets/images/lastinsight3.png";
import lastinsight4 from "/public/assets/images/lastinsight4.png";

const LatestInsight = () => {
  const sliderRef = useRef(null);

  const insights = [
    {
      image: lastinsight1,
      title: "E-commerce Marketing Strategies for Dubai Fashion Brands",
      date: "November 14th, 2024",
      postedBy: "Igloo",
    },
    {
      image: lastinsight2,
      title: "Marketing for Dubai FinTech Startups",
      date: "September 24th, 2024",
      postedBy: "Igloo",
    },
    {
      image: lastinsight3,
      title: "A/B Testing Strategies for eCommerce Businesses in Dubai",
      date: "September 24th, 2024",
      postedBy: "Igloo",
    },
    {
      image: lastinsight4,
      title: "Optimizing E-commerce Conversion Rates",
      date: "October 15th, 2024",
      postedBy: "Igloo",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 777,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 560, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center", paddingBlock: "70px" }}>
      <h2 className="latestInsight-heading">LATEST INSIGHTS</h2>
      <div style={{ position: "relative" }}>
        <Slider ref={sliderRef} {...settings} style={{}}>
          {insights.map((insight, index) => (
            <div key={index} style={{ padding: "10px" }}>
              <div className="insight-image-container">
                <img
                  src={insight.image}
                  alt={insight.title}
                />
              </div>
              <h3 className="lastestinside-title">{insight.title}</h3>
              <p className="lastestinside-deatil">
                Posted by {insight.postedBy} | {insight.date}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LatestInsight;
