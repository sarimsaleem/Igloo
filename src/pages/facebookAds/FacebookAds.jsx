import React, { useEffect } from 'react'
import home1 from '/public/assets/images/fbAdsPort1.jpg';
import home2 from '/public/assets/images/fbAdsPort2.jpg';
import home3 from '/public/assets/images/fbAdsPort3.jpg';
import home4 from '/public/assets/images/fbAdsPort4.jpg';
import home5 from '/public/assets/images/fbAdsPort5.jpg';
import home6 from '/public/assets/images/fbAdsPort6.jpg';
import { Button, Col, Container, Row } from 'react-bootstrap';
import brandGuideMatter1 from "/public/assets/images/insight1.svg"
import brandGuideMatter2 from "/public/assets/images/insight2.svg"
import brandGuideMatter3 from "/public/assets/images/insight3.svg"
import brandGuideMatter4 from "/public/assets/images/insight4.svg"
import Carousel from '../../components/carousel/Carousel'
import About from '../../components/about/About'
import Portfolio from '../../components/portfolio/Portfolio';
import Answers from '../../components/answers/Answers';
import Clients from '../../components/clients/Clients';
import Services from '../../components/services/Services';
import Questions from '../../components/questions/Questions';
import Bounce from '../../components/bounce/Bounce';
import Offers from '../../components/offers/Offers';
import Faqs from '../../components/faqs/Faqs';
import LatestInsight from '../../components/latestInsight/LatestInsight';
import BookConsultation from '../../components/bookConsultation/BookConsultation';

