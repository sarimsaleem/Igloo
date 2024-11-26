import React from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';
const Faqs = () => {
  return (
    <div className="faqs-container">
      <h2 className="faqs-title">FAQs</h2>
      <hr className="faqs-divider" />
      <Accordion className='accordion-sss' style={{ width: "100%" }} defaultActiveKey={null} flush>
        <Row>
          <Col md={6}>
            <Accordion.Item className='accordion-box' eventKey="0">
              <Accordion.Header className='accordion-heading'>Do you guarantee results?</Accordion.Header>
              <Accordion.Body >
                Yes, we do. When digital marketing is done right, then an agency should be able to guarantee results.

              </Accordion.Body>
            </Accordion.Item>
          </Col>
          <Col md={6}>
            <Accordion.Item className='accordion-box' eventKey="1">
              <Accordion.Header className='accordion-heading'>What industries do you work with?
              </Accordion.Header>
              <Accordion.Body >
                We work with various industries including FMCG, E-Commerce, Real Estate, Automotive, Healthcare, Education, Law, Finance, and more.
              </Accordion.Body>
            </Accordion.Item>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Accordion.Item className='accordion-box' eventKey="2">
              <Accordion.Header className='accordion-heading'>Do you share monthly reports?              </Accordion.Header>
              <Accordion.Body >
                Yes, we do. We also share a real-time report that our clients can access 24/7 through a link.
              </Accordion.Body>
            </Accordion.Item>
          </Col>
          <Col md={6}>
            <Accordion.Item className='accordion-box' eventKey="3">
              <Accordion.Header className='accordion-heading'>Which digital marketing channels we should invest in?
              </Accordion.Header>
              <Accordion.Body >
                The answer varies from business to business, it’s better for some businesses to focus on push marketing like Social Media & Display Ads, and some on Search Ads and SEO.
              </Accordion.Body>
            </Accordion.Item>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Accordion.Item className='accordion-box' eventKey="4">
              <Accordion.Header className='accordion-heading'>Where is your digital marketing team based?
              </Accordion.Header>
              <Accordion.Body >
                Our team is based in Dubai, France, UK, US, Serbia, Poland, India, and Lebanon.
              </Accordion.Body>
            </Accordion.Item>
          </Col>
          <Col md={6}>
            <Accordion.Item className='accordion-box' eventKey="5">
              <Accordion.Header className='accordion-heading'>What is better SEO or Google Ads?
              </Accordion.Header>
              <Accordion.Body >
                Both are good. It depends if you are looking for quick results or long-term. Google Ads can go live immediately and started generating sales, while SEO takes months to start generating you a good amount of traffic and sales. SEO traffic quality is usually more qualified as the users that know the difference normally don’t trust ads.
              </Accordion.Body>
            </Accordion.Item>
          </Col>
        </Row>
      </Accordion>
    </div>
  );
};

export default Faqs;
