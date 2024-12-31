import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import linkdin1 from "../../../assets/youtube1.svg"
import linkdin2 from "../../../assets/youtube2.svg"
import linkdin3 from "../../../assets/youtube3.svg"
import linkdin4 from "../../../assets/youtube4.svg"
import linkdin5 from "../../../assets/youtube5.svg"
const YoutubeManagement = () => {
    return (
        <div>
            <Container>
                <h1 className='brandguidelines-heading'>Our YouTube Ad Management Services</h1>
                <div className="brandguidelines-seperator"></div>
                <p className='brandguidelines-detail'>
                If you want to start promoting video content but don’t have the time to familiarize yourself with YouTube advertising, here is how we can help.</p>
            </Container>
            <Row className="brandingServices-parent">
                <Col md={2}>
                    <div className="brandingServices-icon-parent">
                        <img src={linkdin1} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={10}>
                    <div className="brandingServices-text-parent">
                        <h1 className="brandingServices-text-heading">Audience Research</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                        We maximize your YouTube ads by performing highly detailed audience research. After all, even the most creative and engaging ads don’t get the attention they deserve when placed in front of the wrong people.</p>
                        <p className="brandingServices-text">
                        To get the most out of your reach, we match the right target audience to your key objectives, whether it be to re-target previous followers or get ahead of your competitors.</p>
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
                        <h1 className="brandingServices-text-heading">Campaign Audit</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                        Whether you already run a YouTube advertising campaign or are starting from scratch, we regularly analyze performance data to determine areas of improvement. We take a close look at clicks, impressions, engagements, purchases, CPC, and CTR.</p>
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
                        <h1 className="brandingServices-text-heading">Campaign Parameters</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                        Even the most ambitious campaigns can benefit from strong parameters. When developing your YouTube ad campaign, we consider factors like:
                        </p>
                        <ul class="two-columns">
                            <li>Bid strategies for clicks, impressions, and conversions</li>
                            <li>Budget limitations</li>
                            <li>Geographical locations for where ads can be viewed</li>
                            <li>Ad spaces for display</li>
                        </ul>
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
                        <h1 className="brandingServices-text-heading">Insights and Analytics</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                        As with any social media advertising campaign, your numbers will tell you how well your efforts perform. As your advertising expert, we are fully versed in YouTube metrics and put these numbers into writing for your easy reference.</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default YoutubeManagement