import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import "./ourServices.css"
import { AiOutlineGlobal } from 'react-icons/ai'
import { IoMegaphoneOutline } from 'react-icons/io5'
import { GiAirBalloon, GiOnTarget } from 'react-icons/gi'
import { PiRecycleThin, PiToolboxLight } from 'react-icons/pi'
import { BsFileBarGraph } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const OurServices = () => {

    const navigate = useNavigate()

    return (
        <div className='homesection5'>
            <Container>
                <h1 className='homesection5-heading'>
                    Our Services
                </h1>
                <Row>
                    <div className="homesection5-icons-parent">
                        <Col xs={12} sm={4} md={4} lg={2} xl={2}>
                            <div className="homesection5-icon-parent">
                                <GiAirBalloon className="homesection5-icons" />
                                <p className='homesection5-text'>Branding</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={2} xl={2}>
                            <div className="homesection5-icon-parent">
                                <PiRecycleThin className="homesection5-icons" />
                                <p className='homesection5-text'>Social Media</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={2} xl={2}>
                            <div className="homesection5-icon-parent">
                                <AiOutlineGlobal className="homesection5-icons" />
                                <p className='homesection5-text'>Web design</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={2} xl={2}>
                            <div className="homesection5-icon-parent">
                                <BsFileBarGraph className="homesection5-icons" />
                                <p className='homesection5-text'>SEO</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={2} xl={2}>
                            <div className="homesection5-icon-parent">
                                <IoMegaphoneOutline className="homesection5-icons" />
                                <p className='homesection5-text'>Google Ads</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={2} xl={2}>
                            <div className="homesection5-icon-parent">
                                <GiOnTarget className="homesection5-icons" />
                                <p className='homesection5-text'>Marketing consultancy</p>
                            </div>
                        </Col>
                    </div>
                </Row>
            </Container>
            <div className="homesection5-subParent">
                <Container>
                    <div className="homesection5-subParents">
                        <div className="homesection5-subParent-icon-parent">
                            <PiToolboxLight className='homesection5-subParent-icon' />
                        </div>
                        <div className="homesection5-subParent-text-parent">
                            <p className='homesection5-subParent-text'>WANT TO SEE MORE AMAZING WORKS?</p>
                        </div>
                        <div className="homesection5-btn-parent">
                            <Button className='homesection5-btn view-btn' onClick={() => navigate("/our-portfolio")}>VIEW PORTFOLIO</Button>
                            <Button className='homesection5-btn contact-btn' onClick={() => navigate("/contact")}>CONTACT US</Button>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default OurServices