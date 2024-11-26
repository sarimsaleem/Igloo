import React from 'react'
import "./comprehenciveSocialMedia.css"
import { Button, Col, Container, Row } from 'react-bootstrap'
const ComprehenciveSocialMedia = () => {
    return (
        <div>
            <Container>
                <h1 className='agency-heading' style={{ marginTop: "40px" }}>Comprehensive Social Media Agency Services</h1>
                <div className='heading-underline'></div>
                <p className='agency-description'>
                    At Igloo, we understand that a strong social media presence is crucial for business success. Our comprehensive suite of services is designed to cover every aspect of your social media needs.</p>
                <Row className="brandGuideMatter-parent">
                    <Col md={1}></Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Social Media Strategies</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">We develop customized social media strategies that align with your business goals. Whether you aim to increase brand awareness, drive traffic, or boost sales, our strategies are designed to deliver results.</p>
                        </div>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Content Creation</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Our creative team excels in producing high-quality, engaging content tailored to your brand. From captivating posts to compelling stories, we ensure your content stands out in the crowded digital landscape.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="brandGuideMatter-parent">
                    <Col md={1}></Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">KPI Setting</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">Setting clear Key Performance Indicators (KPIs) is essential to measure social media success. We help you define specific, measurable, achievable, relevant, and time-bound (SMART) KPIs aligned with business objectives.</p>
                        </div>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Photography and Videography</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Visual content is king in the digital age. Our skilled photographers and videographers create stunning visuals that capture your brand’s essence and deeply engage your audience.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="brandGuideMatter-parent">
                    <Col md={1}></Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Posting and Community Management</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">Consistency is key to maintaining an active social media presence. We handle your postings, ensuring timely and relevant content. Our community management team engages with followers, fostering a loyal, interactive community.</p>
                        </div>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Reporting</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Accurate reporting is vital to understanding our social media impact. We use top reporting tools to create detailed custom reports tracking your KPIs and performance. These insights enable data-driven decisions to optimize your strategy.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ComprehenciveSocialMedia