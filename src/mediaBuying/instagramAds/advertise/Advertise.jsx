import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import brandguidelines5 from "../../../assets/googleAna1.svg"
import brandguidelines7 from "../../../assets/googleAna2.svg"
import brandguidelines3 from "../../../assets/googleAna3.svg"
import brandguidelines4 from "../../../assets/googleAna4.svg"

const Advertise = () => {
    return (
        <div>
            <Row className="brandingServices-parent">
                <Col md={2}>
                    <div className="brandingServices-icon-parent">
                        <img src={brandguidelines3} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={10}>
                    <div className="brandingServices-text-parent">
                        <h1 className="brandingServices-text-heading">Customer Experience Optimization</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                            A positive customer experience is what gets consumers to convert. We use business data to make recommendations tailored to your customer journey, reviewing touch points across all channels.</p>
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
                        <h1 className="brandingServices-text-heading">Social Media Management</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                            If you regularly run social media campaigns, measuring their success is imperative to driving sales and returns. We ensure that your campaigns are reaching the right audiences and determine the most appropriate ad spend to maximize returns.</p>
                    </div>
                </Col>
            </Row>
            <Row className="brandingServices-parent">
                <Col md={2}>
                    <div className="brandingServices-icon-parent">
                        <img src={brandguidelines7} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={10}>
                    <div className="brandingServices-text-parent">
                        <h1 className="brandingServices-text-heading">Pay Per Click Management</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                            If running a PPC campaign for your business, we can oversee performance and provide follow-up reports regarding any observations or recommendations.</p>
                        <p className="brandingServices-text">
                            With our PPC management services, you can make more deliberate choices regarding keyword selection, ad remarketing, ad copy, and visual elements. Throughout the duration of your campaign, we will provide a renewed and tailored strategy that informs your custom ad copy, bid optimization strategy, and keywords.</p>
                    </div>
                </Col>
            </Row>
            <Row className="brandingServices-parent">
                <Col md={2}>
                    <div className="brandingServices-icon-parent">
                        <img src={brandguidelines5} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={10}>
                    <div className="brandingServices-text-parent">
                        <h1 className="brandingServices-text-heading">Prescriptive and Predictive Analytics</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                            For your business to evolve, you should have a general idea of what to expect as the industry changes. We perform prescriptive and predictive analytics tracking to make decisions based on past, proven trends and drive the future results you want.</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Advertise