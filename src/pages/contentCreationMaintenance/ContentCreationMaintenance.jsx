import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import About from '../../components/about/About'

import contentCreationBannerImg from "/public/assets/images/contentCreationBannerImg.jpg"
import Guidence from '../guidence/Guidence'
import Answers from '../../components/answers/Answers'
import Clients from '../../components/clients/Clients'
import Bounce from '../../components/bounce/Bounce'
import Offers from '../../components/offers/Offers'
import Faqs from '../../components/faqs/Faqs'
import LatestInsight from '../../components/latestInsight/LatestInsight'
import BookConsultation from '../../components/bookConsultation/BookConsultation'
import Questions from '../../components/questions/Questions'
const ContentCreationMaintenance = () => {

  const data = [
    {
      heading: 'Content Marketing Agency',
      description: [
        'Content creation is an organic traffic driver that can help your business garner the leads it’s looking for. By partnering up with the right marketing agency—us—you can become a go-to for quality content that keeps your brand voice fresh and active.',
        'At Igloo, we promise click and share-worthy content for businesses from every industry. Book a consultation with us today to develop a content plan that drives and converts!'
      ],
      showButton: false,
      buttonText: 'BOOK A FREE CONSULTATION',
    },
    {
      heading: 'GIVE YOUR BRAND A BOOST WITH THE RIGHT CONTENT',
      description: [
        'Nowadays, at least 82% of businesses utilize content creation strategies, proving its obvious success as a marketing effort. With our help, you can reach the right people, build brand awareness, increase traffic on your website, and gain qualified leads.',
      ],
      showButton: true,
      buttonText: 'BOOK A FREE CONSULTATION',
    },
  ];

  const guidence = [
    {
      id: 0,
      heading: "Key Components of Our Content Creation Efforts",
      description: [
        "Content creation provides an endless stream of opportunities—so how do you choose where to begin? Here are a few ways we can help."
      ],
    },
    {
      id: 1,
      image:"ccMaintainence1.svg",
      title: "Keyword Research",
      description:
        "If you want to start a blog or copy-forward content campaign, we help you optimize your pages by performing comprehensive keyword research. We consider multiple factors like user intent, search volume, competition, and trends to ensure your website gets maximum visibility.",
    },
    {
      id: 2,
      image:"ccMaintainence2.svg",
      title: "Content Development",
      description: "To develop a strategy, we determine what content types best suit your brand, whether they be blog posts, infographics, videos, brochures, or otherwise. Then, we create a content calendar for your review and help you keep track of when you’re publishing materials.",
    },
    {
      id: 3,
      image:"ccMaintainence3.svg",
      title: "Optimization and Promotion",
      description:
        "Even the most thoroughly crafted content only makes an impact when it’s placed in front of the right people. As such, we make sure to optimize your content so it ranks. We meticulously craft and implement meta tags and descriptions to ensure your content has the potential to show up on Google’s first page.",
    },
    {
      id: 4,
      image:"ccMaintainence4.svg",
      title: "Reporting and Insights",
      description: "The best—and only—way to measure your campaign’s success is through tangible results. We study your content pages and track how many leads you’re garnering throughout the campaign. We also measure these results against your content goals and KPIs to determine what adjustments we need to make.",
    },
  ];

  const answers = {
    heading: "Make Your Clients Happy with Content They Love",
    description: [
      "If diversifying your content, connecting with consumers, driving results, and finding the perfect writer are on your list of things to do, don’t hesitate to reach out to our team at Igloo. We employ only the best and most experienced writers to breathe life into your content strategies—so don’t let your competitors get ahead of the game!"
    ],
    buttonText: "Book a Free Consultation",
    backgroundImage: "getnotice-bg.jpg",
  };

  const guidence2 = [
    {
      id: 0,
      heading: "Our Content Creation and Maintenance Services",
      description: [
        "As we previously mentioned, there are dozens of content types to choose from to drive success online. When you choose to work with us, these are the content formats you can leverage to generate leads and gain new customers."
      ],
    },
    {
      id: 1,
      image:"ccMaintenance5.svg",
      title: "Blog and Website Content",
      description:
        "Establish your brand voice with our carefully researched and thoughtfully written blog posts. We make sure to expand your content footprint as your audience widens with fresh content that is always on-trend.",
    },
    {
      id: 2,
      image:"ccMaintenance6.svg",
      title: "eBooks and White Papers",
      description: "There is no better way to demonstrate your knowledge and professionalism than through a white paper or eBook. Our skilled writers can capture your brand essence and the message you want to communicate in a way that truly sells.",
    },
    {
      id: 3,
      image:"ccMaintenance7.svg",
      title: "Social Media Content",
      description:
        "Looking for something quick, snappy, and most importantly effective? Our writers can provide dozens of options for social media copy that captures, engages and converts your audience while maintaining consistent brand tonality and guidelines!",
    },
    {
      id: 4,
      image:"ccMaintenance8.svg",
      title: "Video Production",
      description: "If you have a big vision and a little wiggle room in your budget, we recommend investing in video production services. Thanks to video-forward platforms like YouTube and Instagram, video has become the premier method of communicating with users.",
    },
    
    {
      id: 5,
      image:"ccMaintenance9.svg",
      title: "Infographics",
      description: "Most online consumers are visual learners. We help you take advantage of this by creating compelling and eye-catching infographics with your brand elements.",
    },
    
    {
      id: 6,
      image:"ccMaintenance10.svg",
      title: "Newsletters",
      description: "Email marketing isn’t dead! If you run a weekly or monthly newsletter, we can help you speed up output and automate the processes involved.",
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
        heading="Content Creation and Maintenance"
        breadcrumb="Home | Content Creation and Maintenance"
        imageUrl="marketingAutomation-carousel.jpg"
      />
      <About data={data} />
      <div className="competetiveanalysis-imageContainer">
        <img src={contentCreationBannerImg} alt="Competitive Analysis" />
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

export default ContentCreationMaintenance