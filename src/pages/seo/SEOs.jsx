import React, { useEffect } from 'react'
import Carousel from '../../components/carousel/Carousel'
import About from '../../components/about/About';
import Guidence from '../guidence/Guidence';
import Answers from '../../components/answers/Answers';
import Clients from '../../components/clients/Clients';
import CaseStudy from '../../components/caseStudy/CaseStudy';
import Questions from '../../components/questions/Questions';
import Bounce from '../../components/bounce/Bounce';
import Offers from '../../components/offers/Offers';
import Faqs from '../../components/faqs/Faqs';
import LatestInsight from '../../components/latestInsight/LatestInsight';
import BookConsultation from '../../components/bookConsultation/BookConsultation';
import Services from '../../components/services/Services';

const SEOs = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = [
    {
      heading: 'AWARD-WINNING SEO AGENCY',
      description: [
        'Google accounts for 93% of all global traffic, which means if you aren’t ranking, your business is already falling behind. Regardless of the company’s products and services, potential customers are already looking for similar solutions online. If you want to stand out amongst competitors and direct traffic to your website, working with the right SEO Agency might be the answer.',
        'At Igloo, search engine optimization is just one of the marketing solutions we use to enhance your digital presence and improve your bottom line. Because search engines constantly change, we ensure that our solutions can keep up.',
      ],
      showButton: true,
      buttonText: 'BOOK A FREE CONSULTATION',
    },
  ];

  const guidence = [
    {
      id: 0,
      heading: "Why seo is essential for business success",
      description: [
        "Despite its accessibility and ease of implementation, many businesses tend to neglect their SEO efforts. By investing time and a portion of your budget in SEO, or alternatively working with an SEO agency, your business can reap the following benefits:"
      ],
    },
    {
      id: 1,
      image: "ppc1.svg",
      title: "Generate Higher-Quality Leads",
      description: [
        "Compared to other marketing strategies, SEO is proven to generate the most high-quality leads in a short period. Not to mention, SEO guarantees a significantly higher conversion rate than outbound methods.",

        "Working with the right SEO agency can help you rank at the top for popular search engines for industry-related terms, building trust and helping you to empower your sales team."]
    },
    {
      id: 2,
      image: "ppc2.svg",
      title: "Focus on User Experience",
      description: ["While only implemented recently, Google considers a positive user experience as a ranking factor on search engines. By focusing on customer needs, your website ranks higher. A positive customer experience also significantly increases conversions.",
        "Factors like technical SEO (backlinks, page speed, site navigation, etc.) also improve site health and make site experiences seamless for visitors, while simultaneously improving your SEO rankings.",]
    },
    {
      id: 3,
      image: "ppc3.svg",
      title: "Improve Brand Awareness",
      description: [
        "Simply put, ranking on Google’s first page tangentially increases your brand awareness. Even if potential customers don’t click through to your website, they will associate your brand with specific search terms and solutions.",
        "SEO can also improve brand credibility as a secondary benefit to increasing brand awareness. When you rank high on Google, people assume you are one of the top players in the industry, and may be more likely to work with you."
      ]
    },
    {
      id: 4,
      image: "ppc4.svg",
      title: "Get Measurable Results",
      description: ["SEO metrics are easy to track. While not as straightforward as paid ads, you can easily make sense of metrics like page views, ad clicks, and order completions to determine how well your campaigns perform",
        "At Igloo, we use tools like Google Search Console to determine how people are discovering your business, what topics and keywords you’re ranking for, and where your campaign could use improvement."
      ]
    },
    {
      id: 5,
      image: "ppc5.svg",
      title: "Achieve Long-Term Success",
      description: [
        "While your website may take a few months to achieve an optimal ranking, SEO provides long-term results that can far outweigh the upfront investments of time and money.",

        "With that in mind, Google’s algorithm regularly changes, so we monitor your ranking and make adjustments as fluctuations occur. On top of this, we stay on top of SEO trends and optimize your pages as necessary.",]
    },
    {
      id: 6,
      image: "ppc6.svg",
      title: "Shrink Your Marketing Budget",
      description: ["SEO is inexpensive to implement and can even improve cost management. If your website ranks well, you won’t have to invest in costly pay-per-click campaigns—as long as people click through your links, you can maintain your position as a thought leader.",
        "The marketing tasks involved in an SEO strategy are also relatively inexpensive. These include blogs, social media posts, and referrals.",]
    },
  ];

  const answers = {
    heading: "Accelerate Business Growth Through PPC and Google Ads",
    description: [
      "With years of experience as a leading pay-per-click and digital marketing agency, our agency has the in-house knowledge to guarantee high-converting campaigns. With our full suite of marketing services, you have access to everything you need under a single roof.",
      "If you’re experimenting with Google Ads for the first time or at a loss for how to improve your existing campaigns, we at Igloo have the tools to help. Book a consultation with one of our specialists today and get your paid search management campaign rolling."
    ],
    buttonText: "Book a Free Consultation",
    backgroundImage: "increaseTraffic.jpg",
  };

  const caseStudyData = [
    {
      image: "section6-6.jpg",
      heading: "Google Ads Case Study",
      subHead: "International School in Dubai | UAE",
      text: "To increase the number of students through Google Ads",
    },
    {
      image: "caseStudy10.jpg",
      heading: "Google Ads Case Study",
      subHead: "Leading Waterpark in Dubai | UAE",
      text: "To increase the ROI on the Ad Spend",
    },
    {
      image: "caseStudy11.jpg",
      heading: "Google Ads Case Study",
      subHead: "Tech Industry | XYZ Corp",
      text: "XYZ Corp aimed to enhance their customer engagement and increase conversions through PPC campaigns.",
    },
  ];

  const servicesData = [
    {
      id: 1,
      image: "ppcService1.svg",
      heading: "SEO Audits",
      list: ["On-Page SEO: We ensure that all aspects of your website are running efficiently. We optimize title tags, content, site navigation, site speed, and other technical elements. Additional responsibilities include picking the correct keyword tags, developing visual elements, and incorporating responsive design.",
        "Off-Page SEO: Elements relating to your online presence can also influence how you rank. As such, we pay close attention to backlinks, published content, social media shares, and more. Some of our off-page duties include developing and promoting shareable content, optimizing your Google My Business Profile, and monitoring social media mentions.",
        "Technical SEO: Suppose your website backend could use some work. In that case, we provide technical SEO services that include improving page speed, fixing broken links, developing a responsive, mobile-friendly layout, and securing your website with HTTPS."],
      additionalInfo: ["If your website isn’t ranking, we perform in-depth audits to determine why this might be the case. We provide competitive scorecards and backlink reports that inform your future site strategy. We also review the following factors."
      ],
    },
    {
      id: 2,
      image: "ppcService2.svg",
      heading: "Local SEO",
      description: ["Any SEO company will tell you the importance of local SEO to your success, but not every agency     will know how to help you improve it.",
        "Especially if you run a brick-and-mortar shop, improving your local SEO efforts can capture a more significant portion of your nearby market. We focus on developing a robust Google My Business profile that ensures your company appears in Google’s local SEO 3-pack.",
        "We also build local citations, monitor ratings, respond to negative reviews, build links, and optimize user experiences.",
      ],
    },
    {
      id: 3,
      image: "ppcService3.svg",
      heading: "eCommerce SEO",
      description: ["When it comes to eCommerce SEO, qualified leads are the foundation of your success. At Igloo, we optimize your entire product line and improve online visibility to achieve more sales. We can ensure your business shows up in search results through product markups, turning clicks into conversions.",
        "No other SEO agency in Dubai  possesses the tools and unique skillsets we have that help us take an analytical and growth-driven approach to growing your eCommerce business"
      ]
    },
    {
      id: 4,
      image: "ppcService4.svg",
      heading: "Voice SEO",
      description: ["Accessibility is an SEO factor many businesses tend to overlook. If you want to reach as many customers as possible, you can’t ignore specific demographics. By optimizing your conversational search results, we can tap into shoppers who may prefer to use voice tools over traditional shopping methods.",
        "In focusing on your voice SEO, we simultaneously improve your online visibility, increase website visits, boost conversions, and drive revenue."
      ],
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
      question: "Can I Choose The Keywords To Rank On?",
      answer: "Yes, you can. We collaborate with our clients to help them rank for relevant keywords. Using comprehensive keyword research conducted at the start of each project, we focus on targeting high-search-volume keywords to maximize visibility and impact.",
    },
    {
      id: 1,
      question: "Does your team work with global clients?",
      answer: "As an SEO company in Dubai and Miami, the majority of our clients come from those two areas. However, we do work with a variety of global clients as well as multinationals building their presence in the region. ",
    },
    {
      id: 2,
      question: "What Third Party Tools Do You Use?",
      answer: "We utilize tools like Ahrefs, SEMrush, Moz, and Ubersuggest to enhance our strategies. These tools help us conduct keyword research, stay updated on trending keywords, monitor referring domains and backlinks, track competitor performance and activities, and much more.",
    },
    {
      id: 3,
      question: "Is SEO just for Google?",
      answer:
        "With the help of the right SEO agency, SEO can help you rank not only at the top of Google, but also on other search engines such as Bing, DuckDuckGo, and even YouTube. (Yes, YouTube is considered a search engine)",
    },
    {
      id: 4,
      question: "Where Is Your SEO Team Based?",
      answer: "Client-facing and select backend staff are located in our physical offices in Dubai and Miami, while the rest of our backend team works from various offices in countries such as Lebanon, Egypt, Macedonia, Poland, and England.",
    },
    {
      id: 5,
      question: "How can you help my on-page SEO?",
      answer: "We go through your entire website, adjusting and optimizing title tags, navigation, loading speeds, site content and other technical elements. We also perform comprehensive keyword research and content creation based on these keywords to help your website climb up the rankings.",
    },
    {
      id: 6,
      question: "Do you offer packages?",
      answer: "We provide tailor-made packages and customized solutions designed to meet your specific needs.",
    },
    {
      id: 7,
      question: "How can you help my off-page SEO?",
      answer: "We take the time to carefully study your current portfolio of backlinks, published content, social media shares, and other SEO ranking factors outside your website in order to effectively increase its positive off-page ranking factors and help your website reach the very top of Google.",
    },
    {
      id: 8,
      question: "Do you offer flexible payment terms?",
      answer: "Yes we do. We will share our offering when we are in contact with you.",
    },
    {
      id: 9,
      question: "How can you help with technical SEO?",
      answer: "Any SEO agency will tell you that technical SEO is one of the most important efforts in optimizing your website for search engines, but not every agency will have the technical skills and know-how needed to efficiently identify and fix issues such as slow speed, broken links, or non-secured websites.",
    },
    {
      id: 10,
      question: "How does working with an SEO agency help me?",
      answer: "Working with an SEO agency can help you significantly improve your rankings on search engines over time, helping you acquire more customers without spending a lot of money on paid media.",
    },
    {
      id: 11,
      question: "Which type of SEO is more important: on-page, off-page or technical?",
      answer: "Each website’s situation is completely unique. It’s not a matter of whether one is more important than the other. The more likely scenario is that your website may desperately need work on its technical SEO, and that simply enhancing that aspect could already lead to great results. It always depends on your website’s weaknesses and strengths.",
    },
    {
      id: 12,
      question: "What is the ROI of working with an SEO company?",
      answer: "Working with an SEO agency allows you to build up your SEO rankings, leading to more organic, or “free”, traffic to your website. The ROI of SEO is always considered in the long-term, and the exact return you’ll get heavily depends on the quality of your website. It’s no use bringing traffic to your website if customers aren’t able to easily navigate it or make a purchase.",
    },
    {
      id: 13,
      question: "Can an SEO agency generate organic leads for my business?",
      answer: "When you partner with the right team and invest strategically in on-page, off-page, and technical SEO, you’ll witness the results; an organic flow of qualified leads steadily entering your CRM systems",
    },
  ];


  return (
    <>
      <Carousel
        heading="SEO Agency in dubai"
        breadcrumb="Home | SEO Agency in dubai"
        imageUrl="seo-banner.jpg"
      />
      <About data={data} />
      <Guidence guidence={guidence} />
      <Answers
        heading={answers.heading}
        description={answers.description}
        buttonText={answers.buttonText}
        // onButtonClick={handleButtonClick}
        backgroundImage={answers.backgroundImage}
      />
      <Clients />
      <CaseStudy caseStudy={caseStudyData} />
      <Services heading="Our SEO Services" text="As an SEO agency in Dubai, we curate SEO solutions specific to your industry depending on your business goals. Below are the services we offer:" servicesData={servicesData} />

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

export default SEOs