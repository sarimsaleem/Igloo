import React from 'react';
import './portfolio.css';
import portfolio1 from './../../../assets/mediaportfolio1.jpg';
import portfolio2 from './../../../assets/mediaportfolio2.jpg';
import portfolio3 from './../../../assets/mediaportfolio3.jpg';
import portfolio4 from './../../../assets/mediaportfolio4.jpg';
import portfolio5 from './../../../assets/mediaportfolio5.jpg';
import portfolio6 from './../../../assets/mediaportfolio6.jpg';
import { Button, Col, Row } from 'react-bootstrap';

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <h1 className='socialMedia-porfolio-heading'>PORTFOLIO</h1>
            <iframe
                className="video-frame"
                src="https://www.youtube.com/embed/wV3A-Swa1y0?autoplay=0&start=7"
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
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
                <Col md={4}>
                    <div className="portfolio-cart-container">
                        <img src={portfolio6} alt="" />
                    </div>
                </Col>
            </Row>
            <div className="ourclients-btn-parent">
                <Button className="ourclients-btn">view all clients </Button>
            </div>
        </div>
    );
};

export default Portfolio;
