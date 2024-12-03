import React from 'react';
import Slider from 'react-slick';
import { Button } from 'react-bootstrap';
import caseStudy1 from "../../assets/section6-6.jpg";
import caseStudy2 from "../../assets/caseStudy2.jpg";
import caseStudy3 from "../../assets/caseStudy3.jpg";
import "./caseStudy.css"
const CaseStudy = () => {
    const sliderData = [
        {
            image: caseStudy1,
            heading: "Google Ads Case Study",
            subHead: "International School in Dubai | UAE",
            text: "To increase the ROI of Ad Spend",
        },
        {
            image: caseStudy2,
            heading: "Google Ads Case Study",
            subHead: "Leading Waterpark in Dubai | UAE",
            text: "Company ABC reached out to improve their brand presence and digital footprint.",
        },
        {
            image: caseStudy3,
            heading: "Google Ads Case Study",
            subHead: "Online Gift Shop in the UAE | UAE",
            text: "To increase the ROI of Ad Spend",
        },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="section6-subparent">
            <div style={{ maxWidth: "100%", width: "100%", margin: "0 auto" }}>
                <Slider {...sliderSettings}>
                    {sliderData.map((slide, index) => (
                        <div key={index}>
                            <div className="section6-slide-content">
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <div style={{ flex: 1 }}>
                                        <div className="caseStudy-image-parent">
                                            <img src={slide.image} alt={slide.heading} />
                                        </div>
                                    </div>
                                    <div className='section6-text-second-container' style={{ flex: 1 }}>
                                        <div className="section6-subparent-text-parent">
                                            <h1 className="section6-subparent-text-heading">{slide.heading}</h1>
                                            <h4 className="section6-subparent-text-subHead">{slide.subHead}</h4>
                                            <p className="section6-subparent-text">{slide.text}</p>
                                            <Button className="section6-subparent-btn">view case study</Button>
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
