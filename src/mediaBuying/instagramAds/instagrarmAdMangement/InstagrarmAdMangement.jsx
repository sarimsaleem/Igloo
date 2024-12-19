import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import instagram1 from "../../../assets/instagram1.svg"
import instagram2 from "../../../assets/instagram2.svg"
import instagram3 from "../../../assets/instagram3.svg"

const InstagrarmAdMangement = () => {
    return (
        <div>
            <h1 className='agency-heading' style={{ marginTop: "40px" }}>Our Instagram Ad Management Services</h1>
            <div className='heading-underline'></div>
            <p className='agency-description'>
                If you don’t have the time and resources to create and manage Instagram advertising campaigns, we help you by following the below process:</p>
            <Row className="brandingServices-parent">
                <Col md={2}>
                    <div className="brandingServices-icon-parent">
                        <img src={instagram1} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={10}>
                    <div className="brandingServices-text-parent">
                        <h1 className="brandingServices-text-heading">Ad Creation</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                        Instagram provides a wide range of advertising formats you can choose from. We pick ad types based on your specific goals, creating eye-catching visuals and powerful copy to convert consumers.</p>
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
                        <h1 className="brandingServices-text-heading">Audience Targeting</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                        Your ads are far less likely to win you any new business if you lack a clear picture of the people you’re selling to. Our ad specialists curate your audiences according to these target customers.</p>
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
                        <h1 className="brandingServices-text-heading">Ad Optimization   </h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                        An ad that generates results doesn’t just have to be compelling—it also has to be optimized. To ensure that your ads are performing well, we A/B test your campaigns, making changes according to how your audiences react.</p>
                        <p className="brandingServices-text">
                        Simultaneously, we monitor your ads in real-time, making subtle adjustments as necessary.</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default InstagrarmAdMangement