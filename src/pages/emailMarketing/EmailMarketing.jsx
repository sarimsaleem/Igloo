import React from 'react'
import "./emailMarketing.css"
import emailMarketinImg from "/public/assets/images/emailMarketinImg.jpg";
import Carousel from '../../components/carousel/Carousel'
import About from '../../components/about/About'
import Guidence from '../guidence/Guidence';
import Answers from '../../components/answers/Answers';
import Clients from '../../components/clients/Clients';
import Questions from '../../components/questions/Questions';
import Bounce from '../../components/bounce/Bounce';
import Offers from '../../components/offers/Offers';
import Faqs from '../../components/faqs/Faqs';
import LatestInsight from '../../components/latestInsight/LatestInsight';
import BookConsultation from '../../components/bookConsultation/BookConsultation';

const EmailMarketing = () => {

  const data = [
    {
      heading: 'Lifecycle Marketing | Email Marketing',
      description: [
        'Decades later, email marketing remains one of the most effective strategies for consumer engagement. At Igloo, we are big believers in the positive impact email marketing has on your ROI and business reach.',
        'With services such as live audience segmentation, optimization efforts, and personalization campaigns, you can turn email marketing into your most powerful tool.',
        "Need a hand hitting send? Contact us today to find out how we can turn your email campaigns into the best investment you’ve ever made."
      ],
      showButton: false,
      buttonText: 'BOOK A FREE CONSULTATION',
    },
    {
      heading: 'Build Richer, More Dynamic Email Marketing Campaigns',
      description: [
        'Considering all the other channels you can use to reach customers, many marketers undermine the benefits of email marketing. Yet, 4.3 billion active users still rely on it as a primary method of communication. These users send over 300 billion emails a day—emails that can garner impressive reach.',
        'If you haven’t yet considered investing in your email marketing, we’re here to tell you that a little goes a long way.',
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
      image: "emailMarketing1.svg",
      title: "Customer Loyalty",
      description:
        "Customers develop lasting relationships with brands when they interact regularly. Thanks to the cost-effectiveness of email marketing, many prefer to correspond through this medium. Not to mention, our clever email strategies can help save you the time and money you’d exert on a medium like paid advertising.",
    },
    {
      id: 2,
      image: "emailMarketing2.svg",
      title: "Easy-to-Track Analytics",
      description: "Open and click-through rates can say a lot about how your email marketing campaign performs. Because email metrics are so easy to track, your campaign can be just as easy to adjust according to user behaviors. Depending on your marketing goals, we align our chosen metrics to best reflect your performance indicators.",
    },
    {
      id: 3,
      image: "emailMarketing3.svg",
      title: "Expanded Business Reach",
      description:
        "Did you know that email users check their inbox multiple times a day? That statistic alone should put into perspective your chances of being seen. We have experience crafting thoughtful, anti-spam messages that make their way into consumer inboxes at exactly the right time.",
    },
    {
      id: 4,
      image: "emailMarketing4.svg",
      title: "Hyper-personalization",
      description: "At Igloo, we zero in on data-driven campaigns, focusing on delivering hyper-specific messages to the right audiences instead of broad, impersonal messaging. By reaching out to multiple audience segments, we can put a personal spin on our efforts and drive more attractive results.",
    },
  ];

  const answers = {
    heading: "Let Your Email Marketing Campaign Shine",
    description: [
      "For some businesses, tried and tested marketing strategies are the way to go, so if your email campaign could use a facelift, we at Igloo can provide you with everything you need. Just give us a call to learn more about our full-service email marketing campaign offerings."
    ],
    buttonText: "Book a Free Consultation",
    backgroundImage: "getnotice-bg.jpg",
  };

  const guidence2 = [
    {
      id: 0,
      heading: "Our Email Marketing Services",
      description: [
        "Igloo is proud to be one of the most trusted email marketing companies in the country. With us, you can expect to receive the following services."
      ],
    },
    {
      id: 1,
      image: "emailServices1.svg",
      title: "Performance Audit",
      description:
        "The way trends come and go, your email marketing strategy has to adapt to an ever-changing environment. But first, we need to familiarize ourselves with what needs changing. We perform comprehensive marketing audits and technical reviews to make recommendations for your future campaigns.",
    },
    {
      id: 2,
      image: "emailServices2.svg",
      title: "Marketing Management",
      description: "Are you having trouble staying on top of your monthly email services? We can take care of that for you by regularly reviewing your marketing goals and ensuring that your efforts align. We develop new campaigns according to your brand guidelines, creating monthly content that interests, engages and delights users.",
    },
    {
      id: 3,
      image: "emailServices3.svg",
      title: "Email Automation",
      description:
        "Instead of losing time over manual processes, we can help streamline your efforts through email marketing automation. Automation involves designing drip sequences that best help you achieve your marketing objectives as efficiently as possible.",
    },
    {
      id: 4,
      image: "emailServices4.svg",
      title: "List Hygiene",
      description: "Without maintaining list hygiene, you run the risk of your email marketing campaigns being filtered out by email service providers such as Gmail and Outlook. We help you ensure that your messages reach as many of your target users as possible.",
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
        heading="Email Marketing"
        breadcrumb="Home | Email Marketing"
        imageUrl="marketingAutomation-carousel.jpg"
      />
      <About data={data} />

      <div className="competetiveanalysis-imageContainer">
        <img src={emailMarketinImg} alt="Competitive Analysis" />
      </div>

      <Guidence guidence={guidence} />
      <Answers
        heading={answers.heading}
        description={answers.description}
        buttonText={answers.buttonText}
        // onButtonClick={handleButtonClick}
        backgroundImage={answers.backgroundImage}
      />
      <Clients />
      <Guidence guidence={guidence2} />;

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

export default EmailMarketing