import React from 'react';
import Slider from 'react-slick';
import './caseStudy.css';
import { Button, Container } from 'react-bootstrap';
import { BASE_IMAGE_URL } from '../../util/contant'; // Ensure correct import

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
        <div className="case-study-container" style={{ paddingBlock: '50px' }}>
            <div style={{ maxWidth: '100%', width: '100%', margin: '0 auto' }}>
                <Slider {...sliderSettings}>
                    {caseStudy.map((slide, index) => {
                        const imageSrc = BASE_IMAGE_URL + slide.image; 

                        return (
                            <div key={index}>
                                <div className="case-study-slide">
                                    <div className='case-study-content'>
                                        <div style={{ flex: 1 }}>
                                            <div className="case-study-image-wrapper">
                                                <img src={imageSrc} alt={slide.heading} />
                                            </div>
                                        </div>
                                        <div
                                            className="section6-text-second-container case-study-text-wrapper"
                                            style={{ flex: 1 }}
                                        >
                                            <div className="case-study-text-content">
                                                <h1 className="case-study-heading">
                                                    {slide.heading}
                                                </h1>
                                                <h4 className="case-study-subheading">
                                                    {slide.subHead}
                                                </h4>
                                                <p className="case-study-description">{slide.text}</p>
                                                <Button className="case-study-button">
                                                    View Case Study
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default CaseStudy;
