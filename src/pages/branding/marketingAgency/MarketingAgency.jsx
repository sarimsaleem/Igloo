import React from 'react';
import './marketingagency.css';
import { Col, Row } from 'react-bootstrap';

const MarketingAgency = () => {
  return (
    <div className='marketingagency'>
      <h1 className='agency-heading'>Are you looking for the best Branding Agency in Dubai? Look no further.
      </h1>
      <div className='heading-underline'></div>
      <p className='agency-description'>
        The Igloo branding team has worked with B2B, B2C, and e-commerce businesses across the region and beyond for over 15 years. We’ve launched hundreds of successful campaigns and helped our clients exceed their business goals through branding
      </p>
      <Row style={{marginTop:"50px"}}>
        <Col md={4}>
          <div className="agency-column">
            <h4>Discovery</h4>
            <p>Our creative team will meet with you to discuss your needs, vision, and objectives. This will give us a sense of where your brand is now and where you want to take it in the future.</p>
            <p>In this stage, we are able to discover market needs, customer pain points, and key areas where your business can grow. All this information is summarized in a brief.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="agency-column">
            <h4>Research</h4>
            <p>While not every project requires market research, we always make it a point to understand the environment in which your business operates.
            </p>
            <p>
              When needed, we work with our research partners to deep dive and generate insights around your market. We use a variety of research methods and cutting-edge tools to ensure we get the right information and arrive at the correct conclusions.
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div className="agency-column">
            <h4>Positioning</h4>
            <p>Once we’ve done the groundwork, we develop a framework for messaging and positioning. This will serve as the strategic foundation of the brand. The objective of this exercise is to develop a unified voice and consistent messaging across all products and platforms within the business.
            </p>
            <p>This allows us to align all business priorities under a single, streamlined brand identity.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MarketingAgency;
