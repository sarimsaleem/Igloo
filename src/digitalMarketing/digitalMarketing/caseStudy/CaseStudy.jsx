import React from 'react';
import Slider from 'react-slick';
import { Button } from 'react-bootstrap';
import section6 from "../../../assets/section6-6.jpg";
import "./casestudy.css"
const CaseStudy = () => {
    const sliderData = [
        {
            image: section6,
            heading: "GMCClinics Case Study",
            subHead: "Group of Clinics | GMCClinics",
            text: "GMCClinics first contacted Igloo to help them acquire new patients (PPC) and to improve their ranking on the search engines (SEO).",
        },
        {
            image: section6,
            heading: "Another Case Study",
            subHead: "Another Group | Company ABC",
            text: "Company ABC reached out to improve their brand presence and digital footprint.",
        },
        {
            image: section6,
            heading: "XYZ Corp Case Study",
            subHead: "Tech Industry | XYZ Corp",
            text: "XYZ Corp aimed to enhance their customer engagement and increase conversions through PPC campaigns.",
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
        <>
            <h1 className='caseStudy-main-heading'>SOME OF OUR DIGITAL MARKETING CASE STUDIES</h1>
            <div className='heading-underline' style={{ marginBlock: "30px" }}></div>
            <div className="section6-subparent">
                <div style={{ maxWidth: "100%", width: "100%", margin: "0 auto" }}>
                    <Slider {...sliderSettings}>
                        {sliderData.map((slide, index) => (
                            <div key={index}>
                                <div className="section6-slide-content">
                                    <div style={{ display: "flex", flexDirection: "row" }}>
                                        <div style={{ flex: 1 }}>
                                            <div className="section6-image-parent">
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
        </>
    );
};

export default CaseStudy;
