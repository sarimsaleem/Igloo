import React from 'react'
import { Container } from 'react-bootstrap'
import { Col, Row } from 'react-bootstrap'
import brandguidelines1 from "./../../../assets/communityServices1.svg"
import brandguidelines2 from "./../../../assets/communityServices2.svg"
import brandguidelines3 from "./../../../assets/communityServices3.svg"
import brandguidelines4 from "./../../../assets/communityServices4.svg"
const CommunityManagementServices = () => {
    return (
        <div>
            <div className='brandguidelines'>
                <Container>
                    <h1 className='brandguidelines-heading'>Our Community Management Services</h1>
                    <div className="brandguidelines-seperator"></div>
                    <p className='brandguidelines-detail'>
                        At Igloo, we divide our community management services into the following stages.</p>
                </Container>
                <Row className="brandingServices-parent">
                    <Col md={2}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandguidelines1} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={10}>
                        <div className="brandingServices-text-parent">
                            <h1 className="brandingServices-text-heading">Acquisition</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                Contrary to popular belief, community management plays a significant role in your acquisition model. As early as the brand awareness stage, you’ll want to make sure consumers actually convert.During this stage, we make sure to address pressing customer queries that reflect every portion of your business funnel.</p>
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
                            <h1 className="brandingServices-text-heading">Crisis Management</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                For any brand journey, crisis management is inevitable. Once an issue arises, it can become challenging to overcome—that’s where we step in. Through team coordination and leadership skills, we address complaints as efficiently as possible while monitoring brand sentiment.</p>
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
                            <h1 className="brandingServices-text-heading">Customer Care</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                A critical part of community management is consumer-brand interaction. By listening to and monitoring consumer behaviors, we can use this information to improve relationships. We achieve top care by keeping up with ever-changing consumer expectations and monitoring every stage of the buyer journey.</p>
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
                            <h1 className="brandingServices-text-heading">Retention</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                Acquiring customers is one thing—retaining them is another. To keep your audience engaged, we make sure you aren’t being repetitive through trend monitoring. We also take your most successful pieces of content and use them for remarketing purposes.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default CommunityManagementServices