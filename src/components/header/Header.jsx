import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../assets/logo.png";
import "./header.css";
import { Button } from 'react-bootstrap';
import { Divider } from 'antd';
import { useNavigate } from 'react-router-dom';

const Header = ({ bgColor }) => {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const bgClass = {
        transparent: 'navbar-transparent',
        white: 'navbar-white',
        blue: 'navbar-blue'
    }[bgColor] || 'navbar-transparent';

    return (
        <Navbar expand="lg" className={`${scrolled ? 'navbar-scrolled' : ''} ${bgClass}`}>
            <Container>
                <Navbar.Brand onClick={() => navigate("/")}><img className='logo' src={logo} alt="Logo" /></Navbar.Brand>
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
                            <NavDropdown.Item onClick={() => navigate("/content-creation-and-maintenance")}>PPC/Google Ads</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/content-creation-and-maintenance")}>SEO</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/content-creation-and-maintenance")}>Lead Generation</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/content-creation-and-maintenance")}>Insights and Analytics</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/content-creation-and-maintenance")}>Facebook Ads</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/content-creation-and-maintenance")}>Instagram Ads</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/content-creation-and-maintenance")}>LinkedIn Ads</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/content-creation-and-maintenance")}>YouTube Ads</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Social Media" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => navigate("/content-creation-and-maintenance")}>Social Media Management</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/content-creation-and-maintenance")}>Community Management</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/content-creation-and-maintenance")}>Influencer Marketing</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/content-creation-and-maintenance")}>Photography and Videography</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Web/App" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => navigate("/content-creation-and-maintenance")}>Web Design/Development</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/content-creation-and-maintenance")}>Mobile App Design/Development</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/content-creation-and-maintenance")}>CRO</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/content-creation-and-maintenance")}>COA</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/content-creation-and-maintenance")}>UX/UI Design</NavDropdown.Item>
                            <Divider className='navbar-divider' />
                            <NavDropdown.Item onClick={() => navigate("/content-creation-and-maintenance")}>Website Optimization</NavDropdown.Item>
                        </NavDropdown>
                        <Button className='consultation-btn'>Free Consultation</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
