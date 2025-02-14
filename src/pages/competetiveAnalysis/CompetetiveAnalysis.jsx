import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import Answers from '../../components/answers/Answers'
import Clients from '../../components/clients/Clients'
import Questions from '../../components/questions/Questions'
import Bounce from '../../components/bounce/Bounce'
import Offers from '../../components/offers/Offers'
import Faqs from '../../components/faqs/Faqs'
import LatestInsight from '../../components/latestInsight/LatestInsight'
import BookConsultation from '../../components/bookConsultation/BookConsultation'
import About from '../../components/about/About'
import Services from '../../components/services/Services'
import { Button, Col, Container, Row } from 'react-bootstrap'
import "./competetiveAnalysis.css"
import CompetitiveAnalysisImg from "/public/assets/images/Competitive-Analysis-img_1.jpg";

const CompetetiveAnalysis = () => {

    const data = [
        {
            heading: 'Competitive Analysis',
            description: [
                'For modern businesses, robust digital initiatives are essential to success. Yet, many fail to take the lead on competitors by failing to capitalize on current trends or using technology to improve business performance.',
                'Fortunately, we are here to step in as your digital ecosystem planner and expert. With the help of our expert strategists, you can stay one step ahead of every change, all the time.'
            ],
            showButton: true,
            buttonText: 'BOOK A FREE CONSULTATION',
        },
    ];

    const servicesData = [
        {
            id: 1,
            image: "performcompetitiveAnalysis1.svg",
            heading: "Step 1: Determine Who Your Competitors Are and What They Do",
            description: ["First, we determine who your competitors are by listing businesses that satisfy the same customer needs. Then, we evaluate their value proposition and consider their market share, consumers behavior, pricing strategies, and distribution methods. "
            ],

        },
        {
            id: 2,
            image: "performcompetitiveAnalysis2.svg",
            heading: "Step 2: Research Competitor Tactics",
            description: ["Then, we analyze your competitors’ sales process by taking a closer look at their:",
            ],
            list: ["Distribution channels", "Physical locations (if any)", "Partner reselling programs", "Annual revenues", "Customers’ reasons for not buying"],
            additionalInfo: [
                "We also use their sales information to determine whether you’re pricing your products and services appropriately. As such, we have to ensure you’re meeting competitive shipping costs, which directly affects cart abandonment rates.",
                "After asking how much, we simply ask how? How are your competitors marketing their products? They might be leveraging:"
            ],
            list2: ["Blogs", "YouTube channel", "Whitepapers", "Visual content", "Press releases", "Case studies", "Media kits", "Buying guides", "Online advertising campaigns"],
        },
        {
            id: 3,  
            image: "performcompetitiveAnalysis3.svg",
            heading: "Step 3: Study Technology Stacks",
            description: ["Knowing what kind of technology your competitors are utilizing can put you at a significant advantage. For instance, your competitors may be taking advantage of a CRM that you previously had on your radar. If so, leveraging it can thrust your success forward."
            ]
        },
        {
            id: 4,
            image: "performcompetitiveAnalysis4.svg",
            heading: "Step 4: Review Their Social Media Platform",
            description: ["When it comes to digital marketing, social media is the place to be. Thus, evaluating how your competitors are engaging with consumers online can give you an idea of what to do and what not to do."
            ],
            list:[
                "Facebook", "Twitter", "Instagram","LinkedIn", "Snapchat", "YouTube","TikTok"   
            ]
        },  
        {
            id: 5,
            image: "performcompetitiveAnalysis5.svg",
            heading: "Step 5: Perform a SWOT Analysis",
            description: ["As we study your competitors, we use the information we obtain to create a SWOT analysis. Throughout the process, we ask:"
            ],
            list:[
                "Where does your competitor have an advantage over your brand?",
                "What are your competitors doing that you aren’t?",
                "In which areas can your competitors improve?"
            ],
            additionalInfo:["By doing this, we can effectively put your business in a more strategic position."]
        },
    ];

    const answers = {
        heading: "Get Ahead of Your Competitors",
        description: [
            "Running a successful business is not easy, but with the right help, you can always stay ahead of the curve. If you want to give your competitors a run for their money, contact our experts at Igloo today and book a free consultation."
        ],
        buttonText: "Book a Free Consultation",
        backgroundImage: "getnotice-bg.jpg",
    };

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
                heading="Competitive Analysis"
                breadcrumb="Home | Competitive Analysis"
                imageUrl="cmpetetive-crousel.jpg"
            />

            <About data={data} />

            <Container>
                <Row>
                    <Col md={6}>
                        <h1 className='main-heading' style={{ textAlign: "center" }}>EFFECTIVE DIGITAL STRATEGIES, ALWAYS AHEAD OF THE GAME</h1>
                        <div className='heading-underline'></div>
                        <p className='main-description'>
                            For modern businesses, robust digital initiatives are essential to success. Yet, many fail to take the lead on competitors by failing to capitalize on current trends or using technology to improve business performance.
                        </p>
                        <ul className='CompetetiveDetail-ul'>
                            <li>Identify your competitors</li>
                            <li>Analyze their strengths and weaknesses</li>
                            <li>Create a competitive advantage</li>
                            <li>Evaluate the effectiveness of your digital marketing efforts</li>
                            <li>Learn from your competitors' successes and failures</li>
                            <li>Continuously adapt and improve your digital marketing strategy</li>
                        </ul>
                        <p className='main-description-bold'>
                            For some, the answers to these questions will be less obvious—but that is why we are here to help.
                        </p>
                    </Col>
                    <Col md={6}>
                        <h1 className='main-heading' style={{ textAlign: "center" }}>A COMPETITIVE ANALYSIS AND WHY IT MATTERS</h1>
                        <div className='heading-underline'></div>
                        <p className='main-description'>
                            For modern businesses, robust digital initiatives are essential to success. Yet, many fail to take the lead on competitors by failing to capitalize on current trends or using technology to improve business performance.
                        </p>
                        <ul className='CompetetiveDetail-ul'>
                            <li>Identify your competitors</li>
                            <li>Analyze their strengths and weaknesses</li>
                            <li>Create a competitive advantage</li>
                            <li>Evaluate the effectiveness of your digital marketing efforts</li>
                            <li>Learn from your competitors' successes and failures</li>
                            <li>Continuously adapt and improve your digital marketing strategy</li>
                        </ul>
                        <p className='main-description-bold'>
                            Understanding the competitive landscape is one of the most important steps to ensure long-term success.
                        </p>
                    </Col>

                </Row>
                <div className="about-btn-parent">
                    <Button className="about-btn" >BOOK A FREE CONSULTATION</Button>
                </div>
            </Container>

            <div className="competetiveanalysis-imageContainer">
                <img src={CompetitiveAnalysisImg} alt="Competitive Analysis" />
            </div>

            <Services heading="How We Perform a Competitive Analysis" text="To gain an edge above your competitors, we take the following steps:" servicesData={servicesData} />

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

export default CompetetiveAnalysis