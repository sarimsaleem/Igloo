import React from 'react';
import { Button, Container } from "react-bootstrap";
import "./questions.css";
import { BASE_IMAGE_URL } from "../../util/contant";  

const Questions = ({ heading, text, buttonText, backgroundImage }) => {

    const imageSrc = BASE_IMAGE_URL + backgroundImage;

    const sectionStyle = {
        backgroundImage: `url(${imageSrc})`,
    };

    return (
        <div className="questions" style={sectionStyle}>
            <Container>
                <div className="questions-text-container">
                    <h1 className="question-heading">{heading}</h1>
                    <div className="question-seperator"></div>
                    {text.map((desc, index) => (
                        <p key={index} className="question-text">{desc}</p>
                    ))}
                    <div className="question-btn-parent">
                        <Button className="question-btn">{buttonText}</Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Questions;
