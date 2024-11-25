import React from 'react';
import "./performcompetetiveanalysis.css";
import CompetitiveAnalysisImg from "../../../assets/Competitive-Analysis-img_1.jpg";
import { Col, Container, Row } from 'react-bootstrap';
import brandguidelines1 from "../../../assets/performcompetitiveAnalysis1.svg"
import brandguidelines2 from "../../../assets/performcompetitiveAnalysis2.svg"
import brandguidelines3 from "../../../assets/performcompetitiveAnalysis3.svg"
import brandguidelines4 from "../../../assets/performcompetitiveAnalysis4.svg"
import brandguidelines5 from "../../../assets/performcompetitiveAnalysis5.svg"
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaSnapchat, FaYoutube, FaTiktok } from 'react-icons/fa';

const PerformCompetetiveAnalysis = () => {
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
            <div className="competetiveanalysis-imageContainer">
                <img src={CompetitiveAnalysisImg} alt="Competitive Analysis" />
            </div>
            <Container>
                <h1 className='agency-heading' style={{ textAlign: "center", marginTop: "40px" }}>How We Perform a Competitive Analysis</h1>
                <div className='heading-underline'></div>
                <p className='agency-description' style={{ color: "#494646" }}>
                    For modern businesses, robust digital initiatives are essential to success. Yet, many fail to take the lead on competitors by failing to capitalize on current trends or using technology to improve business performance.
                </p>
            </Container>
            <Row className="brandingServices-parent">
                <Col md={2}>
                    <div className="brandingServices-icon-parent">
                        <img src={brandguidelines1} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={10}>
                    <div className="brandingServices-text-parent">
                        <h1 className="brandingServices-text-heading">Step 1: Determine Who Your Competitors Are and What They Do</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                            First, we determine who your competitors are by listing businesses that satisfy the same customer needs. Then, we evaluate their value proposition and consider their market share, consumers behavior, pricing strategies, and distribution methods.</p>
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
                        <h1 className="brandingServices-text-heading">Step 2: Research Competitor Tactics</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                            Then, we analyze your competitors’ sales process by taking a closer look at their:</p>
                        <ul className="brandingServices-list">
                            <li>Distribution channels</li>
                            <li>Physical locations (if any)</li>
                            <li>Partner reselling programs</li>
                            <li>Annual revenues</li>
                            <li>Customers’ reasons for not buying</li>
                        </ul>
                        <p className="brandingServices-text">
                            We also use their sales information to determine whether you’re pricing your products and services appropriately. As such, we have to ensure you’re meeting competitive shipping costs, which directly affects cart abandonment rates.</p>
                        <p className="brandingServices-text">
                            After asking how much, we simply ask how? How are your competitors marketing their products? They might be leveraging:</p>
                        <ul className="brandingServices-list">
                            <li>Blogs</li>
                            <li>YouTube channel</li>
                            <li>Whitepapers</li>
                            <li>Visual content</li>
                            <li>Press releases</li>
                            <li>Case studies</li>
                            <li>Media kits</li>
                            <li>Buying guides</li>
                            <li>Online advertising campaigns</li>
                        </ul>
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
                        <h1 className="brandingServices-text-heading">Step 3: Study Technology Stacks</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                            Knowing what kind of technology your competitors are utilizing can put you at a significant advantage. For instance, your competitors may be taking advantage of a CRM that you previously had on your radar. If so, leveraging it can thrust your success forward.</p>
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
                        <h1 className="brandingServices-text-heading">Step 4: Review Their Social Media Platforms</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                            When it comes to digital marketing, social media is the place to be. Thus, evaluating how your competitors are engaging with consumers online can give you an idea of what to do and what not to do.</p>
                        <p className="brandingServices-text" style={{ marginTop: "30px", fontWeight: "600", color: "#000" }}>
                            We analyze the following platforms:</p>
                        <div className="socialMedia-list">
                            {socialMedia.map((platform, index) => (
                                <div className="socialMedia-item" key={index}>
                                    <span className="socialMedia-icon">{platform.icon}</span>
                                    <span className="socialMedia-name">{platform.name}</span>
                                </div>
                            ))}
                        </div>
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
                        <h1 className="brandingServices-text-heading">Step 5: Perform a SWOT Analysis</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                        As we study your competitors, we use the information we obtain to create a SWOT analysis. Throughout the process, we ask:</p>
                        <ul style={{padding:"0 20px"}}>
                            <li style={{color:"#494646" , marginTop: "20px"}}>Where does your competitor have an advantage over your brand?</li>
                            <li style={{color:"#494646" , marginTop: "20px"}}>Where does your competitor have an advantage over your brand?</li>
                            <li style={{color:"#494646" , marginTop: "20px"}}>In which areas can your competitors improve?</li>
                        </ul>
                        <p className="brandingServices-text">
                        By doing this, we can effectively put your business in a more strategic position.</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default PerformCompetetiveAnalysis;
