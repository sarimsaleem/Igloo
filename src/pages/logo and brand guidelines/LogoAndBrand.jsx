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
import home7 from '/public/assets/images/logoandbrand-portfolio-7.webp';
import Guidence from '../guidence/Guidence';
import Answers from '../../components/answers/Answers';
import Clients from '../../components/clients/Clients';
import Services from '../../components/services/Services';
import Questions from '../../components/questions/Questions';
import Offers from '../../components/offers/Offers';
import BookConsultation from '../../components/bookConsultation/BookConsultation';
import Bounce from '../../components/bounce/Bounce';
import LatestInsight from '../../components/latestInsight/LatestInsight';
import Faqs from '../../components/faqs/Faqs';

const LogoAndBrand = () => {

  const data = [
    {
      heading: 'Logo and Brand Guidelines',
      description: [
        'Cultivating brand recognition involves being cohesive, recognizable, and memorable. From your social media accounts to your primary website and offline presence, every element has to come together. With the help of our design experts at Igloo, you can develop a brand guide that improves credibility and streamlines your processes.',
        'Contact us today if building brand guidelines is on your list of things to do—we can help empower your team and tell your story effectively.'
      ],
      showButton: false,
      buttonText: 'GET STARTED NOW',
    },
    {
      heading: 'Be Consistent, Be Remembered',
      description: [
        'It can take between five and seven impressions for a consumer to remember your brand, so if consistent isn’t a word you’d use to describe your business, it may need a makeover!',
        'Choosing the right colors alone can improve brand recognition by up to 80%, so if you aren’t already crafting your brand guide, now is the best time to do so.'
      ],
      showButton: false,
      buttonText: 'GET STARTED NOW',
    },
    {
      heading: 'What’s in a Logo?',
      description: [
        'One of the most defining aspects of a brand is its logo. Logos are intended to be attention-grabbing and make a strong first impression. At Igloo, we create logos that define your brand identity and separate you from the rest.',
        'When developing a logo, we consider everything from color choices to brand psychology. Our logos don’t just satisfy internet appeal—they also further your marketing efforts and define your business.'
      ],
      showButton: true,
      buttonText: 'GET STARTED NOW',
    },
  ];

  const portfolioColumns = [
    {
      images: [
        { src: home4, alt: 'Work 4' },
        { src: home5, alt: 'Work 5' },
      ],
    },

    {
      images: [
        { src: home1, alt: 'Work 5' },
        { src: home3, alt: 'Work 3' },
        { src: home6, alt: 'Work 6' },
      ],
    },
    {
      images: [
        { src: home2, alt: 'Work 3' },
        { src: home7, alt: 'Work 6' },
      ],
    },
  ];

  const handleButtonClick = () => {
    console.log('View All Portfolio button clicked!');
  };

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
      image: "/public/assets/images/brandGuideMatter-11.svg",
      title: "Strong Brand Identity",
      description:
        "Strong brand identities rely on consistency. It clarifies what your business represents through visual elements like color palettes and your tone of voice. At Igloo, we have ample experience developing brand personas for startups and businesses looking to revamp.",
    },
    {
      id: 2,
      image: "/public/assets/images/brandGuideMatter-12.svg",
      title: "Customer Loyalty",
      description:
        "High-quality products and services are not enough to keep customers happy—most of them also seek positive customer experiences. You can expect repeat business and steadier profits by creating guidelines that help retain these experiences.",
    },
    {
      id: 3,
      image: "/public/assets/images/brandGuideMatter-3.svg",
      title: "Increased Revenue",
      description:
        "Brand consistency has the potential to increase revenue by 23%. By outsourcing a singular team that works with a deep knowledge of your brand, you can significantly improve your bottom line.",
    },
    {
      id: 4,
      image: "/public/assets/images/brandGuideMatter-4.svg",
      title: "Streamlined Processes",
      description:
        "Brand guidelines aren’t just useful for consumers—they’re also helpful for your native design team as they carry out your communications and marketing plans.",
    },
  ];

  const answers = {
    heading: "Still Have Questions?",
    description: [
      "Establishing your brand guidelines isn’t just about avoiding confusion and giving your marketing team something to work with—it’s about developing a foundation that consumers want to stay loyal to.",
      "If you’re struggling to bring your brand concept to life, consult with our experts today to put the pieces together."
    ],
    buttonText: "Book a Free Consultation",
    backgroundImage: "/public/assets/images/getnotice-bg.jpg",

  };

  const servicesData = [
    {
      id: 1,
      image: "/public/assets/images/brandguidelines-1.svg",
      heading: "Brand Messaging",
      description: "Are you unsatisfied with your brand’s value propositions, messaging pillars, or overall direction? We can guide you through developing every aspect of your brand: from taglines to unique selling points that make your brand shine."
    },
    {
      id: 2,
      image: "/public/assets/images/brandguidelines-2.svg",
      heading: "Brand Essence",
      description: "Your company’s core identity will not only influence its tone and personality, but how consumers perceive it. We help piece together the parts of your brand that make it complete and recognizable."
    },
    {
      id: 3,
      image: "/public/assets/images/brandguidelines-3.svg",
      heading: "Visual Elements",
      description: "From your logo and color palette to your typography and iconography, we thread together all aspects of your brand guide to create one cohesive look."
    },
  ];

  const questionData = {
    heading: "Still Have Questions?",
    text: ["Branding is a complex topic that we could discuss for hours on end. If there’s anything you need to know that wasn’t covered on this page, feel free to contact us."],
    buttonText: "Book a Free Consultation",
    backgroundImage: "/public/assets/images/stillQuestion-banner.jpg",
  };

  const bounceData = [
    {
      image: "./public/assets/images/section6-7.jpg",
      text: "Igloo being a boutique agency, has high service standards, comparable to any large global agency.",
      heading: "Manuri Nakkawita-Anthonis | Director of Marketing at Bounce Middle East",
    },
    {
      image: "./public/assets/images/section6-7.jpg",
      text: "Our partnership with Igloo has revolutionized our marketing strategies.",
      heading: "John Doe | CEO of Bounce Middle East",
    },
    {
      image: "./public/assets/images/section6-7.jpg",
      text: "Igloo’s personalized approach is unmatched in the industry.",
      heading: "Jane Smith | Marketing Lead at Bounce Middle East",
    },
    {
      image: "./public/assets/images/section6-7.jpg",
      text: "With Igloo, we achieved milestones we never thought possible.",
      heading: "Michael Brown | Operations Manager at Bounce Middle East",
    },
    {
      image: "./public/assets/images/section6-7.jpg",
      text: "Igloo's creativity and execution are truly world-class.",
      heading: "Emily Davis | Brand Manager at Bounce Middle East",
    },
    {
      image: "./public/assets/images/section6-7.jpg",
      text: "Collaborating with Igloo was a game changer for our business.",
      heading: "Sophia Wilson | VP of Marketing at Bounce Middle East",
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
        heading="Logo and Brand Guidelines / Style Guides"
        breadcrumb="Home | Logo and Brand Guidelines / Style Guides"
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
        // onButtonClick={handleButtonClick}
        backgroundImage={answers.backgroundImage}
      />
      <Clients />
      <Services heading="Our Logo and Brand Guideline Services" text="At Igloo, we produce on-brand content, no matter the medium you choose. Below are the premier logo and brand guideline services we provide." servicesData={servicesData} />
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

export default LogoAndBrand