import React from 'react'
import "./keyComponentCreation.css"
import emailMarketinImg from "../../../assets/Competitive-Analysis-img_1.jpg";
import { Col, Container, Row } from 'react-bootstrap';
import emailMarketinImg1 from "../../../assets/keyComponent1.svg";
import emailMarketinImg2 from "../../../assets/keyComponent2.svg";
import keyComponent3 from "../../../assets/keycomponent3.png";
import emailMarketinImg4 from "../../../assets/keyComponent4.svg";


const KeyComponentCreation = () => {
  return (
      <div>
        <div className="competetiveanalysis-imageContainer">
          <img src={emailMarketinImg} alt="Competitive Analysis" />
        </div>
        <Container >
          <h1 className='agency-heading' style={{ textAlign: "center", marginTop: "40px" }}>Key Components of Our Content Creation Efforts</h1>
          <div className='heading-underline'></div>
          <p className='agency-description' style={{ color: "#494646" }}>
          Content creation provides an endless stream of opportunities—so how do you choose where to begin? Here are a few ways we can help.</p>
          <Row className="brandGuideMatter-parent">
            <Col md={1}>
              <div className="brandingServices-icon-parent">
                <img src={emailMarketinImg1} alt="Branding Icon" className="brandingServices-icon" />
              </div>
            </Col>
            <Col md={5}>
              <div className="brandingServices-text-parent2">
                <h1 className="brandingServices-text-heading">Keyword Research</h1>
                <div className="brandingServices-head-text-separator"></div>
                <p className="brandingServices-text">
                If you want to start a blog or copy-forward content campaign, we help you optimize your pages by performing comprehensive keyword research. We consider multiple factors like user intent, search volume, competition, and trends to ensure your website gets maximum visibility.</p>
              </div>
            </Col>
            <Col md={1}>
              <div className="brandingServices-icon-parent">
                <img src={emailMarketinImg2} alt="Branding Icon" className="brandingServices-icon" />
              </div>
            </Col>
            <Col md={5}>
              <div className="brandingServices-text-parent2">
                <h1 className="brandingServices-text-heading">Content Development</h1>
                <div className="brandingServices-head-text-separator"></div>
                <p className="brandingServices-text">
                To develop a strategy, we determine what content types best suit your brand, whether they be blog posts, infographics, videos, brochures, or otherwise. Then, we create a content calendar for your review and help you keep track of when you’re publishing materials.</p>
              </div>
            </Col>
          </Row>
          <Row className="brandGuideMatter-parent">
            <Col md={1}>
              <div className="brandingServices-icon-parent">
                <img src={keyComponent3} alt="Branding Icon" className="brandingServices-icon" />
              </div>
            </Col>
            <Col md={5}>
              <div className="brandingServices-text-parent2">
                <h1 className="brandingServices-text-heading">Optimization and Promotion</h1>
                <div className="brandingServices-head-text-separator"></div>
                <p className="brandingServices-text">
                Even the most thoroughly crafted content only makes an impact when it’s placed in front of the right people. As such, we make sure to optimize your content so it ranks. We meticulously craft and implement meta tags and descriptions to ensure your content has the potential to show up on Google’s first page.</p>
              </div>
            </Col>
            <Col md={1}>
              <div className="brandingServices-icon-parent">
                <img src={emailMarketinImg4} alt="Branding Icon" className="brandingServices-icon" />
              </div>
            </Col>
            <Col md={5}>
              <div className="brandingServices-text-parent2">
                <h1 className="brandingServices-text-heading">Reporting and Insights</h1>
                <div className="brandingServices-head-text-separator"></div>
                <p className="brandingServices-text">
                The best—and only—way to measure your campaign’s success is through tangible results. We study your content pages and track how many leads you’re garnering throughout the campaign. We also measure these results against your content goals and KPIs to determine what adjustments we need to make.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
  )
}

export default KeyComponentCreation