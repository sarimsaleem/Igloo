import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import "./bounce.css";

const Bounce = () => {
    const bounceData = [
        {
            image: "./public/assets/images/section6-7.jpg",
            text: "Igloo being a boutique agency, has high service standards, comparable to any large global agency.",
            heading: "Manuri Nakkawita-Anthonis | Director of Marketing at Bounce Middle East",
        },
        {
            image: "./public/assets/images/section6-7.jpg",
            text: "Our partnership with Igloo has revolutionized our marketing strategies.",
            heading: "John Doe | CEO of Bounce Middle East",
        },
        {
            image: "./public/assets/images/section6-7.jpg",
            text: "Igloo’s personalized approach is unmatched in the industry.",
            heading: "Jane Smith | Marketing Lead at Bounce Middle East",
        },
        {
            image: "./public/assets/images/section6-7.jpg",
            text: "With Igloo, we achieved milestones we never thought possible.",
            heading: "Michael Brown | Operations Manager at Bounce Middle East",
        },
        {
            image: "./public/assets/images/section6-7.jpg",
            text: "Igloo's creativity and execution are truly world-class.",
            heading: "Emily Davis | Brand Manager at Bounce Middle East",
        },
        {
            image: "./public/assets/images/section6-7.jpg",
            text: "Collaborating with Igloo was a game changer for our business.",
            heading: "Sophia Wilson | VP of Marketing at Bounce Middle East",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="bounce">
            <Container>
                <Slider {...settings}>
                    {bounceData.map((slide, index) => (
                        <div key={index} className="bounce-slide">
                            <div className="bounceImg">
                                <img src={slide.image} alt={`Slide ${index + 1}`} />
                            </div>
                            <div className="bounce-text">
                                <p className="bounce-text-p">{slide.text}</p>
                                <h3 className="bounce-text-heading">{slide.heading}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </Container>
        </div>
    );
};

export default Bounce;