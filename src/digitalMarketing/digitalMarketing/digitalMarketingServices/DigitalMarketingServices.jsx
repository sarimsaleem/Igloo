import React from 'react'
import { Container } from 'react-bootstrap'
import { Col, Row } from 'react-bootstrap'

import brandguidelines1 from "../../../assets/DigitalMarketingServices-1.svg"
import brandguidelines2 from "../../../assets/DigitalMarketingServices-2.svg"
import brandguidelines3 from "../../../assets/DigitalMarketingServices-3.png"
import brandguidelines4 from "../../../assets/DigitalMarketingServices-4.svg"
import brandguidelines5 from "../../../assets/DigitalMarketingServices-5.svg"
const DigitalMarketingServices = () => {
    return (
        <div className='brandguidelines'>
            <Container>
                <h1 className='brandguidelines-heading'>Our Digital Marketing Services
                </h1>
                <div className="brandguidelines-seperator"></div>
                <p className='brandguidelines-detail'>
                    Our digital marketing agency provides end-to-end digital marketing services from strategy to execution, automation, and beyond.</p>
            </Container>
            <Row className="brandingServices-parent">
                <Col md={2}>
                    <div className="brandingServices-icon-parent">
                        <img src={brandguidelines1} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={10}>
                    <div className="brandingServices-text-parent">
                        <h1 className="brandingServices-text-heading">Increase brand trust and authority</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                            Consumers resonate with brands they can trust and look to for advice.</p>
                        <p className="brandingServices-text">
                            Our objective when building brands is to build trust and establish authority in the market. We believe that digital marketing extends far beyond sales outreach. Rather, it is about educating consumers and allowing them to make an informed purchasing decision.</p>
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
                        <h1 className="brandingServices-text-heading">Improve search presence</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                            Everyday billions of searches happen on search engines like Google and Bing. We make sure your customers can find you on the front pages of search results.</p>
                        <p className="brandingServices-text">
                            We have a proven track record helping brands establish a strong search presence on high-value keywords, whether it’s for pay-per-click advertising or organic search (i.e. SEO).</p>
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
                        <h1 className="brandingServices-text-heading">Build a social media following</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                            If you’ve noticed, many of today’s iconic brands have invested heavily on social media and the network of influencers that help drive their social media presence.</p>
                        <p className="brandingServices-text">
                            We’ve been working on social media for close to a decade and we have a strong track record running campaigns and building communities on various social media channels.</p>

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
                        <h1 className="brandingServices-text-heading">Increase website traffic</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                            Your website is potentially your most powerful lead magnet.</p>
                        <p className="brandingServices-text">
                            A well-designed website can engage and re-engage your customers. Moreover, it allows you to design experiences around your products and services.</p>
                        <p className="brandingServices-text">
                            At Igloo, we’ve invested heavily in web design and development so that we can help our clients create engaging customer experiences and smooth customer journeys.</p>
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
                        <h1 className="brandingServices-text-heading">Use data to drive your digital Marketing</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                            We’re no strangers to the role data plays in digital marketing. Without data, brands fly blind, relying only on intuition and experience to fuel their ideas. With data, they can run campaigns based on facts and adjust their initiatives depending on facts.</p>
                        <p className="brandingServices-text">
                            At Igloo, data dictates what we do. We constantly track important customer data points and conduct experiments to refine our strategies.</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default DigitalMarketingServices