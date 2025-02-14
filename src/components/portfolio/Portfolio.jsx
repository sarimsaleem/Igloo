import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './portfolio.css';
import { useNavigate } from 'react-router-dom';

const Portfolio = ({ columns, heading, buttonText }) => {

  const navigate = useNavigate()

  return (
    <div>
      <div className="homesection4">
        {heading && (
          <h1 className="homesection4-heading" style={{ marginBottom: '30px', fontSize: '30px' }}>
            {heading}
          </h1>
        )}
        <Row style={{ padding: 0, margin: 0 }}>
          {columns.map((column, colIndex) => (
            <Col md={4} key={colIndex} className="image-column">
              {column?.images.map((image, imgIndex) => {
                let imageSrc = window.location.origin + image.src;
                return <div className="image-container" key={imgIndex}>
                  <img src={imageSrc} alt={image.alt || `Work ${imgIndex + 1}`} />
                </div>
              })}
            </Col>
          ))}
        </Row>
        <div className="center-button-container">
          <Button
            className="homesection4-button"
            onClick={() => navigate("/our-portfolio")}
          >
            {buttonText || 'View All Portfolio'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
