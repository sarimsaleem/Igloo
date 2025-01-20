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
import Questions from '../../components/questions/Questions';
import Bounce from '../../components/bounce/Bounce';
import Offers from '../../components/offers/Offers';
import Faqs from '../../components/faqs/Faqs';
import LatestInsight from '../../components/latestInsight/LatestInsight';
import BookConsultation from '../../components/bookConsultation/BookConsultation';
import Services from '../../components/services/Services';
import Clients from '../../components/clients/Clients';
import Answers from '../../components/answers/Answers';

const Youtube = () => {

    const data = [
        {
            heading: 'YouTube Ads Agency',
            description: [
                'Considered the second largest search engine on the internet, YouTube provides a treasure trove of benefits not many marketers may expect. Nowadays, video formats make up over 82% of all consumer online traffic, making channels like YouTube an obvious necessity.',
                'If you are one of the many advertisers overlooking the value of YouTube advertising, don’t be. By connecting with our video and marketing development experts at Igloo, you can craft a winning strategy that places your videos in front of billions.',
            ],
            showButton: false,
            buttonText: 'GET STARTED NOW',
        },
        {
            heading: 'Take the Power of Video to the Next Level',
            description: [
                "Now over a decade old, YouTube has become a goldmine for ad revenue and potential conversions. Thanks to new developments like targeting and analytics, a single YouTube ad could potentially reach up to 2.56 billion users—that’s over half of all internet users.",
                'Plus, in 2021, YouTube’s global ad revenues hit an all-time high of $28 billion—something you can be part of with the help of the right advertising experts—us!'
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
            image:"youtube1.svg",
            heading: "Hyper-specific Targeting",
            description: ["Believe it or not, YouTube ad targeting is just as specific as on platforms like Facebook and Instagram. You can target your audience according to:",
            ],
            list: ["Demographics", "Re-engaged customers", "Topics and content", "Custom affinity audiences", "In-market audiences", "Life events and milestones"]
        },
        {
            id: 2,
            image:"youtube2.svg",
            heading: "Cost-Effective",
            description: ["If you already employ pay-per-click (PPC) as part of your advertising strategy, you’ll be pleased to know that YouTube adheres to the same model. With YouTube ads, you can determine how much you’re willing to pay every time someone clicks through your video, making it incredibly cost-effective.",
            ],
        },
        {
            id: 3,
            image:"youtube3.svg",
            heading: "High Reach",
            description: ["As we previously mentioned, YouTube is one of the most sizable search engines on the internet, second only to Google. So unless you happen to have two million email subscribers, you’re not going to get access to a wider audience anywhere else!"
            ]
        },
        {
            id: 4,
            image:"youtube4.svg",
            heading: "Enhanced Engagements",
            description: ["Most consumers feel disconnected when they see a television advert or hear one over the radio. Fortunately, YouTube provides many opportunities to engage with audiences on a deeper level. YouTube ads allow viewers to put a face to your brand and better understand company attitudes."
            ],
        },
        {
            id: 5,
            image:"youtube5.svg",
            heading: "Measurable Insights",
            description: ["Like other social media platforms, YouTube comes equipped with built-in analytics that are easy to put into action. Through the Analytics tab, you can study how well your videos are engaging users and gain key insights to create even better content in the future."
            ],
        },
    ];

    const answers = {
        heading: "Discover How We Can Help Your Business Through Video",
        description: [
            "YouTube is a hotbed for valuable leads that you can hook with the right advertising strategy. If success is on your list of to-dos, trust that our experts at Igloo can deliver. Book a consultation today to kick-start your video advertising campaign—we’ll let our years of experience do the talking!"
        ],
        buttonText: "Book a Free Consultation",
        backgroundImage:"cmpetetive-crousel.jpg",
    };

    const servicesData2 = [
        {
            id: 1,
            image:"youtube6.svg",
            heading: "Audience Research",
            description: ["We maximize your YouTube ads by performing highly detailed audience research. After all, even the most creative and engaging ads don’t get the attention they deserve when placed in front of the wrong people.",
                "To get the most out of your reach, we match the right target audience to your key objectives, whether it be to re-target previous followers or get ahead of your competitors.  "
            ],
        },
        {
            id: 2,
            image:"youtube7.svg",
            heading: "Campaign Audit",
            description: ["Whether you already run a YouTube advertising campaign or are starting from scratch, we regularly analyze performance data to determine areas of improvement. We take a close look at clicks, impressions, engagements, purchases, CPC, and CTR.",
            ],
        },
        {
            id: 3,
            image:"youtube8.svg",
            heading: "Campaign Parameters",
            description: ["Even the most ambitious campaigns can benefit from strong parameters. When developing your YouTube ad campaign, we consider factors like:"
            ],
            list: ["Bid strategies for clicks, impressions, and conversions", "Geographical locations for where ads can be viewed", "Budget limitations", "Ad spaces for display"]
        },
        {
            id: 4,
            image:"youtube9.svg",
            heading: "Insights and Analytics",
            description: ["As with any social media advertising campaign, your numbers will tell you how well your efforts perform. As your advertising expert, we are fully versed in YouTube metrics and put these numbers into writing for your easy reference."
            ],
        }
    ];

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
                heading="YouTube Ads"
                breadcrumb="Home | YouTube Ads"
                imageUrl="cmpetetive-crousel.jpg"
            />
            <About data={data} />
            <Portfolio
                columns={portfolioColumns}
                heading="PORTFOLIO"
                buttonText="View All Portfolio"
            />
            <Services heading="Why Choose YouTube as an Ad Platform?" text="Let’s face it—YouTube is an ambitious platform, but it doesn’t mean you should stray from leveraging it as a marketing channel. Incorporating YouTube into your ad strategy is one of the best decisions you can make as a marketer—here’s why." servicesData={servicesData} />
            <Answers
                heading={answers.heading}
                description={answers.description}
                buttonText={answers.buttonText}
                backgroundImage={answers.backgroundImage}
            />
            <Clients />
            <Services heading="Our YouTube Ad Management Services" text="If you want to start promoting video content but don’t have the time to familiarize yourself with YouTube advertising, here is how we can help." servicesData={servicesData2} />
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

export default Youtube