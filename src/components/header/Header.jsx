import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../assets/logo.png"
import "./header.css"
import { Button } from 'react-bootstrap';
import { Divider } from 'antd';
const Header = () => {
    return (
        <Navbar expand="lg" >
            <Container>
                <Navbar.Brand href=""><img className='logo' src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavDropdown title="Branding" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/">logo</NavDropdown.Item>
                                <Divider className='navbar-divider'/>
                                <NavDropdown.Item href="/">logo and Brand guidelines</NavDropdown.Item>
                                <Divider className='navbar-divider'/>
                                <NavDropdown.Item href="/">packageing design</NavDropdown.Item>
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
                                <NavDropdown.Item href="/">Chatbots/Live Chat </NavDropdown.Item>
                                <Divider className='navbar-divider'/>
                                <NavDropdown.Item href="/">Content Creation and Maintenance </NavDropdown.Item>
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
                            <NavDropdown title="web/App" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/">Web Design/ Development</NavDropdown.Item>
                                <Divider className='navbar-divider'/>
                                <NavDropdown.Item href="/">Mobile App Design/ Development/</NavDropdown.Item>
                                <Divider className='navbar-divider'/>
                                <NavDropdown.Item href="/">CRO/</NavDropdown.Item>
                                <Divider className='navbar-divider'/>
                                <NavDropdown.Item href="/">COA/</NavDropdown.Item>
                                <Divider className='navbar-divider'/>
                                <NavDropdown.Item href="/">UX/UI Design/</NavDropdown.Item>
                                <Divider className='navbar-divider'/>
                                <NavDropdown.Item href="/">Website Optimization/</NavDropdown.Item>
                            </NavDropdown>
                            <Button className='consultation-btn'>Free consultation</Button>
                        </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header