import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./lastinsight.css";
import lastinsight1 from "./../../../assets/lastinsight1.png";
import lastinsight2 from "./../../../assets/lastinsight2.png";
import lastinsight3 from "./../../../assets/lastinsight3.png";
import lastinsight4 from "./../../../assets/lastinsight4.png";

const LastInsight = () => {
  const sliderRef = useRef(null); // Create a ref for the slider

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
        breakpoint: 768, // Adjust slider for smaller screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center", paddingBlock:"70px" }}>
      <h2 className="latestInsight-heading">LATEST INSIGHTS</h2>
      <div style={{ position: "relative" }}>
        <button
          onClick={() => sliderRef.current.slickPrev()}
          style={{
            position: "absolute",
            top: "40%",
            left: "-51px",
            transform: "translateY(-50%)",
            background: "black",
            color: "white",
            border: "none",
            borderRadius: "50%",
            padding: "5px 10px",
            cursor: "pointer",
            zIndex: "10",
          }}
        >
          &#8592;
        </button>

        <Slider ref={sliderRef} {...settings}>
          {insights.map((insight, index) => (
            <div key={index} style={{ padding: "10px" }}>
              <div style={{ position: "relative" }}>
                <img
                  src={insight.image}
                  alt={insight.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <h3  className="lastestinside-title">{insight.title}</h3>
              <p className="lastestinside-deatil">
                Posted by {insight.postedBy} | {insight.date}
              </p>
            </div>
          ))}
        </Slider>

        <button
          onClick={() => sliderRef.current.slickNext()} 
          style={{
            position: "absolute",
            top: "40%",
            right: "-51px",
            transform: "translateY(-50%)",
            background: "black",
            color: "white",
            border: "none",
            borderRadius: "50%",
            padding: "5px 10px",
            cursor: "pointer",
            zIndex: "10",
          }}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default LastInsight;
