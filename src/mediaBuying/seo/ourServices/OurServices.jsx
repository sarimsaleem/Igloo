import React from 'react'
import { Container } from 'react-bootstrap'
import { Col, Row } from 'react-bootstrap'
import brandguidelines1 from "../../../assets/seoservices1.svg"
import brandguidelines2 from "../../../assets/seoservices2.svg"
import brandguidelines3 from "../../../assets/seoservices3.svg"
import brandguidelines4 from "../../../assets/seoservices4.svg"
import "./ourServices.css"

const OurServices = () => {
    return (
        <div>
            <div className='brandguidelines'>
                <Container>
                    <h1 className='brandguidelines-heading'>Our SEO Services</h1>
                    <div className="brandguidelines-seperator"></div>
                    <p className='brandguidelines-detail'>
                    As an SEO agency in Dubai, we curate SEO solutions specific to your industry depending on your business goals. Below are the services we offer:</p>
                </Container>
                <Row className="brandingServices-parent">
                    <Col md={2}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandguidelines1} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={10}>
                        <div className="brandingServices-text-parent">
                            <h1 className="brandingServices-text-heading">SEO Audits</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <ul>
                                <li className='seo-li'><b>On-Page SEO:</b> We ensure that all aspects of your website are running efficiently. We optimize title tags, content, site navigation, site speed, and other technical elements. Additional responsibilities include picking the correct keyword tags, developing visual elements, and incorporating responsive design.
                                </li>
                                <li className='seo-li'><b>Off-Page SEO:</b> Elements relating to your online presence can also influence how you rank. As such, we pay close attention to backlinks, published content, social media shares, and more. Some of our off-page duties include developing and promoting shareable content, optimizing your Google My Business Profile, and monitoring social media mentions.
                                </li>
                                <li className='seo-li'><b>Technical SEO:</b> Suppose your website backend could use some work. In that case, we provide technical SEO services that include improving page speed, fixing broken links, developing a responsive, mobile-friendly layout, and securing your website with HTTPS.
                                </li>
                            </ul>
                            <p className="brandingServices-text">
                            If your website isn’t ranking, we perform in-depth audits to determine why this might be the case. We provide competitive scorecards and backlink reports that inform your future site strategy. We also review the following factors.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="brandingServices-parent">
                    <Col md={2}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandguidelines2} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={10}>
                        <div className="brandingServices-text-parent">
                            <h1 className="brandingServices-text-heading">Local SEO
                            </h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Any SEO company will tell you the importance of local SEO to your success, but not every agency will know how to help you improve it.</p>
                            <p className="brandingServices-text">
                            Especially if you run a brick-and-mortar shop, improving your local SEO efforts can capture a more significant portion of your nearby market. We focus on developing a robust Google My Business profile that ensures your company appears in Google’s local SEO 3-pack.</p>
                            <p className="brandingServices-text">
                            We also build local citations, monitor ratings, respond to negative reviews, build links, and optimize user experiences.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="brandingServices-parent">
                    <Col md={2}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandguidelines3} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={10}>
                        <div className="brandingServices-text-parent">
                            <h1 className="brandingServices-text-heading">E-Commerce SEO</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            When it comes to eCommerce SEO, qualified leads are the foundation of your success. At Igloo, we optimize your entire product line and improve online visibility to achieve more sales. We can ensure your business shows up in search results through product markups, turning clicks into conversions.
</p>
                            <p className="brandingServices-text">
                            First, we develop ad groups and determine geographic targeting factors. From here, we can narrow our keyword research based on group demographics and decide on your initial bidding strategy.</p>
                            <p className="brandingServices-text">
                            No other SEO agency in Dubai  possesses the tools and unique skillsets we have that help us take an analytical and growth-driven approach to growing your eCommerce business.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="brandingServices-parent">
                    <Col md={2}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandguidelines4} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={10}>
                        <div className="brandingServices-text-parent">
                            <h1 className="brandingServices-text-heading">Voice SEO</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Accessibility is an SEO factor many businesses tend to overlook. If you want to reach as many customers as possible, you can’t ignore specific demographics. By optimizing your conversational search results, we can tap into shoppers who may prefer to use voice tools over traditional shopping methods.</p>
                            <p className="brandingServices-text">
                            In focusing on your voice SEO, we simultaneously improve your online visibility, increase website visits, boost conversions, and drive revenue.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default OurServices