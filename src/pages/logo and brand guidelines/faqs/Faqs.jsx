import React from 'react';
import { Accordion, Col, Row } from 'react-bootstrap'; // Assuming you're using React Bootstrap
import './Faqs.css';

const Faqs = () => {
  return (
    <div className="faqs-container">
      <h2 className="faqs-title">FAQs</h2>
      <hr className="faqs-divider" />
      <Accordion className='accordion-sss' style={{width: "100%"}} defaultActiveKey={null} flush>
        <Row>
          <Col md={6}>
            <Accordion.Item eventKey="0">
              <Accordion.Header className='accordion-heading'>DO YOU OFFER PACKAGES?</Accordion.Header>
              <Accordion.Body >
              Based on your needs, we offer you tailor-made packages and options.
              </Accordion.Body>
            </Accordion.Item>
          </Col>
          <Col md={6}>
            <Accordion.Item eventKey="1">
              <Accordion.Header className='accordion-heading'>IS YOUR TEAM BASED IN DUBAI?</Accordion.Header>
              <Accordion.Body >
              Yes, our Head of Design and some designers are based in Dubai, and some in other cities around the world to serve our global clients.
              </Accordion.Body>
            </Accordion.Item>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Accordion.Item eventKey="2">
              <Accordion.Header className='accordion-heading'>HOW MANY YEARS OF EXPERIENCE YOUR TEAM HAS?</Accordion.Header>
              <Accordion.Body >
              All our designers have a minimum of 5 years of experience, and the most senior ones have over 15 years of experience.
              </Accordion.Body>
            </Accordion.Item>
          </Col>
          <Col md={6}>
            <Accordion.Item eventKey="3">
              <Accordion.Header className='accordion-heading'>WHICH INDUSTRIES DO YOU SPECIALIZE IN?</Accordion.Header>
              <Accordion.Body >
              We have worked with many industries in the B2C and B2B industries. We will be happy to share with you our work when we are in contact with you.
              </Accordion.Body>
            </Accordion.Item>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Accordion.Item eventKey="4">
              <Accordion.Header className='accordion-heading'>WHAT IF I DON'T LIKE THE BRANDING WORK PROVIDED?</Accordion.Header>
              <Accordion.Body >
              We share with you multiple concepts and a set of revisions, in order to ensure we achieve your branding requirements.
              </Accordion.Body>
            </Accordion.Item>
          </Col>
          <Col md={6}>
            <Accordion.Item eventKey="5">
              <Accordion.Header className='accordion-heading'>DO YOU OFFER FLEXIBLE PAYMENT TERMS?</Accordion.Header>
              <Accordion.Body >
              Yes we do. We will share our offering when we are in contact with you.
              </Accordion.Body>
            </Accordion.Item>
          </Col>
        </Row>
      </Accordion>
    </div>
  );
};

export default Faqs;
