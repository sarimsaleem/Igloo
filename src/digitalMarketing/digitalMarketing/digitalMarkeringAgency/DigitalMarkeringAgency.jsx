import React from 'react'
import "./digitalarkeringagency.css"
import { Button, Col, Container, Row } from 'react-bootstrap'
import brandGuideMatter1 from "../../../assets/designedpackaging-1.svg"
import brandGuideMatter2 from "../../../assets/designedpackaging-2.svg"
import brandGuideMatter3 from "../../../assets/designedpackaging-3.svg"
import brandGuideMatter4 from "../../../assets/designedpackaging-4.svg"
const DigitalMarkeringAgency = () => {
    return (
        <>
            <div className='marketingagency'>
                <h1 className='agency-heading'>Digital Marketing Agency</h1>
                <div className='heading-underline'></div>
                <p className='agency-description'>
                    Not every company can run its own marketing campaigns; and not every company should. We live in a world where work is hyper-specialized and fast-paced that it no longer makes sense to manage everything in-house.</p>
                <p className='agency-description'>
                    At Igloo, we focus on what we do best so that our clients can focus on what they do best.</p>
                <p className='agency-description'>
                    We are an award-winning digital marketing agency based in Dubai with over a decade of experience running successful digital marketing campaigns. Our services cover digital marketing end-to-end from strategy to execution to automation.</p>
                <div className="logoAndBrand-btn-parent">
                    <Button className="logoAndBrand-btn" >Why Hire a Digital Marketing Agency?
                    </Button>
                </div>

            </div>

            <Container>
                <h1 className='agency-heading'>Digital Marketing Agency</h1>
                <div className='heading-underline'></div>
                <p className='agency-description'>
                    Not all businesses have the time, resources, or expertise to manage their own digital marketing campaigns. However, all businesses need to market their products and services. Hiring a digital marketing agency will make sense for you if:</p>
                <Row>
                    <Col md={4}>
                        <div className="marketingagency-container">
                            <h4 className='marketingagency-heading-h4'>01</h4>
                            <p className='marketingagency-detail'>You want to focus your time and resources on your core competencies.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="marketingagency-container">
                            <h4 className='marketingagency-heading-h4'>02</h4>
                            <p className='marketingagency-detail'>You want to run digital campaigns without having to manage day-to-day operations.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="marketingagency-container">
                            <h4 className='marketingagency-heading-h4'>03</h4>
                            <p className='marketingagency-detail'>You want to delegate your marketing efforts to an experienced digital marketing agency.</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className="brandGuideMatter-parent">
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter1} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Develop Lean Strategies with Fewer Objectives</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">Successful digital marketing is about knowing when and where (and when NOT and where NOT) to spend your advertising dollars.</p>
                            <p className="brandingServices-text">As a data-driven digital agency, we take a less-is-more approach to digital strategy. We believe that the things we decide to do are equally as important as the things we decide not to do. There are dozens of marketing channels, strategies, and tools out there, but it’s important to focus fire on those that bring dependable results and ROI.</p>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter2} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Close Resource Gaps</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                Every client (regardless of size or budget) operates with finite resources.
                            </p>
                            <p className="brandingServices-text">
                                An experienced digital agency can get the most out of those resources and fill in where there are gaps. Whether you’re looking for an agency to provide a full suite of marketing services or simply one to complement your in-house marketing team, it’s important that they are able to maximize your resources, complement your strengths, and cover areas where there are gaps.
                            </p>
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
                            <h1 className="brandingServices-text-heading">Keep up with Marketing Trends</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                Managing your digital marketing is one thing. Keeping abreast with the latest marketing trends is quite another.
                            </p>
                            <p className="brandingServices-text">
                                Digital marketing strategies that work well today may no longer work tomorrow. Even consumer behavior and marketing trends evolve over time. Remember the ice bucket challenge?
                            </p>
                            <p className="brandingServices-text">
                                As a full-time digital marketing agency in Dubai, we keep an eye on the latest developments in our space so that you don’t have to. Instead, you can focus your time on innovations and trends in your own industry.
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
                            <h1 className="brandingServices-text-heading">Gain Access to the Right Tools</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                Modern digital marketing requires a high level of technological expertise. Over the years, we’ve seen various tools become part and parcel of everyday digital marketing work, whether it’s CRM, SEO, email marketing, web analytics, and many more.</p>
                            <p className="brandingServices-text">
                                While many of these tools are readily accessible and affordable, onboarding a suite of tools and managing them takes time and effort that could be better spent on your core business.
                            </p>
                            <p className="brandingServices-text">
                                A competent digital marketing agency will already have best-in-class tools handy. Plus, they’ll take care of the day-to-day management of each tool.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DigitalMarkeringAgency