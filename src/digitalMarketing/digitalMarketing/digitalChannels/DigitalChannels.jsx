import React from 'react'
import "./digitalChannels.css"
import { Col, Container, Row } from 'react-bootstrap'
import { AiOutlineGlobal } from 'react-icons/ai'
import { IoMegaphoneOutline } from 'react-icons/io5'
import { GiAirBalloon, GiOnTarget } from 'react-icons/gi'
import { PiRecycleThin, PiToolboxLight } from 'react-icons/pi'
import { BsFileBarGraph } from 'react-icons/bs'
const DigitalChannels = () => {
    return (
        <div style={{ paddingBlock: "40px" }}>
            <div className='marketingagency'>
                <h1 className='agency-heading'>WHAT DIGITAL CHANNELS IGLOO OFFERS AS A DIGITAL MARKETING AGENCY?</h1>
                <div className='heading-underline'></div>
                <p className='agency-description' style={{ color: "#494646" }}>
                    We are an award-winning digital marketing agency that proves 360-degree solutions through multiple services including pay per click advertising, SEO, social media marketing, web development, branding, influencer marketing, marketing automation, and more.
                </p>
                <h4 className='digitalChannel-h4'>CLICK THE LINKS BELOW TO FIND OUT MORE ABOUT OUR SERVICES.</h4>
            </div>
            <Container>
                <h1 className='homesection5-heading'>
                    Our Services
                </h1>
                <Row>
                    <div className="homesection5-icons-parent" style={{justifyContent:"center"}}>
                        <Col md={2}>
                            <div className="homesection5-icon-parent">
                                <GiAirBalloon className="homesection5-icons" />
                                <p className='homesection5-text'>Branding</p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className="homesection5-icon-parent">
                                <PiRecycleThin className="homesection5-icons" />
                                <p className='homesection5-text'>Social Media</p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className="homesection5-icon-parent">
                                <AiOutlineGlobal className="homesection5-icons" />
                                <p className='homesection5-text'>Web design</p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className="homesection5-icon-parent">
                                <BsFileBarGraph className="homesection5-icons" />
                                <p className='homesection5-text'>SEO</p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className="homesection5-icon-parent">
                                <IoMegaphoneOutline className="homesection5-icons" />
                                <p className='homesection5-text'>Google Ads</p>
                            </div>
                        </Col>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default DigitalChannels  