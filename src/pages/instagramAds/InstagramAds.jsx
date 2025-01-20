import React from 'react'
import home1 from '/public/assets/images/fbAdsPort1.jpg';
import home2 from '/public/assets/images/fbAdsPort2.jpg';
import home3 from '/public/assets/images/fbAdsPort3.jpg';
import home4 from '/public/assets/images/fbAdsPort4.jpg';
import home5 from '/public/assets/images/fbAdsPort5.jpg';
import home6 from '/public/assets/images/fbAdsPort6.jpg';
import Portfolio from '../../components/portfolio/Portfolio';
import Carousel from '../../components/carousel/Carousel'
import About from '../../components/about/About'
import Answers from '../../components/answers/Answers';
import Clients from '../../components/clients/Clients';
import Services from '../../components/services/Services';
import Questions from '../../components/questions/Questions';
import Bounce from '../../components/bounce/Bounce';
import Offers from '../../components/offers/Offers';
import Faqs from '../../components/faqs/Faqs';
import LatestInsight from '../../components/latestInsight/LatestInsight';
import BookConsultation from '../../components/bookConsultation/BookConsultation';
const InstagramAds = () => {

  const data = [
    {
      heading: 'Instagram Ads in Dubai',
      description: [
        'v74% of people study brands on social media before making a purchasing decision. So if you haven’t been using Instagram to sway potential buyers, you could already be missing out on a profitable bottom line.',
        'Social media is prime ad space, with over 1 billion active users on Instagram taking to the platform every day. Plus, with just $5 to $10, you can reach up to a thousand people through a single ad.',
        'If you want to drive more qualified traffic to your website and increase the chances of conversion, Instagram advertising should be your priority. Contact our team of experts today to get the results you deserve.'
      ],
      showButton: false,
      buttonText: 'GET STARTED NOW',
    },
    {
      heading: 'Instagram: Turn Your Feed Into a Success',
      description: [
        "Despite being second to Facebook in monthly active users, Instagram boasts an engagement rate of 1.22% higher than the former. Naturally, a more engaged audience means they’re more receptive to the marketing materials you send out—and therefore more likely to convert down the line.",
        'Just think: 72% of consumers will eventually end up purchasing a product or service they see on their feeds. So if you run an eCommerce business and want to focus on increasing profits, Instagram is the place to be.'
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

  const servicesData = [
    {
      id: 1,
      image: "instagram4.svg",
      heading: "Organic Audience Connections",
      description: ["Brands with significant followings won’t always have to pay for audience engagement. If you have a deep understanding of what your consumers respond to, you can build lasting organic connections.",
      ],
    },
    {
      id: 2,
      image: "instagram5.svg",
      heading: "Measurable Results",
      description: ["One of the biggest advantages you’ll get with Instagram advertising is tracking your results in real-time. On the platform itself, you can view instant analytic reports that tell you how well your campaigns perform.",

        "You’ll also benefit from a closer look into how many followers you’ve converted to sales and leads and how much you’ve spent or made on your campaign.",
      ],
    },
    {
      id: 3,
      image: "instagram6.svg",
      heading: "Budget-Friendly",
      description: ["You don’t need to invest thousands of dollars for your Instagram advertising campaign to succeed. By carefully managing and optimizing your campaigns, we keep your ad costs low and click through rates high.",
      "The best part is, you can adjust your spending according to how your campaign performs and figure out a budget that works."
      ]
    },
    {
      id: 4,
      image: "instagram7.svg",
      heading: "Increased Brand Awareness",
      description: ["Businesses that advertise on Instagram don’t just reap the benefits of higher profitability—you can also boost your brand awareness. Note that some 80% of all Instagram users follow at least one business account, so you’re likely to garner a handful of customers through the platform."
      ],
    },
  ];

  const answers = {
    heading: "Increase Conversions, Clicks, and Brand Awareness",
    description: [
      "Ask yourself, are you ready to start generating impressive results on one of the biggest social media platforms? If the answer is yes, don’t hesitate. Book a consultation with our experienced specialists and get the results you want as quickly as possible."
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
        heading="Instagram Ads"
        breadcrumb="Home | Instagram Ads"
        imageUrl="cmpetetive-crousel.jpg"
      />
      <About data={data} />

      <Portfolio
        columns={portfolioColumns}
        heading="PORTFOLIO"
        buttonText="View All Portfolio"
      />
      <Services heading="Why Advertise on Instagram?" text="If you aren’t yet convinced that Instagram advertising is for you, here are a few reasons why it may be worth your investment." servicesData={servicesData} />

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

export default InstagramAds