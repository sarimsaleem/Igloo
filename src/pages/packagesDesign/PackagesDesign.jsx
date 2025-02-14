import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import About from '../../components/about/About'
import Portfolio from '../../components/portfolio/Portfolio';
import home1 from '/public/assets/images/logoandbrand-portfolio-1.jpg';
import home2 from '/public/assets/images/logoandbrand-portfolio-2.jpg';
import home3 from '/public/assets/images/logoandbrand-portfolio-3.jpg';
import home4 from '/public/assets/images/logoandbrand-portfolio-4.jpg';
import home5 from '/public/assets/images/logoandbrand-portfolio-5.jpg';
import home6 from '/public/assets/images/logoandbrand-portfolio-6.jpg';
import home7 from '/public/assets/images/PandD-porfolio-1.jpg';
import home8 from '/public/assets/images/PandD-porfolio-2.jpg';
import home9 from '/public/assets/images/PandD-porfolio-3.jpg';
import home10 from '/public/assets/images/logoandbrand-portfolio-7.webp';
import Guidence from '../guidence/Guidence';
import Answers from '../../components/answers/Answers';
import Clients from '../../components/clients/Clients';
import Services from '../../components/services/Services';
import Bounce from '../../components/bounce/Bounce';
import Offers from '../../components/offers/Offers';
import Faqs from '../../components/faqs/Faqs';
import LatestInsight from '../../components/latestInsight/LatestInsight';
import BookConsultation from '../../components/bookConsultation/BookConsultation';
import Questions from '../../components/questions/Questions';

