import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "./offers.css";
import { BsEnvelopeOpen } from "react-icons/bs";
import { VscTools } from "react-icons/vsc";
import { FaLaptop } from "react-icons/fa";
import { GiAirBalloon } from "react-icons/gi";
import { FaMapLocationDot } from "react-icons/fa6";

const Offers = ({ autoplay = true, autoplaySpeed = 3000 }) => {
    const slides = [
        {
            icon: <BsEnvelopeOpen className="bookcolsultation-icon" />,
            title: "High-Tech Marketing",
            description: "Working with the latest technology we design.",
        },
        {
            icon: <FaLaptop className="bookcolsultation-icon" />,
            title: "Considered Design",
            description: "We respond directly to a project’s objectives.",
        },
        {
            icon: <VscTools className="bookcolsultation-icon" />,
            title: "Creative Collaboration",
            description: "We love working with people who embrace the design.",
        },
        {
            icon: <GiAirBalloon className="bookcolsultation-icon" />,
            title: "Impeccable Service",
            description: "Great service is achieved  through professionalism.",
        },
        {
            icon: <FaMapLocationDot  className="bookcolsultation-icon" />,
            title: "Understand situation ",
            description: "Working with the latest  technology we design.",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 1,
        autoplay: autoplay,
        autoplaySpeed: autoplaySpeed,
        responsive: [
            {
                breakpoint: 992, // For medium screens
                settings: {
                    slidesToShow: 2, // Show 2 slides at a time
                },
            },
            {
                breakpoint: 768, // For small screens
                settings: {
                    slidesToShow: 1, // Show 1 slide at a time
                },
            },
        ],
    };

    return (
        <div className="bookcolsultation">
            <Container>
                <div className="bookcolsultation-parent">
                    <Slider {...settings}>
                        {slides.map((slide, idx) => (
                            <div key={idx} className="offers-card-parent">
                                <div className="bookcolsultation-icon-parent">
                                    {slide.icon}
                                </div>
                                <div className="bookcolsultation-parent-text">
                                    <h4>{slide.title}</h4>
                                    <p>{slide.description}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Container>
        </div>
    );
};

export default Offers;
