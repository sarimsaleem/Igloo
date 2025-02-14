import React from 'react';
import { Container, Button } from 'react-bootstrap';
import "./answers.css";
import { BASE_IMAGE_URL } from "../../util/contant";
import { useNavigate } from 'react-router-dom';

const Answers = ({ heading, description, buttonText, backgroundImage }) => {

    const imageSrc = BASE_IMAGE_URL + backgroundImage;

    const sectionStyle = {
        backgroundImage: `url(${imageSrc})`,
    };

      const navigate = useNavigate()
    

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
                            <Button className="getnotice-btn" onClick={() => navigate("/contact")}>
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
