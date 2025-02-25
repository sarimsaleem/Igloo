import React, { useEffect } from 'react'
import "./branding.css"
import Carousel from '../../components/carousel/Carousel'
import About from '../../components/about/About'
import Portfolio from '../../components/portfolio/Portfolio'
import Clients from '../../components/clients/Clients'
import Services from '../../components/services/Services'
import Questions from '../../components/questions/Questions'
import Bounce from '../../components/bounce/Bounce'
import Offers from '../../components/offers/Offers'
import BookConsultation from '../../components/bookConsultation/BookConsultation'
import home1 from '/public/assets/images/portfolio1.jpg';
import home2 from '/public/assets/images/portfolio2.jpg';
import home3 from '/public/assets/images/portfolio3.jpg';
import home4 from '/public/assets/images/portfolio4.jpg';
import home5 from '/public/assets/images/portfolio5.jpg';

const Branding = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const data = [
        {
            heading: 'Are you looking for the best Branding Agency in Dubai? Look no further.',
            description: [
                'The Igloo branding team has worked with B2B, B2C, and e-commerce businesses across the region and beyond for over 15 years. We’ve launched hundreds of successful campaigns and helped our clients exceed their business goals through branding',
            ],
            showButton: true,
            buttonText: 'BOOK A FREE CONSULTATION',
        },
    ];

    const portfolioColumns = [
        {
            images: [
                { src: home1, alt: 'Work 1' },
                { src: home4, alt: 'Work 4' },
            ],
        },
        {
            images: [
                { src: home2, alt: 'Work 2' },
                { src: home5, alt: 'Work 5' },
            ],
        },
        {
            images: [
                { src: home3, alt: 'Work 3' },
                // { src: home6, alt: 'Work 6' },
            ],
        },
    ];

    const handleButtonClick = () => {
        console.log('View All Portfolio button clicked!');
    };

    const servicesData = [
        {
            id: 1,
            image: "brandingServices1.svg",
            heading: "Logo Design",
            description: "Your company logo is the “face” of your business. At Igloo, we develop strong logos based on a powerfully defined brand identity. We incorporate carefully crafted visual elements that communicate what your business represents to consumers."
        },
        {
            id: 2,
            image: "brandingServices2.svg",
            heading: "Brand Messaging",
            description: "Strong brand messaging should clearly communicate what solutions you can provide potential customers and how you stand out amongst competitors. We consider everything, including your industry, target audience, and competitors, to develop value propositions, key differentiators, brand principles, and brand equity."
        },
        {
            id: 3,
            image: "brandingServices3.svg",
            heading: "Brand Voice",
            description: "Every brand presents itself in a particular way. Some are playful, while others are professional or educational. We sit down with your marketing team to discuss specifics like the tone of voice and syntax that can help us define how you speak."
        },
        {
            id: 4,
            image: "brandingServices4.svg",
            heading: "Brand Positioning",
            description: "While essentially a subset of brand messaging, brand positioning more deeply focuses on setting your business apart from competitors.Not only do we want to develop a strong identity that you can nurture over time, but we also want to identify differentiators that encourage potential customers to choose you.",
        },
        {
            id: 5,
            image: "brandingServices5.svg",
            heading: "Brand Bibles and Guidelines",
            description: "Once we’ve clearly defined your brand identity, it’s time to develop brand guidelines that you can apply across multiple channels. The key to a successful brand is consistency. We lay out your brand voice, messaging, and design principles in a detailed report that you can use to train staff members.",
        },
        {
            id: 6,
            image: "brandingServices6.svg",
            heading: "Social Media",
            description: "Nowadays, you’ll be hard-pressed to discover a UAE brand without a social media presence. If you run accounts on multiple channels, you want to ensure that your branding stays consistent. At Igloo, we understand what works on various social media networks and how you can tap into audiences according to platform demographics.",
        }
    ];

    const questionData = {
        heading: "Still Have Questions?",
        text: ["Branding is a complex topic that we could discuss for hours on end. If there’s anything you need to know that wasn’t covered on this page, feel free to contact us."],
        buttonText: "Book a Free Consultation",
        backgroundImage: "stillQuestion-banner.jpg",
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

    return (
        <>
            <Carousel
                heading="Branding Agency in Dubai"
                breadcrumb="Home | Branding Agency in Dubai"
                imageUrl="banner.png"
                textColor="var(--white)"
            />
            <About data={data} />
            <Portfolio
                columns={portfolioColumns}
                heading="PORTFOLIO"
                buttonText="View All Portfolio"
                onButtonClick={handleButtonClick}
            />
            <div className='brandingagencychoose'>
                <h1 className='brandingagencychoose-heading'>Debating which Branding Agency in Dubai to choose?</h1>
                <div className='heading-border'></div>
                <p className='brandingagencychoose-description'>
                    It is crucial to hire the right branding agency in Dubai, mainly because you want your identity to be reflected the way you envision it. Another important factor to keep in mind when choosing a branding agency in Dubai is to choose an agency that is flexible.
                </p>
                <p className='brandingagencychoose-description'>Getting your brand identity right from the first time can be difficult so working with an agency that understands your vision is key to having a good journey creating your brand identity, or any other creative work for that matter.
                </p>
                <p className='brandingagencychoose-description'>We at Igloo, a leading creative agency in Dubai, having over 15 years in the Middle East developing brand identities and all other types of creative work, can confidentially say that we are a branding agency that has the right expertise and flexibility to help you develop any of your branding and creative needs; our team members have worked on 100s of creative projects in Dubai and other cities around the world, with B2B, B2C, and e-commerce businesses, from creating business names, logos, collaterals, social media posts, websites, videos, gifs, and more.
                </p>
            </div>

            <Clients />
            <Services heading="Our Branding Services" text="We offer the following services to develop and fine-tune your company image." servicesData={servicesData} />
            <Questions
                heading={questionData.heading}
                text={questionData.text}
                buttonText={questionData.buttonText}
                backgroundImage={questionData.backgroundImage}
            />
            <Bounce slides={bounceData} />
            <Offers />
            <BookConsultation />
        </>
    )
}

export default Branding