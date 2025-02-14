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

const UserInterfaceDesign = () => {

  const data = [
    {
      heading: 'UX/UI Design Agency',
      description: [
        "If users are exiting your website or uninstalling your app quicker than you’d expect, don’t be disheartened—chances are your UX/UI strategy just needs a facelift. At Igloo, we understand what makes or breaks your brand and can ensure that you meet consumer needs as effortlessly and efficiently as possible.",
        "With a powerful UX/UI strategy behind you, you can ensure regular website traffic, a good brand reputation, and customer retention. If the promise of a bright brand future entices you, don’t hesitate to book a consultation with our marketing and design experts today."
      ],
      showButton: false,
      buttonText: 'BOOK A FREE CONSULTATION',
    },
    {
      heading: 'Do More When You Focus on Your Clients',
      description: [
        "Did you know that a robust user experience strategy can increase conversions by multiple folds? Plus, optimizing your website for mobile guarantees that at least 74% of users return for business.",
        "When you take a client-first approach to business, growing your user base becomes quicker and more effortless than ever."
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
      heading: "Does UX/UI Matter to Your Business?",
      description: [
        "The simple answer to this question is yes. Without optimizing your web applications for usability, you can lose potential customers in mere seconds. Here are some additional few reasons why UX/UI is essential to your business."
      ],
    },
    {
      id: 1,
      image: "uiux1.svg",
      title: "Customer Satisfaction",
      description: [
        "As we mentioned, bad UX/UI will quickly drive visitors away from your website. The easier your application is to use, the more customers stay hooked on your content and become likely to convert."]
    },
    {
      id: 2,
      image: "uiux2.svg",
      title: "Increased Traffic",
      description: ["On top of an aesthetically pleasing website, efficiency and ease of use are responsible for bringing more traffic to your business. Brilliantly designed web applications are what get users to stay and convert.",]
    },
    {
      id: 3,
      image: "uiux3.svg",
      title: "Positive Brand Reputation",
      description: [
        "Much like judging a book by its cover, internet users are likely to decide whether to do business with a brand depending on how useful, appealing, and professional their websites are. In the case of UX/UI, less is more—keep things simple and users will take to it."
      ],
    },
    {
      id: 4,
      image: "uiux4.svg",
      title: "MORE REVENUE",
      description: ["When users have a positive experience on your website or app, more of them will convert, remain loyal customers, and refer their friends and colleagues. Nailing your UX/UI can help you significantly when it comes to boosting your revenues and key digital metrics."
      ]
    },
  ];

  const answers = {
    heading: "Inspire a Positive Customer Experience",
    description: [
      "When creating a multi-platform digital application, taking a customer-first approach can do wonders for your bottom line. With the help of our UX/UI design expert, you can promise a seamless end-to-end experience every time someone clicks through to your site. Contact us today to provide unbeatable UX/UI to customers who can help your business grow.  "
    ],
    buttonText: "Book a Free Consultation",
    backgroundImage: "cmpetetive-crousel.jpg",
  };

  const guidence2 = [
    {
      id: 0,
      heading: "Our UX/UI Design Services",
      description: [
        "At Igloo, we focus on delivering innovative, aesthetically pleasing, and efficient experiences for end-users. Here’s how we do it."
      ],
    },
    {
      id: 1,
      image: "uiux5.svg",
      title: "User Research",
      description: [
        "To define user goals for your web application, you’ll first have to get to know your site visitors. We gather deeper insight into your customer needs through surveys and questionnaires, direct feedback, usability testing and analytics reviews to give you actionable information on what your target customers want."]
    },
    {
      id: 2,
      image: "uiux6.svg",
      title: "Consumer Journey Mapping",
      description: ["By visualizing the different brand experiences a customer can have on your website, we determine points of improvement through various stages of the buyer journey. This mapping method clearly pinpoints where your customers might experience difficulties and how we can alleviate these issues.",]
    },
    {
      id: 3,
      image: "uiux7.svg",
      title: "Responsive UX/UI",
      description: [
        "User experiences have to be favorable no matter what device you’re browsing from. We ensure that your website is optimized for laptop, tablet, and mobile device viewing, keeping usability, compatibility and accessibility in mind."
      ],
    },
    {
      id: 4,
      image: "uiux8.svg",
      title: "Wireframes and Prototypes",
      description: ["By creating prototypes of your web application, we can align your vision with our execution. Furthermore, prototypes allow us to test customer satisfaction and garner valuable feedback that can improve the final product."
      ]
    },
  ];

  const questionData = {
    heading: "Still Have Questions?",
    text: [""],
    buttonText: "Book a Free Consultation",
    backgroundImage: "stillQuestion-banner.jpg",
  };

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

  return (
    <>
      <Carousel
        heading="UX/UI Design"
        breadcrumb="Home | UX/UI Design"
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

export default UserInterfaceDesign