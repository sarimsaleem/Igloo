import React, { useEffect } from 'react'
import "./podcast.css"
import Carousel from '../../components/carousel/Carousel'
import { Col, Container, Row } from 'react-bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Questions from '../../components/questions/Questions';

const Podcast = () => {

  const podcastData = [
    { title: "Ali Charafeddine Talks Sales, Business Growth, and Where Most Companies Fall Short", src: "/public/assets/images/podcast1.jpg" },
    { title: "Gift-Based Outbound Marketing, Sales, Specialization, and How to Grow Your Marketing Agency​", src: "/public/assets/images/podcast2.jpg" },
    { title: "Switch Foods: How They Developed a Winning Product and How They Grow Their Brand", src: "/public/assets/images/podcast3.jpg" },
    { title: "Tarik Chebib Talks Marketing, Retention, and How Capital.com Became a Top Global Investment Platform", src: "/public/assets/images/podcast4.jpg" },
    { title: "Virality, Social Media Growth, and How Fahad Kaleem Gained Millions of Followers", src: "/public/assets/images/podcast5.jpg" },
    { title: "Sales, Business Development, Management, and How They Combine to Grow Your Business", src: "/public/assets/images/podcast6.jpg" },
  ]

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const questionData = {
    heading: "Still Have Questions?",
    text: [""],
    buttonText: "Book a Free Consultation",
    backgroundImage: "stillQuestion-banner.jpg",
  };


  return (
    <>
      <Carousel
        heading="Masters of marketing podcast"
        breadcrumb="Home | Masters of marketing podcast"
        imageUrl="podcastCarousel.jpg"
        textColor="var(--white)"
      />

      <div className="podcast">
        <Container>
          <div className="podcast-subparent">
            <Row>
              {podcastData.map((item, index) => (
                <Col xs={12} sm={12} md={6} lg={6} key={index} data-aos="fade-up">
                  <div className="podcast-item">
                    <div className="podcast-image-container">
                      <img src={item.src} alt="" />
                    </div>
                    <div className="podcast-text-container">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            <button className='podcast-btn'><a href=""> Older Posts </a></button>
          </div>
        </Container>
      </div>

      <Questions
        heading={questionData.heading}
        text={questionData.text}
        buttonText={questionData.buttonText}
        backgroundImage={questionData.backgroundImage}
      />

    </>
  )
}

export default Podcast