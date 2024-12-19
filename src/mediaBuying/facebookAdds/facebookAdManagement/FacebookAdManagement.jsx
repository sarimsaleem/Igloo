import React from 'react'
import "./facebookAdManagement.css"
import { Col, Container, Row } from 'react-bootstrap'
import brandGuideMatter1 from "../../../assets/insight1.svg"
import brandGuideMatter2 from "../../../assets/insight2.svg"
import brandGuideMatter3 from "../../../assets/insight3.svg"
import brandGuideMatter4 from "../../../assets/insight4.svg"
const FacebookAdManagement = () => {
    return (
        <div>
            <Container>
                <h1 className='brandguidelines-heading'>Our Facebook Ad Management Services</h1>
                <div className="brandguidelines-seperator"></div>
                <p className='brandguidelines-detail'>
                All businesses can benefit from our Facebook ad management services. In particular, below are the ways we can help your ad campaigns thrive.</p>
                <Row className="brandingServices-parent">
                    <Col md={12}>
                        <div className="brandingServices-text-parent">
                            <h1 className="brandingServices-text-heading">Strategy Development</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            The first step in developing a robust, unbeatable advertising strategy is getting to know your brand. Our specialists first study your past campaigns, identifying successful tactics and building upon ones with potential.</p>
                            <p className="brandingServices-text">
                            Then, we perform a comprehensive competitor analysis to determine areas you can outperform and overcome. In addition, we analyze content that serves well within your industry.</p>
                        </div>
                    </Col>
                </Row>


                <Row className="brandingServices-parent">
                    <Col md={12}>
                        <div className="brandingServices-text-parent">
                            <h1 className="brandingServices-text-heading">Content Creation</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Our ad content is always engaging—we create original copy and stunning visuals that make your brand stand out from the rest. We maintain a regular posting schedule and provide clients with editorial calendars that best suit their campaign timelines.</p>
                            <p className="brandingServices-text">
                            <b>Below are the ad formats we include in our services.</b></p>
                        </div>
                    </Col>
                    <Row className="brandGuideMatter-parent">
                        <Col md={1}>
                            <div className="brandingServices-icon-parent">
                                <img src={brandGuideMatter1} alt="Branding Icon" className="brandingServices-icon" />
                            </div>
                        </Col>
                        <Col md={5}>
                            <div className="brandingServices-text-parent2">
                                <h1 className="brandingServices-text-heading">
                                Single Image Ads</h1>
                                <div className="brandingServices-head-text-separator"></div>
                                <p className="brandingServices-text">These standard ad formats include a single image, headline, carefully-crafted caption, link description, and powerful call-to-action (CTA).</p>
                            </div>
                        </Col>
                        <Col md={1}>
                            <div className="brandingServices-icon-parent">
                                <img src={brandGuideMatter2} alt="Branding Icon" className="brandingServices-icon" />
                            </div>
                        </Col>
                        <Col md={5}>
                            <div className="brandingServices-text-parent2">
                                <h1 className="brandingServices-text-heading">Photos & Videos</h1>
                                <div className="brandingServices-head-text-separator"></div>
                                <p className="brandingServices-text">
                                Do you want your ads to create a strong visual impact? We recommend these ad formats for engagement and awareness campaigns.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="brandGuideMatter-parent">
                        <Col md={1}>
                            <div className="brandingServices-icon-parent">
                                <img src={brandGuideMatter3} alt="Branding Icon" className="brandingServices-icon" />
                            </div>
                        </Col>
                        <Col md={5}>
                            <div className="brandingServices-text-parent2">
                                <h1 className="brandingServices-text-heading">Carousels</h1>
                                <div className="brandingServices-head-text-separator"></div>
                                <p className="brandingServices-text">
                                If you’re advertising multiple products or services, our carousel ads can highlight each of them, driving traffic and conversions.</p>
                            </div>
                        </Col>
                        <Col md={1}>
                            <div className="brandingServices-icon-parent">
                                <img src={brandGuideMatter4} alt="Branding Icon" className="brandingServices-icon" />
                            </div>
                        </Col>
                        <Col md={5}>
                            <div className="brandingServices-text-parent2">
                                <h1 className="brandingServices-text-heading">Catalog</h1>
                                <div className="brandingServices-head-text-separator"></div>
                                <p className="brandingServices-text">
                                Want to showcase an entire collection of products and services? Our beautifully designed Facebook Catalogs will surely convert.</p>
                            </div>
                        </Col>
                    </Row>
                </Row>


                <Row className="brandingServices-parent">
                    <Col md={12}>
                        <div className="brandingServices-text-parent">
                            <h1 className="brandingServices-text-heading">Ad Testing</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            We split-test ad copy and shortlist your most successful campaigns to target the correct audiences efficiently. We can eliminate guesswork through regular A/B testing, maximize web traffic, and even improve your overall revenue.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="brandingServices-parent">
                    <Col md={12}>
                        <div className="brandingServices-text-parent">
                            <h1 className="brandingServices-text-heading">Monitoring & Reporting</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            As part of our ad management services, we monitor your results daily. You’ll get to review ad performance and other data points related to your campaign, such as:</p>
                            <p className="brandingServices-text">
                            We evaluate these results through Facebook Ads Manager and take a closer look at your website traffic through Google Analytics.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FacebookAdManagement