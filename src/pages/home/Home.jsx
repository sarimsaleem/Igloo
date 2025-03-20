import React, { useEffect } from 'react'
import home1 from '/public/assets/images/homesec4-1.jpg';
import home2 from '/public/assets/images/homesec4-2.jpg';
import home3 from '/public/assets/images/homesec4-3.jpg';
import home4 from '/public/assets/images/homesec4-4.webp';
import home5 from '/public/assets/images/homesec4-5.jpg';
import DigitalMarketing from '../../components/digitalMarketing/DigitalMarketing'
import OurProcess from '../../components/ourProcess/OurProcess'
import OurServices from '../../components/ourServices/OurServices'
import LeaderShip from '../../components/leadership/LeaderShip'
import Bounce from '../../components/bounce/Bounce'
import Offers from '../../components/offers/Offers'
import Banner from '../../components/banner/Banner'
import CaseStudy from '../../components/caseStudy/CaseStudy'
import BookConsultation from '../../components/bookConsultation/BookConsultation'
import Clients from '../../components/clients/Clients'
import Portfolio from '../../components/portfolio/Portfolio'

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
            ],
        },
        {
            images: [
                { src: home4, alt: 'Work 4' },
                { src: home5, alt: 'Work 3' },
            ],
        },
    ];

    const caseStudyData = [
        {
            image: "section6-6.jpg",
            heading: "GMCClinics Case Study",
            subHead: "Group of Clinics | GMCClinics",
            text: "GMCClinics first contacted Igloo to help them acquire new patients (PPC) and to improve their ranking on the search engines (SEO).",
            detailHeading: "GMC casestudy",
            detailtext: [
                "GMCClinics first contacted Igloo to help them acquire new patients (PPC) and to improve their ranking on the search engines (SEO). After few months GMC awarded Igloo the design and development of their new website,then their social media and content creation, and later the creation of their mobile app.",
                "GMC was looking for the right partner to improve their brand recognition, grow the organic traffic to their website,and provide their clients with high level customer experience. Igloo was happy to take on the challenge."
            ],
            detailImg: "ourclients25.jpg",
            answers: {
                heading: "SEO-READY WEB AND UPDATED DIGITAL PRESENCE",
                description: [
                    "After a first period of understanding the business of the clinics, their various business objectives, and the performance of all SEO and PPC efforts, the decision taken was to redesign and build a whole new updated website focused on bringing high volume of revenue to the clinics."
                ],
                buttonText: "Book a Free Consultation",
                backgroundImage: "answerImg.jpg",
            },
        },
        {
            image: "caseStudy4.jpg",
            heading: "We202 Case Study",
            subHead: "Group of WellFitEMS | We202",
            text: "We202 (formerly known as WellFitEMS), approached Igloo while searching for an advisor who could help them with the rebranding of their cutting-edge fitness training program.",
            detailHeading: "we202 Casestudy",
            detailtext: [
                "We202 (formerly known as WellFitEMS), approached Igloo while searching for an advisor who could help them with the rebranding of their cutting-edge fitness training program. Having struggled with other marketing agencies, We202 wanted a trusted partner that could work with them closely, study and understand their business, and align with their goals. In addition, We202 wanted this new agency to lead their communication and marketing strategy to effectively promote their exclusive fitness technology in the US market",
                "We were thrilled to embark in a project with a focus on ground-breaking technology applied to health and wellness."
            ],
            detailImg: "ourclients26.jpg",
            answers: {
                heading: "A FRANCHISE-READY APPROACH WITH COMMUNITY FEEL",
                description: [
                    "After spending time understanding We202’s business and performing a brand analysis, we created a plan to strategically communicate We202 services, their technology, and the benefits of their training program(shorter period of time, quicker results, no injury risk)."
                ],
                buttonText: "Book a Free Consultation",
                backgroundImage: "answerImg.jpg",
            },
        },
        {
            image: "caseStudy5.jpg",
            heading: "Digital Marketing Case Study",
            subHead: "Leading University in Dubai | UAE",
            text: "To increase the number of students through online marketing.",
            detailHeading: "Digital Marketing Case Study",
            detailtext: [
                "To increase the number of students through online marketing"
            ],
            // detailImg: "ourclients25.jpg",
            answers: {
                heading: "WORK EXECUTED",
                description: [
                    "Drafted a digital marketing strategy that included developing a new website, running paid ads (Google, Facebook, Instagram, SnapChat, TikTok), investing in SEO, social media marketing, activating a livechat, and marketing automation.",
                    "Executed the strategy for the content, website user interface and experience, paid ads look and feel, link building for SEO, and assets for the marketing automation."
                ],
                buttonText: "Book a Free Consultation",
                backgroundImage: "answerImg.jpg",
            },
        },
    ];



    return (
        <>
            <Banner />
            <DigitalMarketing />
            <OurProcess />
            <Portfolio
                columns={portfolioColumns}
                heading="Latest Work"
                buttonText="View All Portfolio"
            />
            <OurServices />
            <LeaderShip />
            <CaseStudy caseStudy={caseStudyData} />
            <Bounce slides={bounceData} />
            <Clients />
            <Offers />
            <BookConsultation />
        </>
    )
}


export default Home