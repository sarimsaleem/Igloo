import React from 'react'
import brandGuideMatter1 from "../../../assets/video1.svg"
import brandGuideMatter2 from "../../../assets/video2.svg"
import brandGuideMatter5 from "../../../assets/video3.svg"
import brandGuideMatter6 from "../../../assets/video4.svg"
import { Button, Col, Container, Row } from 'react-bootstrap'
const ImpactOfPhoto = () => {
    return (
        <Container>
            <h1 className='brandguidelines-heading'>The Impact of Photo and Video in Business</h1>
            <div className="brandguidelines-seperator"></div>
            <p className='brandguidelines-detail'>
            At Igloo, we are big believers in the saying, “a picture paints a thousand words.” Photography and videography are an integral part of any business's marketing strategy, so if you aren’t yet taking advantage of these mediums, here are a few reasons why you should.</p>
            <Row className="brandGuideMatter-parent">
                <Col md={1}>
                    <div className="brandingServices-icon-parent">
                        <img src={brandGuideMatter1} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={5}>
                    <div className="brandingServices-text-parent2">
                        <h1 className="brandingServices-text-heading">Enhancing SEO</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">Well-produced, original photos and videos can enhance your user experience and keep visitors on your site for longer, which can drastically improve your search engine rankings. When we produce photos and videos for your website, we incorporate eye-catching elements that make customers want to know your brand—the longer they linger, the better.</p>
                    </div>
                </Col>
                <Col md={1}>
                    <div className="brandingServices-icon-parent">
                        <img src={brandGuideMatter2} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={5}>
                    <div className="brandingServices-text-parent2">
                        <h1 className="brandingServices-text-heading">Powerful Social Media Impact</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                        Since the rise of Facebook Live and Instagram Stories, many businesses have been taking to social media platforms to show off their products and services—you don’t want to be one of the only ones left behind. By placing your products in front of billions of active social media users, you can quickly become a fan favorite on the biggest social media platforms.</p>
                    </div>
                </Col>
            </Row>
            <Row className="brandGuideMatter-parent">
                <Col md={1}>
                    <div className="brandingServices-icon-parent">
                        <img src={brandGuideMatter5} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={5}>
                    <div className="brandingServices-text-parent2">
                        <h1 className="brandingServices-text-heading">Capturing Consumer Interest</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                        To create content that grabs and retains customer attention, you need high-quality visual materials. We can help you make the impact you desire with photos and videos that speak volumes about your product.</p>
                    </div>
                </Col>
                <Col md={1}>
                    <div className="brandingServices-icon-parent">
                        <img src={brandGuideMatter6} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={5}>
                    <div className="brandingServices-text-parent2">
                        <h1 className="brandingServices-text-heading">Increasing ROI</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                        Want to double your click-through rates? Photo and video content can help you achieve that! While photography and videography can make for a sizable investment, we assure you it’ll pay off in your increased ROI.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ImpactOfPhoto