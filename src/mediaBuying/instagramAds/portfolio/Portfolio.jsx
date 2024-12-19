import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import home1 from '../../../assets/fbAdsPort1.jpg';
import home2 from '../../../assets/fbAdsPort2.jpg';
import home3 from '../../../assets/fbAdsPort3.jpg';
import home4 from '../../../assets/fbAdsPort4.jpg';
import home5 from '../../../assets/fbAdsPort5.jpg';
import home6 from '../../../assets/fbAdsPort6.jpg';
const Portfolio = () => {
  return (
    <div>
           <div className='homesection4'>
            <h1 className='homesection4-heading' style={{marginBottom:"30px" , fontSize:"30px"}}>PORTFOLIO</h1>
            <Row style={{ padding: 0, margin: 0 }}>
                <Col md={4} className="image-column">
                    <div className="image-container">
                        <img src={home1} alt="Work 1" />
                    </div>
                    <div className="image-container">
                        <img src={home4} alt="Work 2" />
                    </div>
                </Col>
                <Col md={4} className="image-column">
                    <div className="image-container">
                        <img src={home2} alt="Work 3" />
                    </div>
                    <div className="image-container">
                        <img src={home5} alt="Work 3" />
                    </div>
                </Col>
                <Col md={4} className="image-column">
                    <div className="image-container">
                        <img src={home3} alt="Work 4" />
                    </div>
                    <div className="image-container">
                        <img src={home6} alt="Work 5" />
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
    </div>
  )
}

export default Portfolio