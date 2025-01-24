import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./digitalMarketing.css";

const DigitalMarketing = () => {
    return (
        <>
            <Container>
                <div className="homesection1">
                    <h6 className="homesection1-heading">EST. in 2004</h6>
                    <h2 className="homesection1-sub-heading">DIGITAL MARKETING AGENCY IN DUBAI</h2>
                    <p className="homesection1-text">
                        We design powerful marketing strategies, launch engaging brands, and fuel our clients' growth with measurable results.
                    </p>
                </div>

            </Container>
            <div className="homesection1-subParent">
                <Row className="g-0">
                    <div className="keywords-row">
                        <span>BRANDING</span>
                        <span>/</span>
                        <span>DIGITAL MARKETING</span>
                        <span>/</span>
                        <span>LEAD GENERATION</span>
                        <span>/</span>
                        <span>SOCIAL MEDIA</span>
                        <span>/</span>
                        <span>WEB APP</span>
                        <span>/</span>
                        <span>SEO</span>
                        <span>/</span>
                        <span>GOOGLE ADS</span>
                    </div>
                </Row>
            </div>
        </>
    );
};

export default DigitalMarketing;
