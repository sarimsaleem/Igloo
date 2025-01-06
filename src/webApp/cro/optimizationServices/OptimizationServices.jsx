import React from 'react'
import brandguidelines1 from "../../../assets/performcompetitiveAnalysis1.svg"
import brandguidelines2 from "../../../assets/performcompetitiveAnalysis2.svg"
import brandguidelines3 from "../../../assets/performcompetitiveAnalysis3.svg"
import brandguidelines4 from "../../../assets/performcompetitiveAnalysis4.svg"
import brandguidelines5 from "../../../assets/performcompetitiveAnalysis5.svg"
import brandGuideMatter1 from "../../../assets/web1.svg"
import brandGuideMatter2 from "../../../assets/web2.svg"
import brandGuideMatter3 from "../../../assets/web3.svg"
import brandGuideMatter4 from "../../../assets/web4.svg"
import brandGuideMatter5 from "../../../assets/web5.svg"
import brandGuideMatter6 from "../../../assets/web6.svg"
import { Button, Col, Container, Row } from 'react-bootstrap'
const OptimizationServices = () => {
    return (
        <div>
            <Container>
                <h1 className='agency-heading' style={{ textAlign: "center", marginTop: "40px" }}>Our Conversion Optimization Services
                </h1>
                <div className='heading-underline'></div>
                <p className='agency-description' style={{ color: "#494646" }}>
                    Generating interest is just the first stage of successful conversion. If your customers aren’t following through with their purchases, we can help drive your sales funnel with the following CRO services.</p>
            </Container>
            <Row className="brandingServices-parent">
                <Col md={2}>
                    <div className="brandingServices-icon-parent">
                        <img src={brandguidelines1} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={10}>
                    <div className="brandingServices-text-parent">
                        <h1 className="brandingServices-text-heading">Internet Marketing Conversion Analysis</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                            The first and most important step toward improving your CRO is understanding how users interact with your site today. We use tools that allow us to monitor users’ sessions (anonymously, so no data privacy worries here) and discover their usual paths, common issues, and barriers to conversion for the sake of making smarter improvements later on.</p>
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
                        <h1 className="brandingServices-text-heading">Conversion Funnel Analysis</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">When customers make a purchase, they undergo multiple steps. If your website doesn’t effectively get them from point A to point B, we reexamine your conversion funnel, identifying weak points.</p>
                        <p className="brandingServices-text">If your conversion funnel is too intricate, we eliminate unnecessary steps, providing potential customers with the necessary conversion information.</p>
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
                        <h1 className="brandingServices-text-heading">Website Copy Analysis</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                            When developing brand copy, you have to consider your customers’ perspectives. If your brand voice is experiencing a disconnect, we rewrite the copy to provide only the necessary information. We adequately address site visitors’ questions and persuade them to convert.</p>
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
                        <h1 className="brandingServices-text-heading">
                            Aesthetics Analysis</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                            As often as we try not to judge a book by its cover, doing so is often inevitable. A poorly designed website won’t be enjoyable to navigate. If your website appears cluttered or aesthetically displeasing, we create a stunning design and uniformity across all pages.</p>
                        <p className="brandingServices-text">
                            We encourage visitors to stay on your website longer or gather more information from additional pages by reducing aesthetic errors.</p>
                    </div>
                </Col>

            </Row>
            <Row className="brandingServices-parent">
                <Col md={2}>
                    <div className="brandingServices-icon-parent">
                        <img src={brandguidelines5} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={10}>
                    <div className="brandingServices-text-parent">
                        <h1 className="brandingServices-text-heading">CRO Metrics</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                            To better understand CRO performance, we have to track the appropriate metrics. We gather insights regarding your website campaigns by monitoring the following.</p>
                    </div>
                </Col>
            </Row>
            <Container>

                <Row className="brandGuideMatter-parent">
                    <Col md={1}></Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Bounce Rate</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">A high bounce rate indicates that site visitors might have trouble with your website’s navigation, aren’t receiving the information they need or lack the push to convert.</p>
                        </div>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Click-Through Rate (CTR)</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                Your click-through rate tells you how many people have seen your ads or organic listings and clicked through to your website. Low click-through rates might indicate weak copy or unenticing ads.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="brandGuideMatter-parent">
                    <Col md={1}></Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Pages Per Visit</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">How many pages users visit on your website can tell you how effective they keep people engaged and interested in your products. We help increase average page visits by publishing relevant content and providing useful on-page information.</p>
                        </div>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Return on Investment (ROI)</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">Return on Investment (ROI)
                                Calculating your ROI is one of the most precise benchmarks for determining the success of your CRO campaign. If your growth-centric strategy isn’t boosting your revenue, we can reassess your CRO spending and choose the best possible adjustments.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="brandGuideMatter-parent">
                    <Col md={1}></Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Page Load Time</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                Slow-loading pages won’t get site visitors to convert. Remember, the first five seconds of your page load time has the most significant impact on your conversions. We optimize pages for fast load times, which improves your overall user experience.</p>
                        </div>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">
                                Cost Per Conversion</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                Sometimes referred to as cost per action (CPA), a low CPC means you aren’t overspending when you pay to obtain new customers. We keep your CPC low by crafting effective and high-converting materials.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default OptimizationServices