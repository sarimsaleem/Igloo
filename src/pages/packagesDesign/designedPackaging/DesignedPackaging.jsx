import React from 'react'
import "./designedpackaging.css"
import { Col, Container, Row } from 'react-bootstrap'
import brandGuideMatter1 from "./../../../assets/designedpackaging-1.svg"
import brandGuideMatter2 from "./../../../assets/designedpackaging-2.svg"
import brandGuideMatter3 from "./../../../assets/designedpackaging-3.svg"
import brandGuideMatter4 from "./../../../assets/designedpackaging-4.svg"
const DesignedPackaging = () => {
    return (
        <div className='designedpackaging'>
            <div className='logoAndBrand'>
                <h1 className='agency-heading'>Why Every Brand Needs Beautifully Designed Packaging</h1>
                <div className='heading-underline'></div>
                <p className='agency-description' style={{ color: "#494646" }}>
                    One of the best ways to earn consumer interest is professionally designed product packaging. When a consumer looks at your packaging, it should be able to answer the questions:</p>
                <ul className='designedpackaging-ul'>
                    <li>What does this product do?</li>
                    <li>How does it benefit me?</li>
                    <li>Is it the right solution for me?</li>
                </ul>
                <p className='agency-description' style={{ color: "#494646" }}>
                    At Igloo, we make sure your customers can answer all three in just a simple glance.</p>
                <p className='agency-description' style={{ color: "#494646" }}>
                    However, product packaging goes beyond aesthetics and can provide other numerous benefits such as the following.</p>
            </div>
            <Container>
            <Row className="brandGuideMatter-parent">
                <Col md={1}>
                    <div className="brandingServices-icon-parent">
                        <img src={brandGuideMatter1} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={5}>
                    <div className="brandingServices-text-parent2">
                        <h1 className="brandingServices-text-heading">Protect Your Products</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                        Businesses often forget that product packaging exists to protect its contents. Well-designed packaging can keep your product safe from humidity, heat, light, and other external factors, especially while in transit.</p>
                    </div>
                </Col>
                <Col md={1}>
                    <div className="brandingServices-icon-parent">
                        <img src={brandGuideMatter2} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={5}>
                    <div className="brandingServices-text-parent2">
                        <h1 className="brandingServices-text-heading">Reinforce Your Brand</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                        We keep your most defining brand elements in mind when we design product packaging. Remember, your product’s packaging serves as its first impression, and we want to ensure you make a good one.</p>
                    </div>
                </Col>
            </Row>
            <Row className="brandGuideMatter-parent">
                <Col md={1}>
                    <div className="brandingServices-icon-parent">
                        <img src={brandGuideMatter3} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={5}>
                    <div className="brandingServices-text-parent2">
                        <h1 className="brandingServices-text-heading">Reflect Product Quality</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                            Well-packaged products speak volumes about what’s inside. By taking the time to develop thoughtful, structurally-sound packaging, we help to reinforce your commitment to delivering high-quality items consumers will instantly fall in love with.</p>
                    </div>
                </Col>
                <Col md={1}>
                    <div className="brandingServices-icon-parent">
                        <img src={brandGuideMatter4} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={5}>
                    <div className="brandingServices-text-parent2">
                        <h1 className="brandingServices-text-heading">Incorporate Functionality</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                            An aesthetically pleasing design is just one of the factors we consider when developing product packaging. The second factor is functionality. At Igloo, we value sustainability and demonstrate this in our fit-for-purpose packaging design. We create packaging that is easy to reuse, store, and recycle.</p>
                    </div>
                </Col>
            </Row>
            </Container>
        </div>

    )
}

export default DesignedPackaging