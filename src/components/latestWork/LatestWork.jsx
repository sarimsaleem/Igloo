import React from 'react';
import './latestWork.css';
import { Button, Col, Row } from 'react-bootstrap';

const LatestWork = ({ workItems }) => { 
    return (
        <div className='homesection4'>
            <h1 className='homesection4-heading'>LATEST WORK</h1>
            <p className='homesection4-text'>We craft bespoke and effective marketing solutions</p>
            <Row style={{ padding: 0, margin: 0 }}>
                <Col md={4} className="image-column">
                    <div className="image-container">
                        <img src={workItems[0].image} alt={workItems[0].alt} />
                    </div>
                    <div className="image-container">
                        <img src={workItems[1].image} alt={workItems[1].alt} />
                    </div>
                </Col>

                <Col md={4} className="image-column">
                    <div className="image-container middle-image">
                        <img src={workItems[2].image} alt={workItems[2].alt} />
                    </div>
                </Col>

                <Col md={4} className="image-column">
                    <div className="image-container">
                        <img src={workItems[3].image} alt={workItems[3].alt} />
                    </div>
                    <div className="image-container">
                        <img src={workItems[4].image} alt={workItems[4].alt} />
                    </div>
                </Col>
            </Row>
            <div className="center-button-container">
                <Button
                    className="homesection4-button"
                    onClick={() => console.log("Button clicked!")}
                >
                    View All Portfolio
                </Button>
            </div>
        </div>
    );
};

export default LatestWork;
