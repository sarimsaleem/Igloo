import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import { Container } from 'react-bootstrap';
import footerimg1 from "../../assets/1.svg"
import footerimg2 from "../../assets/2.svg"
import footerimg3 from "../../assets/3.svg"
import footerimg4 from "../../assets/4.svg"
import Logo from '../../assets/Logo.png';
import "./footer.css"
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Footer = () => {
    return (
        <>
            <Layout.Footer className="footer" style={{ backgroundColor: '#fff', color: '#626262', padding: '40px 0 0 0' }}>
                <Container>
                    <Row gutter={[16, 16]} style={{ paddingBottom: "30px" }}>
                        <Col xs={24} sm={12} md={12} lg={7}>
                            <Title level={4} style={{ color: '#000' }}>CERTIFICATIONS</Title>
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

                        {/* Certifications & Specialties Section */}
                        <Col xs={24} sm={12} md={12} lg={5}>
                            <Title level={4} style={{ color: '#000' }}>SPECIALTIES</Title>
                            <Text style={{ display: 'block', color: '#626262' }}>Education</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>E-commerce</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>Healthcare</Text>
                        </Col>

                        {/* Services Section */}
                        <Col xs={24} sm={12} md={12} lg={6}>
                            <Title level={4} style={{ color: '#000' }}>SERVICES</Title>
                            <Text style={{ display: 'block', color: '#626262' }}>CRO</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>PPC</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>SEO</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>SMM</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>Digital Marketing</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>WEB/APP</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>BRANDING</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>Lead Generation</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>Insights and Analytics</Text>
                        </Col>

                        {/* Offices Section */}
                        <Col xs={24} sm={12} md={12} lg={6}>
                            <Title level={4} style={{ color: '#000' }}>OUR OFFICES</Title>
                            <Title level={5} style={{ color: '#000', marginBlock: "5px" }}>DUBAI</Title>
                            <Text style={{ display: 'block', color: '#626262' }}>Fortune Executive Tower, Suite 1204, JLT, DUBAI 336101</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>T: +97144310831</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>E: info@weareigloo.com</Text>

                            <Title level={5} style={{ color: '#000' }}>Miami</Title>
                            <Text style={{ display: 'block', color: '#626262' }}>11900 Biscayne Blvd, Suite 105, Miami, FL 33181</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>T: +1 (305) 497-3267</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>E: info@weareigloo.com</Text>
                        </Col>
                    </Row>
                    <hr style={{ margin: "0" }} />
                    <div className="footer-container">
                        <div className="footer-links">
                            <a href="#">About</a>
                            <a href="#">Careers</a>
                            <a href="#">Portfolio</a>
                            <a href="#">Clients</a>
                            <a href="#">Blog</a>
                            <a href="#">Podcast</a>
                            <a href="#">Contact</a>
                        </div>
                        <div className="footer-icons">
                            <a href="#" className="icon facebook"><FacebookOutlined /></a>
                            <a href="#" className="icon instagram"><InstagramOutlined /></a>
                            <a href="#" className="icon linkedin"><LinkedinOutlined /></a>
                        </div>
                    </div>

                </Container>
            </Layout.Footer>
            <div className="footer-content" style={{ background: "#252525", }}  >
                <Container >
                    <div className="sub-footer-content">
                        <div className="footer-text">
                            <Text style={{ color: '#626262' }}>
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
