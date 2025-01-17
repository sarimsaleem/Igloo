import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./guidence.css";

const Guidence = ({ guidence }) => {
    const introSection = guidence.find(item => item.id === 0);
    const otherItems = guidence.filter(item => item.id !== 0);

    return (
        <div className="brandGuideMatter" style={{ paddingBlock: "30px" }}>
            <Container>
                <div className="brandGuideMatter-text-parent">
                    {introSection.heading && (
                        <>
                            <h1 className="brandGuideMatter-heading">{introSection.heading}</h1>
                            <div className="brandGuideMatter-seperator"></div>
                        </>
                    )}

                    {introSection.description?.map((text, index) => (
                        <p key={index} style={{ marginBlock: "10px" }} className="brandGuideMatter-detail">
                            {text}
                        </p>
                    ))}
                </div>

                <div className="brandGuideMatter-text-parent" style={{ display: "flex", textAlign: "center", justifyContent: "space-between" }}>
                    {introSection.listItems?.map((text, index) => (
                        <li key={index} style={{ marginBlock: "10px" }} className="brandGuideMatter-detail">
                            {text}
                        </li>
                    ))}
                </div>

                <Row className="brandGuideMatter-parent">
                    {otherItems.map((item, index) => (
                        <React.Fragment key={item.id}>
                            <Col md={1}>
                                {item.image && (
                                    <div className="brandingServices-icon-parent">
                                        <img src={item.image} alt={item.title || "Image"} className="brandingServices-icon" />
                                    </div>
                                )}
                            </Col>
                            <Col md={5}>
                                <div className="brandingServices-text-parent2">
                                    <h1 className="brandingServices-text-heading">{item.title}</h1>
                                    <div className="brandingServices-head-text-separator"></div>
                                    {Array.isArray(item.description) ? (
                                        item.description.map((text, textIndex) => (
                                            <p key={textIndex} className="brandingServices-text">
                                                {text}
                                            </p>
                                        ))
                                    ) : (
                                        <p className="brandingServices-text">{item.description}</p>
                                    )}
                                </div>
                            </Col>
                            {index % 2 === 1 && index !== otherItems.length - 1 && <div className="w-100 my-4"></div>}
                        </React.Fragment>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Guidence;
