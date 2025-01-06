import React from 'react'
import "./advantageOfCustomWeb.css"
import brandGuideMatter1 from "../../../assets/web1.svg"
import brandGuideMatter2 from "../../../assets/web2.svg"
import brandGuideMatter3 from "../../../assets/web3.svg"
import brandGuideMatter4 from "../../../assets/web4.svg"
import brandGuideMatter5 from "../../../assets/web5.svg"
import brandGuideMatter6 from "../../../assets/web6.svg"
import { Button, Col, Container, Row } from 'react-bootstrap'

const AdvantageOfCustomWeb = () => {
    return (
        <div>
            <Container>
                <h1 className='brandguidelines-heading'>The Advantages of a Custom Web Application</h1>
                <div className="brandguidelines-seperator"></div>
                <p className='brandguidelines-detail'>
                Web application tools provide an excellent avenue for communicating with customers, collecting information, and securing business data. You can also enjoy the following benefits by incorporating web apps into your business model.</p>
                <Row className="brandGuideMatter-parent">
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter1} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Better Discovery on Search Engines</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">Thoughtfully developed web applications can improve your UAE business visibility on search engines. At Igloo, we fully optimize your website, making it easier for users to find your tools online.</p>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter2} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Always-On Accessibility</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Anyone with a powerful internet connection can access a web application. Not to mention, they function on nearly every browser—from laptops to mobile phones. We ensure that your web applications are responsive and cater to as many people as possible.</p>
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
                            <h1 className="brandingServices-text-heading">HIGHLY SECURE DIGITAL ECOSYSTEMS</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Nowadays, end-users prioritize Dubai based agencies that underscore safe online environments. After all, when a consumer makes a purchase, they entrust your business with sensitive details like their home address and credit card numbers                            </p>
                            <p className="brandingServices-text">
                            We dedicate an experienced team of security professionals to monitor your web applications and store your data in a secure cloud. Our team prepares your systems for natural disasters and potential data breaches, keeping your website online, and more importantly, safe 24/7. </p>
                            <p className="brandingServices-text">
                            While creating web applications that engage users, and that are technically sound from a UX/UI perspective, is important, securing your digital investments is always our top priority. </p>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter4} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Customizable, Scalable, and Easy to Maintain</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            While ready-made web app solutions can save time and money, they are often generic and can’t scale alongside your existing systems. We curate everything according to your specific business goals, giving you the option to decide what kind of framework you want to apply.</p>
                            <p className="brandingServices-text">
                            We apply features and functions that are relevant to your business, shrinking or expanding according to your needs. As market dynamics change, so does the way we approach your web application. We can incorporate new processes and technologies quickly, allowing you to stay ahead of competitors.</p>
                            <p className="brandingServices-text">
                            Not to mention, our web applications don’t rely heavily on end user workstations, making them easy to maintain and repair. We roll out updates and patches remotely to every single device.</p>
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
                            <h1 className="brandingServices-text-heading">Cross-Platform Compatibility</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Compared to traditional installed software, which functions locally, web-based applications are compatible with all internet browsers and operating systems.</p>
                            <p className="brandingServices-text">
                                With that in mind, Google’s algorithm regularly changes, so we monitor your ranking and make adjustments as fluctuations occur. On top of this, we stay on top of SEO trends and optimize your pages as necessary.</p>

                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter6} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Robust Analytics</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            We can easily determine your web application’s success through comprehensive insights and built-in analytics. We then translate these metrics into readable and actionable reports that can help direct future business decisions.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default AdvantageOfCustomWeb