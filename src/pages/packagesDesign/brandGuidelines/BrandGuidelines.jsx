import React from 'react'
// import "./brandguidelines.css"
import { Container } from 'react-bootstrap'
import { Col, Row } from 'react-bootstrap'

import brandguidelines1 from "./../../../assets/ourPackageD-1.svg"
import brandguidelines2 from "./../../../assets/ourPackageD-2.svg"
import brandguidelines3 from "./../../../assets/ourPackageD-3.svg"
import brandguidelines4 from "./../../../assets/ourPackageD-4.svg"
const BrandGuidelines = () => {
    return (
        <div className='brandguidelines'>
            <Container>
                <h1 className='brandguidelines-heading'>Our Logo and Brand Guideline Services</h1>
                <div className="brandguidelines-seperator"></div>
                <p className='brandguidelines-detail'>
                    At Igloo, we produce on-brand content, no matter the medium you choose. Below are the premier logo and brand guideline services we provide.</p>

                    
            </Container>
            <Row className="brandingServices-parent">
                    <Col md={2}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandguidelines1} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={10}>
                        <div className="brandingServices-text-parent">
                            <h1 className="brandingServices-text-heading">2D/3D Packaging</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Innovative packaging is one of the best ways to stand out from your competition. At Igloo, our designers are well-versed in design software such as 3DS Max, InDesign, Illustrator, and other tools to create impressive custom packaging.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="brandingServices-parent">
                    <Col md={2}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandguidelines2} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={10}>
                        <div className="brandingServices-text-parent">
                            <h1 className="brandingServices-text-heading">Food Packaging</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Do you sell snacks, fresh foods, or other consumables? We create attractive and practical packaging that meets industry standards and keep your products fresher for longer.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="brandingServices-parent">
                    <Col md={2}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandguidelines3} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={10}>
                        <div className="brandingServices-text-parent">
                            <h1 className="brandingServices-text-heading">Health and Beauty Packaging</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Whether you stock skincare products, makeup, or hair care tools, we design eye-catching and functional packaging that will get your items to stand out in beauty marketplaces and drugstores.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="brandingServices-parent">
                    <Col md={2}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandguidelines4} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={10}>
                        <div className="brandingServices-text-parent">
                            <h1 className="brandingServices-text-heading">Retail Packaging</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            At Igloo, we pride ourselves on the ability to design for a wide variety retail products for cost-effective prices.</p>
                        </div>
                    </Col>
                </Row>
        </div>
    )
}

export default BrandGuidelines