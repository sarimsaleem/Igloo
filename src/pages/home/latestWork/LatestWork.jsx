import React from 'react';
import './latestWork.css';
import { Button, Col, Row } from 'react-bootstrap';
import home1 from '../../../assets/homesec4-1.jpg';
import home2 from '../../../assets/homesec4-2.jpg';
import home3 from '../../../assets/homesec4-3.jpg';
import home4 from '../../../assets/homesec4-4.webp';
import home5 from '../../../assets/homesec4-5.jpg';

const LatestWork = () => {
    return (
        <div className='homesection4'>
            <h1 className='homesection4-heading'>LATEST WORK</h1>
            <p className='homesection4-text'>We craft bespoke and effective marketing solutions</p>
            <Row style={{ padding: 0, margin: 0 }}>
                <Col md={4} className="image-column">
                    <div className="image-container">
                        <img src={home1} alt="Work 1" />
                    </div>
                    <div className="image-container">
                        <img src={home2} alt="Work 2" />
                    </div>
                </Col>
                <Col md={4} className="image-column">
                    <div className="image-container">
                        <img src={home3} alt="Work 3" />
                    </div>
                </Col>
                <Col md={4} className="image-column">
                    <div className="image-container">
                        <img src={home4} alt="Work 4" />
                    </div>
                    <div className="image-container">
                        <img src={home5} alt="Work 5" />
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
