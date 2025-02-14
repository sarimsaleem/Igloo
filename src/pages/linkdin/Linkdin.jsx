import React from 'react'
import home1 from '/public/assets/images/fbAdsPort1.jpg';
import home2 from '/public/assets/images/fbAdsPort2.jpg';
import home3 from '/public/assets/images/fbAdsPort3.jpg';
import home4 from '/public/assets/images/fbAdsPort4.jpg';
import home5 from '/public/assets/images/fbAdsPort5.jpg';
import home6 from '/public/assets/images/fbAdsPort6.jpg';
import Carousel from '../../components/carousel/Carousel'
import About from '../../components/about/About';
import Portfolio from '../../components/portfolio/Portfolio';
import Services from '../../components/services/Services';
import Answers from '../../components/answers/Answers';
import Clients from '../../components/clients/Clients';
import Questions from '../../components/questions/Questions';
import Bounce from '../../components/bounce/Bounce';
import Offers from '../../components/offers/Offers';
import Faqs from '../../components/faqs/Faqs';
import LatestInsight from '../../components/latestInsight/LatestInsight';
import BookConsultation from '../../components/bookConsultation/BookConsultation';
const Linkdin = () => {

  const data = [
    {
      heading: 'LinkedIn Ads Agency',
      description: [
        'Once a simple resume hub, LinkedIn has come a long way since 2003. Nowadays, the platform has an active user base of over half a billion and has become the go-to space for professionals.',
        'If you want to target audiences according to profession, industry, and business skills, LinkedIn is the place to be—and we can help you get your brand in front of the right people. We boast impressive knowledge and experience with LinkedIn’s ad campaign management tool and we consistently analyze results for better, more optimized ads in the future.',
        "Book a consultation with our experts today to launch a professional campaign that guarantees your ideal outcomes"
      ],
      showButton: false,
      buttonText: 'BOOK A FREE CONSULTATION',
    },
    {
      heading: 'Professional Networking Done Right',
      description: [
        "LinkedIn is the most targeted network for B2B organizations. With a strong LinkedIn content marketing strategy, you can partner with industry leaders and nurture thousands of leads deeper into your sales funnel.",
        'Plus, 50% of all LinkedIn users have a college degree, allowing you to reach a more educated audience with the credentials you need. If your goal is to connect with decision-makers and high-level executives, Igloo is perfectly equipped to help you succeed. '
      ],
      showButton: true,
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

  const servicesData = [
    {
      id: 1,
      image:"linkedin1.svg",
      heading: "Hyper Targeting",
      description: ["With LinkedIn ads, you can narrow your demographics beyond location, age, and gender. You can also filter through audiences according to job title, industry, degree, and more.",
      ],
    },
    {
      id: 2,
      image:"linkedin2.svg",
      heading: "Higher Conversions",
      description: ["Because LinkedIn is a platform for professionals, your ads and marketing materials are more likely to reach decision-makers who are equipped to choose your products and services.",
      ],
    },
    {
      id: 3,
      image:"linkedin3.svg",
      heading: "Networking Opportunities",
      description: ["Perhaps LinkedIn’s greatest strength is networking. By publishing quality content, you can just as easily garner quality leads and traffic."
      ]
    },
    {
      id: 4,
      image:"linkedin4.svg",
      heading: "Partnership and Event Promotion",
      description: ["Known for its professional user base, LinkedIn is one of the best places for recruiting new employees. You can also network through event and conference promotion, especially if you’re looking to expand your company."
      ],
    },
  ];

  const answers = {
    heading: "Be the Best in Business Today",
    description: [
      "If you want to stand out amongst a B2B crowd, Igloo has years of experience in producing high-converting LinkedIn ads. Because we have a knack for capturing the essence of your brand, you can rest assured that we create content that is uniquely yours.",
      "Want to get started on your LinkedIn campaign? Contact us today to find out how we can launch your brand into a B2B success."
    ],
    buttonText: "Book a Free Consultation",
    backgroundImage:"cmpetetive-crousel.jpg",
  };

  const servicesData2 = [
    {
      id: 1,
      image:"linkedin5.svg",
      heading: "Ad Strategies and Development",
      description: ["To create winning ad strategies, we first take the time to study your business and how it stacks up against competitors. Then, we decide what type of LinkedIn ads are best to run according to your previous campaigns and specific business goals.",
        "We then craft compelling copy that aligns with your brand, compile eye-catching visuals, and provide a content calendar for your review."
      ],
    },
    {
      id: 2,
      image:"linkedin6.svg",
      heading: "Content Creation",
      description: ["Since growing into a fully-fledged content platform, LinkedIn has become a more diverse digital space for consumption. Our team takes full advantage of this development, creating content that rides on industry trends—from blogs to social posts. We also generate long-form and evergreen content that gets you to rank in the long run.",
      ],
    },
    {
      id: 3,
      image:"linkedin7.svg",
      heading: "InMail Support",
      description: ["Sponsored InMail is an excellent way to push sign-ups on your website. To improve your click-through rates even further, we target only active LinkedIn prospects who are more likely to respond.",
        "We guarantee results by crafting emails that are engaging, mobile responsive, and relevant to your target audiences."
      ]
    },
    {
      id: 4,
      image:"linkedin8.svg",
      heading: "Insights and Analytics",
      description: ["Now that you can study results in real-time, you can quickly measure the return of investment on your LinkedIn ads. We make these reports digestible for your team, allowing you to pinpoint where to make precise adjustments."
      ],
    },
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
      image: "section6-7.jpg",
      text: "Our partnership with Igloo has revolutionized our marketing strategies.",
      heading: "John Doe | CEO of Bounce Middle East",
    },
    {
      image: "section6-7.jpg",
      text: "Igloo’s personalized approach is unmatched in the industry.",
      heading: "Jane Smith | Marketing Lead at Bounce Middle East",
    },
    {
      image: "section6-7.jpg",
      text: "With Igloo, we achieved milestones we never thought possible.",
      heading: "Michael Brown | Operations Manager at Bounce Middle East",
    },
    {
      image: "section6-7.jpg",
      text: "Igloo's creativity and execution are truly world-class.",
      heading: "Emily Davis | Brand Manager at Bounce Middle East",
    },
    {
      image: "section6-7.jpg",
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
        heading="LinkedIn Ads"
        breadcrumb="Home | LinkedIn Ads"
        imageUrl="cmpetetive-crousel.jpg"
      />
      <About data={data} />
      <Portfolio
        columns={portfolioColumns}
        heading="PORTFOLIO"
        buttonText="View All Portfolio"
      />
      <Services heading="Benefits of LinkedIn Advertising" text="If you’re already running Facebook or Instagram ads, you may be wondering why advertising on LinkedIn is necessary. With just 740 million users, LinkedIn is significantly smaller than its other social counterparts, yet it is the best place for B2B advertisers—here are a few reasons why." servicesData={servicesData} />

      <Answers
        heading={answers.heading}
        description={answers.description}
        buttonText={answers.buttonText}
        backgroundImage={answers.backgroundImage}
      />
      <Clients />
      <Services heading="Our LinkedIn Ad Management Services" text="LinkedIn is rich with user information, making it easier to narrow your target audience. Combined with its built-in ad solutions, we can curate a LinkedIn ad strategy that thrusts you into industry leadership." servicesData={servicesData2} />
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

export default Linkdin