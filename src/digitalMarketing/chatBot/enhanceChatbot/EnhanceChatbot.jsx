import React from 'react'
import emailMarketinImg from "../../../assets/enhanceChatbox.jpg";
import { Col, Container, Row } from 'react-bootstrap';
import emailMarketinImg1 from "../../../assets/chatbot1.svg"
import emailMarketinImg2 from "../../../assets/chatbot2.svg"
import emailMarketinImg3 from "../../../assets/chatbot3.svg"
import emailMarketinImg4 from "../../../assets/chatbot4.svg"
import emailMarketinImg5 from "../../../assets/chatbot5.svg"
import emailMarketinImg6 from "../../../assets/chatbot6.svg"

const EnhanceChatbot = () => {
    return (
        <div>
            <div className="competetiveanalysis-imageContainer">
                <img src={emailMarketinImg} alt="Competitive Analysis" />
            </div>
            <Container >
                <h1 className='agency-heading' style={{ textAlign: "center", marginTop: "40px" }}>How to Enhance UX with Chatbots</h1>
                <div className='heading-underline'></div>
                <p className='agency-description' style={{ color: "#494646" }}>
                Embedding a chatbot on your website can significantly improve a user’s shopping experience and even increase your chances of making a sale.</p>
                <p className='agency-description' style={{ color: "#494646" }}>
                If you aren’t convinced our chatbots are for you, here are a few reasons that might change your mind.</p>

                <Row className="brandGuideMatter-parent">
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={emailMarketinImg1} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Streamline the Sales Process</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">Abandoned carts are a big problem for many businesses. However, our chatbots can help engage indecisive shoppers and encourage them to follow through with their purchases by asking questions and making recommendations according to their shopping habits, enabling us to directly impact your bottom line.</p>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={emailMarketinImg2} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Answer Questions</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Nobody likes to wait around for a customer service agent to become available before getting an answer to their question. With our chatbots, you can quickly resolve common issues and settle popular inquiries. If a query is too complex, we can program your chatbot to ask for a customer’s contact information or redirect them to a live chat agent.</p>
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
                            <h1 className="brandingServices-text-heading">Automate Repetitive Tasks</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Non-value-adding tasks like booking an appointment or reservation can quickly become time-consuming for human employees. As such, we build chatbots that can handle repetitive and administrative duties and even make suggestions according to a customer’s availability.</p>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={emailMarketinImg4} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Multi-language Support</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            If you do business in multiple countries, dedicating an agent to answer questions in various languages may not be efficient. Instead, we deploy chatbots to support and satisfy queries in multiple languages, ensuring that all of your users get instant answers to their questions, no matter where they are from.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="brandGuideMatter-parent">
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={emailMarketinImg5} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">24/7 Support</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Perhaps the most significant disadvantage of human support is the inability to be available round-the-clock. Fortunately, our chatbots stay active throughout the day and can be particularly helpful for businesses with a presence in multiple countries.</p>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={emailMarketinImg6} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">REDUCED COSTS</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Implementing chatbots can help you reduce your need for human customer support and streamline your processes. Both factors will enable you to significantly reduce your business’ operating costs without compromising on customer experience.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
} 

export default EnhanceChatbot