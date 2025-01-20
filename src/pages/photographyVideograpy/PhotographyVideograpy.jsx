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
import Guidence from '../guidence/Guidence';
import Answers from '../../components/answers/Answers';
import Clients from '../../components/clients/Clients';
import Questions from '../../components/questions/Questions';
import Bounce from '../../components/bounce/Bounce';
import Offers from '../../components/offers/Offers';
import Faqs from '../../components/faqs/Faqs';
import LatestInsight from '../../components/latestInsight/LatestInsight';
import BookConsultation from '../../components/bookConsultation/BookConsultation';

const PhotographyVideograpy = () => {

    const data = [
        {
            heading: 'Photography and Videography Services',
            description: [
                "Nowadays, one of the most authentic and efficient ways for a brand to build trust is through photography and videography. Because most consumers are visual learners, appealing to this sense can do wonders for your sales and following.",
                "If you’re looking for the most innovative way to tell your story, our photographers and videographers are fully equipped to handle all types of applications. Book a consultation today to find out how we can make your brand shine through visual storytelling."
            ],
            showButton: false,
            buttonText: 'GET STARTED NOW',
        },
        {
            heading: 'Become a Visual Storyteller',
            description: [
                "Nobody wants to read a boring wall of text. In fact, most people only retain 10% of the information they receive through text, whereas incorporating visuals can improve retention by up to 65%. On top of that, an article with images will garner up to 94% more views than one without them.",
                "So if you’re looking to publish a successful marketing campaign, these statistics should remind you why photography and videography are the best tools for engaging your audience."
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
                { src: '/assets/images/fbAdsPort6.jpg', alt: 'Work 6' },
            ],
        },
    ];

    const guidence = [
        {
            id: 0,
            heading: "The Impact of Photo and Video in Business",
            description: [
                "At Igloo, we are big believers in the saying, “a picture paints a thousand words.” Photography and videography are an integral part of any business's marketing strategy, so if you aren’t yet taking advantage of these mediums, here are a few reasons why you should."
            ],
        },
        {
            id: 1,
            image: "video1.svg",
            title: "Enhancing SEO",
            description: [
                "Well-produced, original photos and videos can enhance your user experience and keep visitors on your site for longer, which can drastically improve your search engine rankings. When we produce photos and videos for your website, we incorporate eye-catching elements that make customers want to know your brand—the longer they linger, the better."]
        },
        {
            id: 2,
            image: "video2.svg",
            title: "Powerful Social Media Impact",
            description: "Since the rise of Facebook Live and Instagram Stories, many businesses have been taking to social media platforms to show off their products and services—you don’t want to be one of the only ones left behind. By placing your products in front of billions of active social media users, you can quickly become a fan favorite on the biggest social media platforms.",
        },
        {
            id: 3,
            image: "video3.svg",
            title: "Capturing Consumer Interest",
            description:
                "To create content that grabs and retains customer attention, you need high-quality visual materials. We can help you make the impact you desire with photos and videos that speak volumes about your product.",
        },
        {
            id: 4,
            image: "video4.svg",
            title: "Increasing ROI",
            description: "Want to double your click-through rates? Photo and video content can help you achieve that! While photography and videography can make for a sizable investment, we assure you it’ll pay off in your increased ROI.",
        },
    ];

    const answers = {
        heading: "Bring Your Creative Vision to Life",
        description: [
            "Learning the ropes can be challenging for marketers without experience in photo and video content. Fortunately, our experts at Igloo know all the ropes and have the knowledge and expertise to translate your vision into a stunning visual campaign. Contact us today to learn more about how we can tell your story."
        ],
        buttonText: "Book a Free Consultation",
        backgroundImage: "/public/assets/images/cmpetetive-crousel.jpg",
    };

    const guidence2 = [
        {
            id: 0,
            heading: "Our Photography and Videography Services",
            description: [
                "To help our valued clients rise to the top, we provide the following photography and videography services."
            ],
        },
        {
            id: 1,
            image: "/public/assets/images/video5.svg",
            title: "Product Photography & Videography",
            description: [
                "When advertising your product, how you present it can make all the difference. We provide professional product photography services to shine the best possible light on what you sell. Our team has experience photographing products from various industries with the best studio equipment."]
        },
        {
            id: 2,
            image: "/public/assets/images/video6.svg",
            title: "SALES AND MARKETING MATERIALS Production",
            description: "Are you ready to start closing more deals? Through our sales and marketing-centric photo and video efforts, we can produce versatile content that pushes new leads into your sales funnel. We also take extra care to train your marketers to sell using newly developed materials.",
        },
        {
            id: 3,
            image: "/public/assets/images/video7.svg",
            title: "Social Media Photography",
            description:
                "If your creative team struggles with a lack of recent, high-quality photographed content and is often forced to resort to using stock photos and videos to create content, our photography and videography services will empower them with the materials they need to produce their best work.",
        },
        {
            id: 4,
            image: "/public/assets/images/video8.svg",
            title: "VIDEOGRAPHY FOR REELS & TIKTOK",
            description: "It’s no surprise that more brands are investing in creating specialized content for video platforms such as Facebook & Instagram Reels, TikTok and YouTube Shorts; these platforms have transitioned to vertical videos as the main incentivized content format, and your business would be wise to use it!",
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
                heading="Photography and Videography"
                breadcrumb="Home | Photography and Videography"
                imageUrl="cmpetetive-crousel.jpg"
            />
            <About data={data} />
            <Portfolio
                columns={portfolioColumns}
                heading="PORTFOLIO"
                buttonText="View All Portfolio"
            />
            <Guidence guidence={guidence} />
            <Answers
                heading={answers.heading}
                description={answers.description}
                buttonText={answers.buttonText}
                // onButtonClick={handleButtonClick}
                backgroundImage={answers.backgroundImage}
            />
            <Clients />
            <Guidence guidence={guidence2} />
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

export default PhotographyVideograpy