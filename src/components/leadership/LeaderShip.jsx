import React from 'react';
import './leadership.css';
import { Col, Container, Row } from 'react-bootstrap';
import section1 from '/public/assets/images/section6-1.jpg';
import section2 from '/public/assets/images/section6-2.jpg';
import section3 from '/public/assets/images/section6-3.jpg';
import section4 from '/public/assets/images/section6-4.jpg';
import section5 from '/public/assets/images/section6-5.jpg';

const LeaderShip = () => {
    return (
        <div className='homesection6'>
            <Container>
                <h1 className='homesection6-heading'>LEADERSHIP TEAM</h1>
                <p className='homesection6-text'>
                    We are a diverse team of digital marketing experts, innovative thinkers, creative designers, and software developers who are passionate about helping businesses achieve their goals and making a difference by raising our industry standards.
                </p>
                <Row className="homesection6-row">
                    <Col xs={12} sm={6} md={4} lg={2} className="homesection6-column">
                        <img src={section1} alt="Elias Saber" className="responsive-image" />
                        <p className="section6-text">ELIAS SABER</p>
                        <p className="section6-text2">PARTNER/ STRATEGY</p>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={2} className="homesection6-column">
                        <img src={section2} alt="Carla Castillo" className="responsive-image" />
                        <p className="section6-text">CARLA CASTILLO</p>
                        <p className="section6-text2">PARTNER/ SOCIAL MEDIA AND CONTENT</p>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={2} className="homesection6-column">
                        <img src={section3} alt="Simon Saber" className="responsive-image" />
                        <p className="section6-text">SIMON SABER</p>
                        <p className="section6-text2">PARTNER/ DESIGN AND TECHNOLOGY</p>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={2} className="homesection6-column">
                        <img src={section4} alt="Bassem Saber" className="responsive-image" />
                        <p className="section6-text">BASSEM SABER</p>
                        <p className="section6-text2">PARTNER/ PERFORMANCE MARKETING</p>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={2} className="homesection6-column">
                        <img src={section5} alt="Charlotte Vermeer" className="responsive-image" />
                        <p className="section6-text">CHARLOTTE VERMEER</p>
                        <p className="section6-text2">PARTNER/ COMMERCIAL</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LeaderShip;
