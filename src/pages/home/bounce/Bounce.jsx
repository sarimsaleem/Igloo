import React from 'react';
import Slider from 'react-slick';
import "./bounce.css";
import section7 from "../../../assets/section6-7.jpg"; // Example image
import { Container } from 'react-bootstrap';

const Bounce = () => {
    const slides = [
        {
            image: section7,
            text: "Igloo being a boutique agency, has high service standards, comparable to any large global agency.",
            heading: "Manuri Nakkawita-Anthonis | Director of Marketing at Bounce Middle East",
        },
        {
            image: section7,
            text: "Our partnership with Igloo has revolutionized our marketing strategies.",
            heading: "John Doe | CEO of Bounce Middle East",
        },
        {
            image: section7,
            text: "Igloo’s personalized approach is unmatched in the industry.",
            heading: "Jane Smith | Marketing Lead at Bounce Middle East",
        },
        {
            image: section7,
            text: "With Igloo, we achieved milestones we never thought possible.",
            heading: "Michael Brown | Operations Manager at Bounce Middle East",
        },
        {
            image: section7,
            text: "Igloo's creativity and execution are truly world-class.",
            heading: "Emily Davis | Brand Manager at Bounce Middle East",
        },
        {
            image: section7,
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
                    {slides.map((slide, index) => (
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