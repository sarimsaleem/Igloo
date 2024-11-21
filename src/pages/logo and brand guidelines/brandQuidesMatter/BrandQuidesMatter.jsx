import React from 'react'
import "./brandquidesmatter.css"
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
                            <h1 className="brandingServices-text-heading">Logo Design</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Your company logo is the “face” of your business. At Igloo, we develop strong logos based on a powerfully defined brand identity. We incorporate carefully crafted visual elements that communicate what your business represents to consumers.
                            </p>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter4} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Logo Design</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Your company logo is the “face” of your business. At Igloo, we develop strong logos based on a powerfully defined brand identity. We incorporate carefully crafted visual elements that communicate what your business represents to consumers.
                            </p>
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
                            <h1 className="brandingServices-text-heading">Logo Design</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Your company logo is the “face” of your business. At Igloo, we develop strong logos based on a powerfully defined brand identity. We incorporate carefully crafted visual elements that communicate what your business represents to consumers.
                            </p>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter2} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Logo Design</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Your company logo is the “face” of your business. At Igloo, we develop strong logos based on a powerfully defined brand identity. We incorporate carefully crafted visual elements that communicate what your business represents to consumers.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BrandQuidesMatter