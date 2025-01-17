import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import "./bounce.css";

const Bounce = ({ slides }) => {
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
    