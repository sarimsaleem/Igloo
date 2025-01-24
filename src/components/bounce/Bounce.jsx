import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import "./bounce.css";
import { BASE_IMAGE_URL } from "../../util/contant";

const Bounce = ({ slides }) => {

    const CustomNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, right: "10px", zIndex: 10 }}
                onClick={onClick}
            />
        );
    };
    
    const CustomPrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, left: "10px", zIndex: 10 }}
                onClick={onClick}
            />
        );
    };  

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        // nextArrow: <CustomNextArrow />,
        // prevArrow: <CustomPrevArrow />,
        arrow: false
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
