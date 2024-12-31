import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import linkdin1 from "../../../assets/youtube1.svg"
import linkdin2 from "../../../assets/youtube2.svg"
import linkdin3 from "../../../assets/youtube3.svg"
import linkdin4 from "../../../assets/youtube4.svg"
import linkdin5 from "../../../assets/youtube5.svg"
const WhyChooseYoutube = () => {
    return (
        <div>
            <Container>
                <h1 className='brandguidelines-heading'>Why Choose YouTube as an Ad Platform?,</h1>
                <div className="brandguidelines-seperator"></div>
                <p className='brandguidelines-detail'>
                Let’s face it—YouTube is an ambitious platform, but it doesn’t mean you should stray from leveraging it as a marketing channel. Incorporating YouTube into your ad strategy is one of the best decisions you can make as a marketer—here’s why.</p>
            </Container>
            <Row className="brandingServices-parent">
                <Col md={2}>
                    <div className="brandingServices-icon-parent">
                        <img src={linkdin1} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={10}>
                    <div className="brandingServices-text-parent">
                        <h1 className="brandingServices-text-heading">Hyper-specific Targeting</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                        Believe it or not, YouTube ad targeting is just as specific as on platforms like Facebook and Instagram. You can target your audience according to:
                        </p>
                        <ul class="two-columns">
                            <li>Reaching a broader, more engaged audience</li>
                            <li>Full-funnel targeting for higher conversions</li>
                            <li>Remarketing opportunities</li>
                            <li>Multiple effective ad formats</li>
                            <li>Driving traffic directly to your website</li>
                            <li>Measurable and actionable results</li>
                        </ul>
                    </div>

                </Col>

            </Row>
            <Row className="brandingServices-parent">
                <Col md={2}>
                    <div className="brandingServices-icon-parent">
                        <img src={linkdin2} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={10}>
                    <div className="brandingServices-text-parent">
                        <h1 className="brandingServices-text-heading">Cost-Effective</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                        If you already employ pay-per-click (PPC) as part of your advertising strategy, you’ll be pleased to know that YouTube adheres to the same model. With YouTube ads, you can determine how much you’re willing to pay every time someone clicks through your video, making it incredibly cost-effective.</p>
                    </div>
                </Col>
            </Row>
            <Row className="brandingServices-parent">
                <Col md={2}>
                    <div className="brandingServices-icon-parent">
                        <img src={linkdin3} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={10}>
                    <div className="brandingServices-text-parent">
                        <h1 className="brandingServices-text-heading">High Reach</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                        As we previously mentioned, YouTube is one of the most sizable search engines on the internet, second only to Google. So unless you happen to have two million email subscribers, you’re not going to get access to a wider audience anywhere else!</p>
                    </div>
                </Col>
            </Row>
            <Row className="brandingServices-parent">
                <Col md={2}>
                    <div className="brandingServices-icon-parent">
                        <img src={linkdin4} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={10}>
                    <div className="brandingServices-text-parent">
                        <h1 className="brandingServices-text-heading">Enhanced Engagements</h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                        Most consumers feel disconnected when they see a television advert or hear one over the radio. Fortunately, YouTube provides many opportunities to engage with audiences on a deeper level. YouTube ads allow viewers to put a face to your brand and better understand company attitudes.</p>
                    </div>
                </Col>
            </Row>
            <Row className="brandingServices-parent">
                <Col md={2}>
                    <div className="brandingServices-icon-parent">
                        <img src={linkdin5} alt="Branding Icon" className="brandingServices-icon" />
                    </div>
                </Col>
                <Col md={10}>
                    <div className="brandingServices-text-parent">
                        <h1 className="brandingServices-text-heading">Measurable Insights
                        </h1>
                        <div className="brandingServices-head-text-separator"></div>
                        <p className="brandingServices-text">
                        Like other social media platforms, YouTube comes equipped with built-in analytics that are easy to put into action. Through the Analytics tab, you can study how well your videos are engaging users and gain key insights to create even better content in the future.</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default WhyChooseYoutube