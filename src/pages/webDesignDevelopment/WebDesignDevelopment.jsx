import React from 'react'
import home1 from '/public/assets/images/webPortfolio1.jpg';
import home2 from '/public/assets/images/webPortfolio2.jpg';
import home3 from '/public/assets/images/webPortfolio3.jpg';
import home4 from '/public/assets/images/webPortfolio4.jpg';
import home5 from '/public/assets/images/webPortfolio5.jpg';
import Carousel from '../../components/carousel/Carousel'
import About from '../../components/about/About'
import Guidence from '../guidence/Guidence';
import Answers from '../../components/answers/Answers';
import Clients from '../../components/clients/Clients';
import Portfolio from '../../components/portfolio/Portfolio';
import Services from '../../components/services/Services';
import Questions from '../../components/questions/Questions';
import Bounce from '../../components/bounce/Bounce';
import Offers from '../../components/offers/Offers';
import Faqs from '../../components/faqs/Faqs';
import LatestInsight from '../../components/latestInsight/LatestInsight';
import BookConsultation from '../../components/bookConsultation/BookConsultation';

const WebDesignDevelopment = () => {

    const data = [
        {
            heading: 'Web Design Agency',
            description: [
                "If you’ve ever heard the term “there’s an app for that,” you’ll know the importance of having web applications as part of your business. While most people associate the word “app” with a mobile application, many online users still prefer web-based applications.",
                "With over 65% of people preferring dynamic and interactive web pages over plain sites, prioritizing web design can make or break your success. If you want to increase website accessibility and provide a seamless user experience for site visitors, Igloo has comprehensive web and app development services that can provide impactful solutions."
            ],
            showButton: true,
            buttonText: 'GET STARTED NOW',
        },
    ];


    const guidence = [
        {
            id: 0,
            heading: "The Advantages of a Custom Web Application",
            description: [
                "Web application tools provide an excellent avenue for communicating with customers, collecting information, and securing business data. You can also enjoy the following benefits by incorporating web apps into your business model."
            ],
        },
        {
            id: 1,
            image: "/public/assets/images/web1.svg",
            title: "Better Discovery on Search Engines",
            description: [
                "Thoughtfully developed web applications can improve your UAE business visibility on search engines. At Igloo, we fully optimize your website, making it easier for users to find your tools online."]
        },
        {
            id: 2,
            image: "/public/assets/images/web2.svg",
            title: "Always-On Accessibility",
            description: "Anyone with a powerful internet connection can access a web application. Not to mention, they function on nearly every browser—from laptops to mobile phones. We ensure that your web applications are responsive and cater to as many people as possible.",
        },
        {
            id: 3,
            image: "/public/assets/images/web3.svg",
            title: "HIGHLY SECURE DIGITAL ECOSYSTEMS",
            description: [
                "Nowadays, end-users prioritize Dubai based agencies that underscore safe online environments. After all, when a consumer makes a purchase, they entrust your business with sensitive details like their home address and credit card numbers.",
                "We dedicate an experienced team of security professionals to monitor your web applications and store your data in a secure cloud. Our team prepares your systems for natural disasters and potential data breaches, keeping your website online, and more importantly, safe 24/7. ",
                "While creating web applications that engage users, and that are technically sound from a UX/UI perspective, is important, securing your digital investments is always our top priority. "
            ]
        },
        {
            id: 4,
            image: "/public/assets/images/web4.svg",
            title: "Customizable, Scalable, and Easy to Maintain",
            description: ["While ready-made web app solutions can save time and money, they are often generic and can’t scale alongside your existing systems. We curate everything according to your specific business goals, giving you the option to decide what kind of framework you want to apply.",
                "We apply features and functions that are relevant to your business, shrinking or expanding according to your needs. As market dynamics change, so does the way we approach your web application. We can incorporate new processes and technologies quickly, allowing you to stay ahead of competitors.",
                "Not to mention, our web applications don’t rely heavily on end user workstations, making them easy to maintain and repair. We roll out updates and patches remotely to every single device."
            ]
        },
        {
            id: 5,
            image: "/public/assets/images/web5.svg",
            title: "Cross-Platform Compatibility",
            description:
                "Compared to traditional installed software, which functions locally, web-based applications are compatible with all internet browsers and operating systems.",
        },
        {
            id: 6,
            image: "/public/assets/images/web6.svg",
            title: "Robust Analytics",
            description: "We can easily determine your web application’s success through comprehensive insights and built-in analytics. We then translate these metrics into readable and actionable reports that can help direct future business decisions.",
        },
    ];

    const answers = {
        heading: "Make Your Brand Engaging and Interactive",
        description: [
            "Our web app development services encompass every step of the process; from planning to building to deployment. If you want to develop an impactful and easy-to-use web app that engages consumers, reach out to our specialists to find out what our Dubai based agency can create."
        ],
        buttonText: "Book a Free Consultation",
        backgroundImage: "/public/assets/images/cmpetetive-crousel.jpg",
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
                { src: home5, alt: 'Work 3' },
            ],
        },
        {
            images: [
                // { src: home6, alt: 'Work 6' },
                { src: home3, alt: 'Work 2' },
                { src: home4, alt: 'Work 4' },
            ],
        },
    ];

    const servicesData = [
        {
            id: 1,
            image: "/public/assets/images/webApp1.svg",
            heading: "Client-Side Web Applications",
            description: ["When developing client-side web applications, we focus on user interfaces, delivering high-performance levels that provide a seamless user experience. These web apps prioritize speed and responsiveness."],
        },
        {
            id: 2,
            image: "/public/assets/images/webApp2.svg",
            heading: "Single-Page Applications",
            description: ["Compared to our traditional multi-page applications, our single-page web apps deploy infinite scroll mechanisms to display content. We incorporate dynamic routing that doesn’t require the entire page to reload when fetching new data or executing an action.",
            ],
        },
        {
            id: 3,
            image: "/public/assets/images/webApp3.svg",
            heading: "Server-Side Applications",
            description: ["We deploy server-side applications as part of our back-end solutions, focusing on the background processes that occur within your web app. These applications might involve servers, databases, and application programming interfaces (API).",
                "We recommend server-side applications to businesses deploying static content, as these apps can take more time to load and buffer.",
                "However, compared to front-end applications, server-sides provide higher security and browser compatibility."
            ]
        },
        {
            id: 4,
            image: "/public/assets/images/webApp4.svg",
            heading: "Front-End Services",
            description: ["Depending on your needs, we provide the following frameworks for front-end solutions."
            ],
            list: ["Javascript: We use Javascript to develop dynamic web applications with basic functionalities like scrolling and clicking. This allows us to quickly code for client-side behavior.",
                "HTML: When we structure webpage content, we deploy HTML (HyperText Markup Language) to direct displays.",
                "CSS: CSS (Cascading Style Scripts) allow us to dictate integral characteristics (such as colors, layouts and fonts) on your web application."]
        },
        {
            id: 5,
            image: "/public/assets/images/webApp5.svg",
            heading: "Back-End Services",
            description: ["Compared to front-end deployments, our back-end services involve more technologies, some of which include the following."
            ],
            list: ["Programming languages: We allow databases to send and receive data, manage users connections, and monitor security authentications through Java, PHP, Ruby, and Python. Depending on your specific needs, we deploy the most appropriate programming language to simplify development.",
                "Databases: Our go-to query language for securing sensitive data is Structured Query Language (SQL). SQL is highly scalable and can accommodate additional functionalities as required.",
                "Servers: We deploy servers to respond to network requests and retrieve information. Our servers include Apache, Internet Information Services (IIS), and Nginx.",
                "API: To facilitate connections between multiple servers, we use APIs that don’t require domain-specific language., "]
        },
        {
            id: 6,
            image: "/public/assets/images/webApp6.svg",
            heading: "Planning, Prototyping, Validation, and Testing",
            description: ["As with any well-defined procedure, we take ample time to understand your business goals and plan a workflow for prototyping. Once we establish what you want to create, we develop a minimum viable product (MVP) and present it to potential users for feedback.",
                "Once we validate your web app, we determine which front-end and back-end frameworks will best fulfill the project requirements. After the development stage, we administer multiple tests to identify weak points.",
                "Finally, we host and launch your web application."
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
            question: "Is it better to hire a freelancer or an agency?",
            answer: "It depends if you have experience in design and coding. It also depends if you have time to manage a freelancer. If you can afford a freelancer disappearing and having to find another freelancer to continue the work. Usually, agencies are more reliable as they have multiple resources, they can be held more accountable, and easier to work with. Agencies normally have more experience as they have a mixed portfolio of multiple employees. Good to keep in mind that normally agencies charge more than freelancers.",
        },
        {
            id: 1,
            question: "What programming languages do you use?",
            answer: "We accommodate any programming language a client requires, thanks to our extensive team of front-end and back-end developers based in Dubai and other cities worldwide.",
        },
        {
            id: 2,
            question: "Is WordPress a good solution?",
            answer: "WordPress and any similar solutions could be a great choice for many businesses, as a lot of the work is already done. WordPress has existing templates to choose from, plugins, and a ready CMS. But as many readymade platforms, WordPress comes with limitations and possible security issues. It is always better to build a site from scratch, but that requires more time and investment to build; let alone the maintenance.",
        },
        {
            id: 3,
            question: "Are the websites you built SEO optimized?",
            answer:
                "As a performance marketing agency, we emphasize the importance of a strong on-page SEO structure for our clients. When delivering websites, we ensure they are technically optimized to achieve high scores and recognition from search engines like Google.",
        },
        {
            id: 4,
            question: "Is WooCommerce a good solution?",
            answer: "WooCommerce is a reliable ecommerce platform that is used by thousands of businesses. It has many built-in functionalities, great plugins, and a readymade CMS. But just like many platforms, WooCommerce comes with limitations and potential security issues. We however build websites on it, and always had great experiences using it.",
        },
    ];

    return (
        <>
            <Carousel
                heading="Photography and Videography"
                breadcrumb="Home | Photography and Videography"
                imageUrl="webDesignDev.jpg"
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
            <Portfolio
                columns={portfolioColumns}
                heading="PORTFOLIO"
                buttonText="View All Portfolio"
            />
            <Services heading="Our Web Application Services" text="If you want to provide users with interactivity but don’t have the time or resources to dedicate to a fully-developed mobile application, consider our web app services below." servicesData={servicesData} />
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

export default WebDesignDevelopment