import React from 'react'
import "./socialMedia.css"
import home1 from '/public/assets/images/fbAdsPort1.jpg';
import home2 from '/public/assets/images/fbAdsPort2.jpg';
import home3 from '/public/assets/images/fbAdsPort3.jpg';
import home4 from '/public/assets/images/fbAdsPort4.jpg';
import home5 from '/public/assets/images/fbAdsPort5.jpg';
import home6 from '/public/assets/images/fbAdsPort6.jpg';
import Carousel from '../../components/carousel/Carousel'
import About from '../../components/about/About'
import Guidence from '../guidence/Guidence';
import Answers from '../../components/answers/Answers';
import Bounce from '../../components/bounce/Bounce';
import Clients from '../../components/clients/Clients';
import Portfolio from '../../components/portfolio/Portfolio';
import Offers from '../../components/offers/Offers';
import Faqs from '../../components/faqs/Faqs';
import LatestInsight from '../../components/latestInsight/LatestInsight';
import BookConsultation from '../../components/bookConsultation/BookConsultation';
import Questions from '../../components/questions/Questions';
const SocialMediaManegement = () => {

    const data = [
        {
            heading: 'Social Media Agency',
            description: [
                "Welcome to Igloo, the premier social media agency in Dubai dedicated to transforming your online presence. With over 15 years of experience, our team of social media experts and content creators in Dubai is committed to helping you achieve your business objectives through innovative and effective social media strategies."
            ],
            showButton: true,
            buttonText: 'BOOK A FREE CONSULTATION',
        },
    ];

    const guidence = [
        {
            id: 0,
            heading: "Comprehensive Social Media Agency Services",
            description: [
                "At Igloo, we understand that a strong social media presence is crucial for business success. Our comprehensive suite of services is designed to cover every aspect of your social media needs."
            ],
        },
        {
            id: 1,
            image: null,
            title: "Immediate Results",
            description: [
                "We develop customized social media strategies that align with your business goals. Whether you aim to increase brand awareness, drive traffic, or boost sales, our strategies are designed to deliver results."]
        },
        {
            id: 2,
            image: "",
            title: "Content Creation",
            description: "Our creative team excels in producing high-quality, engaging content tailored to your brand. From captivating posts to compelling stories, we ensure your content stands out in the crowded digital landscape.",
        },
        {
            id: 3,
            title: "KPI Setting",
            description:
                "Setting clear Key Performance Indicators (KPIs) is essential to measure social media success. We help you define specific, measurable, achievable, relevant, and time-bound (SMART) KPIs aligned with business objectives.",
        },
        {
            id: 4,
            title: "Photography and Videography",
            description: "Visual content is king in the digital age. Our skilled photographers and videographers create stunning visuals that capture your brand’s essence and deeply engage your audience.",
        },
        ,
        {
            id: 5,
            title: "Posting and Community Management",
            description: [
                "Consistency is key to maintaining an active social media presence. We handle your postings, ensuring timely and relevant content. Our community management team engages with followers, fostering a loyal, interactive community.",]
        },
        {
            id: 6,
            image: "",
            title: "Reporting",
            description: ["Accurate reporting is vital to understanding our social media impact. We use top reporting tools to create detailed custom reports tracking your KPIs and performance. These insights enable data-driven decisions to optimize your strategy.",]
        },
    ];

    const answers = {
        heading: "Proven Expertise and Results",
        description: [
            "Over the past 15 years, we have amassed a wealth of testimonials and case studies that showcase our ability to deliver exceptional results. We are proud to be recognized as a leading social media agency in Dubai, with a track record of helping businesses thrive in the digital space. Our success is built on a foundation of proven results and satisfied clients."
        ],
        buttonText: "Book a Free Consultation",
        backgroundImage: "marketingAutomation-carousel.jpg",
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

    const answers2 = {
        heading: "EXPERTISE ACROSS PLATFORMS",
        description: [
            "In the ever-evolving world of social media, expertise across multiple platforms is essential. We specialize in Instagram, TikTok, and other popular social media channels. Our team stays ahead of the latest trends and algorithms to ensure your brand remains relevant and engaging."
        ],
        // buttonText: "Book a Free Consultation",
        backgroundImage: "marketingAutomation-carousel.jpg",
    };

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

    const questionData = {
        heading: "Still Have Questions?",
        text: [""],
        buttonText: "Book a Free Consultation",
        backgroundImage: "stillQuestion-banner.jpg",
    };

    const faqData = [
        {
            id: 0,
            question: "What industries do you work with?",
            answer: "We work with different industries in both the B2B and B2C sectors, including Finance, FMCG, Real Estate, E-Commerce, Automotive, Education, Healthcare, Law, Finance, and more.",
        },
        {
            id: 1,
            question: "Which package should I choose?",
            answer: "It is best to speak with one of our social specialists as they have years of experience and will be able to give you the best advice.",
        },
        {
            id: 2,
            question: "Which social media channels do you have experience in?",
            answer: "We have experience in all channels including Facebook,  Instagram, Linkedin, Twitter,  Snapchat, G+, Youtube and TikTok.",
        },
        {
            id: 3,
            question: "Do you share monthly reports?",
            answer:
                "Yes, we do, even weekly/ bi-weekly for some of our clients that request to.",
        },
        {
            id: 4,
            question: "Where is your social media team based?",
            answer: "Client-facing and select backend staff are located in our physical offices in Dubai and Miami, while the rest of our backend team works from various offices in countries such as Lebanon, Egypt and England.",
        },
        {
            id: 5,
            question: "Do you use social media tools for your clients’ accounts?",
            answer: "Yes, we do. For scheduling, we use tools like Hootsuite and Onlypult. For reporting, we primarily rely on the insights provided by the channels themselves, as they offer comprehensive data. Additionally, we use Union Metrics for Instagram reporting and Hootsuite for social listening.",
        },
        {
            id: 6,
            question: "How do I measure ROI on Social Media?",
            answer: "There are many ways to measure it; one way is to run social media ads and ensure the tracking codes are setup correctly on your website. Another way is to track manually the requests coming in, ensuring that you or your staff members are tracking each lead until it converts into a sale",
        },
    ];

    return (
        <>
            <Carousel
                heading="SOCIAL MEDIA AGENCY IN DUBAI"
                breadcrumb="Home | SOCIAL MEDIA AGENCY IN DUBAI"
                imageUrl="socialMedia-carousel.jpg"
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
            <Bounce slides={bounceData} />
            <Clients />
            <Answers
                heading={answers2.heading}
                description={answers2.description}
                buttonText={answers2.buttonText}
                // onButtonClick={handleButtonClick}
                backgroundImage={answers2.backgroundImage}
            />
            <div style={{ paddingBlock: "50px" }}>
                <h1 className='main-heading'>PORTFOLIO</h1>
                <iframe
                    className="video-frame"
                    src="https://www.youtube.com/embed/wV3A-Swa1y0?autoplay=0&start=7"
                    title="YouTube Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <Portfolio
                columns={portfolioColumns}
                // heading="PORTFOLIO"
                buttonText="View All Portfolio"
            />
            <Questions
                heading={questionData.heading}
                text={questionData.text}
                buttonText={questionData.buttonText}
                backgroundImage={questionData.backgroundImage}
            />
            <Offers />
            <Faqs faqData={faqData} />
            <LatestInsight />
            <BookConsultation />
        </>
    )
}

export default SocialMediaManegement