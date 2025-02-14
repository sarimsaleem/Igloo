import React from 'react'
import home1 from '/public/assets/images/webPortfolio1.jpg';
import home2 from '/public/assets/images/webPortfolio2.jpg';
import home3 from '/public/assets/images/webPortfolio3.jpg';
import home4 from '/public/assets/images/webPortfolio4.jpg';
import home5 from '/public/assets/images/webPortfolio5.jpg';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Carousel from '../../components/carousel/Carousel'
import About from '../../components/about/About'
import Portfolio from '../../components/portfolio/Portfolio';
import Guidence from '../guidence/Guidence';
import Answers from '../../components/answers/Answers';
import Questions from '../../components/questions/Questions';
import Bounce from '../../components/bounce/Bounce';
import Offers from '../../components/offers/Offers';
import Faqs from '../../components/faqs/Faqs';
import LatestInsight from '../../components/latestInsight/LatestInsight';
import BookConsultation from '../../components/bookConsultation/BookConsultation';
import Clients from '../../components/clients/Clients';

const Coa = () => {

  const data = [
    {
      heading: 'Conversion Optimization Audit',
      description: [
        "Solving usability problems can be challenging for businesses with homegrown websites if you don’t know how users experience and navigate your site. While learning how your website functions from the inside out is critical, conducting comprehensive conversion and optimization audits will tell you everything you need to know.",
        "At Igloo, we perform 360-degree assessments of your sales paths and determine what factors are keeping you from achieving the conversions you need."
      ],
      showButton: false,
      buttonText: 'BOOK A FREE CONSULTATION',
    },
    {
      heading: 'Conversion Optimization Audit',
      description: [
        "Solving usability problems can be challenging for businesses with homegrown websites if you don’t know how users experience and navigate your site. While learning how your website functions from the inside out is critical, conducting comprehensive conversion and optimization audits will tell you everything you need to know.",
        "At Igloo, we perform 360-degree assessments of your sales paths and determine what factors are keeping you from achieving the conversions you need."
      ],
      showButton: false,
      buttonText: 'BOOK A FREE CONSULTATION',
    },
  ];

  const portfolioColumns = [
    {
      images: [
        { src: home1, alt: 'Work 1' },
        { src: home2, alt: 'Work 5' },
      ],
    },
    {
      images: [
        { src: home5, alt: 'Work 3' },
      ],
    },
    {
      images: [
        { src: home3, alt: 'Work 2' },
        { src: home4, alt: 'Work 4' },
      ],
    },
  ];

  const guidence = [
    {
      id: 0,
      heading: "How We Run Our Conversion Optimization Audits",
      description: [
        "While there is no right way to perform a conversion audit, we take the following steps to determine what might be sabotaging your rates."
      ],
    },
    {
      id: 1,
      image: "coa1.svg",
      title: "Know Your Site Objectives",
      description: [
        "For a conversion audit to make sense, you’ll have to set clear, measurable goals. For instance, you might ask yourself whether you want to lower your cart abandonment rate or increase your average order value.",
        "If you have more than one primary objective, we help narrow them down according to priority."]
    },
    {
      id: 2,
      image: "coa2.svg",
      title: "Define Your Target Audience",
      description: ["Target audiences change, and it may not be your ideal customer transacting on your website. As such, we take the time to define who your target customers are—not who you want them to be.",
        "By diving deep into your business’ insights and research, we identify your perfect customer.",]
    },
    {
      id: 3,
      image: "coa3.svg",
      title: "QUALITATIVE AND QUANTITATIVE RESEARCH",
      description: [
        "A combination of qualitative and quantitative research is the key to successful findings. First, we’ll perform a technical review that enumerates:",
        "Which web pages require the most optimization",
        "Baseline metrics like how your website is performing according to traffic channels, landing pages, and other factors",
        "After determining where your customers tend to click out of your page, qualitative data like tracking heatmaps or session recordings can tell you why."
      ],
    },
    {
      id: 4,
      image: "coa4.svg",
      title: "START THE TESTING PROCESS",
      description: ["With your identified qualitative and quantitative research, we can begin testing new elements on your website, paying particular attention to:",
        "What increases the flow of visitors",
        "What metrics will help determine success",
        "What factors can best help you achieve specific metrics",
        "By consistently conducting experiments, we are able to grow your website’s conversion rates in a way that is sustainable and effective."
      ]
    },

  ];

  const answers = {
    heading: "Take the First Step in the Optimization Process",
    description: [
      "A conversion optimization audit is more helpful to your bottom line than you might anticipate. With our help, you can uncover your website’s most critical friction points and work towards a more seamless user experience and stunning website.",
      "Book a free consultation with Igloo today if you think your website could use a diagnosis and much-needed makeover."
    ],
    buttonText: "Book a Free Consultation",
    backgroundImage: "cmpetetive-crousel.jpg",
  };

  const questionData = {
    heading: "Still Have Questions?",
    text: [""],
    buttonText: "Book a Free Consultation",
    backgroundImage: "stillQuestion-banner.jpg",
  };

  const bounceData = [
    {
      image:  "section6-7.jpg",
      text: "Igloo being a boutique agency, has high service standards, comparable to any large global agency.",
      heading: "Manuri Nakkawita-Anthonis | Director of Marketing at Bounce Middle East",
    },
    {
      image:  "section6-7.jpg",
      text: "Our partnership with Igloo has revolutionized our marketing strategies.",
      heading: "John Doe | CEO of Bounce Middle East",
    },
    {
      image:  "section6-7.jpg",
      text: "Igloo’s personalized approach is unmatched in the industry.",
      heading: "Jane Smith | Marketing Lead at Bounce Middle East",
    },
    {
      image:  "section6-7.jpg",
      text: "With Igloo, we achieved milestones we never thought possible.",
      heading: "Michael Brown | Operations Manager at Bounce Middle East",
    },
    {
      image:  "section6-7.jpg",
      text: "Igloo's creativity and execution are truly world-class.",
      heading: "Emily Davis | Brand Manager at Bounce Middle East",
    },
    {
      image:  "section6-7.jpg",
      text: "Collaborating with Igloo was a game changer for our business.",
      heading: "Sophia Wilson | VP of Marketing at Bounce Middle East",
    },
  ];

  const faqData = [
    {
      id: 0,
      question: "Do you guarantee results?",
      answer: "Yes, we do. When digital marketing is done right, then an agency should be able to guarantee results.",
    },
    {
      id: 1,
      question: "Which digital marketing channels we should invest in?",
      answer: "The answer varies from business to business, it’s better for some businesses to focus on push marketing like Social Media & Display Ads, and some on Search Ads and SEO.",
    },
    {
      id: 2,
      question: "What industries do you work with?",
      answer: "We work with various industries including FMCG, E-Commerce, Real Estate, Automotive, Healthcare, Education, Law, Finance, and more.",
    },
    {
      id: 3,
      question: "Where is your digital marketing team based?",
      answer:
        "Client-facing and select backend staff are located in our physical offices in Dubai and Miami, while the rest of our backend team works from various offices in countries such as Lebanon, Egypt, India, Macedonia, Poland, and England.",
    },
    {
      id: 4,
      question: "Do you share monthly reports?",
      answer: "Yes, we do. Additionally, we provide a real-time report that clients can access 24/7 through a dedicated link.",
    },
    {
      id: 5,
      question: "What is better SEO or Google Ads?",
      answer: "Both are good. It depends if you are looking for quick results or long-term. Google Ads can go live immediately and started generating sales, while SEO takes months to start generating you a good amount of traffic and sales. SEO traffic quality is usually more qualified as the users that know the difference normally don’t trust ads.",
    },
  ];

  return (
    <>
      <Carousel
        heading="Conversion Optimization Audit"
        breadcrumb="Home | Conversion Optimization Audit"
        imageUrl="cmpetetive-crousel.jpg"
      />
      <About data={data} />
      <Container>
        <Row>
          <Col md={6} style={{ display: "flex", justifyContent: "center" }}>
            <ul class="CompetetiveDetail-ul">
              <li>Clean up and correct data</li>
              <li>Pinpoint areas of improvement</li>
              <li>Provide insights into regional trends</li>
            </ul>
          </Col>
          <Col md={6} style={{ display: "flex", justifyContent: "center" }}>
            <ul class="CompetetiveDetail-ul">
              <li>Identify behavioral patterns by returning customers</li>
              <li>Reduce risks when making business decisions</li>
              <li>Uncover significant revenue growth opportunities</li>
            </ul>
          </Col>
          <div className="about-btn-parent">
            <Button className="about-btn">
              BOOK A FREE CONSULTATION
            </Button>
          </div>
        </Row>
      </Container>
      <Portfolio
        columns={portfolioColumns}
        heading="PORTFOLIO"
        buttonText="View All Portfolio"
      />
      <Guidence guidence={guidence} />
      <Answers
        heading={answers.heading}
        description={answers.description}
        buttonText={answers.buttonText}
        // onButtonClick={handleButtonClick}
        backgroundImage={answers.backgroundImage}
      />
      <Clients />
      <Questions
        heading={questionData.heading}
        text={questionData.text}
        buttonText={questionData.buttonText}
        backgroundImage={questionData.backgroundImage}
      />
      <Bounce slides={bounceData} />
      <Offers />
      <Faqs faqData={faqData} />
      <LatestInsight />
      {/* <BookConsultation /> */}
    </>
  )
}

export default Coa