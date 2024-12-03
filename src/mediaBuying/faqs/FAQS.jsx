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
              <Accordion.Header className='accordion-heading'>What industries do you work with?
              </Accordion.Header>
              <Accordion.Body >
              We work with all industries in both B2B and B2C businesses. We have serviced over 150 clients to date with their PPC needs.
              </Accordion.Body>
            </Accordion.Item>
          </Col>
          <Col md={6}>
            <Accordion.Item className='accordion-box' eventKey="1">
              <Accordion.Header className='accordion-heading'>Do you sell Google and Social Media Ads Packages?
              </Accordion.Header>
              <Accordion.Body >
              We create tailor-made packages for our clients, recognizing that every business has unique needs.
            </Accordion.Body>
            </Accordion.Item>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Accordion.Item className='accordion-box' eventKey="2">
              <Accordion.Header className='accordion-heading'>What industries do you work with?
              </Accordion.Header>
              <Accordion.Body >
              We work with all industries in both B2B and B2C businesses. We have serviced over 150 clients to date with their PPC needs.
</Accordion.Body>
            </Accordion.Item>
          </Col>
          <Col md={6}>
            <Accordion.Item className='accordion-box' eventKey="3">
              <Accordion.Header className='accordion-heading'>Does your team create the ads and content?
              </Accordion.Header>
              <Accordion.Body >
              That depends on the client’s needs. In short, yes we do; we have a team of creative writers, designers, and videographers to assist you with your needs.
            </Accordion.Body>
            </Accordion.Item>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Accordion.Item className='accordion-box' eventKey="4">
              <Accordion.Header className='accordion-heading'>Where is your PPC Team based?
              </Accordion.Header>
              <Accordion.Body > 
              Client-facing and select backend staff are located in our physical offices in Dubai and Miami, while the rest of our backend team works from various offices in countries such as Lebanon, Egypt, Macedonia, Poland, and England.
            </Accordion.Body>
            </Accordion.Item>
          </Col>
          <Col md={6}>
            <Accordion.Item className='accordion-box' eventKey="5">
            <Accordion.Header className='accordion-heading'>What is better SEO or PPC?
              </Accordion.Header>
              <Accordion.Body >
              Both are important. PPC, like Google Ads and Social Media Ads help a business generate traffic immediately and at scale. SEO creates more credibility as users generally trust brands that rank high on search engines organically. The downside of SEO that it takes a long time, and in any time can lose traffic due to competitors winning rankings.
              </Accordion.Body>
            </Accordion.Item>
          </Col>
        </Row>
      </Accordion>
    </div>
  );
};

export default Faqs;
