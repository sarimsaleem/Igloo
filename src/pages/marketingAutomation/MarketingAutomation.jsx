import React, { useEffect } from 'react'
import "./marketingAutomation.css"
import { Col, Container, Row } from 'react-bootstrap';
import marketingAutomation1 from "/public/assets/images/LEADMANAGEMENT1.svg"
import marketingAutomation2 from "/public/assets/images/LEADMANAGEMENT2.svg"
import marketingAutomation3 from "/public/assets/images/LEADMANAGEMENT3.svg"
import CompetitiveAnalysisImg from "/public/assets/images/marketingautomationMatter.jpg";
import Carousel from '../../components/carousel/Carousel'
import About from '../../components/about/About'
import Guidence from '../guidence/Guidence';
import Answers from '../../components/answers/Answers';
import Clients from '../../components/clients/Clients';
import Questions from '../../components/questions/Questions';
import Bounce from '../../components/bounce/Bounce';
import Faqs from '../../components/faqs/Faqs';
import LatestInsight from '../../components/latestInsight/LatestInsight';
import BookConsultation from '../../components/bookConsultation/BookConsultation';
import Offers from '../../components/offers/Offers';

const MarketingAutomation = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = [
    {
      heading: 'Lifecycle Marketing | Marketing Automation',
      description: [
        'All marketers know that there are dozens of moving parts involved when it comes to developing a digital strategy. For omnichannel marketers, staying on top of deadlines and ever-changing trends can feel almost impossible—but not with Igloo.',
        'With the help of our marketing automation services, you can streamline the numerous tasks involved in your advertising campaigns, consumer journey management, lead scoring, analytics, and more. Just give us a call to find out how!',
      ],
      showButton: true,
      buttonText: 'BOOK A FREE CONSULTATION',
    },
  ];

  const guidence = [
    {
      id: 0,
      heading: "What is Marketing Automation and Why Does it Matter?",
      description: [
        "While many businesses are aware of marketing automation, few have a perfectly clear idea of how it can help with growth and scalability.",
        "At Igloo, we define marketing automation as using software to automate repetitive marketing tasks. We typically integrate this software with your customer relationship management (CRM) protocols to nurture your leads throughout various stages of the consumer lifecycle.",
        "By investing in our marketing automation services as early as the development stage, you can reap the following benefits in the long run."
      ],
    },
    {
      id: 1,
      image: "marketingAutomation1.svg",
      title: "Improved Efficiency",
      description:
        "By reducing staffing costs through automation, we can help you develop a more efficient and productive internal process. With our help, your team can focus more on its creative output and make bigger decisions.",
    },
    {
      id: 2,
      image: "marketingAutomation2.svg",
      title: "Scalability",
      description:
        "Did we mention that our marketing automation systems are highly scalable? We develop our automation strategies using scalable tools that, more often than not, price by demand so you only ever pay for features you use.",
    },
    {
      id: 3,
      image: "marketingAutomation3.svg",
      title: "Personalized Marketing Strategy",
      description:
        "The beauty of marketing automation is its ability to make your buyer communications feel more personal. We help you craft meaningful messages to targeted audiences, segmenting them according to behavior and preferences. Then, we use this information to track your most engaged leads and win their business.",
    },
    {
      id: 4,
      image: "marketingAutomation4.svg",
      title: "Accurate Insights",
      description:
        "Speaking of tracking, part of our marketing automation scheme is more accurate reporting. We can reduce human error and simplify your more cumbersome tasks through automation software. Overall, you’ll get a more detailed look at your marketing strategy’s friction points and learn how to improve them.",
    },
  ];

  const answers = {
    heading: "Succeed by Automating Your Marketing Strategies",
    description: [
      "Ask yourself: could your inbound marketing strategy use improvement? Do your marketing and sales teams feel a little disjointed? Are you not driving enough prospects into your sales funnel?",
      "If you’re struggling to find a way to make your marketing more effective and cost-efficient, our experts at Igloo can help. Book a consultation with us today to find out how we can transform your marketing strategy into a hyper-effective lead-builder!"
    ],
    buttonText: "Book a Free Consultation",
    backgroundImage: "getnotice-bg.jpg",
  };

  const questionData = {
    heading: "Still Have Questions?",
    text: [""],
    buttonText: "Book a Free Consultation",
    backgroundImage: "stillQuestion-banner.jpg",
  };

  const bounceData = [
        {
            image: "section6-7.jpg",
            text: "Igloo being a boutique agency, has high service standards, comparable to any large global agency.",
            heading: "Manuri Nakkawita-Anthonis | Director of Marketing at Bounce Middle East",
        },
        {
            image: "bounce2.png",
            text: "Igloo exceeded our expectations from the start. They built our company website with great professionalism, and we were so impressed that we entrusted them with a marketing campaign to acquire new students. The campaign’s success led us to hand over campaigns for all our schools.",
            heading: "Chantel Matheson | Director of Marketing and Enrollments",
        },
        {
            image: "bounce3.png",
            text: "We’re so happy and thankful to have met the team at Igloo. Honestly, we wouldn’t still be in business without them. They’re not just great at what they do but truly care about our success and always go the extra mile to keep us profitable. Don’t waste your time or money with other agencies.",
            heading: "Dr. Ramita | Founder and CEO",
        },
        {
            image: "bounce4.jpg",
            text: "Igloo helped us grow our business by 500% through various marketing tactics including paid ads, social, SEO, and marketing automation. I highly recommend working with Bassem and his team.",
            heading: "Tariq Abu Samra | Managing Partner",
        },
        {
            image: "bounce5.jpg",
            text: "We hardly need any content revisions, Igloo just gets it right the first time. They understand our brand.",
            heading: "Emily Davis | Brand Manager at Bounce Middle East",
        },
        {
            image: "bounce6.png",
            text: "As leader in our industry, communication, marketing and branding are important part of our day-to-day business. Brand awareness and positioning are of strategic importance and this is best left to experts.The Igloo team have assisted us with our social media activities, marketing and website solutions so far as well as working on special projects.",
            heading: "Romain Liot | Managing Director",
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
        heading="Marketing Automation"
        breadcrumb="Home | Marketing Automation"
        imageUrl="marketingAutomation-carousel.jpg"
      />
      <About data={data} />

      <div className="competetiveanalysis-imageContainer">
        <img src={CompetitiveAnalysisImg} alt="Competitive Analysis" />
      </div>

      <Guidence guidence={guidence} />;
      <Answers
        heading={answers.heading}
        description={answers.description}
        buttonText={answers.buttonText}
        // onButtonClick={handleButtonClick}
        backgroundImage={answers.backgroundImage}
      />
      <Clients />

      <Container style={{paddingBlock: "50px"}}>
        <h1 className='agency-heading' style={{ textAlign: "center" }}>Our Marketing Automation Services
        </h1>
        <div className='heading-underline'></div>
        <p className='agency-description' style={{ color: "var(--sub-text)" }}>
          If you’re looking for the right marketing automation solution to help scale your business, here are the ways we can help.</p>
        <Row className="brandGuideMatter-parent">
          <Col md={1}>
            <div className="brandingServices-icon-parent">
              <img src={marketingAutomation1} alt="Branding Icon" className="brandingServices-icon" />
            </div>
          </Col>
          <Col md={5}>
            <div className="brandingServices-text-parent2">
              <h1 className="brandingServices-text-heading">Lead Management</h1>
              <div className="brandingServices-head-text-separator"></div>
              <p className="brandingServices-text">By tracking where your leads come from and how they behave, we can better position your brand to make the most out of every new impression. This data also helps us pinpoint your most effective keywords and the areas of your marketing strategy that you can improve.</p>
            </div>
          </Col>
          <Col md={1}>
            <div className="brandingServices-icon-parent">
              <img src={marketingAutomation2} alt="Branding Icon" className="brandingServices-icon" />
            </div>
          </Col>
          <Col md={5}>
            <div className="brandingServices-text-parent2">
              <h1 className="brandingServices-text-heading">Competitor Tracking</h1>
              <div className="brandingServices-head-text-separator"></div>
              <p className="brandingServices-text">
                One of the best ways to get ahead of your competitors is to know what they’re doing right—and what you can do better. We keep a close eye on what techniques your competitors employ to improve their SEO and digital campaigns and keep you ahead within your market.</p>
            </div>
          </Col>
        </Row>
        <Row className="brandGuideMatter-parent" style={{ margin: "0" }}>
          <Col md={1}>
            <div className="brandingServices-icon-parent">
              <img src={marketingAutomation3} alt="Branding Icon" className="brandingServices-icon" />
            </div>
          </Col>
          <Col md={10}>
            <div className="brandingServices-text-parent2">
              <h1 className="brandingServices-text-heading">Customer Relationship Management</h1>
              <div className="brandingServices-head-text-separator"></div>
              <p className="brandingServices-text">
                If you think your CRM systems could use some improvement, we can be the solution you need. Our enterprise software allows us to monitor prospect interactions and retrieve vital information that we can use to improve your brand’s long-term relationships.</p>
              <p className="brandingServices-text">
                We can improve your lead generation strategies, automate lead scoring, optimize lifecycle management campaigns and efficiently manage your entire consumer database with this data.</p>
            </div>
          </Col>
        </Row>
      </Container>

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
      <BookConsultation />
    </>
  )
}

export default MarketingAutomation