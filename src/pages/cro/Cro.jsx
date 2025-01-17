import React from 'react'
import Carousel from '../../components/carousel/Carousel';
import About from '../../components/about/About';
import Guidence from '../guidence/Guidence';
import Answers from '../../components/answers/Answers';
import Clients from '../../components/clients/Clients';
import Services from '../../components/services/Services';
import Questions from '../../components/questions/Questions';
import Bounce from '../../components/bounce/Bounce';
import Offers from '../../components/offers/Offers';
import LatestInsight from '../../components/latestInsight/LatestInsight';
import BookConsultation from '../../components/bookConsultation/BookConsultation';
import { Col, Container, Row } from 'react-bootstrap';
const Cro = () => {

    const data = [
        {
            heading: 'Conversion Rate Optimization Agency',
            description: [
                "Many marketers who prioritize website traffic tend to forget the importance of conversions. While high visibility can improve brand awareness for businesses, conversions make the most significant impact on your bottom line.",
                "On average, most websites only have a conversion rate of 2.35%, which leaves a lot for potential buyers to be desired. Our CRO services can turn your success around if you have an impressive lineup of high-quality products and a beautifully designed website but aren’t achieving conversions."
            ],
            showButton: true,
            buttonText: 'GET STARTED NOW',
        },
    ];

    const guidence = [
        {
            id: 0,
            heading: "Why You Should Invest in CRO Services",
            description: [
                "Most marketers associate the benefits of CRO with profits and leads. However, optimizing your conversions can also provide the following underrated advantages."
            ],
        },
        {
            id: 1,
            image: "/public/assets/images/cro1.svg",
            title: "Get a Better Understanding of Your Target Audience",
            description: [
                "Knowledge is power, and the more deeply you understand your target audience, the better you can address their pain points. We identify points of friction keeping customers from journeying further into your sales funnel through conversion optimization.",
                "We also develop more specific buyer personas to understand better who you’re marketing to."]
        },
        {
            id: 2,
            image: "/public/assets/images/cro2.svg",
            title: "Make Data-Based Decisions",
            description: ["When making changes to your website, you can’t just “listen to your gut.” Instead, you’ll want to base these adjustments on accurate and proven data.",
                'As part of our CRO strategy, we A/B test your materials and evaluate the results before changing your website.']

        },
        {
            id: 3,
            image: "/public/assets/images/cro3.svg",
            title: "Make More Money Over Time",
            description: [
                "Perhaps the most significant advantage of conversion optimization is increased profits over time. While it may not boost your revenue immediately, CRO provides incremental yet lasting increases to your earnings.",
                "We can make subtle changes that increase your leads and conversions by identifying areas of opportunity. These changes might be as simple as shuffling page layouts or re-wording your call-to-action (CTA)."
            ]
        },
        {
            id: 4,
            image: "/public/assets/images/cro4.svg",
            title: "Outrank Competition",
            description: ["One of the less-observed and underrated benefits of CRO is how it enhances your SEO strategy. By improving elements that may not resonate with site visitors, you increase your chances of garnering site visits and lower your bounce rate.",
                "When Google catches wind of site improvements, it can increase your ranking and overall online popularity."
            ]
        },
        {
            id: 5,
            image: "/public/assets/images/cro5.svg",
            title: "Increase Customer Lifetime Value",
            description: ["When you get customers to convert, the chances of encouraging them to repurchase are significantly higher. Constantly re-optimizing your website while keeping elements recognizable makes it more familiar to return visitors, who won’t hesitate to purchase again.",
                "As such, CRO increases customer lifetime value, which is a cheaper investment than trying to engage new leads."]
        }
    ];

    const answers = {
        heading: "Increase Your Website Conversion Rates with the Right Help",
        description: [
            "As a leader in conversion analysis and optimization, Igloo is fully equipped to maximize your website’s potential. We have experience across multiple industries and can improve website usability for different business sizes. If you’re looking for cost-effective conversion rate optimization services, get in touch with our agency today."
        ],
        buttonText: "Book a Free Consultation",
        backgroundImage: "/public/assets/images/marketingAutomation-carousel.jpg",
    };

    const servicesData = [
        {
            id: 1,
            image: "/public/assets/images/cro6.svg",
            heading: "Internet Marketing Conversion Analysis",
            description: ["The first and most important step toward improving your CRO is understanding how users interact with your site today. We use tools that allow us to monitor users’ sessions (anonymously, so no data privacy worries here) and discover their usual paths, common issues, and barriers to conversion for the sake of making smarter improvements later on."],
        },
        {
            id: 2,
            image: "/public/assets/images/cro7.svg",
            heading: "Conversion Funnel Analysis",
            description: ["When customers make a purchase, they undergo multiple steps. If your website doesn’t effectively get them from point A to point B, we reexamine your conversion funnel, identifying weak points.",
                "If your conversion funnel is too intricate, we eliminate unnecessary steps, providing potential customers with the necessary conversion information."
            ],
        },
        {
            id: 3,
            image: "/public/assets/images/cro8.svg",
            heading: "Website Copy Analysis",
            description: ["When developing brand copy, you have to consider your customers’ perspectives. If your brand voice is experiencing a disconnect, we rewrite the copy to provide only the necessary information. We adequately address site visitors’ questions and persuade them to convert."
            ]
        },
        {
            id: 4,
            image: "/public/assets/images/cro9.svg",
            heading: "Aesthetics Analysis",
            description: ["As often as we try not to judge a book by its cover, doing so is often inevitable. A poorly designed website won’t be enjoyable to navigate. If your website appears cluttered or aesthetically displeasing, we create a stunning design and uniformity across all pages.",
                "We encourage visitors to stay on your website longer or gather more information from additional pages by reducing aesthetic errors."
            ],
        },
        {
            id: 5,
            image: "/public/assets/images/cro10.svg",
            heading: "CRO Metrics",
            description: ["To better understand CRO performance, we have to track the appropriate metrics. We gather insights regarding your website campaigns by monitoring the following."
            ],
        },
    ];

    const guidence2 = [
        {
            id: 1,
            image: "/public/assets/images/cro1.svg",
            title: "Bounce Rate",
            description: [
                "A high bounce rate indicates that site visitors might have trouble with your website’s navigation, aren’t receiving the information they need or lack the push to convert."
            ]
        },
        {
            id: 2,
            image: "/public/assets/images/cro2.svg",
            title: "Click-Through Rate (CTR)",
            description: [
                "Your click-through rate tells you how many people have seen your ads or organic listings and clicked through to your website. Low click-through rates might indicate weak copy or unenticing ads."
            ]
        },
        {
            id: 3,
            image: "/public/assets/images/cro3.svg",
            title: "Pages Per Visit",
            description: [
                "How many pages users visit on your website can tell you how effective they keep people engaged and interested in your products. We help increase average page visits by publishing relevant content and providing useful on-page information."
            ]
        },
        {
            id: 4,
            image: "/public/assets/images/cro4.svg",
            title: "Return on Investment (ROI)",
            description: [
                "Calculating your ROI is one of the most precise benchmarks for determining the success of your CRO campaign. If your growth-centric strategy isn’t boosting your revenue, we can reassess your CRO spending and choose the best possible adjustments."
            ]
        },
        {
            id: 5,
            image: "/public/assets/images/cro5.svg",
            title: "Page Load Time",
            description: [
                "Slow-loading pages won’t get site visitors to convert. Remember, the first five seconds of your page load time has the most significant impact on your conversions. We optimize pages for fast load times, which improves your overall user experience."
            ]
        },
        {
            id: 6,
            image: "/public/assets/images/cro6.svg",
            title: "Cost Per Conversion",
            description: [
                "Sometimes referred to as cost per action (CPA), a low CPC means you aren’t overspending when you pay to obtain new customers. We keep your CPC low by crafting effective and high-converting materials."
            ]
        }
    ];

    const otherItems = guidence2.filter(item => item.id !== 0);

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

    return (
        <>
            <Carousel
                heading="Conversion Rate Optimization agency in dubai & miami"
                breadcrumb="Home | Conversion Rate Optimization agency in dubai & miami"
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
            <Services heading="Our Conversion Optimization Services" text="Generating interest is just the first stage of successful conversion. If your customers aren’t following through with their purchases, we can help drive your sales funnel with the following CRO services." servicesData={servicesData} />

            <div className="brandGuideMatter" style={{ paddingBottom: "50px" }}>
                <Container>
                    <Row className="brandGuideMatter-parent" style={{ margin: "0px", }} >
                        {otherItems.map((item, index) => (
                            <React.Fragment key={item.id}>
                                <Col md={1}>
                                </Col>
                                <Col md={5}>
                                    <div className="brandingServices-text-parent2">
                                        <h1 className="brandingServices-text-heading">{item.title}</h1>
                                        <div className="brandingServices-head-text-separator"></div>
                                        {Array.isArray(item.description) ? (
                                            item.description.map((text, textIndex) => (
                                                <p key={textIndex} className="brandingServices-text">
                                                    {text}
                                                </p>
                                            ))
                                        ) : (
                                            <p className="brandingServices-text">{item.description}</p>
                                        )}
                                    </div>
                                </Col>
                                {index % 2 === 1 && index !== otherItems.length - 1 && <div className="w-100 my-4"></div>}
                            </React.Fragment>
                        ))}
                    </Row>
                </Container>
            </div>

            <Questions
                heading={questionData.heading}
                text={questionData.text}
                buttonText={questionData.buttonText}
                backgroundImage={questionData.backgroundImage}
            />
            <Bounce slides={bounceData} />
            <Offers />
            <LatestInsight />
            <BookConsultation />
        </>

    )
}



export default Cro