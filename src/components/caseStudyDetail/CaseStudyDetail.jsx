import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BASE_IMAGE_URL } from "../../util/contant";
import { Col, Container, Row } from "react-bootstrap";
import Answers from "../answers/Answers";
import BookConsultation from "../bookConsultation/BookConsultation";
import "./caseStudy.css"

const CaseStudyDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const location = useLocation();
    const caseStudy = location.state?.caseStudy;

    if (!caseStudy) {
        return <h2>Case Study Not Found</h2>;
    }

    console.log(caseStudy, "caseStudy")

    return (
        <>
            <Container>
                <div className="career-header">
                    <h1>{caseStudy.detailHeading}</h1>
                    <p>HOME | {caseStudy.detailHeading}</p>
                </div>

                <div className="caseStudy-detail-parent">
                    <Row style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Col md={8}>
                            <h1 className="caseStudyDetail-heading">THE CHALLENGE</h1>
                            {Array.isArray(caseStudy.detailtext) ? (
                                caseStudy.detailtext.map((item, index) => (
                                    <p className="caseStudyDetail-text" key={index}>{item}</p>
                                ))
                            ) : (
                                <p>No details available.</p>
                            )}
                        </Col>
                        <Col md={4}>
                        {caseStudy?.detailImg ? (
                            <img
                                src={`${BASE_IMAGE_URL}${caseStudy.detailImg}`}
                                alt={caseStudy.detailHeading}
                                className="caseStudy-detail"
                            />
                        ) : null }
                        </Col>
                    </Row>
                </div>
            </Container>

            {caseStudy.answers && (
                <Answers
                    heading={caseStudy.answers.heading}
                    description={caseStudy.answers.description}
                    buttonText={caseStudy.answers.buttonText}
                    backgroundImage={caseStudy.answers.backgroundImage}
                />
            )}
            <BookConsultation />
        </>
    );
};

export default CaseStudyDetail;
