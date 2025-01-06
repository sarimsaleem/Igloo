import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import client1 from "../../../assets/ourclients1.png"
import client2 from "../../../assets/ourclients2.svg"
import client3 from "../../../assets/ourclients3.svg"
import client4 from "../../../assets/ourclients4.jpg"
import client5 from "../../../assets/ourclients5.svg"
import client6 from "../../../assets/ourclients6.png"
import client7 from "../../../assets/ourclients7.png"
import client8 from "../../../assets/ourclients8.jpg"
import client9 from "../../../assets/ourclients9.svg"
import client10 from "../../../assets/ourclients10.svg"
import client11 from "../../../assets/ourclients11.svg"
import client12 from "../../../assets/ourclients12.png"

const GetAhead = () => {
    const clients = [
        client1, client2, client3, client4, client5, client6,
        client7, client8, client9, client10, client11, client12
    ];  
    return (
        <>
            <div className='getnotice'>
                <Container>
                    <div className="stillQuestion-text-container">
                        <h1 style={{lineHeight: "45px"}}e className="stillQuestion-heading">Succeed by Automating Your Marketing Strategies
                        </h1>
                        <div className="stillQuestion-seperator"></div>
                        <p className="stillQuestion-text">
                        Ask yourself: could your inbound marketing strategy use improvement? Do your marketing and sales teams feel a little disjointed? Are you not driving enough prospects into your sales funnel?</p>
                        <p className="stillQuestion-text">
                        If you’re struggling to find a way to make your marketing more effective and cost-efficient, our experts at Igloo can help. Book a consultation with us today to find out how we can transform your marketing strategy into a hyper-effective lead-builder!</p>
                        <div className="getnotice-btn-parent">
                            <Button className="getnotice-btn">
                                Book a Free Consultation
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="brandingAgency-subParent">
                <Row style={{ '--bs-gutter-x': '0px' }}>
                    <Col md={3}>
                        <div className="brandingAgency-subParent-container">
                            <h4>01</h4>
                            <p>STRATEGY</p>
                        </div>
                        <div className="brandingAgency-process-seperater"></div>
                    </Col>
                    <Col md={3}>
                        <div className="brandingAgency-subParent-container">
                            <h4>02</h4>
                            <p>PLANNING</p>
                            <div className="brandingAgency-process-seperater"></div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="brandingAgency-subParent-container">
                            <h4>03</h4>
                            <p>DEVELOPEMENT</p>
                            <div className="brandingAgency-process-seperater"></div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="brandingAgency-subParent-container">
                            <h4>04</h4>
                            <p>LAUNCH</p>
                            <div className="brandingAgency-process-seperater"></div>
                        </div>
                    </Col>
                </Row>
            </div>
 
            <div className="brandingAgency-process-seperater2" style={{marginBottom: "0"}}></div>

            <div className="brandingAgency-clients">
                <div className='ourclients' style={{border: "none"}}>
                    <Container>
                        <Row>
                            {clients.slice(0, 4).map((client, index) => (
                                <Col md={3} key={index}> 
                                    <div className="image-box">
                                        <img src={client} alt={`Client ${index + 1}`} />
                                    </div>
                                </Col>
                            ))}
                        </Row>
                        <Row>
                            {clients.slice(4, 8).map((client, index) => (
                                <Col md={3} key={index}>
                                    <div className="image-box">
                                        <img src={client} alt={`Client ${index + 5}`} />
                                    </div>
                                </Col>
                            ))}
                        </Row>
                        <Row>
                            {clients.slice(8, 12).map((client, index) => (
                                <Col md={3} key={index}>
                                    <div className="image-box">
                                        <img src={client} alt={`Client ${index + 9}`} />
                                    </div>
                                </Col>
                            ))}
                        </Row>
                        <div className="ourclients-btn-parent">
                            <Button className="ourclients-btn">view all clients </Button>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default GetAhead