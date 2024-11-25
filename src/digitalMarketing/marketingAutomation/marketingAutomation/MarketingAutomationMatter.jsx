import React from 'react'
import CompetitiveAnalysisImg from "../../../assets/marketingautomationMatter.jpg";
import "./marketingautomation.css"
import { Col, Container, Row } from 'react-bootstrap';
import marketingAutomation1 from "../../../assets/marketingAutomation1.svg"
import marketingAutomation2 from "../../../assets/marketingAutomation2.svg"
import marketingAutomation3 from "../../../assets/marketingAutomation3.svg"
import marketingAutomation4 from "../../../assets/marketingAutomation4.svg"

const MarketingAutomationMatter = () => {
    return (
        <div>
            <div className="competetiveanalysis-imageContainer">
                <img src={CompetitiveAnalysisImg} alt="Competitive Analysis" />
            </div>
            <Container >
                <h1 className='agency-heading' style={{ textAlign: "center", marginTop: "40px" }}>What is Marketing Automation and Why Does it Matter?</h1>
                <div className='heading-underline'></div>
                <p className='agency-description' style={{ color: "#494646" }}>
                    While many businesses are aware of marketing automation, few have a perfectly clear idea of how it can help with growth and scalability.
                </p>

                <p className='agency-description' style={{ color: "#494646" }}>
                    At Igloo, we define marketing automation as using software to automate repetitive marketing tasks. We typically integrate this software with your customer relationship management (CRM) protocols to nurture your leads throughout various stages of the consumer lifecycle.</p>
                <p className='agency-description' style={{ color: "#494646" }}>
                    By investing in our marketing automation services as early as the development stage, you can reap the following benefits in the long run.</p>
                <Row className="brandGuideMatter-parent">
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={marketingAutomation1} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Develop Lean Strategies with Fewer Objectives</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">By reducing staffing costs through automation, we can help you develop a more efficient and productive internal process. With our help, your team can focus more on its creative output and make bigger decisions.</p>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={marketingAutomation2} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Close Resource Gaps</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                Every client (regardless of size or budget) operates with finite resources.
                            </p>
                            <p className="brandingServices-text">
                            Did we mention that our marketing automation systems are highly scalable? We develop our automation strategies using scalable tools that, more often than not, price by demand so you only ever pay for features you use.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="brandGuideMatter-parent">
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={marketingAutomation3} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Keep up with Marketing Trends</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            The beauty of marketing automation is its ability to make your buyer communications feel more personal. We help you craft meaningful messages to targeted audiences, segmenting them according to behavior and preferences. Then, we use this information to track your most engaged leads and win their business.</p>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={marketingAutomation4} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Gain Access to the Right Tools</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Speaking of tracking, part of our marketing automation scheme is more accurate reporting. We can reduce human error and simplify your more cumbersome tasks through automation software. Overall, you’ll get a more detailed look at your marketing strategy’s friction points and learn how to improve them.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MarketingAutomationMatter