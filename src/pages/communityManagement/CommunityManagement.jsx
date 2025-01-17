import React from 'react'
import home1 from '/public/assets/images/fbAdsPort1.jpg';
import home2 from '/public/assets/images/fbAdsPort2.jpg';
import home3 from '/public/assets/images/fbAdsPort3.jpg';
import home4 from '/public/assets/images/fbAdsPort4.jpg';
import home5 from '/public/assets/images/fbAdsPort5.jpg';
import home6 from '/public/assets/images/fbAdsPort6.jpg';
import Carousel from '../../components/carousel/Carousel'
import About from '../../components/about/About'
import Portfolio from '../../components/portfolio/Portfolio';
import Services from '../../components/services/Services';
import Answers from '../../components/answers/Answers';
import Clients from '../../components/clients/Clients';
import BookConsultation from '../../components/bookConsultation/BookConsultation';
import LatestInsight from '../../components/latestInsight/LatestInsight';
import Faqs from '../../components/faqs/Faqs';
import Offers from '../../components/offers/Offers';
import Bounce from '../../components/bounce/Bounce';
import Questions from '../../components/questions/Questions';

const CommunityManagement = () => {

    const data = [
        {
            heading: 'Community Management Agency',
            description: [
                "Community management is essential to businesses that rely solely on social media to earn and retain leads. If a “happy wife makes for a happy life”, the same principle applies to your customer base.",
                "Fortunately, our specialists at Igloo are experts at nurturing business relationships and can bridge the gap between consumers and your brand. If your social media accounts lack a dedicated community manager, contact Igloo for help today."
            ],
            showButton: false,
            buttonText: 'GET STARTED NOW',
        },
        {
            heading: 'Happy Customers Make for a Successful Business',
            description: [
                "Social media community management defines the process by which your audience engages with consumers online. Community managers are responsible for managing communications, discovering new ways to engage digital communities, and being overall advocates for your brand."
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
            image: "/public/assets/images/communityManage1.svg",
            heading: "Engaging",
            description: ["Positive comments make for a strong brand. With that in mind, expect to garner negative comments every once in a while. While an automated response might suffice, human responses do a better job of engaging audiences. Every time you acquire a complaint on one of your channels, it is our responsibility to address them personally and with an active solution."],
        },
        {
            id: 2,
            image: "/public/assets/images/communityManage2.svg",
            heading: "Monitoring",
            description: ["At the crux of community management is social listening. By monitoring upcoming trends, your brand can take part in conversations that matter. We use keyword monitoring tools and Google Alerts to keep track of brand mentions.",
            ],
        },
        {
            id: 3,
            image: "/public/assets/images/communityManage3.svg",
            heading: "Moderating",
            description: ["Social media moderation is a combination of engaging and monitoring—we manage your online reputation by keeping an ear out for negative feedback and addressing it promptly. We also hide spam that detracts from the quality of your content and curate your livestream chat channels to ensure you only ever earn goodwill from the people who encounter your community from the outside."
            ]
        },
        {
            id: 4,
            image: "/public/assets/images/communityManage4.svg",
            heading: "Measuring",
            description: ["To get the best sense of how an audience perceives your brand, you have to garner feedback from your community. To do this, we determine where your followers are most active and use social monitoring tools to listen in on important conversations. Then, we use this information to pinpoint areas of improvement."
            ],
        },
    ];

    const answers = {
        heading: "Don’t Just Build a Business - Build a Community",
        description: [
            "The key to a lasting business is a powerful relationship between consumer and company. Community management allows your business to present itself as a knowledgeable and engaging entity that exists to solve common buyer problems.",
            "Contact Igloo today to begin building a loyal fanbase that allows and empowers your brand to thrive."
        ],
        buttonText: "Book a Free Consultation",
        backgroundImage: "/public/assets/images/cmpetetive-crousel.jpg",
    };

    const servicesData2 = [
        {
            id: 1,
            image: "/public/assets/images/communityServices1.svg",
            heading: "Acquisition",
            description: ["Contrary to popular belief, community management plays a significant role in your acquisition model. As early as the brand awareness stage, you’ll want to make sure consumers actually convert.During this stage, we make sure to address pressing customer queries that reflect every portion of your business funnel."],
        },
        {
            id: 2,
            image: "/public/assets/images/communityServices2.svg",
            heading: "Crisis Management",
            description: ["For any brand journey, crisis management is inevitable. Once an issue arises, it can become challenging to overcome—that’s where we step in. Through team coordination and leadership skills, we address complaints as efficiently as possible while monitoring brand sentiment.",
            ],
        },
        {
            id: 3,
            image: "/public/assets/images/communityServices3.svg",
            heading: "Customer Care",
            description: ["A critical part of community management is consumer-brand interaction. By listening to and monitoring consumer behaviors, we can use this information to improve relationships. We achieve top care by keeping up with ever-changing consumer expectations and monitoring every stage of the buyer journey."
            ]
        },
        {
            id: 4,
            image: "/public/assets/images/communityServices4.svg",
            heading: "Retention",
            description: ["Acquiring customers is one thing—retaining them is another. To keep your audience engaged, we make sure you aren’t being repetitive through trend monitoring. We also take your most successful pieces of content and use them for remarketing purposes."
            ],
        },
    ];

    const questionData = {
        heading: "Still Have Questions?",
        text: [""],
        buttonText: "Book a Free Consultation",
        backgroundImage: "/public/assets/images/stillQuestion-banner.jpg",
    };

    const bounceData = [
        {
            image: "./public/assets/images/section6-7.jpg",
            text: "Igloo being a boutique agency, has high service standards, comparable to any large global agency.",
            heading: "Manuri Nakkawita-Anthonis | Director of Marketing at Bounce Middle East",
        },
        {
            image: "./public/assets/images/section6-7.jpg",
            text: "Our partnership with Igloo has revolutionized our marketing strategies.",
            heading: "John Doe | CEO of Bounce Middle East",
        },
        {
            image: "./public/assets/images/section6-7.jpg",
            text: "Igloo’s personalized approach is unmatched in the industry.",
            heading: "Jane Smith | Marketing Lead at Bounce Middle East",
        },
        {
            image: "./public/assets/images/section6-7.jpg",
            text: "With Igloo, we achieved milestones we never thought possible.",
            heading: "Michael Brown | Operations Manager at Bounce Middle East",
        },
        {
            image: "./public/assets/images/section6-7.jpg",
            text: "Igloo's creativity and execution are truly world-class.",
            heading: "Emily Davis | Brand Manager at Bounce Middle East",
        },
        {
            image: "./public/assets/images/section6-7.jpg",
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
                heading="SOCIAL MEDIA AGENCY IN DUBAI"
                breadcrumb="Home | SOCIAL MEDIA AGENCY IN DUBAI"
                imageUrl="marketingAutomation-carousel.jpg"
            />
            <About data={data} />
            <Portfolio
                columns={portfolioColumns}
                // heading="PORTFOLIO"
                buttonText="View All Portfolio"
            />
            <Services heading="Key Components of Community Management" text="At Igloo, we define your community management strategy according to these five key components." servicesData={servicesData} />

            <Answers
                heading={answers.heading}
                description={answers.description}
                buttonText={answers.buttonText}
                // onButtonClick={handleButtonClick}
                backgroundImage={answers.backgroundImage}
            />
            <Clients />

            <Services heading="Our Community Management Services" text="At Igloo, we divide our community management services into the following stages." servicesData={servicesData2} />

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

export default CommunityManagement