import React, { useEffect } from 'react'
import "./about.css"
import { Col, Container, Row } from 'react-bootstrap';
import LeaderShip from '../../components/leadership/LeaderShip';
import BookConsultation from '../../components/bookConsultation/BookConsultation';

const About = () => {

  const cartdata = [
    { title: "WE LOVE MARKETING", src: "/assets/images/footercart1.jpg" },
    { title: "WE LOVE TECHNOLOGY", src: "/assets/images/footercart2.jpg" },
    { title: "WE LOVE WINNING", src: "/assets/images/footercart3.jpg" }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (

    <div className="footer-about">

      <div className="footer-about-crousel">
        <div className="footer-about-crousel-text-parent">
          <h3>19</h3>
          <h6>YEARS</h6>
        </div>
        <div className="footer-about-crousel-data">
          <p className=''>WE BELIEVE IN THE POWER OF DESIGN, THE STRENGTH OF STRATEGY, AND THE ABILITY OF TECHNOLOGY TO TRANSFORM BUSINESSES.</p>
        </div>
      </div>

      <div className="footer-about-data">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-8 mx-auto">
              <div className="footer-about-data-p">
                <p>
                  Igloo is a full-service digital marketing company that focuses on driving results via effective and measurable solutions.
                </p>
                <p>
                  We partner with our clients to develop their marketing plans, and set up winning strategies to generate and convert leads.
                </p>
                <p>
                  From designing, developing, and optimizing websites, to increasing sales through tactical digital marketing activities, we work with our clients to raise their brand awareness, generate more sales opportunities, and maximize their marketing budget ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-about-carts">
        <Container>
          <Row className="justify-content-center">
            {cartdata.map((item, index) => (
              <Col xl={4} lg={4} md={4} sm={12} xs={12} key={index}>
                <div className="footer-about-cart-item">
                  <div className="footer-about-cart-img-container">
                    <img src={item.src} alt="" />
                  </div>
                  <div className="footer-about-cart-text-container">
                    <h4>{item.title}</h4>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div className="footer-about-description">
        <div className="footer-about-description-parent">
          <div className="container">
            <div className="footer-about-description-heading">
              <h1>A DIGITAL AGENCY DEDICATED TO CREATING CUTTING-EDGE MARKETING SOLUTIONS.</h1>
            </div>
          </div>
        </div>
        <Container>
          <Row className='text-center'>
          <div className='footer-about-description-subparent'>
            <h2>WHY CHOOSE US?</h2>
            <p>With expertise in all areas across digital marketing, we help our clients optimize their online spend and maximize their revenues. We work with the most sophisticated tools to analyze users’ behaviors and improve our clients’ online presence by optimizing their websites, digital ads, social media marketing, and more.</p>
          </div>
          </Row>
        </Container>
      </div>




      <LeaderShip />
      <BookConsultation />


    </div>
  )
}

export default About




