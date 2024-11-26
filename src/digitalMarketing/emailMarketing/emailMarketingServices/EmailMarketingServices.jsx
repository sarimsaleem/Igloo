import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import emailMarketinImg1 from "../../../assets/emailServices1.svg"
import emailMarketinImg2 from "../../../assets/emailServices2.svg"
import emailMarketinImg3 from "../../../assets/emailServices3.svg"
import emailMarketinImg4 from "../../../assets/emailServices4.svg"

const EmailMarketingServices = () => {
    return (
        <div>
            <Container >
                <h1 className='agency-heading' style={{ textAlign: "center", marginTop: "40px" }}>Our Email Marketing Services</h1>
                <div className='heading-underline'></div>
                <p className='agency-description' style={{ color: "#494646" }}>
                Igloo is proud to be one of the most trusted email marketing companies in the country. With us, you can expect to receive the following services.</p>

                <Row className="brandGuideMatter-parent">
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={emailMarketinImg1} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Performance Audit</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">The way trends come and go, your email marketing strategy has to adapt to an ever-changing environment. But first, we need to familiarize ourselves with what needs changing. We perform comprehensive marketing audits and technical reviews to make recommendations for your future campaigns.</p>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={emailMarketinImg2} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Marketing Management</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Are you having trouble staying on top of your monthly email services? We can take care of that for you by regularly reviewing your marketing goals and ensuring that your efforts align. We develop new campaigns according to your brand guidelines, creating monthly content that interests, engages and delights users.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="brandGuideMatter-parent">
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={emailMarketinImg3} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Email Automation</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Instead of losing time over manual processes, we can help streamline your efforts through email marketing automation. Automation involves designing drip sequences that best help you achieve your marketing objectives as efficiently as possible.</p>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={emailMarketinImg4} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">List Hygiene</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Without maintaining list hygiene, you run the risk of your email marketing campaigns being filtered out by email service providers such as Gmail and Outlook. We help you ensure that your messages reach as many of your target users as possible.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
} 

export default EmailMarketingServices