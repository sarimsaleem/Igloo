import React from 'react'
import "./brandingservices.css"
import { Col, Container, Row } from 'react-bootstrap'
import brandingServices1 from "./../../../assets/brandingServices1.svg"
import brandingServices2 from "./../../../assets/brandingServices2.svg"
import brandingServices3 from "./../../../assets/brandingServices3.svg"
import brandingServices4 from "./../../../assets/brandingServices4.svg"
import brandingServices5 from "./../../../assets/brandingServices5.svg"
import brandingServices6 from "./../../../assets/brandingServices6.svg"

const BrandingServices = () => {
    return (
        <div className='brandingServices'>
            <div className="brandingServices-text-container">
                <h1 className='brandingServices-heading'>Our Branding Services</h1>
                <div className="branding-seperator"></div>
                <p className='brandingServices-detail'>We offer the following services to develop and fine-tune your company image.</p>
            </div>
            {/* <Container> */}
                <Row className="brandingServices-parent">
                    <Col md={2}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandingServices1} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={10}>
                        <div className="brandingServices-text-parent">
                            <h1 className="brandingServices-text-heading">Logo Design</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Your company logo is the “face” of your business. At Igloo, we develop strong logos based on a powerfully defined brand identity. We incorporate carefully crafted visual elements that communicate what your business represents to consumers.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="brandingServices-parent">
                    <Col md={2}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandingServices2} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={10}>
                        <div className="brandingServices-text-parent">
                            <h1 className="brandingServices-text-heading">Brand Messaging</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Strong brand messaging should clearly communicate what solutions you can provide potential customers and how you stand out amongst competitors. We consider everything, including your industry, target audience, and competitors, to develop value propositions, key differentiators, brand principles, and brand equity.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="brandingServices-parent">
                    <Col md={2}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandingServices3} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={10}>
                        <div className="brandingServices-text-parent">
                            <h1 className="brandingServices-text-heading">Brand Voice</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Every brand presents itself in a particular way. Some are playful, while others are professional or educational. We sit down with your marketing team to discuss specifics like the tone of voice and syntax that can help us define how you speak.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="brandingServices-parent">
                    <Col md={2}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandingServices4} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={10}>
                        <div className="brandingServices-text-parent">
                            <h1 className="brandingServices-text-heading">Brand Positioning</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            While essentially a subset of brand messaging, brand positioning more deeply focuses on setting your business apart from competitors. Not only do we want to develop a strong identity that you can nurture over time, but we also want to identify differentiators that encourage potential customers to choose you.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="brandingServices-parent">
                    <Col md={2}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandingServices5} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={10}>
                        <div className="brandingServices-text-parent">
                            <h1 className="brandingServices-text-heading">Brand Bibles and Guidelines</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Once we’ve clearly defined your brand identity, it’s time to develop brand guidelines that you can apply across multiple channels. Remember, the key to a successful brand is consistency. As such, we lay out your brand voice, messaging, and design principles in a detailed report that you can use to train staff members.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="brandingServices-parent">
                    <Col md={2}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandingServices6} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={10}>
                        <div className="brandingServices-text-parent">
                            <h1 className="brandingServices-text-heading">Social Media</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Nowadays, you’ll be hard-pressed to discover a UAE brand without a social media presence. If you run accounts on multiple channels, you want to ensure that your branding stays consistent.
                            </p>
                            <p className="brandingServices-text">At Igloo, we understand what works on various social media networks and how you can tap into audiences according to platform demographics.</p>
                        </div>
                    </Col>
                </Row>
            {/* </Container> */}
        </div>
    )
}

export default BrandingServices