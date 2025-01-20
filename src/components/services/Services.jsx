import React from 'react';
import './services.css';
import { Col, Container, Row } from 'react-bootstrap';
import { BASE_IMAGE_URL } from "../../util/contant";  // Import BASE_IMAGE_URL

const Services = ({ heading, servicesData, text }) => {
    return (
        <div className='brandingServices'>
            <Container>
                <div className="brandingServices-text-container">
                    <h1 className='brandingServices-heading'>{heading}</h1>
                    <div className="heading-border"></div>
                    <p className='brandingServices-detail'>{text}</p>
                </div>
            </Container>

            {servicesData.map((service) => {
                // Construct the full image URL
                const imageSrc = BASE_IMAGE_URL + service.image;

                return (
                    <Row className="brandingServices-parent" key={service.id}>
                        <Col md={2}>
                            <div className="brandingServices-icon-parent">
                                <img 
                                    src={imageSrc} 
                                    alt={`${service.heading} Icon`} 
                                    className="brandingServices-icon" 
                                />
                            </div>
                        </Col>
                        <Col md={10}>
                            <div className="brandingServices-text-parent">
                                <h1 className="brandingServices-text-heading">{service.heading}</h1>
                                <div className="brandingServices-head-text-separator"></div>
                                {Array.isArray(service.description) ? (
                                    service.description.map((desc, index) => (
                                        <p key={index} className="brandingServices-text">
                                            {desc}
                                        </p>
                                    ))
                                ) : (
                                    <p className="brandingServices-text">{service.description}</p>
                                )}

                                {service.list && (
                                    <ul className="brandingServices-list">
                                        {service.list.map((item, index) => (
                                            <li key={index} className="brandingServices-list-item">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {service.additionalInfo &&
                                    service.additionalInfo.map((info, index) => (
                                        <p key={index} className="brandingServices-text">{info}</p>
                                    ))
                                }
                            </div>
                        </Col>
                    </Row>
                );
            })}
        </div>
    );
};

export default Services;