const FacebookAds = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = [
    {
      heading: 'Facebook Ads',
      description: [
        'While the need for a Facebook presence is nothing new, marketing strategies have changed drastically over the last decade. With over 1.56 billion users active on Facebook daily, how you market your brand matters more than ever before.',
        'Facebook is one of the best channels for connecting, engaging, and nurturing new audiences. Your business can thrive on the world’s biggest social media platform with our services. Don’t wait—let us help.',
      ],
      showButton: false,
      buttonText: 'BOOK A FREE CONSULTATION',
    },
    {
      heading: 'Facebook | Advertising for Billions',
      description: [
        'Facebook is a hotbed for advice, inquiries, and reviews. As such, promoting the right content to the right audience is the key to your success. By trusting us to handle your Facebook advertising you can reap the benefits of:',
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
        { src: home3, alt: 'Work 2' },
        { src: home4, alt: 'Work 4' },
      ],
    },
    {
      images: [
        { src: home5, alt: 'Work 3' },
        { src: home6, alt: 'Work 6' },
      ],
    },
  ];

  const answers = {
    heading: "vBe Seen and Heard on the Biggest Social Media Platform",
    description: [
      "While Facebook is home to billions of consumers, you’ll only need to connect with the right ones. Book a consultation with our experts today to find out how you can turn new audiences into high-value prospects."
    ],
    buttonText: "Book a Free Consultation",
    backgroundImage:"cmpetetive-crousel.jpg",
  };

  const servicesData = [
  
  ];

  const questionData = {
    heading: "Still Have Questions?",
    text: [""],
    buttonText: "Book a Free Consultation",
    backgroundImage:"stillQuestion-banner.jpg",
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
        heading="PPC MANAGEMENT AGENCY IN DUBAI"
        breadcrumb="Home | PPC MANAGEMENT AGENCY IN DUBAI"
        imageUrl="cmpetetive-crousel.jpg"
        textColor="var(--white)"
      />
      <About data={data} />

      <Container>
        <Row>
          <Col md={6} style={{display:"flex", justifyContent:"center"}}>
            <ul class="CompetetiveDetail-ul">
              <li>Reaching a broader, more engaged audience</li>
              <li>Remarketing opportunities</li>
              <li>Driving traffic directly to your website</li>
            </ul>
          </Col>
          <Col md={6} style={{display:"flex", justifyContent:"center"}}>
            <ul class="CompetetiveDetail-ul">
              <li>Full-funnel targeting for higher conversions</li>
              <li>Multiple effective ad formats</li>
              <li>Measurable and actionable results</li>
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
      <Services heading="Our Facebook Ad Management Services" text="All businesses can benefit from our Facebook ad management services. In particular, below are the ways we can help your ad campaigns thrive." servicesData={servicesData} />
      
      <Container style={{paddingBottom:"40px"}} >
        <Row className="brandingServices-parent">
          <Col md={12}>
            <div className="brandingServices-text-parent">
              <h1 className="brandingServices-text-heading" style={{paddingTop:"15px"}}>Strategy Development</h1>
              <div className="brandingServices-head-text-separator"></div>
              <p className="brandingServices-text">
                The first step in developing a robust, unbeatable advertising strategy is getting to know your brand. Our specialists first study your past campaigns, identifying successful tactics and building upon ones with potential.</p>
              <p className="brandingServices-text">
                Then, we perform a comprehensive competitor analysis to determine areas you can outperform and overcome. In addition, we analyze content that serves well within your industry.</p>
            </div>
          </Col>
        </Row>


        <Row className="brandingServices-parent">
          <Col md={12}>
            <div className="brandingServices-text-parent" style={{paddingTop:"15px"}}>
              <h1 className="brandingServices-text-heading" >Content Creation</h1>
              <div className="brandingServices-head-text-separator"></div>
              <p className="brandingServices-text">
                Our ad content is always engaging—we create original copy and stunning visuals that make your brand stand out from the rest. We maintain a regular posting schedule and provide clients with editorial calendars that best suit their campaign timelines.</p>
              <p className="brandingServices-text">
                <b>Below are the ad formats we include in our services.</b></p>
            </div>
          </Col>
          <Row className="brandGuideMatter-parent">
            <Col md={1}>
              <div className="brandingServices-icon-parent">
                <img src={brandGuideMatter1} alt="Branding Icon" className="brandingServices-icon" />
              </div>
            </Col>
            <Col md={5}>
              <div className="brandingServices-text-parent2">
                <h1 className="brandingServices-text-heading">
                  Single Image Ads</h1>
                <div className="brandingServices-head-text-separator"></div>
                <p className="brandingServices-text">These standard ad formats include a single image, headline, carefully-crafted caption, link description, and powerful call-to-action (CTA).</p>
              </div>
            </Col>
            <Col md={1}>
              <div className="brandingServices-icon-parent">
                <img src={brandGuideMatter2} alt="Branding Icon" className="brandingServices-icon" />
              </div>
            </Col>
            <Col md={5}>
              <div className="brandingServices-text-parent2">
                <h1 className="brandingServices-text-heading">Photos & Videos</h1>
                <div className="brandingServices-head-text-separator"></div>
                <p className="brandingServices-text">
                  Do you want your ads to create a strong visual impact? We recommend these ad formats for engagement and awareness campaigns.</p>
              </div>
            </Col>
          </Row>
          <Row className="brandGuideMatter-parent">
            <Col md={1}>
              <div className="brandingServices-icon-parent">
                <img src={brandGuideMatter3} alt="Branding Icon" className="brandingServices-icon" />
              </div>
            </Col>
            <Col md={5}>
              <div className="brandingServices-text-parent2">
                <h1 className="brandingServices-text-heading">Carousels</h1>
                <div className="brandingServices-head-text-separator"></div>
                <p className="brandingServices-text">
                  If you’re advertising multiple products or services, our carousel ads can highlight each of them, driving traffic and conversions.</p>
              </div>
            </Col>
            <Col md={1}>
              <div className="brandingServices-icon-parent">
                <img src={brandGuideMatter4} alt="Branding Icon" className="brandingServices-icon" />
              </div>
            </Col>
            <Col md={5}>
              <div className="brandingServices-text-parent2">
                <h1 className="brandingServices-text-heading">Catalog</h1>
                <div className="brandingServices-head-text-separator"></div>
                <p className="brandingServices-text">
                  Want to showcase an entire collection of products and services? Our beautifully designed Facebook Catalogs will surely convert.</p>
              </div>
            </Col>
          </Row>
        </Row>


        <Row className="brandingServices-parent">
          <Col md={12}>
            <div className="brandingServices-text-parent" style={{paddingTop:"15px"}}>
              <h1 className="brandingServices-text-heading">Ad Testing</h1>
              <div className="brandingServices-head-text-separator"></div>
              <p className="brandingServices-text">
                We split-test ad copy and shortlist your most successful campaigns to target the correct audiences efficiently. We can eliminate guesswork through regular A/B testing, maximize web traffic, and even improve your overall revenue.</p>
            </div>
          </Col>
        </Row>
        <Row className="brandingServices-parent">
          <Col md={12}>
            <div className="brandingServices-text-parent" style={{paddingTop:"15px"}} >
              <h1 className="brandingServices-text-heading">Monitoring & Reporting</h1>
              <div className="brandingServices-head-text-separator"></div>
              <p className="brandingServices-text">
                As part of our ad management services, we monitor your results daily. You’ll get to review ad performance and other data points related to your campaign, such as:</p>
              <p className="brandingServices-text">
                We evaluate these results through Facebook Ads Manager and take a closer look at your website traffic through Google Analytics.</p>
            </div>
          </Col>
        </Row>
      </Container>

      <Answers
        heading={answers.heading}
        description={answers.description}
        buttonText={answers.buttonText}
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
      <BookConsultation />
    </>
  )
}

export default FacebookAds