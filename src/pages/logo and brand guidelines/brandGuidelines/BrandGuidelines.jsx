import React from 'react'
import "./brandGuidelines.css"
import { Container } from 'react-bootstrap'
import { Col, Row } from 'react-bootstrap'
import brandguidelines1 from "./../../../assets/brandguidelines-1.svg"
import brandguidelines2 from "./../../../assets/brandguidelines-2.svg"
import brandguidelines3 from "./../../../assets/brandguidelines-3.svg"
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
                            <h1 className="brandingServices-text-heading">Brand Messaging</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Are you unsatisfied with your brand’s value propositions, messaging pillars, or overall direction? We can guide you through developing every aspect of your brand: from taglines to unique selling points that make your brand shine.
                            </p>
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
                            <h1 className="brandingServices-text-heading">Brand Essence</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Your company’s core identity will not only influence its tone and personality, but how consumers perceive it. We help piece together the parts of your brand that make it complete and recognizable.</p>
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
                            <h1 className="brandingServices-text-heading">Visual Elements</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            From your logo and color palette to your typography and iconography, we thread together all aspects of your brand guide to create one cohesive look.</p>
                        </div>
                    </Col>
                </Row>
        </div>
    )
}

export default BrandGuidelines