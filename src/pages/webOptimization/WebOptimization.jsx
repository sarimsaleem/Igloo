import React from 'react'
import home1 from '/public/assets/images/webPortfolio1.jpg';
import home2 from '/public/assets/images/webPortfolio2.jpg';
import home3 from '/public/assets/images/webPortfolio3.jpg';
import home4 from '/public/assets/images/webPortfolio4.jpg';
import home5 from '/public/assets/images/webPortfolio5.jpg';
import Carousel from '../../components/carousel/Carousel'
import About from '../../components/about/About'
import Portfolio from '../../components/portfolio/Portfolio';
import Guidence from '../guidence/Guidence';
import Clients from '../../components/clients/Clients';
import Answers from '../../components/answers/Answers';
import Questions from '../../components/questions/Questions';
import Bounce from '../../components/bounce/Bounce';
import Offers from '../../components/offers/Offers';
import Faqs from '../../components/faqs/Faqs';
import LatestInsight from '../../components/latestInsight/LatestInsight';
import BookConsultation from '../../components/bookConsultation/BookConsultation';


const WebOptimization = () => {

  const data = [
    {
      heading: 'Website Optimization Agency',
      description: [
        "User experience is what makes or breaks your website. By investing time and resources into website optimization, you can turn site visitors into paying customers faster than you’d expect. While overhauling parts of your website can make for a challenging process, you won’t regret putting your customers first.",
        "If your ultimate goal is to create a user experience that generates results, Igloo is here for you. Book a consultation today to find out how we can optimize your website for success."
      ],
      showButton: false,
      buttonText: 'GET STARTED NOW',
    },
    {
      heading: 'Improve UX and Generate Unparalleled Results',
      description: [
        "Compared to the best websites, which boast conversion rates of 11% or higher, the average user experience will only convert by 2.5%. While you may not be doing too badly with a conversion rate of 2.5%, there is always room to improve, and that’s where website optimization steps in.",
        "By fine-tuning aspects of your website like its moving parts, visuals, and searchability, you can achieve the boosted conversions you’ve always wanted."
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
        { src: home3, alt: 'Work 2' },
        { src: home4, alt: 'Work 4' },
      ],
    },
  ];

  const guidence = [
    {
      id: 0,
      heading: "Winning Optimization Strategies That Work",
      description: [
        "When it comes to optimizing your website, some variables carry a much heavier weight than others. If you’re new to optimization, below are a few of the strategies we employ at Igloo."
      ],
    },
    {
      id: 1,
      image: "opti5.svg",
      title: "Web Vitals",
      description: [
        "What makes a healthy website? PageSpeed, interactivity, visual stability, and site navigation all determine how usable your website is. We implement tools like PageSpeed Insights and Search Console to check your website health and resolve issues promptly."]
    },
    {
      id: 2,
      image: "opti6..svg",
      title: "Mobile-First",
      description: ["Nowadays, over 50% of all web traffic originates from mobile phones. As such, incorporating habits like creating adaptive websites, scaling elements, avoiding pop-ups, and publishing bite-sized content can do wonders for your website’s performance.",]
    },
  ];

  const answers = {
    heading: "Create an Experience That Converts",
    description: [
      "With our help, your website can create a robust impact that endures for years. Your success will comprise higher click-through rates, a refined content strategy, better search rankings, and more leads.",
      "So don’t wait—contact our website optimization specialists at Igloo to take your business to the top"
    ],
    buttonText: "Book a Free Consultation",
    backgroundImage: "/public/assets/images/cmpetetive-crousel.jpg",
  };

  const guidence2 = [
    {
      id: 0,
      heading: "Our Web Optimization Services",
      description: [
        "While optimizing your website is a must, doing it alone can pose a significant challenge. Fortunately, our experts at Igloo are here to help in the following ways."
      ],
    },
    {
      id: 1,
      image: "opti1.svg",
      title: "Search Engine Optimization (SEO)",
      description: [
        "From keywords to semantics, your web page is full of SEO opportunities. We help you achieve higher rankings and more organic traffic through technical excellence and high-quality content."]
    },
    {
      id: 2,
      image: "opti2.svg",
      title: "Technical Website Performance",
      description: ["When we gather website data, we use this information to inform any on-site adjustments such as status code errors, site responsiveness, site indexing, website content, duplicate tags and broken links.",]
    },
    {
      id: 3,
      image: "opti3.svg",
      title: "Conversion Rate Optimization (CRO)",
      description: [
        "While SEO is an excellent way to get visitors onto your site, CRO is what gets them to stay, and transact. By keeping a close eye on visitor habits, crafting effective CTAs, and split testing website elements, we can determine the best practices for getting customers to convert."
      ],
    },
    {
      id: 4,
      image: "opti4.svg",
      title: "CONTENT OPTIMIZATION",
      description: ["Getting users to perform the actions you would like them to is no easy task, but with the right content it becomes much simpler. We take the time to go through your website’s main pages and subpages to enhance their content and create stronger calls-to-action."
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
        heading="Website Optimization"
        breadcrumb="Home | Website Optimization"
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

export default WebOptimization