import React from 'react'
import brandGuideMatter1 from "../../../assets/leadGen1.svg"
import brandGuideMatter2 from "../../../assets/leadGen2.svg"
import brandGuideMatter3 from "../../../assets/leadGen3.svg"
import brandGuideMatter4 from "../../../assets/leadGen4.svg"
import brandGuideMatter5 from "../../../assets/leadGen5.svg"
import brandGuideMatter6 from "../../../assets/leadGen6.svg"
import { Button, Col, Container, Row } from 'react-bootstrap'

const LeadGenerationBusiness = () => {
    return (
        <div>
            <Container>
                <h1 className='brandguidelines-heading'>The Importance of Lead Generation in Business</h1>
                <div className="brandguidelines-seperator"></div>
                <p className='brandguidelines-detail'>
                High-quality leads are what keep your business sustainable. However, lead generation can benefit your business in many ways you might not expect.</p>
                <Row className="brandGuideMatter-parent">
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter1} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Market Expansion and Growth</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">While you may already have a collection of targeted customers in your back pocket, you may be missing opportunities to expand into other sectors.</p>
                            <p className="brandingServices-text">Lead generation enables you to learn more about your Dubai or Miami based prospects, including their pain points, immediate needs, and purchasing habits. With this information, you can start the right conversations through the right channels. </p>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter2} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Enhanced Lead Quality</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Leads are only as valuable as their ability to convert. If you’re funneling thousands of leads but only converting several hundred, it may be time to revisit your strategy.</p>
                            <p className="brandingServices-text">
                            Lead generation can tell you when your efforts need to become more targeted. If you’re garnering high traffic but not converting, you’ll know how to skew copy and visuals better to suit your target audience.</p>
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
                            <h1 className="brandingServices-text-heading">Improved Cash Flow</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            With the right messaging and a clear-cut lead generation strategy, you can maximize returns and profits.</p>
                            <p className="brandingServices-text">
                            The better you capture the attention of qualified leads, the easier it’ll be for you to tap into new circles and generate lucrative business opportunities.</p>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter4} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Visibility and Awareness</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            If you’re a startup struggling to gain traction or an established business becoming stagnant, focusing on lead generation can significantly boost your brand visibility and awareness.</p>
                            <p className="brandingServices-text">
                            Garner leads by focusing on where your target customers spend the most time, whether it be on social media channels or specific forums.</p>
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
                            <h1 className="brandingServices-text-heading">Valuable Insights</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Lead generation isn’t just about guaranteeing sales and increasing profits—it’s also an effective way to gather information about your customers. Depending on where most of your leads come from, you can learn more about their interests, where they prefer to shop, and the factors that keep them from converting.</p>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter6} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">EMPOWERED SALES TEAMS </h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Cold calling and email outreach have notoriously low success rates, so if your sales team doesn’t have a steady stream of sufficiently qualified leads, it’s going to be difficult for them to achieve their sales targets. Focusing on lead generation allows you to provide them with the right client, making their job much easier. </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default LeadGenerationBusiness