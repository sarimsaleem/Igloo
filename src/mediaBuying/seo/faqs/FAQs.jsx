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
              <Accordion.Header className='accordion-heading'>Can I Choose The Keywords To Rank On?
              </Accordion.Header>
              <Accordion.Body >
              Yes, you can. We collaborate with our clients to help them rank for relevant keywords. Using comprehensive keyword research conducted at the start of each project, we focus on targeting high-search-volume keywords to maximize visibility and impact.
            </Accordion.Body>
            </Accordion.Item>
          </Col>
          <Col md={6}>
            <Accordion.Item className='accordion-box' eventKey="1">
              <Accordion.Header className='accordion-heading'>DDoes your team work with global clients?
              </Accordion.Header>
              <Accordion.Body >
              As an SEO company in Dubai and Miami, the majority of our clients come from those two areas. However, we do work with a variety of global clients as well as multinationals building their presence in the region.
            </Accordion.Body>
            </Accordion.Item>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Accordion.Item className='accordion-box' eventKey="2">
              <Accordion.Header className='accordion-heading'>What Third Party Tools Do You Use?
              </Accordion.Header>
              <Accordion.Body >
              We utilize tools like Ahrefs, SEMrush, Moz, and Ubersuggest to enhance our strategies. These tools help us conduct keyword research, stay updated on trending keywords, monitor referring domains and backlinks, track competitor performance and activities, and much more.
            </Accordion.Body>
            </Accordion.Item>
          </Col>
          <Col md={6}>
            <Accordion.Item className='accordion-box' eventKey="3">
              <Accordion.Header className='accordion-heading'>Is SEO just for Google?
              </Accordion.Header>
              <Accordion.Body >
              With the help of the right SEO agency, SEO can help you rank not only at the top of Google, but also on other search engines such as Bing, DuckDuckGo, and even YouTube. (Yes, YouTube is considered a search engine)
            </Accordion.Body>
            </Accordion.Item>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Accordion.Item className='accordion-box' eventKey="4">
              <Accordion.Header className='accordion-heading'>Where Is Your SEO Team Based?
              </Accordion.Header>
              <Accordion.Body > 
              Client-facing and select backend staff are located in our physical offices in Dubai and Miami, while the rest of our backend team works from various offices in countries such as Lebanon, Egypt, Macedonia, Poland, and England.
            </Accordion.Body>
            </Accordion.Item>
          </Col>
          <Col md={6}>
            <Accordion.Item className='accordion-box' eventKey="5">
            <Accordion.Header className='accordion-heading'>How can you help my on-page SEO?
              </Accordion.Header>
              <Accordion.Body >
              We go through your entire website, adjusting and optimizing title tags, navigation, loading speeds, site content and other technical elements. We also perform comprehensive keyword research and content creation based on these keywords to help your website climb up the rankings.
            </Accordion.Body>
            </Accordion.Item>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Accordion.Item className='accordion-box' eventKey="4">
              <Accordion.Header className='accordion-heading'>Do you offer packages?
              </Accordion.Header>
              <Accordion.Body > 
              We provide tailor-made packages and customized solutions designed to meet your specific needs.
            </Accordion.Body>
            </Accordion.Item>
          </Col>
          <Col md={6}>
            <Accordion.Item className='accordion-box' eventKey="5">
            <Accordion.Header className='accordion-heading'>How can you help my off-page SEO?
              </Accordion.Header>
              <Accordion.Body >
              We take the time to carefully study your current portfolio of backlinks, published content, social media shares, and other SEO ranking factors outside your website in order to effectively increase its positive off-page ranking factors and help your website reach the very top of Google.
        </Accordion.Body>
            </Accordion.Item>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Accordion.Item className='accordion-box' eventKey="4">
              <Accordion.Header className='accordion-heading'>Do you offer flexible payment terms?
              </Accordion.Header>
              <Accordion.Body > 
              Yes we do. We will share our offering when we are in contact with you.
            </Accordion.Body>
            </Accordion.Item>
          </Col>
          <Col md={6}>
            <Accordion.Item className='accordion-box' eventKey="5">
            <Accordion.Header className='accordion-heading'>How can you help with technical SEO?
              </Accordion.Header>
              <Accordion.Body >
              Any SEO agency will tell you that technical SEO is one of the most important efforts in optimizing your website for search engines, but not every agency will have the technical skills and know-how needed to efficiently identify and fix issues such as slow speed, broken links, or non-secured websites.
            </Accordion.Body>
            </Accordion.Item>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Accordion.Item className='accordion-box' eventKey="4">
              <Accordion.Header className='accordion-heading'>How does working with an SEO agency help me?
              </Accordion.Header>
              <Accordion.Body > 
              Working with an SEO agency can help you significantly improve your rankings on search engines over time, helping you acquire more customers without spending a lot of money on paid media.

            </Accordion.Body>
            </Accordion.Item>
          </Col>
          <Col md={6}>
            <Accordion.Item className='accordion-box' eventKey="5">
            <Accordion.Header className='accordion-heading'>Which type of SEO is more important: on-page, off-page or technical?
              </Accordion.Header>
              <Accordion.Body >
              Each website’s situation is completely unique. It’s not a matter of whether one is more important than the other. The more likely scenario is that your website may desperately need work on its technical SEO, and that simply enhancing that aspect could already lead to great results. It always depends on your website’s weaknesses and strengths.
            </Accordion.Body>
            </Accordion.Item>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Accordion.Item className='accordion-box' eventKey="4">
              <Accordion.Header className='accordion-heading'>What is the ROI of working with an SEO company?
              </Accordion.Header>
              <Accordion.Body > 
              Working with an SEO agency allows you to build up your SEO rankings, leading to more organic, or “free”, traffic to your website. The ROI of SEO is always considered in the long-term, and the exact return you’ll get heavily depends on the quality of your website. It’s no use bringing traffic to your website if customers aren’t able to easily navigate it or make a purchase.
            </Accordion.Body>
            </Accordion.Item>
          </Col>
          <Col md={6}>
            <Accordion.Item className='accordion-box' eventKey="5">
            <Accordion.Header className='accordion-heading'>Can an SEO agency generate organic leads for my business?
              </Accordion.Header>
              <Accordion.Body >
              When you partner with the right team and invest strategically in on-page, off-page, and technical SEO, you’ll witness the results; an organic flow of qualified leads steadily entering your CRM systems
            </Accordion.Body>
            </Accordion.Item>
          </Col>
        </Row>
      </Accordion>
    </div>
  );
};

export default Faqs;
