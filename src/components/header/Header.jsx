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
                <Navbar.Brand href=""><img className='logo' src={logo} alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavDropdown title="Branding" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => navigate('/branding')} >Branding</NavDropdown.Item>
                            <Divider className='navbar-divider'/>
                            <NavDropdown.Item  onClick={() => navigate('/logo-and-brand-guidelines')} >Logo and Brand Guidelines</NavDropdown.Item>
                            <Divider className='navbar-divider'/>
                            <NavDropdown.Item onClick={() => navigate("/packaging-design")}>Packaging Design</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Digital Marketing" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/">Digital Marketing</NavDropdown.Item>
                            <Divider className='navbar-divider'/>
                            <NavDropdown.Item href="/">Competitive Analysis</NavDropdown.Item>
                            <Divider className='navbar-divider'/>
                            <NavDropdown.Item href="/">Marketing Automation</NavDropdown.Item>
                            <Divider className='navbar-divider'/>
                            <NavDropdown.Item href="/">Email Marketing</NavDropdown.Item>
                            <Divider className='navbar-divider'/>
                            <NavDropdown.Item href="/">Chatbots/Live Chat</NavDropdown.Item>
                            <Divider className='navbar-divider'/>
                            <NavDropdown.Item href="/">Content Creation and Maintenance</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Search/Media Buying" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/">PPC/Google Ads</NavDropdown.Item>
                            <Divider className='navbar-divider'/>
                            <NavDropdown.Item href="/">SEO</NavDropdown.Item>
                            <Divider className='navbar-divider'/>
                            <NavDropdown.Item href="/">Lead Generation</NavDropdown.Item>
                            <Divider className='navbar-divider'/>
                            <NavDropdown.Item href="/">Insights and Analytics</NavDropdown.Item>
                            <Divider className='navbar-divider'/>
                            <NavDropdown.Item href="/">Facebook Ads</NavDropdown.Item>
                            <Divider className='navbar-divider'/>
                            <NavDropdown.Item href="/">Instagram Ads</NavDropdown.Item>
                            <Divider className='navbar-divider'/>
                            <NavDropdown.Item href="/">LinkedIn Ads</NavDropdown.Item>
                            <Divider className='navbar-divider'/>
                            <NavDropdown.Item href="/">YouTube Ads</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Social Media" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/">Social Media Management</NavDropdown.Item>
                            <Divider className='navbar-divider'/>
                            <NavDropdown.Item href="/">Community Management</NavDropdown.Item>
                            <Divider className='navbar-divider'/>
                            <NavDropdown.Item href="/">Influencer Marketing</NavDropdown.Item>
                            <Divider className='navbar-divider'/>
                            <NavDropdown.Item href="/">Photography and Videography</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Web/App" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/">Web Design/Development</NavDropdown.Item>
                            <Divider className='navbar-divider'/>
                            <NavDropdown.Item href="/">Mobile App Design/Development</NavDropdown.Item>
                            <Divider className='navbar-divider'/>
                            <NavDropdown.Item href="/">CRO</NavDropdown.Item>
                            <Divider className='navbar-divider'/>
                            <NavDropdown.Item href="/">COA</NavDropdown.Item>
                            <Divider className='navbar-divider'/>
                            <NavDropdown.Item href="/">UX/UI Design</NavDropdown.Item>
                            <Divider className='navbar-divider'/>
                            <NavDropdown.Item href="/">Website Optimization</NavDropdown.Item>
                        </NavDropdown>
                        <Button className='consultation-btn'>Free Consultation</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
