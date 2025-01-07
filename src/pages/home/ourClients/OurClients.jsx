import React from 'react'
import './ourClients.css'
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

const OurClients = () => {
    const clients = [
        client1, client2, client3, client4, client5, client6,
        client7, client8, client9, client10, client11, client12
    ];

    return (
        <div className='ourclients'>
            <Container>
                <Row>
                    {clients.slice(0, 4).map((client, index) => (
                        <Col md={3} key={index}> {/* Change md={4} to md={3} for more space */}
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
                    <Button className="ourclients-btn">view case study</Button>
                </div>
            </Container>
        </div>
    )
}

export default OurClients
