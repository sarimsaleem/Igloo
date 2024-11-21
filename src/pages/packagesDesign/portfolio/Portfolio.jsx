import React from 'react'
import logoandbrand1 from "../../../assets/logoandbrand-portfolio-1.jpg"
import logoandbrand2 from "../../../assets/logoandbrand-portfolio-2.jpg"
import logoandbrand3 from "../../../assets/logoandbrand-portfolio-3.jpg"
import logoandbrand4 from "../../../assets/logoandbrand-portfolio-4.jpg"
import logoandbrand5 from "../../../assets/logoandbrand-portfolio-5.jpg"
import logoandbrand6 from "../../../assets/logoandbrand-portfolio-6.jpg"
import logoandbrand7 from "../../../assets/logoandbrand-portfolio-7.webp"
import logoandbrand8 from "../../../assets/PandD-porfolio-1.jpg"
import logoandbrand9 from "../../../assets/PandD-porfolio-2.jpg"
import logoandbrand10 from "../../../assets/PandD-porfolio-3.jpg"

import { Button, Col, Row } from 'react-bootstrap'
const Portfolio = () => {
    return (
        <div className='homesection4'>
            <h1 className='homesection4-heading'>
            PORTFOLIO
            </h1>
            {/* <p className='homesection4-text'>We craft bespoke and effective marketing solutions</p> */}
            <Row style={{ padding: 0, margin: 0 }}>
                {/* First column with one image */}
                <Col md={4} style={{ padding: 0, margin: 0 }}>
                    <img src={logoandbrand4} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </Col>

                {/* Second column with two images stacked vertically */}
                <Col md={4} style={{ padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
                    <img src={logoandbrand1} alt="" style={{ width: '100%', height: '50%', objectFit: 'contain' }} />
                    <img src={logoandbrand3} alt="" style={{ width: '100%', height: '50%', objectFit: 'contain' }} />
                </Col>

                {/* Third column with one image */}
                <Col md={4} style={{ padding: 0, margin: 0 }}>
                    <img src={logoandbrand2} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </Col>
            </Row>

            <Row style={{ padding: 0, margin: 0 }}>
                <Col md={4} style={{ padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
                    <img src={logoandbrand5} alt="" style={{ width: '100%', marginBottom: 0 }} />
                </Col>
                <Col md={4} style={{ padding: 0, margin: 0 }}>
                    <img src={logoandbrand6} alt="" style={{ width: '100%', height: '100%' }} />
                </Col>
                <Col md={4} style={{ padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
                    <img src={logoandbrand7} alt="" style={{ width: '100%' }} />
                </Col>
            </Row>
            <Row style={{ padding: 0, margin: 0 }}>
                <Col md={4} style={{ padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
                    <img src={logoandbrand8} alt="" style={{ width: '100%', marginBottom: 0 }} />
                </Col>
                <Col md={4} style={{ padding: 0, margin: 0 }}>
                    <img src={logoandbrand9} alt="" style={{ width: '100%', height: '100%' }} />
                </Col>
                <Col md={4} style={{ padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
                    <img src={logoandbrand10} alt="" style={{ width: '100%' }} />
                </Col>
            </Row>
            <div className="center-button-container">
                <Button
                    className="homesection4-button logoBrand-portfolio-btn "
                    onClick={() => console.log("Button clicked!")}
                >
                    View All Portfolio
                </Button>
            </div>
        </div>
    )
}

export default Portfolio