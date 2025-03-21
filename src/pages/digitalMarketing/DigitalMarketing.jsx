import React, { useEffect } from 'react'
import "./digitalMarketing.css"
import Carousel from '../../components/carousel/Carousel'
import About from '../../components/about/About';
import { Col, Container, Row } from 'react-bootstrap'
import { AiOutlineGlobal } from 'react-icons/ai'
import { IoMegaphoneOutline } from 'react-icons/io5'
import { GiAirBalloon, GiOnTarget } from 'react-icons/gi'
import { PiRecycleThin, PiToolboxLight } from 'react-icons/pi'
import { BsFileBarGraph } from 'react-icons/bs'
import Guidence from '../guidence/Guidence';
import Answers from '../../components/answers/Answers';
import Clients from '../../components/clients/Clients';
import CaseStudy from '../../components/caseStudy/CaseStudy';
import Services from '../../components/services/Services';
import Bounce from '../../components/bounce/Bounce';
import Offers from '../../components/offers/Offers';
import Faqs from '../../components/faqs/Faqs';
import LatestInsight from '../../components/latestInsight/LatestInsight';
import BookConsultation from '../../components/bookConsultation/BookConsultation';
import Questions from '../../components/questions/Questions';


const DigitalMarketing = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = [
    {
      heading: 'Digital Marketing Agency',
      description: [
        'Not every company can run its own marketing campaigns; and not every company should. We live in a world where work is hyper-specialized and fast-paced that it no longer makes sense to manage everything in-house.',
        'At Igloo, we focus on what we do best so that our clients can focus on what they do best.',
        'We are an award-winning digital marketing agency based in Dubai with over a decade of experience running successful digital marketing campaigns. Our services cover digital marketing end-to-end from strategy to execution to automation.'
      ],
      showButton: true,
      buttonText: 'BOOK A FREE CONSULTATION',
    },
  ];

  const guidence = [
    {
      id: 0,
      heading: "Why Brand Guides Matter",
      description: [
        "Did you know that cohesion and consistency play a significant role in developing brand trust? If you aren’t already convinced that our branding services are relevant to your business, here are a few reasons why our help is essential.",
      ],
    },
    {
      id: 1,
      image: "digitalMarketingQuidence1.svg",
      title: "Develop Lean Strategies with Fewer Objectives",
      description: [
        "Successful digital marketing is about knowing when and where (and when NOT and where NOT) to spend your advertising dollars.",
        "As a data-driven digital agency, we take a less-is-more approach to digital strategy. We believe that the things we decide to do are equally as important as the things we decide not to do. There are dozens of marketing channels, strategies, and tools out there, but it’s important to focus fire on those that bring dependable results and ROI. "
      ]
    },
    {
      id: 2,
      image: "digitalMarketingQuidence2.svg",
      title: "Close Resource Gaps",
      description: [
        "Every client (regardless of size or budget) operates with finite resources.",
        "An experienced digital agency can get the most out of those resources and fill in where there are gaps. Whether you’re looking for an agency to provide a full suite of marketing services or simply one to complement your in-house marketing team, it’s important that they are able to maximize your resources, complement your strengths, and cover areas where there are gaps."
      ]
    },
    {
      id: 3,
      image: "digitalMarketingQuidence3.svg",
      title: "Keep up with Marketing Trends",
      description: [
        "Managing your digital marketing is one thing. Keeping abreast with the latest marketing trends is quite another.",
        "Digital marketing strategies that work well today may no longer work tomorrow. Even consumer behavior and marketing trends evolve over time. Remember the ice bucket challenge?",
        "As a full-time digital marketing agency in Dubai, we keep an eye on the latest developments in our space so that you don’t have to. Instead, you can focus your time on innovations and trends in your own industry."
      ]
    },
    {
      id: 4,
      image: "digitalMarketingQuidence4.svg",
      title: "Gain Access to the Right Tools",
      description: [
        "Modern digital marketing requires a high level of technological expertise. Over the years, we’ve seen various tools become part and parcel of everyday digital marketing work, whether it’s CRM, SEO, email marketing, web analytics, and many more.",
        "While many of these tools are readily accessible and affordable, onboarding a suite of tools and managing them takes time and effort that could be better spent on your core business.",
        "A competent digital marketing agency will already have best-in-class tools handy. Plus, they’ll take care of the day-to-day management of each tool."]
    },
  ];

  const answers = {
    heading: "Supercharge your digital experiences with the right digital marketing agency today",
    description: [
      "A digital marketing agency can help you take your marketing to the next level without having to hire a full-time marketing team.",
      "We at Igloo take a hands-on approach to digital marketing so that you can improve your marketing initiatives, grow your marketing channels, and ultimately reach the customers who matter most to your brand.",
      "If you’re unsure what kind of digital marketing agency your business needs, please reach out to our experts at Igloo today."
    ],
    buttonText: "Book a Free Consultation",
    backgroundImage: "getnotice-bg.jpg",
  };

  const caseStudyData = [
    {
      image: "section6-6.jpg",
      heading: "Digital Marketing Case Study",
      subHead: "Leading University in Dubai | UAE",
      text: "To increase the number of students through online marketing.",
    },
    {
      image: "section6-6.jpg",
      heading: "Digital Marketing Case Study",
      subHead: "Largest Entertainment Park in the GCC  UAE/ KSA/ Qatar/ Lebanon",
      text: "To increase the number of customers through online marketing",
    },
    {
      image: "section6-6.jpg",
      heading: "Digital Marketing Case Study",
      subHead: "To increase revenues with online marketing.",
      text: "To increase revenues with online marketing.",
    },
  ];

  const servicesData = [
    {
      id: 1,
      image: "DigitalMarketingServices-1.svg",
      heading: "Increase brand trust and authority",
      description: ["Consumers resonate with brands they can trust and look to for advice.",
        "Our objective when building brands is to build trust and establish authority in the market. We believe that digital marketing extends far beyond sales outreach. Rather, it is about educating consumers and allowing them to make an informed purchasing decision.  "
      ]
    },
    {
      id: 2,
      image: "DigitalMarketingServices-2.svg",
      heading: "Improve search presence",
      description: ["Everyday billions of searches happen on search engines like Google and Bing. We make sure your customers can find you on the front pages of search results.",
        " We have a proven track record helping brands establish a strong search presence on high-value keywords, whether it’s for pay-per-click advertising or organic search (i.e. SEO)."]
    },
    {
      id: 3,
      image: "DigitalMarketingServices-3.png",
      heading: "Build a social media following",
      description: ["If you’ve noticed, many of today’s iconic brands have invested heavily on social media and the network of influencers that help drive their social media presence.",
        "We’ve been working on social media for close to a decade and we have a strong track record running campaigns and building communities on various social media channels."
      ]
    },
    {
      id: 4,
      image: "DigitalMarketingServices-4.svg",
      heading: "Increase website traffic",
      description: ["Your website is potentially your most powerful lead magnet.",
        "A well-designed website can engage and re-engage your customers. Moreover, it allows you to design experiences around your products and services.",
        "At Igloo, we’ve invested heavily in web design and development so that we can help our clients create engaging customer experiences and smooth customer journeys."
      ]
    },
    {
      id: 5,
      image: "DigitalMarketingServices-5.svg",
      heading: "Use data to drive your digital marketing",
      description: ["We’re no strangers to the role data plays in digital marketing. Without data, brands fly blind, relying only on intuition and experience to fuel their ideas. With data, they can run campaigns based on facts and adjust their initiatives depending on facts.",
        "At Igloo, data dictates what we do. We constantly track important customer data points and conduct experiments to refine our strategies."
      ]
    },
  ];

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
        heading="DIGITAL MARKETING AGENCY IN DUBAI"
        breadcrumb="Home | DIGITAL MARKETING AGENCY IN DUBAI"
        imageUrl="digitalmarkering-crousel.jpg"
        textColor="var(--white)"
      />
      
      <About data={data} />

      <Container>
        <h1 className='main-heading'>Why Hire a Digital Marketing Agency?</h1>
        <div className='heading-underline'></div>
        <p className='about-description'>
          Not all businesses have the time, resources, or expertise to manage their own digital marketing campaigns. However, all businesses need to market their products and services. Hiring a digital marketing agency will make sense for you if:</p>
        <Row>
          <Col md={4}>
            <div className="digitalmarketing">
              <h4 className='digitalmarketing-heading'><span className='digitalmarketing-heading-span'>01</span></h4>
              <p className='digitalmarketing-detail'>You want to focus your time and resources on your core competencies.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="digitalmarketing">
              <h4 className='digitalmarketing-heading'><span className='digitalmarketing-heading-span'>02</span></h4>
              <p className='digitalmarketing-detail'>You want to run digital campaigns without having to manage day-to-day operations.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="digitalmarketing">
              <h4 className='digitalmarketing-heading'><span className='digitalmarketing-heading-span'>03</span></h4>
              <p className='digitalmarketing-detail'>You want to delegate your marketing efforts to an experienced digital marketing agency.</p>
            </div>
          </Col>
        </Row>
      </Container>

      <Guidence guidence={guidence} />;
      <Answers
        heading={answers.heading}
        description={answers.description}
        buttonText={answers.buttonText}
        // onButtonClick={handleButtonClick}
        backgroundImage={answers.backgroundImage}
      />
      <Clients />
      <CaseStudy caseStudy={caseStudyData} />
      <Services heading="Our Digital Marketing Services" text="Our digital marketing agency provides end-to-end digital marketing services from strategy to execution, automation, and beyond." servicesData={servicesData} />


      <div style={{ paddingBlock: "40px" }}>
        <div className='digitalMarketingServices'>
          <h1 className='brandingServices-heading'>WHAT DIGITAL CHANNELS IGLOO OFFERS AS A DIGITAL MARKETING AGENCY?</h1>
          <div className='heading-underline'></div>
          <p className='digitalmarketing-discription' style={{ color: "var(--sub-text)" }}>
            We are an award-winning digital marketing agency that proves 360-degree solutions through multiple services including pay per click advertising, SEO, social media marketing, web development, branding, influencer marketing, marketing automation, and more.
          </p>
          <h4 className='digitalMarketingServices-subheading'>CLICK THE LINKS BELOW TO FIND OUT MORE ABOUT OUR SERVICES.</h4>
        </div>

        <Container>
          <Row>
            <div className="homesection5-icons-parent">
              <Col xs={12} sm={4} md={4} lg={2} xl={2}>
                <div className="homesection5-icon-parent">
                  <GiAirBalloon className="homesection5-icons" />
                  <p className='homesection5-text'>Branding</p>
                </div>
              </Col>
              <Col xs={12} sm={4} md={4} lg={2} xl={2}>
                <div className="homesection5-icon-parent">
                  <PiRecycleThin className="homesection5-icons" />
                  <p className='homesection5-text'>Social Media</p>
                </div>
              </Col>
              <Col xs={12} sm={4} md={4} lg={2} xl={2}>
                <div className="homesection5-icon-parent">
                  <AiOutlineGlobal className="homesection5-icons" />
                  <p className='homesection5-text'>Web design</p>
                </div>
              </Col>
              <Col xs={12} sm={4} md={4} lg={2} xl={2}>
                <div className="homesection5-icon-parent">
                  <BsFileBarGraph className="homesection5-icons" />
                  <p className='homesection5-text'>SEO</p>
                </div>
              </Col>
              <Col xs={12} sm={4} md={4} lg={2} xl={2}>
                <div className="homesection5-icon-parent">
                  <IoMegaphoneOutline className="homesection5-icons" />
                  <p className='homesection5-text'>Google Ads</p>
                </div>
              </Col>
              <Col xs={12} sm={4} md={4} lg={2} xl={2}>
                <div className="homesection5-icon-parent">
                  <GiOnTarget className="homesection5-icons" />
                  <p className='homesection5-text'>Marketing consultancy</p>
                </div>
              </Col>
            </div>
          </Row>
        </Container>
      </div>


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

export default DigitalMarketing