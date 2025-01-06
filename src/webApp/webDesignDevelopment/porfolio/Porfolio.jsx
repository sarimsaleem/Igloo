import React from 'react'
import "./porfolio.css"
import portfolio1 from './../../../assets/webPortfolio1.jpg';
import portfolio2 from './../../../assets/webPortfolio2.jpg';
import portfolio3 from './../../../assets/webPortfolio3.jpg';
import portfolio4 from './../../../assets/webPortfolio4.jpg';
import portfolio5 from './../../../assets/webPortfolio5.jpg';
import { Button, Col, Row } from 'react-bootstrap';
const Porfolio = () => {
    return (
        <div className="portfolio-container">
            <h1 className='socialMedia-porfolio-heading'>PORTFOLIO</h1>
            <Row style={{ '--bs-gutter-x': '0px' }}>
                <Col md={4}>
                    <div className="portfolio-cart-container">
                        <img src={portfolio1} alt="" />
                    </div>
                    <div className="portfolio-cart-container">
                        <img src={portfolio2} alt="" />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="portfolio-cart-container">
                        <img src={portfolio5} alt="" />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="portfolio-cart-container">
                        <img src={portfolio3} alt="" />
                    </div>
                    <div className="portfolio-cart-container">
                        <img src={portfolio4} alt="" />
                    </div>
                </Col>
            </Row>
            <div className="ourclients-btn-parent">
                <Button className="ourclients-btn">view all clients </Button>
            </div>
        </div>
    )
}

export default Porfolio