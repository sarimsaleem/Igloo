import React from 'react';
import { Container, Button } from 'react-bootstrap';
import "./answers.css"
const Answers = ({ heading, description, buttonText, onButtonClick, backgroundImage }) => {

    const sectionStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };


    return (
        <div className='questions' style={sectionStyle}>
            <Container>
                <div className="questions-text-container">
                    <h1 className="question-heading">{heading}</h1>
                    <div className="question-seperator"></div>

                    {description.map((text, index) => (
                        <p key={index} className="question-text">
                            {text}
                        </p>
                    ))}

                    {buttonText && (
                        <div className="question-btn-parent">
                            <Button className="getnotice-btn" onClick={onButtonClick}>
                                {buttonText}
                            </Button>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
};

export default Answers;
