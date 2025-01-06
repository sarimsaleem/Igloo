import React from 'react'
import CompetitiveAnalysisImg from "../../../assets/Competitive-Analysis-img_1.jpg";
import { Col, Container, Row } from 'react-bootstrap';
import brandguidelines1 from "../../../assets/performcompetitiveAnalysis1.svg"
import brandguidelines2 from "../../../assets/performcompetitiveAnalysis2.svg"
import brandguidelines3 from "../../../assets/performcompetitiveAnalysis3.svg"
import brandguidelines4 from "../../../assets/performcompetitiveAnalysis4.svg"
import brandguidelines5 from "../../../assets/performcompetitiveAnalysis5.svg"
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaSnapchat, FaYoutube, FaTiktok } from 'react-icons/fa';

const ApplicationServices = () => {
    const socialMedia = [
        { name: "Facebook", icon: <FaFacebook /> },
        { name: "Instagram", icon: <FaInstagram /> },
        { name: "Twitter", icon: <FaTwitter /> },
        { name: "LinkedIn", icon: <FaLinkedin /> },
        { name: "Snapchat", icon: <FaSnapchat /> },
        { name: "YouTube", icon: <FaYoutube /> },
        { name: "TikTok", icon: <FaTiktok /> },
    ];
    return (
        <div>
            <Container>
                <h1 className='agency-heading' style={{ textAlign: "center", marginTop: "40px" }}>Our Web Application Services</h1>
                <div className='heading-underline'></div>
                <p className='agency-description' style={{ color: "#494646" }}>
                If you want to provide users with interactivity but don’t have the time or resources to dedicate to a fully-developed mobile application, consider our web app services below.</p>
            </Container>
            <Row className="brandingServices-parent">
                <Col md={2}>
                    <div className="brandingServices-icon-parent">
                        <img src={brandguidelines1} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={10}>
                    <div className="brandingServices-text-parent">
                        <h1 className="brandingServices-text-heading">Client-Side Web Applications</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                        When developing client-side web applications, we focus on user interfaces, delivering high-performance levels that provide a seamless user experience. These web apps prioritize speed and responsiveness.</p>
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
                        <h1 className="brandingServices-text-heading">Single-Page Applications</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">Compared to our traditional multi-page applications, our single-page web apps deploy infinite scroll mechanisms to display content. We incorporate dynamic routing that doesn’t require the entire page to reload when fetching new data or executing an action.</p>
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
                        <h1 className="brandingServices-text-heading">Server-Side Applications</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                        We deploy server-side applications as part of our back-end solutions, focusing on the background processes that occur within your web app. These applications might involve servers, databases, and application programming interfaces (API).</p>
                        <p className="brandingServices-text">
                        We recommend server-side applications to businesses deploying static content, as these apps can take more time to load and buffer.</p>
                        <p className="brandingServices-text">
                        However, compared to front-end applications, server-sides provide higher security and browser compatibility.</p>
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
                        <h1 className="brandingServices-text-heading">Front-End Services</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                        Depending on your needs, we provide the following frameworks for front-end solutions.</p>
                        <ul style={{ padding: "0 20px" }}>
                            <li style={{ color: "#494646", marginTop: "20px" }}> <b> Javascript</b>: We use Javascript to develop dynamic web applications with basic functionalities like scrolling and clicking. This allows us to quickly code for client-side behavior.
                            </li>
                            <li style={{ color: "#494646", marginTop: "20px" }}><b>HTML:</b> When we structure webpage content, we deploy HTML (HyperText Markup Language) to direct displays.
                            </li>
                            <li style={{ color: "#494646", marginTop: "20px" }}><b>CSS:</b> CSS (Cascading Style Scripts) allow us to dictate integral characteristics (such as colors, layouts, and fonts) on your web application.
                            </li>
                        </ul>
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
                        <h1 className="brandingServices-text-heading">Back-End Services</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                        Compared to front-end deployments, our back-end services involve more technologies, some of which include the following.</p>
                        <ul style={{ padding: "0 20px" }}>
                            <li style={{ color: "#494646", marginTop: "20px" }}><b>Programming languages:</b> We allow databases to send and receive data, manage users connections, and monitor security authentications through Java, PHP, Ruby, and Python. Depending on your specific needs, we deploy the most appropriate programming language to simplify development.
                            </li>
                            <li style={{ color: "#494646", marginTop: "20px" }}><b>Databases:</b> Our go-to query language for securing sensitive data is Structured Query Language (SQL). SQL is highly scalable and can accommodate additional functionalities as required.
                            </li>
                            <li style={{ color: "#494646", marginTop: "20px" }}><b>Servers:</b> We deploy servers to respond to network requests and retrieve information. Our servers include Apache, Internet Information Services (IIS), and Nginx.
                            </li>
                            <li style={{ color: "#494646", marginTop: "20px" }}><b>API:</b> To facilitate connections between multiple servers, we use APIs that don’t require domain-specific language.

                            </li>
                        </ul>
                        <p className="brandingServices-text">
                            By doing this, we can effectively put your business in a more strategic position.</p>
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
                        <h1 className="brandingServices-text-heading">Planning, Prototyping, Validation, and Testing</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                        As with any well-defined procedure, we take ample time to understand your business goals and plan a workflow for prototyping. Once we establish what you want to create, we develop a minimum viable product (MVP) and present it to potential users for feedback.</p>
                        <p className="brandingServices-text">
                        Once we validate your web app, we determine which front-end and back-end frameworks will best fulfill the project requirements. After the development stage, we administer multiple tests to identify weak points.</p>
                        <p className="brandingServices-text">
                        Finally, we host and launch your web application.</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
}


export default ApplicationServices