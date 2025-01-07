import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import emailMarketinImg1 from "../../../assets/chatbbotServices1.svg"
import emailMarketinImg2 from "../../../assets/chatbbotServices2.svg"
import emailMarketinImg3 from "../../../assets/chatbbotServices3.svg"
import "./chatBotServices.css"
const ChatBotServices = () => {
    return (
        <div style={{ paddingBottom: "20px" }}>
            <Container >
                <h1 className='agency-heading' style={{ textAlign: "center", marginTop: "40px" }}>Our Chatbot Services</h1>
                <div className='heading-underline'></div>
                <p className='agency-description' style={{ color: "#494646" }}>
                    At Igloo, we deploy the latest machine learning and natural language processing technology to create advanced and helpful chatbots. Here are a few of the applications we provide.</p>

                <Row className="brandGuideMatter-parent">
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={emailMarketinImg1} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Declarative Chatbots</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">We program declarative chatbots that adhere to a pre-programmed set of rules if you need them precisely for troubleshooting and FAQ purposes to enable this machine learning program to ensure site visitors get accurate responses to all their queries instantly without ever having to wait around.</p>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={emailMarketinImg2} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Predictive Chatbots</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                For something with less of a “programmed” response, we create predictive chatbots that function more like a virtual assistant. These chatbots double as sales agents and provide personalized guidance to each visitor. We achieve these solutions through advanced language processing and synthesizing.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="brandGuideMatter-parent">
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={emailMarketinImg3} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={11}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Dedicated Agents</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                If you prefer a dedicated live chat agent, our customer service team is trained to assist in multiple industries that include:  </p>
                            <div class="two-columns">
                                <ul class="column">
                                    <li>Travel and hospitality</li>
                                    <li>Finance</li>
                                    <li>Retail</li>
                                </ul>
                                <ul class="column">
                                    <li>Healthcare</li>
                                    <li>Personal assistance</li>
                                    <li>E-Commerce</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ChatBotServices