const PackagesDesign = () => {

  const data = [
    {
      heading: 'Branding and Production | Packaging Design Services',
      description: [
        'It’s often said that you shouldn’t judge a book by its cover—but in studying consumers for the past few years, we’ve learned that this isn’t usually the case. Your target market is most certainly judging their options based on first impressions, which is why we at Igloo are here to help you maximize your profits and brand equity through clever and unforgettable designs.',
        'If you’re looking to win over your market with stellar packaging that speaks volumes about the quality of your product, contact us today.'
      ],
      showButton: false,
      buttonText: 'BOOK A FREE CONSULTATION',
    },
    {
      heading: 'Catch Eyes with the Right Product Packaging',
      description: [
        'If you thought product and performance were the most critical aspects of your brand, think again. Add packaging to that list, and you could influence at least 72% of consumers’ buying decisions!',
        'Want to be part of the 30% of businesses that report increases in revenue thanks to intelligent packaging design? Then it’s time to invest in better packaging design.'
      ],
      showButton: true,
      buttonText: 'BOOK A FREE CONSULTATION',
    },
  ];
  const portfolioColumns = [
    {
      images: [
        { src: home4, alt: 'Work 4' },
        { src: home5, alt: 'Work 5' },
        { src: home8, alt: 'Work 5' },
      ],
    },

    {
      images: [
        { src: home1, alt: 'Work 5' },
        { src: home3, alt: 'Work 3' },
        { src: home6, alt: 'Work 6' },
        { src: home9, alt: 'Work 6' },
      ],
    },
    {
      images: [
        { src: home2, alt: 'Work 3' },
        { src: home7, alt: 'Work 6' },
        { src: home10, alt: 'Work 6' },
      ],
    },
  ];

  const handleButtonClick = () => {
    console.log('View All Portfolio button clicked!');
  };

  const guidence = [
    {
      id: 0,
      heading: "Why Every Brand Needs Beautifully Designed Packaging",
      description: [
        "One of the best ways to earn consumer interest is professionally designed product packaging. When a consumer looks at your packaging, it should be able to answer the questions:",
        "At Igloo, we make sure your customers can answer all three in just a simple glance.",
        "However, product packaging goes beyond aesthetics and can provide other numerous benefits such as the following.",
      ],
      listItems: [
        "What does this product do?",
        "How does it benefit me?",
        "Is it the right solution for me?",
      ]
    },
    {
      id: 1,
      image: "designedpackaging-1.svg",
      title: "Protect Your Products",
      description:
        "Businesses often forget that product packaging exists to protect its contents. Well-designed packaging can keep your product safe from humidity, heat, light, and other external factors, especially while in transit.",
    },
    {
      id: 2,
      image: "designedpackaging-2.svg",
      title: "Reinforce Your Brand",
      description:
        "We keep your most defining brand elements in mind when we design product packaging. Remember, your product’s packaging serves as its first impression, and we want to ensure you make a good one.",
    },
    {
      id: 3,
      image: "designedpackaging-3.svg",
      title: "Reflect Product Quality",
      description:
        "Well-packaged products speak volumes about what’s inside. By taking the time to develop thoughtful, structurally-sound packaging, we help to reinforce your commitment to delivering high-quality items consumers will instantly fall in love with.",
    },
    {
      id: 4,
      image: "designedpackaging-4.svg",
      title: "Incorporate Functionality",
      description:
        "An aesthetically pleasing design is just one of the factors we consider when developing product packaging. The second factor is functionality. At Igloo, we value sustainability and demonstrate this in our fit-for-purpose packaging design. We create packaging that is easy to reuse, store, and recycle.",
    },
  ];

  const answers = {
    heading: "Boost Your Sales with the Right Product Packaging",
    description: [
      "If your product could use a brand boost and robust product packaging, you know who to turn to. At Igloo, we guarantee fast turnaround times and effective designs for cost-effective prices. We take a customer-centric design approach that ensures we meet both buyer and seller goals. Contact us today to find a solution that works for you."
    ],
    buttonText: "Book a Free Consultation",
    backgroundImage: "getnotice-bg.jpg",

  };

  const servicesData = [
    {
      id: 1,
      image: "ourPackageD-1.svg",
      heading: "2D/3D Packaging",
      description: "Innovative packaging is one of the best ways to stand out from your competition. At Igloo, our designers are well-versed in design software such as 3DS Max, InDesign, Illustrator, and other tools to create impressive custom packaging."
    },
    {
      id: 2,
      image: "ourPackageD-2.svg",
      heading: "Food Packaging",
      description: "Do you sell snacks, fresh foods, or other consumables? We create attractive and practical packaging that meets industry standards and keep your products fresher for longer."
    },
    {
      id: 3,
      image: "ourPackageD-3.svg",
      heading: "Health and Beauty Packaging",
      description: "Whether you stock skincare products, makeup, or hair care tools, we design eye-catching and functional packaging that will get your items to stand out in beauty marketplaces and drugstores."
    },
    {
      id: 4,
      image: "ourPackageD-4.svg",
      heading: "Retail Packaging",
      description: "At Igloo, we pride ourselves on the ability to design for a wide variety retail products for cost-effective prices."
    },
  ];

  const questionData = {
    heading: "Still Have Questions?",
    text: ["vBranding is a complex topic that we could discuss for hours on end. If there’s anything you need to know that wasn’t covered in this page, feel free to contact us."],
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
      question: "DO YOU OFFER PACKAGES?",
      answer: "Based on your needs, we offer you tailor-made packages and options.",
    },
    {
      id: 1,
      question: "IS YOUR TEAM BASED IN DUBAI?",
      answer:
        "Yes, our Head of Design and some designers are based in Dubai, and some in other cities around the world to serve our global clients.",
    },
    {
      id: 2,
      question: "HOW MANY YEARS OF EXPERIENCE YOUR TEAM HAS?",
      answer:
        "All our designers have a minimum of 5 years of experience, and the most senior ones have over 15 years of experience.",
    },
    {
      id: 3,
      question: "WHICH INDUSTRIES DO YOU SPECIALIZE IN?",
      answer:
        "We have worked with many industries in the B2C and B2B industries. We will be happy to share with you our work when we are in contact with you.",
    },
    {
      id: 4,
      question: "WHAT IF I DON'T LIKE THE BRANDING WORK PROVIDED?",
      answer:
        "We share with you multiple concepts and a set of revisions, in order to ensure we achieve your branding requirements.",
    },
    {
      id: 5,
      question: "DO YOU OFFER FLEXIBLE PAYMENT TERMS?",
      answer: "Yes we do. We will share our offering when we are in contact with you.",
    },
  ];

  return (
    <>
      <Carousel
        heading="Packaging Design"
        breadcrumb="Home | Packaging Design"
        imageUrl="banner.png"
      />
      <About data={data} />
      <Portfolio
        columns={portfolioColumns}
        heading="PORTFOLIO"
        buttonText="View All Portfolio"
        onButtonClick={handleButtonClick}
      />
      <Guidence guidence={guidence} />;
      <Answers
        heading={answers.heading}
        description={answers.description}
        buttonText={answers.buttonText}
        onButtonClick={handleButtonClick}
        backgroundImage={answers.backgroundImage}
      />
      <Clients />
      <Services heading="Our Packaging Design Services" text="When designing packaging, we prioritize your identity and brand narrative, incorporating them into the following applications." servicesData={servicesData} />
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

export default PackagesDesign