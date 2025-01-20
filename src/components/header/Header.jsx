import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "/public/assets/images/logo.png";
import logoBlack from "/public/assets/images/logoBlack.png";
import "./header.css";
import { Button } from 'react-bootstrap';
import { Divider } from 'antd';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const navigate = useNavigate()
    return (
        <Navbar expand="lg" className={scrolled ? "navbar navbar-scrolled" : "navbar"}>
            <Container>
                <Navbar.Brand onClick={() => navigate("/")}>
                    <img
                        className="logo"
                        src={scrolled ? logoBlack : logo}
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavDropdown title="Branding" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => navigate('/branding')} >Branding</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate('/logo-and-brand-guidelines')} >Logo and Brand Guidelines</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/packaging-design")}>Packaging Design</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Digital Marketing" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => navigate("/digital-marketing-agency-in-dubai")}>Digital Marketing</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/competitive-analysis")}>Competitive Analysis</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/marketing-automation")}>Marketing Automation</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/email-marketing")} >Email Marketing</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/chatbots-live-chat")}>Chatbots/Live Chat</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/content-creation-and-maintenance")}>Content Creation and Maintenance</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Search/Media Buying" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => navigate("/ppc-management-agency")}>PPC/Google Ads</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/seo-agency-in-dubai")}>SEO</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/lead-generation-agency")}>Lead Generation</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/insights-and-analytics")}>Insights and Analytics</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/facebook-ads")}>Facebook Ads</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/instagram-ads")}>Instagram Ads</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/linkedin-ads")}>LinkedIn Ads</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/youtube-ads")}>YouTube Ads</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Social Media" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => navigate("/social-media-agency-in-dubai")}>Social Media Management</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/community-management")}>Community Management</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/influencer-marketing")}>Influencer Marketing</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/photography-and-videography")}>Photography and Videography</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Web/App" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => navigate("/web-design-agency-in-dubai")}>Web Design/ Development</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/mobile-app-design")}>Mobile App Design/ Development</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/conversion-rate-optimization")}>CRO</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/conversion-optimization-audit")}>COA</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/ux-ui-design")}>UX/UI Design</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/website-optimization")}>Website Optimization</NavDropdown.Item>
                        </NavDropdown>
                        <Button className='consultation-btn'>Free Consultation</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
