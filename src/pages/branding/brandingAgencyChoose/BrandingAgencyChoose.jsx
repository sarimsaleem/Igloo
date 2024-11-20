import React from 'react'
import "./brandingagencychoose.css"
import './../../home/ourClients/ourclients.css'
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
const BrandingAgencyChoose = () => {
    const clients = [
        client1, client2, client3, client4, client5, client6,
        client7, client8, client9, client10, client11, client12
    ];


    return (
        <>
            <div className='brandingagencychoose'>
                <h1 className='brandingagencychoose-heading'>Debating which Branding Agency in Dubai to choose?</h1>
                <div className='brandingagencychoose-underline'></div>
                <p className='brandingagencychoose-description'>
                    It is crucial to hire the right branding agency in Dubai, mainly because you want your identity to be reflected the way you envision it. Another important factor to keep in mind when choosing a branding agency in Dubai is to choose an agency that is flexible.
                </p>
                <p className='brandingagencychoose-description'>Getting your brand identity right from the first time can be difficult so working with an agency that understands your vision is key to having a good journey creating your brand identity, or any other creative work for that matter.
                </p>
                <p className='brandingagencychoose-description'>We at Igloo, a leading creative agency in Dubai, having over 15 years in the Middle East developing brand identities and all other types of creative work, can confidentially say that we are a branding agency that has the right expertise and flexibility to help you develop any of your branding and creative needs; our team members have worked on 100s of creative projects in Dubai and other cities around the world, with B2B, B2C, and e-commerce businesses, from creating business names, logos, collaterals, social media posts, websites, videos, gifs, and more.
                </p>
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

            <div className="brandingAgency-process-seperater2"></div>

            <div className="brandingAgency-clients">
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
                            <Button className="ourclients-btn">view all clients </Button>
                        </div>
                    </Container>
                </div>
            </div>

        </>
    )
}

export default BrandingAgencyChoose