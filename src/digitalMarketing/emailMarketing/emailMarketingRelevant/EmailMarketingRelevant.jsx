import React from 'react'
import emailMarketinImg from "../../../assets/emailMarketinImg.jpg";
import { Col, Container, Row } from 'react-bootstrap';
import emailMarketinImg1 from "../../../assets/emailMarketing1.svg"
import emailMarketinImg2 from "../../../assets/emailMarketing2.svg"
import emailMarketinImg3 from "../../../assets/emailMarketing3.svg"
import emailMarketinImg4 from "../../../assets/emailMarketing4.svg"

const EmailMarketingRelevant = () => {
    return (
        <div>
            <div className="competetiveanalysis-imageContainer">
                <img src={emailMarketinImg} alt="Competitive Analysis" />
            </div>
            <Container >
                <h1 className='agency-heading' style={{ textAlign: "center", marginTop: "40px" }}>What is Marketing Automation and Why Does it Matter?</h1>
                <div className='heading-underline'></div>
                <p className='agency-description' style={{ color: "#494646" }}>
                At Igloo, we define marketing automation as using software to automate repetitive marketing tasks. We typically integrate this software with your customer relationship management (CRM) protocols to nurture your leads throughout various stages of the consumer lifecycle.</p>

                <Row className="brandGuideMatter-parent">
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={emailMarketinImg1} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Customer Loyalty</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">Customers develop lasting relationships with brands when they interact regularly. Thanks to the cost-effectiveness of email marketing, many prefer to correspond through this medium. Not to mention, our clever email strategies can help save you the time and money you’d exert on a medium like paid advertising.</p>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={emailMarketinImg2} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Easy-to-Track Analytics</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                Every client (regardless of size or budget) operates with finite resources.
                            </p>
                            <p className="brandingServices-text">
                            Open and click-through rates can say a lot about how your email marketing campaign performs. Because email metrics are so easy to track, your campaign can be just as easy to adjust according to user behaviors. Depending on your marketing goals, we align our chosen metrics to best reflect your performance indicators.</p>
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
                            <h1 className="brandingServices-text-heading">Expanded Business Reach</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Did you know that email users check their inbox multiple times a day? That statistic alone should put into perspective your chances of being seen. We have experience crafting thoughtful, anti-spam messages that make their way into consumer inboxes at exactly the right time.</p>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={emailMarketinImg4} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Hyper-personalization</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            At Igloo, we zero in on data-driven campaigns, focusing on delivering hyper-specific messages to the right audiences instead of broad, impersonal messaging. By reaching out to multiple audience segments, we can put a personal spin on our efforts and drive more attractive results.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
} 

export default EmailMarketingRelevant