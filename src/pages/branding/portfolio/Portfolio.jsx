import React from 'react'
import "./portfolio.css"
import portfolio1 from "./../../../assets/portfolio1.jpg"
import portfolio2 from "./../../../assets/portfolio2.jpg"
import portfolio3 from "./../../../assets/portfolio3.jpg"
import portfolio4 from "./../../../assets/portfolio4.jpg"
import portfolio5 from "./../../../assets/portfolio5.jpg"
import { Col, Row } from 'react-bootstrap'
const Portfolio = () => {
    return (
        <div className='portfolio'>
            <h1 className='portfolio-h1'>PORTFOLIO</h1>
            <Row style={{ '--bs-gutter-x': '0px' }}>
                <Col md={4}>
                    <div className="portfolio-cart-container">
                        <img src={portfolio1} alt="" />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="portfolio-cart-container">
                        <img src={portfolio2} alt="" />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="portfolio-cart-container">
                        <img src={portfolio3} alt="" />
                    </div>
                </Col>
            </Row>
            <Row style={{ '--bs-gutter-x': '0px' }}>
                <Col md={4}>
                    <div className="portfolio-cart-container">
                        <img src={portfolio4} alt="" />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="portfolio-cart-container">
                        <img src={portfolio5} alt="" />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Portfolio