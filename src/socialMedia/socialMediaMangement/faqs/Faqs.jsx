import React from 'react';
import { Accordion, Col, Row } from 'react-bootstrap'; // Assuming you're using React Bootstrap

const Faqs = () => {
  return (
    <div className="faqs-container">
      <h2 className="faqs-title">FAQs</h2>
      <hr className="faqs-divider" />
      <Accordion className='accordion-sss' style={{width: "100%"}} defaultActiveKey={null} flush>
        <Row>
          <Col md={6}>
            <Accordion.Item className='accordion-box'  eventKey="0">
              <Accordion.Header className='accordion-heading'>What industries do you work with?</Accordion.Header>
              <Accordion.Body >
              We work with different industries in both the B2B and B2C sectors, including Finance, FMCG, Real Estate, E-Commerce, Automotive, Education, Healthcare, Law, Finance, and more.</Accordion.Body>
            </Accordion.Item>
          </Col>
          <Col md={6}>
            <Accordion.Item className='accordion-box' eventKey="1">
              <Accordion.Header className='accordion-heading'>Which social media channels do you have experience in?</Accordion.Header>
              <Accordion.Body >
              We have experience in all channels including Facebook,  Instagram, Linkedin, Twitter,  Snapchat, G+, Youtube and TikTok.
              </Accordion.Body>
            </Accordion.Item>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Accordion.Item className='accordion-box' eventKey="2">
              <Accordion.Header className='accordion-heading'>Where is your social media team based?</Accordion.Header>
              <Accordion.Body >
              All our social media team members are based in our Dubai office.
                </Accordion.Body>
            </Accordion.Item>
          </Col>
          <Col md={6}>
            <Accordion.Item className='accordion-box' eventKey="3">
              <Accordion.Header className='accordion-heading'>How do I measure ROI on Social Media:
              </Accordion.Header>
              <Accordion.Body >
              There are many ways to measure it; one way is to run social media ads and ensure the tracking codes are setup correctly on your website. Another way is to track manually the requests coming in, ensuring that you or your staff members are tracking each lead until it converts into a sale/
            </Accordion.Body>
            </Accordion.Item>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Accordion.Item className='accordion-box' eventKey="4">
              <Accordion.Header className='accordion-heading'>Which package should I choose?</Accordion.Header>
              <Accordion.Body >
              It is best to speak with one of our social specialists as they have years of experience and will be able to give you the best advice.
            </Accordion.Body>
            </Accordion.Item>
          </Col>
          <Col md={6}>
            <Accordion.Item className='accordion-box' eventKey="5">
              <Accordion.Header className='accordion-heading'>Do you share monthly reports?
              </Accordion.Header>
              <Accordion.Body >
              Yes, we do, even weekly/ bi-weekly for some of our clients that request to.
            </Accordion.Body>
            </Accordion.Item>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Accordion.Item className='accordion-box' eventKey="6">
              <Accordion.Header className='accordion-heading'>Do you use social media tools for your clients’ accounts?
              </Accordion.Header>
              <Accordion.Body >
              Yes we do, for scheduling we use tools like Hootsuite, Onlypult, for reporting we use mainly the channels themselves as they provide great insights, we also tools for Instagram reporting Union Metrics, and for social listening Hootsuite.
            </Accordion.Body>
            </Accordion.Item>
          </Col>
        </Row>
      </Accordion>
    </div>
  );
};

export default Faqs;
