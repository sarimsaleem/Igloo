import React from "react";
import { useLocation } from "react-router-dom";
import { BASE_IMAGE_URL } from "../../util/contant";
import { Container } from "react-bootstrap";

const CaseStudyDetail = () => {
    const location = useLocation();
    const caseStudy = location.state?.caseStudy;

    if (!caseStudy) {
        return <h2>Case Study Not Found</h2>;
    }
    console.log(caseStudy, "caseStudy");

    return (
        <>
            <Container>
                <div className="career-header">
                    <h1>{caseStudy.heading}</h1>
                    <p>HOME | {caseStudy.heading}</p>
                </div>
            </Container>

            {/* Ensure detailtext is an array before mapping */}
            {Array.isArray(caseStudy.detailtext) ? (
                caseStudy.detailtext.map((item, index) => (
                    <h1 key={index}>{item}</h1>
                ))
            ) : (
                <p>{caseStudy.detailtext}</p>
            )}

            <img
                style={{ height: "500px", width: "500px" }}
                src={BASE_IMAGE_URL + caseStudy.detailImg}
                alt="Case Study"
            />
        </>
    );
};

export default CaseStudyDetail;
