import React from 'react'
import "./bookcolsultation.css"
import { Button, Col, Container, Row } from 'react-bootstrap'
import { BsEnvelopeOpen } from 'react-icons/bs'
import { VscTools } from 'react-icons/vsc'
import { FaLaptop } from 'react-icons/fa'
const BookConsultation = () => {
    return (
        <>
        <div className='bookcolsultation'>
            <Container>
                <div className="bookcolsultation-parent">
                    <Row>
                        <Col md={4}>
                            <div className="bookcolsultation-icon-parent">
                                <BsEnvelopeOpen className="bookcolsultation-icon" />
                            </div>
                            <div className="bookcolsultation-parent-text">
                                <h4>High-Tech Marketing</h4>
                                <p>Working with the latest technology we design.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="bookcolsultation-icon-parent">
                                <FaLaptop className="bookcolsultation-icon" />
                            </div>
                            <div className="bookcolsultation-parent-text">
                                <h4>Considered Design </h4>
                                <p>We respond directly to  a project’s objectives.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="bookcolsultation-icon-parent">
                                <VscTools className="bookcolsultation-icon" />
                            </div>
                            <div className="bookcolsultation-parent-text">
                                <h4>Creative Collaboration</h4>
                                <p>We love working with people  who embrace the design.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
        <div className='bookcolsultation-subparent'>
            <h1 className="bookcolsultation-subparent-h1" >WE’D LOVE TO HEAR ABOUT YOUR PROJECT</h1>
            <Button className="bookcolsultation-subparent-button" >BOOK A FREE CONSULTATION</Button>
        </div>
        </>
    )
}

export default BookConsultation