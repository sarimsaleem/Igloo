import React from 'react'
import "./latestwork.css"
import { Button, Col, Row } from 'react-bootstrap'
import home1 from "../../../assets/homesec4-1.jpg"
import home2 from "../../../assets/homesec4-2.jpg"
import home3 from "../../../assets/homesec4-3.jpg"
import home4 from "../../../assets/homesec4-4.webp"
import home5 from "../../../assets/homesec4-5.jpg"
const LatestWork = () => {
    return (

        <div className='homesection4'>
            <h1 className='homesection4-heading'>
                LATEST WORK
            </h1>
            <p className='homesection4-text'>We craft bespoke and effective marketing solutions</p>
            <Row style={{ padding: 0, margin: 0 }}>
                <Col md={4} style={{ padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
                    <img src={home1} alt="" style={{ width: '100%', marginBottom: 0 }} />
                    <img src={home2} alt="" style={{ width: '100%' }} />
                </Col>
                <Col md={4} style={{ padding: 0, margin: 0 }}>
                    <img src={home3} alt="" style={{ width: '100%', height: '100%' }} />
                </Col>
                <Col md={4} style={{ padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
                    <img src={home4} alt="" style={{ width: '100%', marginBottom: 0 }} />
                    <img src={home5} alt="" style={{ width: '100%' }} />
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
    )
}

export default LatestWork