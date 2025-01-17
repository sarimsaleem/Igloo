import React from 'react';
import './about.css';
import { Button } from 'react-bootstrap';

const About = ({ data }) => {
  return (
    <div className="about">
      {data.map((section, index) => (
        <div key={index} >
          {section.heading && (
            <>
              <h1 className="about-heading">{section.heading}</h1>
              <div className="heading-underline"></div>
            </>
          )}
          {section?.description?.length && section.description.map((desc, idx) => (
            <p className="about-description" key={idx}>
              {desc}
            </p>
          ))}
          {section.showButton && (
            <div className="about-btn-parent">
              <Button className="about-btn">
                {section.buttonText || 'BOOK A FREE CONSULTATION'}
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default About;