import React from 'react'
import "./competetiveDetail.css"
import { Button, Col, Container, Row } from 'react-bootstrap'

const CompetetiveDetail = () => {
    return (
        <>
            <div className='marketingagency'>
                <h1 className='agency-heading'>Competitive Analysis</h1>
                <div className='heading-underline'></div>
                <p className='agency-description'>
                    For modern businesses, robust digital initiatives are essential to success. Yet, many fail to take the lead on competitors by failing to capitalize on current trends or using technology to improve business performance.
                </p>
                <p className='agency-description'>
                    Fortunately, we are here to step in as your digital ecosystem planner and expert. With the help of our expert strategists, you can stay one step ahead of every change, all the time.
                </p>
            </div>
            <Container>
                <Row>
                    <Col md={6}>
                        <h1 className='agency-heading' style={{ textAlign: "center" }}>EFFECTIVE DIGITAL STRATEGIES, ALWAYS AHEAD OF THE GAME</h1>
                        <div className='heading-underline'></div>
                        <p className='brandingServices-text'>
                            For modern businesses, robust digital initiatives are essential to success. Yet, many fail to take the lead on competitors by failing to capitalize on current trends or using technology to improve business performance.
                        </p>
                        <ul className='CompetetiveDetail-ul'>
                            <li>Identify your competitors</li>
                            <li>Analyze their strengths and weaknesses</li>
                            <li>Create a competitive advantage</li>
                            <li>Evaluate the effectiveness of your digital marketing efforts</li>
                            <li>Learn from your competitors' successes and failures</li>
                            <li>Continuously adapt and improve your digital marketing strategy</li>
                        </ul>
                        <p className='brandingServices-text'>
                            <b>For some, the answers to these questions will be less obvious—but that is why we are here to help.</b>
                        </p>
                    </Col>
                    <Col md={6}>
                        <h1 className='agency-heading' style={{ textAlign: "center" }}>A COMPETITIVE ANALYSIS AND WHY IT MATTERS</h1>
                        <div className='heading-underline'></div>
                        <p className='brandingServices-text'>
                            For modern businesses, robust digital initiatives are essential to success. Yet, many fail to take the lead on competitors by failing to capitalize on current trends or using technology to improve business performance.
                        </p>
                        <ul  className='CompetetiveDetail-ul'>
                            <li>Identify your competitors</li>
                            <li>Analyze their strengths and weaknesses</li>
                            <li>Create a competitive advantage</li>
                            <li>Evaluate the effectiveness of your digital marketing efforts</li>
                            <li>Learn from your competitors' successes and failures</li>
                            <li>Continuously adapt and improve your digital marketing strategy</li>
                        </ul>
                        <p className='brandingServices-text'>
                            <b>Understanding the competitive landscape is one of the most important steps to ensure long-term success.</b>
                        </p>
                    </Col>

                </Row>
                <div className="logoAndBrand-btn-parent">
                    <Button className="logoAndBrand-btn" >BOOK A FREE CONSULTATION</Button>
                </div>
            </Container>
        </>
    )
}

export default CompetetiveDetail