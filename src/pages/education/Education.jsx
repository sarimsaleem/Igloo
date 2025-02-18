import React, { useEffect } from 'react'
import Carousel from '../../components/carousel/Carousel'
import { Col, Container, Row } from 'react-bootstrap'
import { GiAirBalloon, GiOnTarget } from 'react-icons/gi'
import { PiRecycleThin } from 'react-icons/pi'
import { AiOutlineGlobal } from 'react-icons/ai'
import { BsFileBarGraph } from 'react-icons/bs'
import { IoMegaphoneOutline } from 'react-icons/io5'
import LeaderShip from '../../components/leadership/LeaderShip'
import Clients from '../../components/clients/Clients'
import Bounce from '../../components/bounce/Bounce'
import CaseStudy from '../../components/caseStudy/CaseStudy'
import BookConsultation from '../../components/bookConsultation/BookConsultation'
import About from '../../components/about/About'

const Education = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const data = [
        {
            heading: 'EDUCATION MARKETING AGENCY',
            description: [
                'Are you looking for a marketing agency that specializes in the education sector? Do you need help in promoting your school or university and attract more students?',
                'Igloo can help you optimize your website, promote your brand, increase the number of students, and grow your revenues.We believe that every educational institution needs to have a strong digital presence in order to promote its competitive advantage and generate an interest from parents.',
                'In order to compete and win, your marketing strategy needs to include a sales-driven website, paid ads, organic listings (SEO), social media posts and ads, marketing automation, and more.Igloo specializes in the education sector and have been helping many institutions like yours grow their businesses by applying strategic digital marketing methods.Talk to one of our trusted education consultants to discuss your requirements.'
            ],
            showButton: true,
            buttonText: 'BOOK A FREE CONSULTATION',
        },
    ];

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

    const caseStudyData = [
        {
            image: "section6-6.jpg",
            heading: "GMCClinics Case Study",
            subHead: "Group of Clinics | GMCClinics",
            text: "GMCClinics first contacted Igloo to help them acquire new patients (PPC) and to improve their ranking on the search engines (SEO).",
        },
        {
            image: "caseStudy4.jpg",
            heading: "We202 Case Study",
            subHead: "Group of WellFitEMS | We202",
            text: "We202 (formerly known as WellFitEMS), approached Igloo while searching for an advisor who could help them with the rebranding of their cutting-edge fitness training program.",
        },
        {
            image: "caseStudy5.jpg",
            heading: "Digital Marketing Case Study",
            subHead: "Leading University in Dubai | UAE",
            text: "To increase the number of students through online marketing.",
        },
    ];

    return (
        <div>
            <Carousel
                heading="DIGITAL MARKETING AGENCY IN DUBAI"
                breadcrumb="Home | DIGITAL MARKETING AGENCY IN DUBAI"
                imageUrl="marketingAutomation-carousel.jpg"
            />
            <About data={data} />

            <Container>
                <h1 className='homesection5-heading'>Our Services</h1>
                <Row>
                    <div className="homesection5-icons-parent">
                        <Col xs={12} sm={4} md={4} lg={2} xl={2}>
                            <div className="homesection5-icon-parent">
                                <GiAirBalloon className="homesection5-icons" />
                                <p className='homesection5-text'>Branding</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={2} xl={2}>
                            <div className="homesection5-icon-parent">
                                <PiRecycleThin className="homesection5-icons" />
                                <p className='homesection5-text'>Social Media</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={2} xl={2}>
                            <div className="homesection5-icon-parent">
                                <AiOutlineGlobal className="homesection5-icons" />
                                <p className='homesection5-text'>Web design</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={2} xl={2}>
                            <div className="homesection5-icon-parent">
                                <BsFileBarGraph className="homesection5-icons" />
                                <p className='homesection5-text'>SEO</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={2} xl={2}>
                            <div className="homesection5-icon-parent">
                                <IoMegaphoneOutline className="homesection5-icons" />
                                <p className='homesection5-text'>Google Ads</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={2} xl={2}>
                            <div className="homesection5-icon-parent">
                                <GiOnTarget className="homesection5-icons" />
                                <p className='homesection5-text'>Marketing consultancy</p>
                            </div>
                        </Col>
                    </div>
                </Row>
            </Container>

            <LeaderShip />
            <Bounce slides={bounceData} />

            <Clients />
            <CaseStudy caseStudy={caseStudyData} />
            <BookConsultation />

        </div>
    )
}

export default Education