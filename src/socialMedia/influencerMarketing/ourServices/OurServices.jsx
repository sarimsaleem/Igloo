import React from 'react'
import { Container } from 'react-bootstrap'
import { Col, Row } from 'react-bootstrap'
import brandguidelines1 from "./../../../assets/influencerservices1.svg"
import brandguidelines2 from "./../../../assets/influencerservices2.svg"
import brandguidelines3 from "./../../../assets/influencerservices3.svg"
import brandguidelines4 from "./../../../assets/influencerservices4.svg"
import brandguidelines5 from "./../../../assets/influencerservices5.svg"
import brandguidelines6 from "./../../../assets/influencerservices6.svg"
const OurServices = () => {
    return (
        <div>
            <div className='brandguidelines'>
                <Container>
                    <h1 className='brandguidelines-heading'>Our Influencer Marketing Services</h1>
                    <div className="brandguidelines-seperator"></div>
                    <p className='brandguidelines-detail'>
                    To help you get the most out of influencer marketing, we provide the services below.</p>
                </Container>
                <Row className="brandingServices-parent">
                    <Col md={2}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandguidelines1} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={10}>
                        <div className="brandingServices-text-parent">
                            <h1 className="brandingServices-text-heading">Audience Research</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            We use your existing audience data to determine the best practices and social media platforms for your influencer marketing strategy. We also take a closer look at consumer needs and recurring pain points.</p>
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
                            <h1 className="brandingServices-text-heading">Influencer Pitching and Matching</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Every brand has an ideal influencer. Once we get to know your business, audience, and competitors, we link you up with the influencers we think can best represent your mission and vision.</p>
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
                            <h1 className="brandingServices-text-heading">Content Strategies and Campaign Management</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            After matching you up with your perfect influencer, we create content according to your brand guidelines while allowing influencers to remain authentic. We develop strategies that consider consumer search patterns and wants while remaining true to your brand.</p>
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
                            <h1 className="brandingServices-text-heading">Social Media Advertising</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            To give your influencer marketing campaign an even bigger boost, we provide social media advertising services to increase your reach.</p>
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
                            <h1 className="brandingServices-text-heading">Legal and Compliance</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Sometimes, partnerships can be tricky to navigate. As such, our team advises you on the relevant partnership disclosure regulations and influencer contracts.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="brandingServices-parent">
                    <Col md={2}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandguidelines6} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={10}>
                        <div className="brandingServices-text-parent">
                            <h1 className="brandingServices-text-heading">Results Tracking
                            </h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Before we kick off your campaign, we set measurable goals and KPIs that we can use to identify successes and areas of improvement. We make sure to present these tangible insights in readable and actionable terms.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default OurServices