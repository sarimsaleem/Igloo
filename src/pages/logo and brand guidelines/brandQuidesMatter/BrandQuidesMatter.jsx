import React from 'react'
import "./brandGuidesMatter.css"
import { Col, Container, Row } from 'react-bootstrap'
import brandGuideMatter1 from "./../../../assets/brandGuideMatter-3.svg"
import brandGuideMatter2 from "./../../../assets/brandGuideMatter-4.svg"
import brandGuideMatter3 from "./../../../assets/brandGuideMatter-11.svg"
import brandGuideMatter4 from "./../../../assets/brandGuideMatter-12.svg"

const BrandQuidesMatter = () => {
    return (
        <div className='brandGuideMatter'>
            <Container>
            <div className="brandGuideMatter-text-parent">
                <h1 className='brandGuideMatter-heading'>Why Brand Guides Matter</h1>
                <div className="brandGuideMatter-seperator"></div>
                <p className='brandGuideMatter-detail'>Did you know that cohesion and consistency play a significant role in developing brand trust? If you aren’t already convinced that our branding services are relevant to your business, here are a few reasons why our help is essential.z</p>
            </div>
                <Row className="brandGuideMatter-parent">
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter3} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Strong Brand Identity</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Strong brand identities rely on consistency. It clarifies what your business represents through visual elements like color palettes and your tone of voice. At Igloo, we have ample experience developing brand personas for startups and businesses looking to revamp.</p>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter4} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Customer Loyalty</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            High-quality products and services are not enough to keep customers happy—most of them also seek positive customer experiences. You can expect repeat business and steadier profits by creating guidelines that help retain these experiences.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="brandGuideMatter-parent">
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter1} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Increased Revenue</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Brand consistency has the potential to increase revenue by 23%. By outsourcing a singular team that works with a deep knowledge of your brand, you can significantly improve your bottom line.</p>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter2} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Streamlined Processes</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Brand guidelines aren’t just useful for consumers—they’re also helpful for your native design team as they carry out your communications and marketing plans.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BrandQuidesMatter