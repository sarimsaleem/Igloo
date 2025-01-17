import React from 'react';
import Slider from 'react-slick';
import './caseStudy.css';
import { Button, Container } from 'react-bootstrap';

const CaseStudy = ({ caseStudy }) => {

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: false,
        variableWidth: false,
    };

    return (
        <div className="section6-subparent" style={{ paddingBlock: "50px" }}>
            <div style={{ maxWidth: '100%', width: '100%', margin: '0 auto' }}>
                <Slider {...sliderSettings}>
                    {caseStudy.map((slide, index) => (
                        <div key={index}>
                            <div className="section6-slide-content">
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div style={{ flex: 1 }}>
                                        <div className="section6-image-parent">
                                            <img src={slide.image} alt={slide.heading} />
                                        </div>
                                    </div>
                                    <div
                                        className="section6-text-second-container"
                                        style={{ flex: 1 }}
                                    >
                                        <div className="section6-subparent-text-parent">
                                            <h1 className="section6-subparent-text-heading">
                                                {slide.heading}
                                            </h1>
                                            <h4 className="section6-subparent-text-subHead">
                                                {slide.subHead}
                                            </h4>
                                            <p className="section6-subparent-text">{slide.text}</p>
                                            <Button className="section6-subparent-btn">
                                                View Case Study
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default CaseStudy;
