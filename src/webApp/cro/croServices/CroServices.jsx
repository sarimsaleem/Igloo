import React from 'react'
import brandGuideMatter1 from "../../../assets/web1.svg"
import brandGuideMatter2 from "../../../assets/web2.svg"
import brandGuideMatter3 from "../../../assets/web3.svg"
import brandGuideMatter4 from "../../../assets/web4.svg"
import brandGuideMatter5 from "../../../assets/web5.svg"
import brandGuideMatter6 from "../../../assets/web6.svg"
import { Button, Col, Container, Row } from 'react-bootstrap'
const CroServices = () => {
    return (
        <div>
            <Container>
                <h1 className='brandguidelines-heading'>Why You Should Invest in CRO ServicesWhy You Should Invest in CRO Services</h1>
                <div className="brandguidelines-seperator"></div>
                <p className='brandguidelines-detail'>
                    Most marketers associate the benefits of CRO with profits and leads. However, optimizing your conversions can also provide the following underrated advantages.</p>
                <Row className="brandGuideMatter-parent">
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter1} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">
                                Get a Better Understanding of Your Target Audience</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">Knowledge is power, and the more deeply you understand your target audience, the better you can address their pain points. We identify points of friction keeping customers from journeying further into your sales funnel through conversion optimization.</p>
                            <p className="brandingServices-text">We also develop more specific buyer personas to understand better who you’re marketing to.</p>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter2} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Make Data-Based Decisions</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                When making changes to your website, you can’t just “listen to your gut.” Instead, you’ll want to base these adjustments on accurate and proven data.</p>
                            <p className="brandingServices-text">
                                As part of our CRO strategy, we A/B test your materials and evaluate the results before changing your website.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="brandGuideMatter-parent">
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter3} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">
                                Make More Money Over Time</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                Perhaps the most significant advantage of conversion optimization is increased profits over time. While it may not boost your revenue immediately, CRO provides incremental yet lasting increases to your earnings.
                            </p>
                            <p className="brandingServices-text">
                                We can make subtle changes that increase your leads and conversions by identifying areas of opportunity. These changes might be as simple as shuffling page layouts or re-wording your call-to-action (CTA).                            </p>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter4} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Outrank Competition</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                One of the less-observed and underrated benefits of CRO is how it enhances your SEO strategy. By improving elements that may not resonate with site visitors, you increase your chances of garnering site visits and lower your bounce rate.</p>
                            <p className="brandingServices-text">
                                When Google catches wind of site improvements, it can increase your ranking and overall online popularity.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="brandGuideMatter-parent">
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter3} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={11}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Increase Customer Lifetime Value</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            When you get customers to convert, the chances of encouraging them to repurchase are significantly higher. Constantly re-optimizing your website while keeping elements recognizable makes it more familiar to return visitors, who won’t hesitate to purchase again.</p>
                            <p className="brandingServices-text">
                            As such, CRO increases customer lifetime value, which is a cheaper investment than trying to engage new leads.</p>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default CroServices