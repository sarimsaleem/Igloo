import React from 'react';
import './bookColsultation.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import { BsEnvelopeOpen } from 'react-icons/bs';
import { VscTools } from 'react-icons/vsc';
import { FaLaptop } from 'react-icons/fa';

const BookConsultation = () => {
    const settings = {
        dots: true, 
        infinite: true,
        speed: 500, 
        slidesToShow: 1, 
        slidesToScroll: 1, 
        autoplay: true, 
        autoplaySpeed: 3000, 
    };

    const slides = [
        {
            icon: <BsEnvelopeOpen className="bookcolsultation-icon" />,
            title: 'High-Tech Marketing',
            description: 'Working with the latest technology we design.',
        },
        {
            icon: <FaLaptop className="bookcolsultation-icon" />,
            title: 'Considered Design',
            description: 'We respond directly to a project’s objectives.',
        },
        {
            icon: <VscTools className="bookcolsultation-icon" />,
            title: 'Creative Collaboration',
            description: 'We love working with people who embrace the design.',
        },
    ];

    return (
        <>
            <div className="bookcolsultation">
                <Container>
                    <div className="bookcolsultation-parent">
                        <Slider {...settings}>
                            {Array(2)
                                .fill(slides)   
                                .map((group, index) => (
                                    <div key={index}>
                                        <Row>
                                            {group.map((slide, idx) => (
                                                <Col md={4} key={idx}>
                                                    <div className="bookcolsultation-icon-parent">
                                                        {slide.icon}
                                                    </div>
                                                    <div className="bookcolsultation-parent-text">
                                                        <h4>{slide.title}</h4>
                                                        <p>{slide.description}</p>
                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>
                                    </div>
                                ))}
                        </Slider>
                    </div>
                </Container>
            </div>
            <div className="bookcolsultation-subparent">
                <h1 className="bookcolsultation-subparent-h1">
                    WE’D LOVE TO HEAR ABOUT YOUR PROJECT
                </h1>
                <Button className="bookcolsultation-subparent-button">
                    BOOK A FREE CONSULTATION
                </Button>
            </div>
        </>
    );
};

export default BookConsultation;
