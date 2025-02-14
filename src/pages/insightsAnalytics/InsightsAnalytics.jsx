import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import About from '../../components/about/About'
import Guidence from '../guidence/Guidence';
import Answers from '../../components/answers/Answers';
import Clients from '../../components/clients/Clients';
import Services from '../../components/services/Services';
import Questions from '../../components/questions/Questions';
import Bounce from '../../components/bounce/Bounce';
import Offers from '../../components/offers/Offers';
import Faqs from '../../components/faqs/Faqs';
import LatestInsight from '../../components/latestInsight/LatestInsight';
import BookConsultation from '../../components/bookConsultation/BookConsultation';
const InsightsAnalytics = () => {

  const data = [
    {
      heading: 'Digital Marketing Insights and Analytics',
      description: [
        'Data analytics play a central role in improving business decision-making processes and outcomes. Data-driven companies are 23 times more likely to acquire customers, while 83% of business leaders use insights to gain a competitive edge in the market.',
        'If insights and analytics are not yet part of your marketing strategy, there are many reasons why they should be. At Igloo digital marketing agency, we use big data to inform your business decisions, communicate with customers, and enhance online and offline shopping experiences.',
      ],
      showButton: true,
      buttonText: 'BOOK A FREE CONSULTATION',
    },
  ];

  const guidence = [
    {
      id: 0,
      heading: "How Digital Marketing Analytics Can Benefit Your Business",
      description: [
        "The better you understand your customers, the more likely you can get them to convert; but how can you more deeply understand their pain points and desires? The answer is simple: actionable insights. Here are a few other ways your business can benefit from big data."
      ],
    },
    {
      id: 1,
      image: "insight1.svg",
      title: "Better Engage Customers",
      description: [
        "The key to better consumer engagement is providing value. Big data can help you identify weak points in your sales journey and create more realistic targets.",
        "We help determine where your strategy might be lacking and use actionable insights to make relevant recommendations to potential buyers."]
    },
    {
      id: 2,
      image: "insight2.svg",
      title: "Make Clear Product Improvements",
      description: ["Product development doesn’t stop as soon as your offers hit the market. Consumer needs constantly change, so even the most effective products are at risk of becoming obsolete.",
        "At Igloo, we develop a log of customer suggestions and feedback that we can use to inform product improvements. We don’t just consider what customers want to change about your product; we also take an in-depth look at why your existing product isn’t meeting their needs."
      ]

    },
    {
      id: 3,
      image: "insight3.svg",
      title: "Improve Support Resources",
      description: [
        "Contrary to popular belief, you don’t lose a customer when they become dissatisfied with your business. By determining which customer interactions are causing dissatisfaction, we can determine how best to address specific issues.",
        "Big data can also identify holes in resource allocation, indicating where customer service might be lacking."
      ]
    },
    {
      id: 4,
      image: "insight4.svg",
      title: "Mitigate Risks and Setbacks",
      description: ["Business risks are inevitable, no matter how much you prepare for them. However, data analytics can help you better understand these vulnerabilities and implement the appropriate prevention strategies.",
        "For instance, if your business has previously experienced uncollected receivables, we can develop a system for identifying unpaid invoices, lost checks, and other related materials.",
        'In addition, we can use data analytics to minimize losses, especially if your business is undergoing a fluctuation in product demand. We create statistical models to make automatic recommendations based on your profits, returns, and customer-related metrics.'
      ]
    },
    {
      id: 5,
      image: "insight5.svg",
      title: "Enhance Data Security",
      description: [
        "Many businesses will experience data breaches at least once in their lifetime. However, by processing and visualizing relevant data, we can determine the cause of specific attacks and what measures to take to prevent them from reoccurring.",
        "We can develop statistical models to flag anomalies and alert security professionals to keep your UAE business safe 24/7.",]
    },
    {
      id: 6,
      image: "insight6.svg",
      title: "Increase Sales",
      description: ["Data analytics can flag negative experiences within your sales funnel that keep customers from following through with a purchase. By running predictive models on transaction data, we can determine the best methods for sales closing, ultimately increasing your profits and returns.",]
    },
  ];

  const answers = {
    heading: "Grow Your Business with Accurate and Actionable Insights",
    description: [
      "Getting a clearer picture of your data in relation to the customers you’re servicing is the best way to drive success. If you’re having trouble making sense of what your numbers mean, we at Igloo have the experience and expertise to inform your decision-making process.",
      "If you’re ready to start growing your Dubai-based business, reach out to us today to book a consultation."
    ],
    buttonText: "Book a Free Consultation",
    backgroundImage: "marketingAutomation-carousel.jpg",
  };

  const servicesData = [
    {
      id: 1,
      image: "googleAna1.svg",
      heading: "Google Analytics",
      description: ["One of the best ways to make sense of your numbers is Google Analytics. This tool encompasses all of your online marketing efforts and can help us inform your campaigns and strategies more effectively.",
        "Through our Google Analytics consulting services, we can help customize goals, segment your audiences, and create custom monthly reports that reflect campaign performance.",

      ],
    },
    {
      id: 2,
      image: "googleAna2.svg",
      heading: "Conversion Rate Optimization",
      description: ["An integral part of your business success is how well your marketing materials encourage consumers to convert. We can determine your website’s usability through conversion rate optimization, audit existing conversion efforts, develop raw heatmap data, and review aesthetic elements.",

        "We then determine your website’s strengths and weaknesses and make data-back recommendations. Ultimately, our goal is to increase sales and form completions.",
      ],
    },
    {
      id: 3,
      image: "googleAna3.svg",
      heading: "Customer Experience Optimization",
      description: ["A positive customer experience is what gets consumers to convert. We use business data to make recommendations tailored to your customer journey, reviewing touch points across all channels.",
      ]
    },
    {
      id: 4,
      image: "googleAna4.svg",
      heading: "Social Media Management",
      description: ["If you regularly run social media campaigns, measuring their success is imperative to driving sales and returns. We ensure that your campaigns are reaching the right audiences and determine the most appropriate ad spend to maximize returns."
      ],
    },
    {
      id: 5,
      image: "googleAna5.svg",
      heading: "Pay Per Click Management",
      description: ["If running a PPC campaign for your business, we can oversee performance and provide follow-up reports regarding any observations or recommendations.",
        "With our PPC management services, you can make more deliberate choices regarding keyword selection, ad remarketing, ad copy, and visual elements. Throughout the duration of your campaign, we will provide a renewed and tailored strategy that informs your custom ad copy, bid optimization strategy, and keywords."
      ],
    },

    {
      id: 6,
      image: "googleAna6.svg",
      heading: "Prescriptive and Predictive Analytics",
      description: ["For your business to evolve, you should have a general idea of what to expect as the industry changes. We perform prescriptive and predictive analytics tracking to make decisions based on past, proven trends and drive the future results you want."
      ],
    },
    {
      id: 7,
      image: "googleAna7.svg",
      heading: "Bespoke Industry Solutions",
      description: ["We tailor our data-driven solutions to your business and can deliver industry-specific services. We have specialties in providing actionable insight plans for those in retail, telco, health, technology, and other backgrounds."
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
      question: "What is better PPC or SEO?",
      answer: "Both are important. PPC, like Google Ads and Social Media Ads help a business generate traffic immediately and at scale. SEO creates more credibility as users generally trust brands that rank high on search engines organically. The downside of SEO that it takes a long time, and in any time can lose traffic due to competitors winning rankings.",
    },
    {
      id: 1,
      question: "What industries do you work with?",
      answer: "We work with all industries in both B2B and B2C businesses. We have serviced over 150 clients to date with their PPC needs.",
    },
    {
      id: 2,
      question: "Where is your PPC Team based?",
      answer: "Client-facing and select backend staff are located in our physical offices in Dubai and Miami, while the rest of our backend team works from various offices in countries such as Lebanon, Egypt, Macedonia, Poland, and England.",
    },
    {
      id: 3,
      question: "Do you sell Google and Social Media Ads Packages?",
      answer:
        "We create tailor-made packages for our clients, recognizing that every business has unique needs.",
    },
    {
      id: 4,
      question: "Does your team create the ads and content?",
      answer: "That depends on the client’s needs. In short, yes we do; we have a team of creative writers, designers, and videographers to assist you with your needs.",
    },
    {
      id: 5,
      question: "Can I choose keywords for my Google Search Ads Campaigns?",
      answer: "Absolutely! Our Google experts conduct detailed keyword research and share the findings with you for your feedback and approval before launching the campaigns.",
    },
  ];

  return (
    <>
      <Carousel
        heading="Insights and Analytics"
        breadcrumb="Home | Insights and Analytics"
        imageUrl="insight-carousesl.jpg"
      />
      <About data={data} />
      <Guidence guidence={guidence} />
      <Answers
        heading={answers.heading}
        description={answers.description}
        buttonText={answers.buttonText}
        backgroundImage={answers.backgroundImage}
      />
      <Clients />
      <Services heading="Our Insights and Analytics Services" text="Without valuable business insights, your business metrics become meaningless numbers. Fortunately, our data analysts at Igloo can bridge the gaps between big data and your business decisions with the following services." servicesData={servicesData} />

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

export default InsightsAnalytics