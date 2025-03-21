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
import BookConsultation from '../../components/bookConsultation/BookConsultation'
import About from '../../components/about/About'
import Portfolio from '../../components/portfolio/Portfolio'
import portfolioHealth1 from '/public/assets/images/portfolioHealth1.jpg';
import portfolioHealth2 from '/public/assets/images/portfolioHealth2.jpg';
import portfolioHealth3 from '/public/assets/images/portfolioHealth3.jpg';
import portfolioHealth4 from '/public/assets/images/portfolioHealth4.jpg';

const Healthcare = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const data = [
        {
            heading: 'HEALTHCARE MARKETING AGENCY',
            description: [
                'Are you looking for a healthcare specialized digital marketing agency to help you build or optimize your website, increase the number of patients, and grow revenues?',
                'It is important for every healthcare organization to have a strong digital presence in order to win patients. In order to compete and win, your strategy needs to a marketing-driven website, search ads, display ads, search engine optimization (SEO), social media marketing, blogs, and more.',
                'Igloo specializes in the healthcare sector and have been helping many institutions like yours grow their businesses by developing their brand online, and growing their revenues through tactical digital marketing activities.',
                "Talk to one of our trusted healthcare consultants to discuss your requirements.",
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

    const portfolioColumns = [
        {
            images: [


                { src: portfolioHealth2, alt: 'Work 1' },
            ],
        },
        {
            images: [
                { src: portfolioHealth1, alt: 'Work 3' },
                { src: portfolioHealth3, alt: 'Work 5' },
            ],
        },
        {
            images: [
                { src: portfolioHealth4, alt: 'Work 4' },
            ],
        },
    ];

    return (
        <div>
            <Carousel
                heading="Healthcare Marketing Agency"
                breadcrumb="Home | Healthcare Marketing Agency"
                imageUrl="health.jpg"
                textColor="var(--white)"
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
            <Portfolio
                columns={portfolioColumns}
                heading="PORTFOLIO"
                buttonText="View All Portfolio"
            />
            <BookConsultation />

        </div>
    )
}

export default Healthcare