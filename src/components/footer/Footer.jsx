import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import { Container } from 'react-bootstrap';
import footerimg1 from "/public/assets/images/1.svg"
import footerimg2 from "/public/assets/images/2.svg"
import footerimg3 from "/public/assets/images/3.svg"
import footerimg4 from "/public/assets/images/4.svg"
import Logo from '/public/assets/images/logo.png';
import "./footer.css"
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const Footer = () => {
    const navigate = useNavigate()

    return (
        <>
            <Layout.Footer className="footer" style={{ backgroundColor: 'var(--white)', color: 'var(--sub-text)', padding: '40px 0 0 0' }}>
                <Container>
                    <Row gutter={[16, 16]} style={{ paddingBottom: "30px" }}>
                        <Col xs={24} sm={12} md={12} lg={7}>
                            <Title level={4} style={{ color: 'var(--black)' }}>CERTIFICATIONS</Title>
                            <Row gutter={[16, 16]}>
                                <Col xs={12} sm={12} md={12}>
                                    <img src={footerimg4} className='footerImg' alt="Logo" />
                                </Col>
                                <Col xs={12} sm={12} md={12}>
                                    <img src={footerimg1} className='footerImg' alt="Logo" />
                                </Col>
                                <Col xs={12} sm={12} md={12}>
                                    <img src={footerimg2} className='footerImg' alt="Logo" />
                                </Col>
                                <Col xs={12} sm={12} md={12}>
                                    <img src={footerimg3} className='footerImg' alt="Logo" />
                                </Col>
                            </Row>
                        </Col>

                        <Col xs={24} sm={12} md={12} lg={5}>
                            <Title level={4} style={{ color: 'var(--black)' }}>SPECIALTIES</Title>
                            <Text onClick={() => navigate("/education-marketing-agency")} style={{ display: 'block', color: 'var(--sub-text)', marginBlock: "3px", cursor: "pointer" }}>Education</Text>
                            <Text onClick={() => navigate("/ecommerce-marketing-agency")} style={{ display: 'block', color: 'var(--sub-text)', marginBlock: "3px", cursor: "pointer" }}>E-commerce</Text>
                            <Text onClick={() => navigate("/healthcare-marketing-agency")} style={{ display: 'block', color: 'var(--sub-text)', marginBlock: "3px", cursor: "pointer" }}>Healthcare</Text>
                        </Col>

                        {/* Services Section */}
                        <Col xs={24} sm={12} md={12} lg={6}>
                            <Title level={4} style={{ color: 'var(--black)' }}>SERVICES</Title>
                            <Text onClick={() => navigate("/conversion-rate-optimization")} style={{ display: 'block', color: 'var(--sub-text)', marginBlock: "3px", cursor: "pointer" }}>CRO</Text>
                            <Text onClick={() => navigate("/ppc-management-agency")} style={{ display: 'block', color: 'var(--sub-text)', marginBlock: "3px", cursor: "pointer" }}>PPC</Text>
                            <Text onClick={() => navigate("/seo-agency-in-dubai")} style={{ display: 'block', color: 'var(--sub-text)', marginBlock: "3px", cursor: "pointer" }}>SEO</Text>
                            <Text onClick={() => navigate("/website-optimization")} style={{ display: 'block', color: 'var(--sub-text)', marginBlock: "3px", cursor: "pointer" }}>Web Optimization</Text>
                            <Text onClick={() => navigate("/digital-marketing-agency-in-dubai")} style={{ display: 'block', color: 'var(--sub-text)', marginBlock: "3px", cursor: "pointer" }}>Digital Marketing</Text>
                            <Text onClick={() => navigate("/web-design-agency-in-dubai")} style={{ display: 'block', color: 'var(--sub-text)', marginBlock: "3px", cursor: "pointer" }}>WEB/APP</Text>
                            <Text onClick={() => navigate("/branding")} style={{ display: 'block', color: 'var(--sub-text)', marginBlock: "3px", cursor: "pointer" }}>BRANDING</Text>
                            <Text onClick={() => navigate("/lead-generation-agency")} style={{ display: 'block', color: 'var(--sub-text)', marginBlock: "3px", cursor: "pointer" }}>Lead Generation</Text>
                            <Text onClick={() => navigate("/insights-and-analytics")} style={{ display: 'block', color: 'var(--sub-text)', marginBlock: "3px", cursor: "pointer" }}>Insights and Analytics</Text>
                        </Col>


                        <Col xs={24} sm={12} md={12} lg={6}>
                            <Title level={4} style={{ color: 'var(--black)' }}>OUR OFFICES</Title>
                            <Title level={5} style={{ color: 'var(--black)', marginBlock: "5px" }}>DUBAI</Title>
                            <Text style={{ display: 'block', color: 'var(--sub-text)' }}>Fortune Executive Tower, Suite 1204, JLT, DUBAI 336101</Text>
                            <Text><a href="tel:+97144310831" style={{ display: 'block', color: 'var(--sub-text)', marginBlock: "3px" }}> T: +97144310831</a></Text>
                            <Text><a href="mailto:info@weareigloo.com" style={{ display: 'block', color: 'var(--sub-text)', marginBlock: "3px" }}>  E: info@weareigloo.com</a></Text>

                            <Title level={5} style={{ color: 'var(--black)' }}>Miami</Title>
                            <Text style={{ display: 'block', color: 'var(--sub-text)' }}>11900 Biscayne Blvd, Suite 105, Miami, FL 33181</Text>
                            <Text><a href="tel:+13054973267" style={{ display: 'block', color: 'var(--sub-text)', marginBlock: "3px" }}> T: +1 (305) 497-3267</a></Text>
                            <Text><a href="mailto:info@weareigloo.com" style={{ display: 'block', color: 'var(--sub-text)', marginBlock: "3px" }}>  E: info@weareigloo.com</a></Text>


                        </Col>
                    </Row>
                    <hr style={{ margin: "0" }} />
                    <div className="footer-container">
                        <div className="footer-links">
                            <p onClick={() => navigate('/about-us')}>About</p>
                            <p onClick={() => navigate('/careers')}>Careers</p>
                            <p onClick={() => navigate('/our-portfolio')}>Portfolio</p>
                            <p onClick={() => navigate('/clients')}>Clients</p>
                            <p onClick={() => navigate('/blog')}>Blog</p>
                            <p onClick={() => navigate('/masters-of-marketing-podcast')}>Podcast</p>
                            <p onClick={() => navigate('/contact')}>Contact</p>
                        </div>
                        <div className="footer-icons">
                            <a href="https://www.facebook.com/weareigloo" className="icon facebook"><FacebookOutlined /></a>
                            <a href="https://www.instagram.com/igloome/" className="icon instagram"><InstagramOutlined /></a>
                            <a href="https://www.linkedin.com/company/igloo-marketing-solutions/" className="icon linkedin"><LinkedinOutlined /></a>
                        </div>
                    </div>

                </Container>
            </Layout.Footer>
            <div className="footer-content" style={{ background: "#252525", }}  >
                <Container >
                    <div className="sub-footer-content">
                        <div className="footer-text">
                            <Text style={{ color: 'var(--white)' }}>
                                © {new Date().getFullYear()} We Are Igloo. All Rights Reserved.
                            </Text>
                        </div>
                        <div className="footer-logo">
                            <img src={Logo} alt="" />
                        </div>

                    </div>
                </Container>
            </div>
        </>
    );
}

export default Footer;
