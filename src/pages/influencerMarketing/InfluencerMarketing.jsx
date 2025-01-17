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
import Questions from '../../components/questions/Questions';
import Bounce from '../../components/bounce/Bounce';
import Offers from '../../components/offers/Offers';
import Faqs from '../../components/faqs/Faqs';
import LatestInsight from '../../components/latestInsight/LatestInsight';
import BookConsultation from '../../components/bookConsultation/BookConsultation';

const InfluencerMarketing = () => {

    const data = [
        {
            heading: 'Content Marketing | Influencer Marketing Agency',
            description: [
                "Since becoming a $10 billion industry, influencer marketing has become unstoppable. At Igloo, we don’t undermine the power of a celebrity voice—brands that want to boost awareness and significantly improve their bottom line will understand why!",
                "Depending on your business goals, we at Igloo can create a unique influencer strategy that can help you better engage with consumers. Contact us today to find the right face for your brand."
            ],
            showButton: false,
            buttonText: 'GET STARTED NOW',
        },
        {
            heading: 'Let the Loudest Voices Speak for Your Brand',
            description: [
                "Compared to other marketing channels, nearly 90% of marketers find that influencers offer the best ROI. By taking your influencer marketing efforts to Instagram—home to over a billion active users—you may very well become part of this statistic.",
                "And don’t worry about being a smaller brand. Since the rise of micro-influencers and ease of content creation over the years, startups have just as big a chance at success."
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
            image: "/public/assets/images/perk1.svg",
            heading: "Brand Trust",
            description: ["Consumers are more likely to purchase an item online when it’s endorsed by an influencer. If your company is looking to increase profits—and fast—influencer marketing is your best bet."],
        },
        {
            id: 2,
            image: "/public/assets/images/perk2.svg",
            heading: "Increased Conversions and Sales",
            description: ["Did you know that word-of-mouth marketing generates twice as many sales as paid ads? That means every time an influencer talks about your brand, you dramatically increase the chances of garnering new leads and getting site visitors to convert.",
            ],
        },
        {
            id: 3,
            image: "/public/assets/images/perk3.svg",
            heading: "Impressive ROI",
            description: ["On average, companies that utilize influencer marketing strategies will earn back $6.50 for every $1 they spend—that’s an ROI of 650%. Considering the minimal investments you have to make to get the most out of influencer marketing, it’s a strategy you’ll want to consider—and that we can perform right."
            ]
        },
        {
            id: 4,
            image: "/public/assets/images/perk4.svg",
            heading: "Boost Brand Awareness",
            description: ["Naturally, the more consumers are aware of your brand, the higher your chances of increasing lead generation and sales. Influencers can directly impact your sales funnel by appealing to your audience and encouraging them to try out your products and services."
            ],
        },
    ];

    const answers = {
        heading: "Make Your Content More Shoppable with the Right Brand Ambassador",
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
            image: "/public/assets/images/influencerservices1.svg",
            heading: "Our Influencer Marketing Services",
            description: ["We use your existing audience data to determine the best practices and social media platforms for your influencer marketing strategy. We also take a closer look at consumer needs and recurring pain points."],
        },
        {
            id: 2,
            image: "/public/assets/images/influencerservices2.svg",
            heading: "Influencer Pitching and Matching",
            description: ["Every brand has an ideal influencer. Once we get to know your business, audience, and competitors, we link you up with the influencers we think can best represent your mission and vision.",
            ],
        },
        {
            id: 3,
            image: "/public/assets/images/influencerservices3.svg",
            heading: "Content Strategies and Campaign Management",
            description: ["After matching you up with your perfect influencer, we create content according to your brand guidelines while allowing influencers to remain authentic. We develop strategies that consider consumer search patterns and wants while remaining true to your brand.  "
            ]
        },
        {
            id: 4,
            image: "/public/assets/images/influencerservices4.svg",
            heading: "Social Media Advertising",
            description: ["To give your influencer marketing campaign an even bigger boost, we provide social media advertising services to increase your reach."
            ],
        },
        {
            id: 5,
            image: "/public/assets/images/influencerservices5.svg",
            heading: "Legal and Compliance",
            description: ["Sometimes, partnerships can be tricky to navigate. As such, our team advises you on the relevant partnership disclosure regulations and influencer contracts."
            ]
        },
        {   
            id: 6,
            image: "/public/assets/images/influencerservices6.svg",
            heading: "Results Tracking",
            description: ["Before we kick off your campaign, we set measurable goals and KPIs that we can use to identify successes and areas of improvement. We make sure to present these tangible insights in readable and actionable terms."
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
                heading="Influencer Marketing"
                breadcrumb="Home | Influencer Marketing"
                imageUrl="marketingAutomation-carousel.jpg"
            />
            <About data={data} />
            <Portfolio
                columns={portfolioColumns}
                heading="PORTFOLIO"
                buttonText="View All Portfolio"
            />
            <Services heading="What are the Perks of Influencer Marketing?" text="Despite its growing popularity, not all marketers realize the advantages of an influencer marketing campaign. " servicesData={servicesData} />
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

export default InfluencerMarketing