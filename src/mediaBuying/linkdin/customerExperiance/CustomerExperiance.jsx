import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import linkdin1 from "../../../assets/linkdin1.svg"
import linkdin2 from "../../../assets/linkdin2.svg"
import linkdin3 from "../../../assets/linkdin3.svg"
import linkdin4 from "../../../assets/linkdin4.svg"
const CustomerExperiance = () => {
    return (
        <div>
            <Container>
                <h1 className='brandguidelines-heading'>Benefits of LinkedIn Advertising,</h1>
                <div className="brandguidelines-seperator"></div>
                <p className='brandguidelines-detail'>
                    If you’re already running Facebook or Instagram ads, you may be wondering why advertising on LinkedIn is necessary. With just 740 million users, LinkedIn is significantly smaller than its other social counterparts, yet it is the best place for B2B advertisers—here are a few reasons why.</p>
            </Container>
            <Row className="brandingServices-parent">
                <Col md={2}>
                    <div className="brandingServices-icon-parent">
                        <img src={linkdin1} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={10}>
                    <div className="brandingServices-text-parent">
                        <h1 className="brandingServices-text-heading">Customer</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                            With LinkedIn ads, you can narrow your demographics beyond location, age, and gender. You can also filter through audiences according to job title, industry, degree, and more.
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className="brandingServices-parent">
                <Col md={2}>
                    <div className="brandingServices-icon-parent">
                        <img src={linkdin2} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={10}>
                    <div className="brandingServices-text-parent">
                        <h1 className="brandingServices-text-heading">Higher Conversions</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                        Because LinkedIn is a platform for professionals, your ads and marketing materials are more likely to reach decision-makers who are equipped to choose your products and services.</p>
                    </div>
                </Col>
            </Row>
            <Row className="brandingServices-parent">
                <Col md={2}>
                    <div className="brandingServices-icon-parent">
                        <img src={linkdin3} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={10}>
                    <div className="brandingServices-text-parent">
                        <h1 className="brandingServices-text-heading">Networking Opportunities</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                        Perhaps LinkedIn’s greatest strength is networking. By publishing quality content, you can just as easily garner quality leads and traffic.</p>
                      </div>
                </Col>
            </Row>
            <Row className="brandingServices-parent">
                <Col md={2}>
                    <div className="brandingServices-icon-parent">
                        <img src={linkdin4} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={10}>
                    <div className="brandingServices-text-parent">
                        <h1 className="brandingServices-text-heading">Partnership and Event Promotion</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                        Known for its professional user base, LinkedIn is one of the best places for recruiting new employees. You can also network through event and conference promotion, especially if you’re looking to expand your company.</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default CustomerExperiance