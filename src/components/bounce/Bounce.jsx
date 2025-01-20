import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import "./bounce.css";
import { BASE_IMAGE_URL } from "../../utils/contant";

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
                    {slides.map((slide, index) => {
                        const imageSrc = BASE_IMAGE_URL + slide.image;
                        return (
                            <div key={index} className="bounce-slide">
                                <div className="bounceImg">
                                    <img src={imageSrc} alt={`Slide ${index + 1}`} /> {/* Use imageSrc here */}
                                </div>
                                <div className="bounce-text">
                                    <p className="bounce-text-p">{slide.text}</p>
                                    <h3 className="bounce-text-heading">{slide.heading}</h3>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </Container>
        </div>
    );
};

export default Bounce;
