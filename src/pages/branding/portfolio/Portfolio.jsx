import React from 'react';
import './portfolio.css';
import portfolio1 from './../../../assets/portfolio1.jpg';
import portfolio2 from './../../../assets/portfolio2.jpg';
import portfolio3 from './../../../assets/portfolio3.jpg';
import portfolio4 from './../../../assets/portfolio4.jpg';
import portfolio5 from './../../../assets/portfolio5.jpg';
import { Col, Row } from 'react-bootstrap';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <h1 className='portfolio-h1' style={{textAlign: "center", fontSize: "30px", fontWeight: "600"}}>PORTFOLIO</h1>
      <Row style={{ '--bs-gutter-x': '0px' }}>
        <Col md={4}>
          <div className="portfolio-cart-container">
            <img src={portfolio1} alt="" />
            <div className="overlay">
              <div className="overlay-text">MOODS</div>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="portfolio-cart-container">
            <img src={portfolio2} alt="" />
            <div className="overlay">
              <div className="overlay-text">Sultanate of Oman</div>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="portfolio-cart-container">
            <img src={portfolio3} alt="" />
            <div className="overlay">
              <div className="overlay-text">Timeless</div>
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{ '--bs-gutter-x': '0px' }}>
        <Col md={4}>
          <div className="portfolio-cart-container">
            <img src={portfolio4} alt="" />
            <div className="overlay">
              <div className="overlay-text">Barbell House</div>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="portfolio-cart-container">
            <img src={portfolio5} alt="" />
            <div className="overlay">
              <div className="overlay-text">ABC Verdun Ripple Effect</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Portfolio;
