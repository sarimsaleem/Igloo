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
      image: "/public/assets/images/web1.svg",
      title: "Telehealth",
      description: [
        "We integrate hospital information systems into manageable telehealth apps accessible to healthcare providers and patients. We also deploy inventory management systems and AI engines for medical treatment."]
    },
    {
      id: 2,
      image: "/public/assets/images/web2.svg",
      title: "Ecommerce",
      description: "Modern retailers can take advantage of our specialized solutions to create seamless shopping experiences for customers. Engage online users with custom features and in-store navigation.",
    },
    {
      id: 3,
      image: "/public/assets/images/web3.svg",
      title: "FinTech",
      description: [
        "Our scalable online banking, cryptocurrency, and digital wallet technologies are second to none. We provide unbeatable security services, help financial institutions and end-users to reduce transaction fees, and cater to modern consumer demands."
      ]
    },
    {
      id: 4,
      image: "/public/assets/images/web4.svg",
      title: "Travel and Hospitality",
      description: ["Whether you’re in the hotel, entertainment, restaurant, or event industry, we have a solution for you. Create anything from booking systems to loyalty and reward programs with help from our experienced developers."
      ]
    },
    {
      id: 5,
      image: "/public/assets/images/web5.svg",
      title: "Insurance",
      description:
        "Insurance companies can improve organizational efficiencies while reducing costs through our bespoke app solutions. Take advantage of custom portals and policy management software to streamline administrative processes that may be taking up your time.",
    },
    {
      id: 6,
      image: "/public/assets/images/web6.svg",
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
    backgroundImage: "/public/assets/images/cmpetetive-crousel.jpg",
  };

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
    </>
  )
}

export default MobileAppDevelopment