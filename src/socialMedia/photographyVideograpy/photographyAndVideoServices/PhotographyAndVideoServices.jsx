import React from 'react'
import brandGuideMatter1 from "../../../assets/video5.svg"
import brandGuideMatter2 from "../../../assets/video6.svg"
import brandGuideMatter5 from "../../../assets/video7.svg"
import brandGuideMatter6 from "../../../assets/video8.svg"
import { Button, Col, Container, Row } from 'react-bootstrap'
const PhotographyAndVideoServices = () => {
    return (
        <div><Container>
            <h1 className='brandguidelines-heading'>Our Photography and Videography Services</h1>
            <div className="brandguidelines-seperator"></div>
            <p className='brandguidelines-detail'>
                To help our valued clients rise to the top, we provide the following photography and videography services.
            </p>
            <Row className="brandGuideMatter-parent">
                <Col md={1}>
                    <div className="brandingServices-icon-parent">
                        <img src={brandGuideMatter1} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={5}>
                    <div className="brandingServices-text-parent2">
                        <h1 className="brandingServices-text-heading">Product Photography & Videography</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">When advertising your product, how you present it can make all the difference. We provide professional product photography services to shine the best possible light on what you sell. Our team has experience photographing products from various industries with the best studio equipment.</p>
                    </div>
                </Col>
                <Col md={1}>
                    <div className="brandingServices-icon-parent">
                        <img src={brandGuideMatter2} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={5}>
                    <div className="brandingServices-text-parent2">
                        <h1 className="brandingServices-text-heading">SALES AND MARKETING MATERIALS Production</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                        Are you ready to start closing more deals? Through our sales and marketing-centric photo and video efforts, we can produce versatile content that pushes new leads into your sales funnel. We also take extra care to train your marketers to sell using newly developed materials.</p>
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
                        <h1 className="brandingServices-text-heading">Social Media Photography</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                        If your creative team struggles with a lack of recent, high-quality photographed content and is often forced to resort to using stock photos and videos to create content, our photography and videography services will empower them with the materials they need to produce their best work.</p>
                    </div>
                </Col>
                <Col md={1}>
                    <div className="brandingServices-icon-parent">
                        <img src={brandGuideMatter6} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={5}>
                    <div className="brandingServices-text-parent2">
                        <h1 className="brandingServices-text-heading">VIDEOGRAPHY FOR REELS & TIKTOK</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                        It’s no surprise that more brands are investing in creating specialized content for video platforms such as Facebook & Instagram Reels, TikTok and YouTube Shorts; these platforms have transitioned to vertical videos as the main incentivized content format, and your business would be wise to use it!</p>
                    </div>
                </Col>
            </Row>
        </Container></div>
    )
}

export default PhotographyAndVideoServices