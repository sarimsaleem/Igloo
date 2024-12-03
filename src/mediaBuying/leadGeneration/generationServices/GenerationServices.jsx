import React from 'react'
import { Container } from 'react-bootstrap'
import { Col, Row } from 'react-bootstrap'
import brandguidelines1 from "../../../assets/GenerationServices1.svg"
import brandguidelines2 from "../../../assets/GenerationServices2.svg"
import brandguidelines3 from "../../../assets/GenerationServices3.svg"
import brandguidelines4 from "../../../assets/GenerationServices4.svg"

const GenerationServices = () => {
    return (
        <div>
            <div className='brandguidelines'>
                <Container>
                    <h1 className='brandguidelines-heading'>Our Lead Generation Services</h1>
                    <div className="brandguidelines-seperator"></div>
                    <p className='brandguidelines-detail'>
                    We tailor-make our lead generation strategies to your specific needs to guarantee the best possible returns. Depending on your business goals, our agency can curate a unique lead generation campaign focusing on the following applications.</p>
                </Container>
                <Row className="brandingServices-parent">
                    <Col md={2}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandguidelines1} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={10}>
                        <div className="brandingServices-text-parent">
                            <h1 className="brandingServices-text-heading">B2B Lead Generation</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Contrary to popular belief, B2C and B2B applications are more opposite than you might expect. We use various techniques to capture business leads, including organic SEO campaigning, email marketing, and social media campaigns. The more we skew your campaigns towards organic efforts, the more we can reduce your PPC spending.
                            </p>
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
                            <h1 className="brandingServices-text-heading">PPC Lead Generation</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            If you have room in your budget for paid efforts, our PPC lead generation services place your brand and products in front of the right people. We direct your audience toward your website by enticing visitors with irresistible offers and focused landing pages.</p>
                            <p className="brandingServices-text">
                            We evaluate your results by zeroing in on specific metrics like cost-per-lead, conversion rate, and cost-per-click.</p>
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
                            <h1 className="brandingServices-text-heading">Social Media Lead Generation</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Social media campaigns are an excellent way to communicate with potential buyers and provide instant gratification to common queries. When it comes to leveraging platforms like Facebook, Twitter, and Instagram, we aim to develop a desire for your products and services through effective messaging.</p>
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
                            <h1 className="brandingServices-text-heading">Campaign Management</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                Once we launch your campaign, we will keep an active eye on its progress over time. We’ll adjust bids to ensure optimal performance and high ROI if necessary. Once we evaluate ad performance and assess conversion rates, we allocate bids to your highest-proven rates.</p>
                            <p className="brandingServices-text">
                                Each month, our agency prepares a summary of campaign activity and use these results to provide recommendations for future campaigns.</p>
                            <p className="brandingServices-text">
                                We work hand-in-hand with your marketing team to tweak and improve ongoing campaigns and develop new ones.</p>
                        </div>
                    </Col>
                </Row>
                <Container style={{marginBottom: "60px"}}>
                <Row>
                    <Col md={4}>
                        <div className="marketingagency-container">
                            <h4 className='marketingagency-heading-h4'>01</h4>
                            <h2>Facebook</h2>
                            <p className='marketingagency-detail'>Facebook is equipped with many native lead generation tools like landing pages, custom audience software, and lead scoring. With these tools, we make sure your audience knows what they’re signing up for, the benefits, and why they should continue to patronize your business.</p>
                            <p className='marketingagency-detail'>We reduce drop-offs by automating forms and customizing them to cater to higher-quality leads. We then sync these leads to your existing CRM platform, allowing you to personalize lead ads further or make a quick follow-up.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="marketingagency-container">
                            <h4 className='marketingagency-heading-h4'>02</h4>
                            <h2>Instagram</h2>
                            <p className='marketingagency-detail'>To tap into the more than one billion users on Instagram every day, we take advantage of its built-in ad services and analytics. Our social media lead generation specialists pay close attention to detail, incorporating the right hashtags, implementing CTA buttons, and crafting a catchy bio.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="marketingagency-container">
                            <h4 className='marketingagency-heading-h4'>03</h4>
                            <h2>Twitter</h2>
                            <p className='marketingagency-detail'>Twitter is an excellent platform for communicating updates and bite-sized information to potential customers. Our specialists are well-versed in its automated Twitter Lead Gen Cards system, allowing you to generate leads through a single tweet without clicking out of the app. These Lead Gen Cards collect usernames and email addresses for you to follow up with.</p>
                        </div>
                    </Col>
                </Row>
                </Container>
            </div>
        </div>
    )
}

export default GenerationServices
