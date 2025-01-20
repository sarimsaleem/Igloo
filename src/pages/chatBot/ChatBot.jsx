import React from 'react'
import "./chatBot.css";
import emailMarketinImg from "/public/assets/images/enhanceChatbox.jpg";
import { Col, Container, Row } from 'react-bootstrap';
import emailMarketinImg1 from "/public/assets/images/chatbbotServices1.svg"
import emailMarketinImg2 from "/public/assets/images/chatbbotServices2.svg"
import emailMarketinImg3 from "/public/assets/images/chatbbotServices3.svg"
import Carousel from '../../components/carousel/Carousel'
import About from '../../components/about/About';
import Guidence from '../guidence/Guidence';
import Answers from '../../components/answers/Answers';
import Clients from '../../components/clients/Clients';
import Questions from '../../components/questions/Questions';
import Bounce from '../../components/bounce/Bounce';
import Offers from '../../components/offers/Offers';
import Faqs from '../../components/faqs/Faqs';
import LatestInsight from '../../components/latestInsight/LatestInsight';
import BookConsultation from '../../components/bookConsultation/BookConsultation';

const ChatBot = () => {

    const data = [
        {
            heading: 'Lifecycle Marketing | Chatbots and Live Chat',
            description: [
                'Nowadays, customers aren’t just looking for a high-quality product or service—they’re also after the experience behind it. If your website isn’t converting as many leads as it can, perhaps you’re missing a vital consumer journey element: The Chatbot.',
                'At Igloo, we are proud to be well-versed in the most advanced artificial intelligence systems that can significantly impact how users experience your website. If you want to incorporate digital assistance into your website, contact us to learn more about how we build chatbots for our clients.',
            ],
            showButton: true,
            buttonText: 'GET STARTED NOW',
        },
    ];

    const guidence = [
        {
            id: 0,
            heading: "How to Enhance UX with Chatbots",
            description: [
                "Embedding a chatbot on your website can significantly improve a user’s shopping experience and even increase your chances of making a sale.",
                "If you aren’t convinced our chatbots are for you, here are a few reasons that might change your mind."
            ],
        },
        {
            id: 1,
            image:"chatbot1.svg",
            title: "Streamline the Sales Process",
            description:
                "Abandoned carts are a big problem for many businesses. However, our chatbots can help engage indecisive shoppers and encourage them to follow through with their purchases by asking questions and making recommendations according to their shopping habits, enabling us to directly impact your bottom line.",
        },
        {
            id: 2,
            image:"chatbot2.svg",
            title: "Answer Questions",
            description: "Nobody likes to wait around for a customer service agent to become available before getting an answer to their question. With our chatbots, you can quickly resolve common issues and settle popular inquiries. If a query is too complex, we can program your chatbot to ask for a customer’s contact information or redirect them to a live chat agent.",
        },
        {
            id: 3,
            image:"chatbot3.svg",
            title: "Automate Repetitive Tasks",
            description:
                "Non-value-adding tasks like booking an appointment or reservation can quickly become time-consuming for human employees. As such, we build chatbots that can handle repetitive and administrative duties and even make suggestions according to a customer’s availability.",
        },
        {
            id: 4,
            image:"chatbot4.svg",
            title: "Multi-language Support",
            description: "If you do business in multiple countries, dedicating an agent to answer questions in various languages may not be efficient. Instead, we deploy chatbots to support and satisfy queries in multiple languages, ensuring that all of your users get instant answers to their questions, no matter where they are from.",
        },
        {
            id: 5,
            image:"chatbot5.svg",
            title: "24/7 Support",
            description:
                "Perhaps the most significant disadvantage of human support is the inability to be available round-the-clock. Fortunately, our chatbots stay active throughout the day and can be particularly helpful for businesses with a presence in multiple countries.",
        },
        {
            id: 6,
            image:"chatbot6.svg",
            title: "REDUCED COSTS",
            description: "Implementing chatbots can help you reduce your need for human customer support and streamline your processes. Both factors will enable you to significantly reduce your business’ operating costs without compromising on customer experience.",
        },
    ];

    const answers = {
        heading: "Give Your Customers the Ultimate Experience",
        description: [
            "Chatbots are a significant benefit for both businesses and consumers. While you spend more time on vital decision-making processes, your customers can still get the high-quality help they deserve. If you’re looking for a way to enhance user experience on your website, contact Igloo today to learn more about how we can create the right chatbot for your business."
        ],
        buttonText: "Book a Free Consultation",
        backgroundImage:"getnotice-bg.jpg",
    };

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
                heading="Chatbots/Live Chat"
                breadcrumb="Home | Chatbots/Live Chat"
                imageUrl="marketingAutomation-carousel.jpg"
            />
            <About data={data} />
            <div className="competetiveanalysis-imageContainer">
                <img src={emailMarketinImg} alt="Competitive Analysis" />
            </div>
            <Guidence guidence={guidence} />;
            <Answers
                heading={answers.heading}
                description={answers.description}
                buttonText={answers.buttonText}
                // onButtonClick={handleButtonClick}
                backgroundImage={answers.backgroundImage}
            />
            <Clients />
            <Container >
                <h1 className='agency-heading' style={{ textAlign: "center", marginTop: "40px" }}>Our Chatbot Services</h1>
                <div className='heading-underline'></div>
                <p className='agency-description' style={{ color: "#494646" }}>
                    At Igloo, we deploy the latest machine learning and natural language processing technology to create advanced and helpful chatbots. Here are a few of the applications we provide.</p>

                <Row className="brandGuideMatter-parent">
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={emailMarketinImg1} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Declarative Chatbots</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">We program declarative chatbots that adhere to a pre-programmed set of rules if you need them precisely for troubleshooting and FAQ purposes to enable this machine learning program to ensure site visitors get accurate responses to all their queries instantly without ever having to wait around.</p>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={emailMarketinImg2} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Predictive Chatbots</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                For something with less of a “programmed” response, we create predictive chatbots that function more like a virtual assistant. These chatbots double as sales agents and provide personalized guidance to each visitor. We achieve these solutions through advanced language processing and synthesizing.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="brandGuideMatter-parent">
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={emailMarketinImg3} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={11}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Dedicated Agents</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                If you prefer a dedicated live chat agent, our customer service team is trained to assist in multiple industries that include:  </p>
                            <div class="two-columns">
                                <ul class="column">
                                    <li>Travel and hospitality</li>
                                    <li>Finance</li>
                                    <li>Retail</li>
                                </ul>
                                <ul class="column">
                                    <li>Healthcare</li>
                                    <li>Personal assistance</li>
                                    <li>E-Commerce</li>
                                </ul>
                            </div>
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

export default ChatBot