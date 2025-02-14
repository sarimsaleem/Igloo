import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import About from '../../components/about/About'
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

const PPCs = () => {

    const data = [
        {
            heading: 'PPC MANAGEMENT AGENCY',
            description: [
                'Leveraging Google Ads is the most effective way to drive qualified pay-per-click results and maximize returns.',
                'PPC campaigns can drastically increase website traffic and yield an impressive ROI when adequately deployed. At Igloo, we focus on developing Google Ads to deliver immediate results, target customers in real-time, and improve brand recognition for your Dubai business.   ',
            ],
            showButton: true,
            buttonText: 'BOOK A FREE CONSULTATION',
        },
    ];

    const guidence = [
        {
            id: 0,
            heading: "Why Should You Invest in PPC and Google Ads?",
            description: [
                "PPC marketing provides excellent access to website traffic and potential revenue. Its positive impact on Dubai brands and business is undeniable and provides the following powerful advantages."
            ],
        },
        {
            id: 1,
            image:"ppc1.svg",
            title: "Immediate Results",
            description: [
                "Effective marketing is timely. Unlike organic search strategies and content creation, PPC advertising promises immediate results. When online users search for local businesses, your business can tap into a reserve of potential traffic.",
                "PPC can help drive the appropriate customers to your website as a short-term solution."]
        },
        {
            id: 2,
            image:"ppc2.svg",
            title: "Trackable and Measurable Analytics",
            description: "Thanks to analytics displaying high-level performance details, Google Ads results are easy to track. You can get a clear overview of metrics like impressions, clicks, and conversions to get a real-time look at how your campaigns are performing.",
        },
        {
            id: 3,
            image:"ppc3.svg",
            title: "Increased Website Traffic",
            description:
                "While paid ads don’t directly impact your search engine ranking, they can drive significant traffic to your website. Over time, these quick results can increase user activity on your website and garner attention from new audience segments.",
        },
        {
            id: 4,
            image:"ppc4.svg",
            title: "Enhanced Brand Awareness and Recognition",
            description: "Brand recognition plays an imperative role in revenue success. While social media recognition can direct high-volume traffic to your website, showing up on search engines can deliver even more effective results. In fact, consistently representing your brand can increase your revenue significantly.",
        },
        ,
        {
            id: 5,
            image:"ppc5.svg",
            title: "Impressive Targeting Options",
            description: [
                "Taking a multi-layered approach to your Google Ads campaign can improve brand exposure and strengthen your targeting options. Take advantage of the full scope of your PPC campaign by retargeting missed opportunities, using high-volume keywords, and focusing on specific audience demographics.",

                "Testing segmented audiences can help you identify the most high-converting customers and tap into those who haven’t yet had exposure to your brand.",]
        },
        {
            id: 6,
            image:"ppc6.svg",
            title: "Compatibility with Other Marketing Channels",
            description: ["Nowadays, content marketing is the primary driving force of most businesses. If your original content isn’t garnering the traffic you want, Google Ads can drive visitors to your website and deliver the recognition your Dubai or Miami brand deserves.",
                "In addition, PPC campaigns also work hand-in-hand with SEO, as they tap into identical audiences that originate from the same places. You can align your efforts keyword-by-keyword by paying close attention to impressions, clicks, and conversions from your Google Ads.",
                "Finally, Google Ads provides an excellent avenue for remarketing to site visitors by engaging them based on specific rules and audiences.",]
        },
    ];

    const answers = {
        heading: "Accelerate Business Growth Through PPC and Google Ads",
        description: [
            "With years of experience as a leading pay-per-click and digital marketing agency, our agency has the in-house knowledge to guarantee high-converting campaigns. With our full suite of marketing services, you have access to everything you need under a single roof.",
            "If you’re experimenting with Google Ads for the first time or at a loss for how to improve your existing campaigns, we at Igloo have the tools to help. Book a consultation with one of our specialists today and get your paid search management campaign rolling."
        ],
        buttonText: "Book a Free Consultation",
        backgroundImage:"marketingAutomation-carousel.jpg",
    };

    const caseStudyData = [
        {
            image:"caseStudy1.jpg",
            heading: "Google Ads Case Study",
            subHead: "International School in Dubai | UAE",
            text: "To increase the number of students through Google Ads",
        },
        {
            image:"caseStudy2.jpg",
            heading: "Google Ads Case Study",
            subHead: "Leading Waterpark in Dubai | UAE",
            text: "To increase the ROI on the Ad Spend",
        },
        {
            image:"caseStudy3.jpg",
            heading: "Google Ads Case Study",
            subHead: "Tech Industry | XYZ Corp",
            text: "XYZ Corp aimed to enhance their customer engagement and increase conversions through PPC campaigns.",
        },
    ];

    const servicesData = [
        {
            id: 1,
            image:"ppcService1.svg",
            heading: "Competitor Analysis",
            description: ["To create a high-performing PPC campaign, you’ll have to gain insight into how your competitors are currently performing on search engines. Our experts perform comprehensive SWOT analyses to identify high-bidding keywords and determine methods to place you ahead of competitors.",
                "We spend ample time dissecting competitor strategies and presenting probable solutions through detailed reports."
            ],
        },
        {
            id: 2,
            image:"ppcService2.svg",
            heading: "Keyword Research",
            description: ["The key to a high-performing paid ad campaign is extensive keyword research. We identify keywords that are performing well and use them to increase clicks. We combine these specified keywords with your ad copy to return optimum conversions.",
            ],
        },
        {
            id: 3,
            image:"ppcService3.svg",
            heading: "Optimization and Implementation",
            description: ["If you’re looking for an entirely new setup or if your existing Google Ads campaign could use a fine-tune, we ensure that your efforts are wholly optimized.",
                "First, we develop ad groups and determine geographic targeting factors. From here, we can narrow our keyword research based on group demographics and decide on your initial bidding strategy.",
                "On top of standard keyword research, we collect negative keywords to keep unqualified leads from entering your sales funnel.",
                "Before launching your initial campaign, we test your conversion goals and monitor average positions to ensure quality. We then integrate Google Analytics to align ad copy and review existing landing pages."
            ]
        },
        {
            id: 4,
            image:"ppcService4.svg",
            heading: "Conversion Rate Optimization",
            description: ["We don’t just research keywords and competitors before launching a campaign—we repeat the process throughout to ensure your efforts result in high conversions.",
                "We also adjust our interest-based targeting efforts, ad copy, and tracking methods if necessary. Our go-to strategy for tracking ad performance is through A/B testing. We evaluate copy and landing page variations, tweaking them to suit optimal configurations."
            ],
        },
        {
            id: 5,
            image:"ppcService5.svg",
            heading: "Campaign Management",
            description: ["Once we launch your campaign, we will keep an active eye on its progress over time. We’ll adjust bids to ensure optimal performance and high ROI if necessary. Once we evaluate ad performance and assess conversion rates, we allocate bids to your highest-proven rates.",
                "Each month, our agency prepares a summary of campaign activity and use these results to provide recommendations for future campaigns.",
                "We work hand-in-hand with your marketing team to tweak and improve ongoing campaigns and develop new ones."
            ],
        },
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
                heading="PPC MANAGEMENT AGENCY IN DUBAI"
                breadcrumb="Home | PPC MANAGEMENT AGENCY IN DUBAI"
                imageUrl="media-carousel.jpg"
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
            <Services heading="Our PPC Services" text="Successful PPC campaigns require strict management and analysis. Consider our PPC services if you lack the resources to ensure that your Google Ads deliver the results you’re looking for." servicesData={servicesData} />

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

export default PPCs