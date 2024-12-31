import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import instagram1 from "../../../assets/instagram1.svg"
import instagram2 from "../../../assets/instagram2.svg"
import instagram3 from "../../../assets/instagram3.svg"

const LinkdinAdManagement = () => {
    return (
        <div>
            <h1 className='agency-heading' style={{ marginTop: "40px" }}>Our LinkedIn Ad Management Services</h1>
            <div className='heading-underline'></div>
            <p className='agency-description'>
                LinkedIn is rich with user information, making it easier to narrow your target audience. Combined with its built-in ad solutions, we can curate a LinkedIn ad strategy that thrusts you into industry leadership.
            </p>
            <Row className="brandingServices-parent">
                <Col md={2}>
                    <div className="brandingServices-icon-parent">
                        <img src={instagram1} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={10}>
                    <div className="brandingServices-text-parent">
                        <h1 className="brandingServices-text-heading">Ad Strategies and Development</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                            To create winning ad strategies, we first take the time to study your business and how it stacks up against competitors. Then, we decide what type of LinkedIn ads are best to run according to your previous campaigns and specific business goals.</p>
                        <p className="brandingServices-text">
                            <p className="brandingServices-text">
                                To create winning ad strategies, we first take the time to study your business and how it stacks up against competitors. Then, we decide what type of LinkedIn ads are best to run according to your previous campaigns and specific business goals.</p>
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className="brandingServices-parent">
                <Col md={2}>
                    <div className="brandingServices-icon-parent">
                        <img src={instagram2} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={10}>
                    <div className="brandingServices-text-parent">
                        <h1 className="brandingServices-text-heading">Content Creation</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                            Since growing into a fully-fledged content platform, LinkedIn has become a more diverse digital space for consumption. Our team takes full advantage of this development, creating content that rides on industry trends—from blogs to social posts. We also generate long-form and evergreen content that gets you to rank in the long run.</p>
                    </div>
                </Col>
            </Row>
            <Row className="brandingServices-parent">
                <Col md={2}>
                    <div className="brandingServices-icon-parent">
                        <img src={instagram3} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={10}>
                    <div className="brandingServices-text-parent">
                        <h1 className="brandingServices-text-heading">InMail Support        </h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                            Sponsored InMail is an excellent way to push sign-ups on your website. To improve your click-through rates even further, we target only active LinkedIn prospects who are more likely to respond.
                        </p>
                        <p className="brandingServices-text">
                            We guarantee results by crafting emails that are engaging, mobile responsive, and relevant to your target audiences.
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className="brandingServices-parent">
                <Col md={2}>
                    <div className="brandingServices-icon-parent">
                        <img src={instagram3} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={10}>
                    <div className="brandingServices-text-parent">
                        <h1 className="brandingServices-text-heading">Insights and Analytics</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                            Now that you can study results in real-time, you can quickly measure the return of investment on your LinkedIn ads. We make these reports digestible for your team, allowing you to pinpoint where to make precise adjustments.
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default LinkdinAdManagement