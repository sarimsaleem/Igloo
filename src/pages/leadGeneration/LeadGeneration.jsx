import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import About from '../../components/about/About';
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
import { Container, Col, Row } from 'react-bootstrap'
const LeadGeneration = () => {

  const data = [
    {
      heading: 'Lead Generation Agency',
      description: [
        '91% of marketers consider lead generation to be their primary business goal. Of these marketers, 53% allocate half their marketing budgets to lead generation. Despite the available tools and resources, generating leads is no easy feat.',
        'Fortunately, agencies like Igloo provide comprehensive solutions for small businesses to large enterprises. Whether you are new to the industry or want to increase your following, collaborating with our specialists can be the key to increasing conversions and drastically improving your Dubai business’ bottom line.',
      ],
      showButton: true,
      buttonText: 'GET STARTED NOW',
    },
  ];

  const guidence = [
    {
      id: 0,
      heading: "The Importance of Lead Generation in Business",
      description: [
        "High-quality leads are what keep your business sustainable. However, lead generation can benefit your business in many ways you might not expect."
      ],
    },
    {
      id: 1,
      image: "leadGen1.svg",
      title: "Market Expansion and Growth",
      description: [
        "While you may already have a collection of targeted customers in your back pocket, you may be missing opportunities to expand into other sectors.",
        "Lead generation enables you to learn more about your Dubai or Miami based prospects, including their pain points, immediate needs, and purchasing habits. With this information, you can start the right conversations through the right channels. "]
    },
    {
      id: 2,
      image: "leadGen2.svg",
      title: "Enhanced Lead Quality",
      description: ["Leads are only as valuable as their ability to convert. If you’re funneling thousands of leads but only converting several hundred, it may be time to revisit your strategy.",
        "Lead generation can tell you when your efforts need to become more targeted. If you’re garnering high traffic but not converting, you’ll know how to skew copy and visuals better to suit your target audience."
      ]
    },
    {
      id: 3,
      image: "leadGen3.svg",
      title: "Improved Cash Flow",
      description: [
        "With the right messaging and a clear-cut lead generation strategy, you can maximize returns and profits.",
        "The better you capture the attention of qualified leads, the easier it’ll be for you to tap into new circles and generate lucrative business opportunities.",]
    },
    {
      id: 4,
      image: "leadGen4.svg",
      title: "Visibility and Awareness",
      description: ["If you’re a startup struggling to gain traction or an established business becoming stagnant, focusing on lead generation can significantly boost your brand visibility and awareness.",
        "Garner leads by focusing on where your target customers spend the most time, whether it be on social media channels or specific forums."
      ]
    },
    ,
    {
      id: 5,
      image: "leadGen5.svg",
      title: "Valuable Insights",
      description: [
        "Lead generation isn’t just about guaranteeing sales and increasing profits—it’s also an effective way to gather information about your customers. Depending on where most of your leads come from, you can learn more about their interests, where they prefer to shop, and the factors that keep them from converting.",]
    },
    {
      id: 6,
      image: "leadGen6.svg",
      title: "EMPOWERED SALES TEAMS ",
      description: ["Cold calling and email outreach have notoriously low success rates, so if your sales team doesn’t have a steady stream of sufficiently qualified leads, it’s going to be difficult for them to achieve their sales targets. Focusing on lead generation allows you to provide them with the right client, making their job much easier.",]
    },
  ];

  const answers = {
    heading: "Accelerate Business Growth Through PPC and Google Ads",
    description: [
      "With years of experience as a leading pay-per-click and digital marketing agency, our agency has the in-house knowledge to guarantee high-converting campaigns. With our full suite of marketing services, you have access to everything you need under a single roof.",
      "If you’re experimenting with Google Ads for the first time or at a loss for how to improve your existing campaigns, we at Igloo have the tools to help. Book a consultation with one of our specialists today and get your paid search management campaign rolling."
    ],
    buttonText: "Book a Free Consultation",
    backgroundImage: "getnotice-bg.jpg",
  };

  const servicesData = [
    {
      id: 1,
      image: "GenerationServices1.svg",
      heading: "Digital Lead Generation",
      description: ["Our digital lead generation services encompass various mediums, including your website and paid search tactics. These services are most appropriate for businesses with a presence on multiple platforms and channels."
      ],
    },
    {
      id: 2,
      image: "GenerationServices2.svg",
      heading: "B2B Lead Generation",
      description: ["Contrary to popular belief, B2C and B2B applications are more opposite than you might expect. We use various techniques to capture business leads, including organic SEO campaigning, email marketing, and social media campaigns. The more we skew your campaigns towards organic efforts, the more we can reduce your PPC spending.",
      ],
    },
    {
      id: 3,
      image: "GenerationServices3.svg",
      heading: "PPC Lead Generation",
      description: ["If you have room in your budget for paid efforts, our PPC lead generation services place your brand and products in front of the right people. We direct your audience toward your website by enticing visitors with irresistible offers and focused landing pages.",
        "We evaluate your results by zeroing in on specific metrics like cost-per-lead, conversion rate, and cost-per-click."
      ]
    },
    {
      id: 4,
      image: "GenerationServices4.svg",
      heading: "Social Media Lead Generation",
      description: ["Social media campaigns are an excellent way to communicate with potential buyers and provide instant gratification to common queries. When it comes to leveraging platforms like Facebook, Twitter, and Instagram, we aim to develop a desire for your products and services through effective messaging."
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
        heading="Lead Generation Agency in dubai"
        breadcrumb="Home | Lead Generation Agency in dubai"
        imageUrl="lead-gen-carousel.jpg"
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
      <Services heading="Our Lead Generation Services" text="We tailor-make our lead generation strategies to your specific needs to guarantee the best possible returns. Depending on your business goals, our agency can curate a unique lead generation campaign focusing on the following applications." servicesData={servicesData} />
      <Container style={{ marginBottom: "60px" }}>
        <Row>
          <Col md={4}>
            <div className="digitalmarketing">
              <h4 className='digitalmarketing-heading'><span className='digitalmarketing-heading-span'>01</span></h4>
              <h2 className="digitalMarketing-subheadding" style={{fontSize:"20px"}} >Facebook</h2>
              <p className='digitalmarketing-detail'>Facebook is equipped with many native lead generation tools like landing pages, custom audience software, and lead scoring. With these tools, we make sure your audience knows what they’re signing up for, the benefits, and why they should continue to patronize your business.
              We reduce drop-offs by automating forms and customizing them to cater to higher-quality leads. We then sync these leads to your existing CRM platform, allowing you to personalize lead ads further or make a quick follow-up.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="digitalmarketing">
              <h4 className='digitalmarketing-heading'><span className='digitalmarketing-heading-span'>02</span></h4>
              <h2 className="digitalMarketing-subheadding" style={{fontSize:"20px"}} >Instagram</h2>
              <p className='digitalmarketing-detail'>To tap into the more than one billion users on Instagram every day, we take advantage of its built-in ad services and analytics. Our social media lead generation specialists pay close attention to detail, incorporating the right hashtags, implementing CTA buttons, and crafting a catchy bio.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="digitalmarketing">
              <h4 className='digitalmarketing-heading'><span className='digitalmarketing-heading-span'>03</span></h4>
              <h2 className="digitalMarketing-subheadding" style={{fontSize:"20px"}} >Twitter</h2>
              <p className='digitalmarketing-detail'>Twitter is an excellent platform for communicating updates and bite-sized information to potential customers. Our specialists are well-versed in its automated Twitter Lead Gen Cards system, allowing you to generate leads through a single tweet without clicking out of the app. These Lead Gen Cards collect usernames and email addresses for you to follow up with.</p>
            </div>
          </Col>
        </Row>
      </Container>
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

export default LeadGeneration