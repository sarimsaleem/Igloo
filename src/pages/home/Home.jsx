import React from 'react'
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
        },
        {
            image: "section6-6.jpg",
            heading: "Another Case Study",
            subHead: "Another Group | Company ABC",
            text: "Company ABC reached out to improve their brand presence and digital footprint.",
        },
        {
            image: "section6-6.jpg",
            heading: "XYZ Corp Case Study",
            subHead: "Tech Industry | XYZ Corp",
            text: "XYZ Corp aimed to enhance their customer engagement and increase conversions through PPC campaigns.",
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