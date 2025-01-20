import React from 'react'
import home1 from '/public/assets/images/webPortfolio1.jpg';
import home2 from '/public/assets/images/webPortfolio2.jpg';
import home3 from '/public/assets/images/webPortfolio3.jpg';
import home4 from '/public/assets/images/webPortfolio4.jpg';
import home5 from '/public/assets/images/webPortfolio5.jpg';
import Carousel from '../../components/carousel/Carousel';
import About from '../../components/about/About';
import Portfolio from '../../components/portfolio/Portfolio';
import Guidence from '../guidence/Guidence';
import Clients from '../../components/clients/Clients';
import Answers from '../../components/answers/Answers';
import BookConsultation from '../../components/bookConsultation/BookConsultation';
import LatestInsight from '../../components/latestInsight/LatestInsight';
import Faqs from '../../components/faqs/Faqs';
import Offers from '../../components/offers/Offers';
import Bounce from '../../components/bounce/Bounce';
import Questions from '../../components/questions/Questions';

const MobileAppDevelopment = () => {

  const data = [
    {
      heading: 'Mobile App Design & Development Company',
      description: [
        "Since the birth of the iPhone in 2007, the mobile app industry has become a powerhouse—and Igloo is here to help you get ahead of the game. Our experience in custom mobile application development is unparalleled. From ideation to delivery, we pride ourselves in a thorough process that ensures your mobile applications succeed over time.",
        "If you have a bubbling concept that requires fleshing out and seamless execution, contact our experts today to find out how we can help."
      ],
      showButton: false,
      buttonText: 'GET STARTED NOW',
    },
    {
      heading: 'Create an Unbeatable Mobile Experience',
      description: [
        "Factoring in 6.3 billion smartphone users and 1.4 billion tablet users globally, the opportunities within the mobile application industry are evident. Not to mention, 88% of the time spent on one’s mobile phone are on apps.",
        "If you’re looking for an experienced team to create a mobile ecosystem for your business, look no further than what we have to offer at Igloo."
      ],
      showButton: true,
      buttonText: 'GET STARTED NOW',
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
        // { src: home6, alt: 'Work 6' },
        { src: home3, alt: 'Work 2' },
        { src: home4, alt: 'Work 4' },
      ],
    },
  ];

  const guidence = [
    {
      id: 0,
      heading: "Mobile App Verticals",
      description: [
        "At Igloo, we innovate for anyone—from startups to brand-name enterprises. Whatever you’re looking for, we can provide via the following digital"
      ],
    },
    {
      id: 1,
      image: "mobileApp1.svg",
      title: "Telehealth",
      description: [
        "We integrate hospital information systems into manageable telehealth apps accessible to healthcare providers and patients. We also deploy inventory management systems and AI engines for medical treatment."]
    },
    {
      id: 2,
      image: "mobileApp2.svg",
      title: "Ecommerce",
      description: "Modern retailers can take advantage of our specialized solutions to create seamless shopping experiences for customers. Engage online users with custom features and in-store navigation.",
    },
    {
      id: 3,
      image: "mobileApp3.svg",
      title: "FinTech",
      description: [
        "Our scalable online banking, cryptocurrency, and digital wallet technologies are second to none. We provide unbeatable security services, help financial institutions and end-users to reduce transaction fees, and cater to modern consumer demands."
      ]
    },
    {
      id: 4,
      image: "mobileApp4.svg",
      title: "Travel and Hospitality",
      description: ["Whether you’re in the hotel, entertainment, restaurant, or event industry, we have a solution for you. Create anything from booking systems to loyalty and reward programs with help from our experienced developers."
      ]
    },
    {
      id: 5,
      image: "mobileApp5.svg",
      title: "Insurance",
      description:
        "Insurance companies can improve organizational efficiencies while reducing costs through our bespoke app solutions. Take advantage of custom portals and policy management software to streamline administrative processes that may be taking up your time.",
    },
    {
      id: 6,
      image: "mobileApp6.svg",
      title: "Food Delivery",
      description: "One of the most important keys to a successful food delivery app is its UX/UI design, and we pride ourselves in being able to provide designs that are simple, seamless, and that can be flexible to support the wide variety of features that you aim to offer to your users.",
    },
  ];

  const answers = {
    heading: "Be the Next Big App on the Market",
    description: [
      "Our full-cycle mobile app development process ensures that your app achieves exactly what you want it to. On top of that, we also provide guaranteed data safety and have expertise in dozens of industries.",
      "If you want to get on top of the latest app technologies, contact our experts today and book an in-depth consultation."
    ],
    buttonText: "Book a Free Consultation",
    backgroundImage: "cmpetetive-crousel.jpg",
  };

  const guidence2 = [
    {
      id: 0,
      heading: "Our Mobile App Development Services",
      description: [
        "Want to take advantage of emerging app technologies? Find out how we can help through our services below."
      ],
    },
    {
      id: 1,
      image: "mobileApp7.svg",
      title: "Native Mobile Apps",
      description: [
        "We develop hyper-fast and bug-free native apps that function on both iOS and Android systems. Rest assured we make every effort to align with your business model and security requirements."]
    },
    {
      id: 2,
      image: "mobileApp8.svg",
      title: "Hybrid Mobile Apps",
      description: "Want to launch a cross-platform app? We develop solutions that function seamlessly in different environments, combining native and web technologies for a unique online experience.",
    },
    {
      id: 3,
      image: "mobileApp9.svg",
      title: "Integration and Testing",
      description: [
        "Thanks to a library of knowledge in APIs, we can guarantee effortless integration with back ends and third-party software. To ensure full functionality, we also perform functionality, UI/UX, performance, security, and accessibility testing."
      ]
    },
    {
      id: 4,
      image: "mobileApp10.svg",
      title: "Mobile Consulting",
      description: ["Do you have your in-house developers but want a second opinion on your concept? We are available for mobile consulting 24/7 and can assist in concept finalization, platform or device compatibility, and cost estimations."
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
        heading="Mobile App Design"
        breadcrumb="Home | Mobile App Design"
        imageUrl="cmpetetive-crousel.jpg"
      />
      <About data={data} />
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
      <Guidence guidence={guidence2} />
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

export default MobileAppDevelopment