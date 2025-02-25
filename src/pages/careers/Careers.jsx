import React from 'react'
import "./careers.css"
import { Col, Container, Row } from 'react-bootstrap'

const Careers = () => {
    return (
        <>
            <Container>
                <div className="career-header">
                    <h1>CAREERS</h1>
                    <p>HOME | CAREERS</p>
                </div>
            </Container>

            <div className="career-body">
                <div className="career-img-container">
                    <Container>
                        <Row>
                            <Col md={5} sm={5} xs={12}>
                            </Col>
                            <Col md={7} sm={7} xs={12}>
                                <div className="career-text-parent">
                                    <h1>WE LOVE WHAT WE DO</h1>
                                    <p>Igloo is a rapidly growing. We believe in creating an amazing working environment where people learn, grow, share ideas, and be creative. Join our team to help us promote brands, create amazing work, and make our clients successful.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Container>
                    <Row>
                        <Col md={4}>
                                <div className="digitalmarketing">
                                    <h4 className='digitalmarketing-heading'><span className='digitalmarketing-heading-span'>03</span></h4>
                                    <p className='digitalmarketing-detail'>Sales Manager/Consultant EXPERIENCE: 2+ YEARS</p>
                                    <button>Apply Now</button>
                                </div>
                        </Col>
                        <Col md={8}></Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default Careers