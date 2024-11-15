import React from 'react'
import "./ourprocess.css"
import { Col, Container, Row } from 'react-bootstrap'
import { MdOutlineDesktopWindows } from 'react-icons/md'
import { CiTrophy } from 'react-icons/ci'
import { RiScissors2Line } from 'react-icons/ri'
import { LiaToolsSolid } from 'react-icons/lia'
import { FaReact } from 'react-icons/fa'
import { GiAirBalloon } from 'react-icons/gi'

const OurProcess = () => {
    return (
        <div className="section2-parent" style={{ paddingBlock: "30px" }}>
            <Container>
                <Row >
                    <h1 className='section2-heading'>Our Process</h1>
                </Row>
                <Row >
                    <Col style={{marginTop: "40px"}} md={2} xs={2} lg={1}><MdOutlineDesktopWindows className="homeSection2-icon" /></Col>
                    <Col style={{marginTop: "40px"}} md={4} xs={10} lg={3}>
                        <h3 className="card-heading" >MARKET RESEARCH</h3>
                        <p className='card-text'>
                            We research your competitors, the industry you are operating in and identify the trends and target audience in order to uncover the winning opportunities and make informed decision to help you succeed.
                        </p>
                    </Col>

                    <Col style={{marginTop: "40px"}} md={2} xs={2} lg={1}><CiTrophy className="homeSection2-icon" /></Col>
                    <Col style={{marginTop: "40px"}} md={4} xs={10} lg={3}>
                        <h3 className="card-heading" >COLLABORATE</h3>
                        <p className='card-text'>
                            We collaborate with you where you provide your business expertise and we advise on digital marketing. We work closely with you and align ourselves with your business goals.
                        </p>
                    </Col>

                    <Col style={{marginTop: "40px"}} md={2} xs={2} lg={1}><GiAirBalloon className="homeSection2-icon" /></Col>
                    <Col style={{marginTop: "40px"}} md={4} xs={10} lg={3}>
                        <h3 className="card-heading" >STRATEGY</h3>
                        <p className='card-text'>
                            We combine all data and insights that we gathered in the first phases to develop multi-channel marketing strategies that can help you meet your business objectives.
                        </p>
                    </Col>
                {/* <Row>  */}
                    <Col style={{marginTop: "40px"}} md={2} xs={2} lg={1}><RiScissors2Line className="homeSection2-icon" /></Col>
                    <Col style={{marginTop: "40px"}} md={4} xs={10} lg={3}>
                        <h3 className="card-heading" >EXECUTE</h3>
                        <p className='card-text'>
                            We execute these strategies by using the appropriate marketing channels. This helps us connect your brand with your target audience by using effective content that makes them engage.
                        </p>
                    </Col>

                    <Col style={{marginTop: "40px"}} md={2} xs={2} lg={1}><LiaToolsSolid className="homeSection2-icon" /></Col>
                    <Col style={{marginTop: "40px"}} md={4} xs={10} lg={3}>
                        <h3 className="card-heading" >OPTIMIZE</h3>
                        <p className='card-text'>
                            We analyze the results and data we gather from our marketing activities and adjust the digital marketing strategies to make it more effective. This will help us decrease the cost and increase ROI.
                        </p>
                    </Col>

                    <Col style={{marginTop: "40px"}} md={2} xs={2} lg={1}><FaReact className="homeSection2-icon" /></Col>
                    <Col style={{marginTop: "40px"}} md={4} xs={10} lg={3}>
                        <h3 className="card-heading" >REPORT</h3>
                        <p className='card-text'>
                            We report our efforts and results and discuss them with you to prove that we are fully transparent and committed to your success. We provide you with more knowledge so you can better run your business.
                        </p>
                    </Col>
                {/* </Row> */}
                </Row>
            </Container>
        </div>
    )
}

export default OurProcess
