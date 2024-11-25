import React from 'react'
import "./automationservices.css"
import { Col, Container, Row } from 'react-bootstrap';
import marketingAutomation1 from "../../../assets/LEADMANAGEMENT1.svg"
import marketingAutomation2 from "../../../assets/LEADMANAGEMENT2.svg"
import marketingAutomation3 from "../../../assets/LEADMANAGEMENT3.svg"

const AutomationServices = () => {
  return (
    <div>
        
        <Container >
                <h1 className='agency-heading' style={{ textAlign: "center", marginTop: "40px" }}>Our Marketing Automation Services
                </h1>
                <div className='heading-underline'></div>
                <p className='agency-description' style={{ color: "#494646" }}>
                If you’re looking for the right marketing automation solution to help scale your business, here are the ways we can help.</p>
                <Row className="brandGuideMatter-parent">
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={marketingAutomation1} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Lead Management</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">By tracking where your leads come from and how they behave, we can better position your brand to make the most out of every new impression. This data also helps us pinpoint your most effective keywords and the areas of your marketing strategy that you can improve.</p>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={marketingAutomation2} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Competitor Tracking</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            One of the best ways to get ahead of your competitors is to know what they’re doing right—and what you can do better. We keep a close eye on what techniques your competitors employ to improve their SEO and digital campaigns and keep you ahead within your market.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="brandGuideMatter-parent" style={{margin: "0"}}>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={marketingAutomation3} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={10}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Customer Relationship Management</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            If you think your CRM systems could use some improvement, we can be the solution you need. Our enterprise software allows us to monitor prospect interactions and retrieve vital information that we can use to improve your brand’s long-term relationships.</p>
                            <p className="brandingServices-text">
                            We can improve your lead generation strategies, automate lead scoring, optimize lifecycle management campaigns and efficiently manage your entire consumer database with this data.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
  )
}

export default AutomationServices