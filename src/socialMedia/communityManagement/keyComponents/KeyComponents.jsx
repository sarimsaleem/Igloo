import React from 'react'
import { Container } from 'react-bootstrap'
import { Col, Row } from 'react-bootstrap'
import brandguidelines1 from "./../../../assets/communityManage1.svg"
import brandguidelines2 from "./../../../assets/communityManage2.svg"
import brandguidelines3 from "./../../../assets/communityManage3.svg"
import brandguidelines4 from "./../../../assets/communityManage4.svg"
const KeyComponents = () => {
    return (
        <div>
            <div className='brandguidelines'>
                <Container>
                    <h1 className='brandguidelines-heading'>Key Components of Community Management</h1>
                    <div className="brandguidelines-seperator"></div>
                    <p className='brandguidelines-detail'>
                        At Igloo, we define your community management strategy according to these five key components.</p>


                </Container>
                <Row className="brandingServices-parent">
                    <Col md={2}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandguidelines1} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={10}>
                        <div className="brandingServices-text-parent">
                            <h1 className="brandingServices-text-heading">Engaging</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                Positive comments make for a strong brand. With that in mind, expect to garner negative comments every once in a while. While an automated response might suffice, human responses do a better job of engaging audiences. Every time you acquire a complaint on one of your channels, it is our responsibility to address them personally and with an active solution.</p>
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
                            <h1 className="brandingServices-text-heading">Monitoring</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                At the crux of community management is social listening. By monitoring upcoming trends, your brand can take part in conversations that matter. We use keyword monitoring tools and Google Alerts to keep track of brand mentions.</p>
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
                            <h1 className="brandingServices-text-heading">Moderating</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                Social media moderation is a combination of engaging and monitoring—we manage your online reputation by keeping an ear out for negative feedback and addressing it promptly. We also hide spam that detracts from the quality of your content and curate your livestream chat channels to ensure you only ever earn goodwill from the people who encounter your community from the outside.</p>
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
                            <h1 className="brandingServices-text-heading">Measuring</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                To get the best sense of how an audience perceives your brand, you have to garner feedback from your community. To do this, we determine where your followers are most active and use social monitoring tools to listen in on important conversations. Then, we use this information to pinpoint areas of improvement.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default KeyComponents