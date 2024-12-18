import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import client1 from "../../../assets/ourclients1.png"
import client2 from "../../../assets/ourclients2.svg"
import client3 from "../../../assets/ourclients3.svg"
import client4 from "../../../assets/ourclients4.jpg"
import client5 from "../../../assets/ourclients5.svg"
import client6 from "../../../assets/ourclients6.png"
import client7 from "../../../assets/ourclients7.png"
import client8 from "../../../assets/ourclients8.jpg"
import client9 from "../../../assets/ourclients9.svg"
import client10 from "../../../assets/ourclients10.svg"
import client11 from "../../../assets/ourclients11.svg"
import client12 from "../../../assets/ourclients12.png"
import Bounce from '../../../pages/home/bounce/Bounce'
import StillHaveAQuestion from '../../../socialMedia/socialMediaMangement/stillHaveAQuestion/StillHaveAQuestion'

import brandguidelines1 from "../../../assets/googleAna1.svg"
import brandguidelines2 from "../../../assets/googleAna2.svg"
import brandguidelines3 from "../../../assets/googleAna3.svg"
import brandguidelines4 from "../../../assets/googleAna4.svg"
import brandguidelines5 from "../../../assets/googleAna5.svg"
import brandguidelines6 from "../../../assets/googleAna6.svg"
import brandguidelines7 from "../../../assets/googleAna7.svg"
const OurServices = () => {
    const clients = [
        client1, client2, client3, client4, client5, client6,
        client7, client8, client9, client10, client11, client12
    ];
    return (
        <div>
            <div className="brandingAgency-subParent">
                <Row style={{ '--bs-gutter-x': '0px' }}>
                    <Col md={3}>
                        <div className="brandingAgency-subParent-container">
                            <h4>01</h4>
                            <p>STRATEGY</p>
                        </div>
                        <div className="brandingAgency-process-seperater"></div>
                    </Col>
                    <Col md={3}>
                        <div className="brandingAgency-subParent-container">
                            <h4>02</h4>
                            <p>PLANNING</p>
                            <div className="brandingAgency-process-seperater"></div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="brandingAgency-subParent-container">
                            <h4>03</h4>
                            <p>DEVELOPEMENT</p>
                            <div className="brandingAgency-process-seperater"></div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="brandingAgency-subParent-container">
                            <h4>04</h4>
                            <p>LAUNCH</p>
                            <div className="brandingAgency-process-seperater"></div>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="brandingAgency-process-seperater2"></div>

            <Container>
                <h1 className='brandguidelines-heading'>Our Insights and Analytics Services</h1>
                <div className="brandguidelines-seperator"></div>
                <p className='brandguidelines-detail'>
                    Without valuable business insights, your business metrics become meaningless numbers. Fortunately, our data analysts at Igloo can bridge the gaps between big data and your business decisions with the following services.</p>
            </Container>
            <Row className="brandingServices-parent">
                <Col md={2}>
                    <div className="brandingServices-icon-parent">
                        <img src={brandguidelines1} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={10}>
                    <div className="brandingServices-text-parent">
                        <h1 className="brandingServices-text-heading">Google Analytics</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                        One of the best ways to make sense of your numbers is Google Analytics. This tool encompasses all of your online marketing efforts and can help us inform your campaigns and strategies more effectively.</p>
                        <p className="brandingServices-text">
                        Through our Google Analytics consulting services, we can help customize goals, segment your audiences, and create custom monthly reports that reflect campaign performance.</p>
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
                        <h1 className="brandingServices-text-heading">Conversion Rate Optimization</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                        An integral part of your business success is how well your marketing materials encourage consumers to convert. We can determine your website’s usability through conversion rate optimization, audit existing conversion efforts, develop raw heatmap data, and review aesthetic elements.</p>
                        <p className="brandingServices-text">
                        We then determine your website’s strengths and weaknesses and make data-back recommendations. Ultimately, our goal is to increase sales and form completions.</p>
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
            <Row className="brandingServices-parent">
                <Col md={2}>
                    <div className="brandingServices-icon-parent">
                        <img src={brandguidelines6} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={10}>
                    <div className="brandingServices-text-parent">
                        <h1 className="brandingServices-text-heading">Bespoke Industry Solution</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                        We tailor our data-driven solutions to your business and can deliver industry-specific services. We have specialties in providing actionable insight plans for those in retail, telco, health, technology, and other backgrounds.</p>
                    </div>
                </Col>
            </Row>

            <StillHaveAQuestion />
            <Bounce />

            <div className="brandingAgency-clients">    
                <div className='ourclients'>
                    <Container>
                        <Row>
                            {clients.slice(0, 4).map((client, index) => (
                                <Col md={3} key={index}> 
                                    <div className="image-box">
                                        <img src={client} alt={`Client ${index + 1}`} />
                                    </div>
                                </Col>
                            ))}
                        </Row>
                        <Row>
                            {clients.slice(4, 8).map((client, index) => (
                                <Col md={3} key={index}>
                                    <div className="image-box">
                                        <img src={client} alt={`Client ${index + 5}`} />
                                    </div>
                                </Col>
                            ))}
                        </Row>
                        <Row>
                            {clients.slice(8, 12).map((client, index) => (
                                <Col md={3} key={index}>
                                    <div className="image-box">
                                        <img src={client} alt={`Client ${index + 9}`} />
                                    </div>
                                </Col>
                            ))}
                        </Row>
                        <div className="ourclients-btn-parent">
                            <Button className="ourclients-btn">view all clients </Button>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default OurServices