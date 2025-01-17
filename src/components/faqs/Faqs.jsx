import React from 'react';
import { Accordion, Col, Row } from 'react-bootstrap'; 
import './faqs.css';

const Faqs = ({faqData}) => {
  return (
    <div className="faqs-container">
      <h2 className="faqs-title">FAQs</h2>
      <hr className="faqs-divider" />
      <Accordion className='accordion-sss' style={{ width: "100%" }} defaultActiveKey={null} flush>
        <Row>
          {faqData.map((faq, index) => (
            <Col key={faq.id} md={6}>
              <Accordion.Item className='accordion-box' eventKey={faq.id.toString()}>
                <Accordion.Header className='accordion-heading'>{faq.question}</Accordion.Header>
                <Accordion.Body>
                  {faq.answer}
                </Accordion.Body>
              </Accordion.Item>
            </Col>
          ))}
        </Row>
      </Accordion>
    </div>
  );
};

export default Faqs;
