import React from 'react'
import "./leadership.css"
import { Button, Col, Container, Row } from 'react-bootstrap'
import section1 from "/public/assets/images/section6-1.jpg"
import section2 from "/public/assets/images/section6-2.jpg"
import section3 from "/public/assets/images/section6-3.jpg"
import section4 from "/public/assets/images/section6-4.jpg"
import section5 from "/public/assets/images/section6-5.jpg"

const LeaderShip = () => {
    return (
        <>
            <div className='homesection6'>
                <Container>
                    <h1 className='homesection6-heading'>LEADERSHIP TEAM</h1>
                    <p className='homesection6-text'>We are a diverse team of digital marketing experts, innovative thinkers, creative designers and software developers who are passionate about helping businesses achieve their goals, and making a difference by raising our industry standards.</p>
                    <Row >
                        <div className="homesection6-column-Parent">
                            <Col md={2}>
                                <img src={section1} alt="" className="responsive-image" />
                                <p className="section6-text">ELIAS SABER</p>
                                <p className="section6-text2" >PARTNER/ STRATEGY</p>
                            </Col>
                            <Col md={2}>
                                <img src={section2} alt="" className="responsive-image" />
                                <p className="section6-text">CARLA CASTILLO</p>
                                <p className="section6-text2" >PARTNER/ SOCIAL MEDIA AND CONTENT</p>
                            </Col>
                            <Col md={2}>
                                <img src={section3} alt="" className="responsive-image" />
                                <p className="section6-text">SIMON SABER</p>
                                <p className="section6-text2" >PARTNER/ DESIGN AND TECHNOLOGY</p>
                            </Col>
                            <Col md={2}>
                                <img src={section4} alt="" className="responsive-image" />
                                <p className="section6-text">BASSEM SABER</p>
                                <p className="section6-text2" >PARTNER/ PERFORMANCE MARKETING</p>
                            </Col>
                            <Col md={2}>
                                <img src={section5} alt="" className="responsive-image" />
                                <p className="section6-text">CHARLOTTE VERMEER</p>
                                <p className="section6-text2" >PARTNER/ COMMERCIAL</p>
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>
            

        </>
    )
}

export default LeaderShip