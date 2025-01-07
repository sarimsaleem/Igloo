import React from 'react'
import brandGuideMatter1 from "../../../assets/ppc1.svg"
import brandGuideMatter2 from "../../../assets/ppc2.svg"
import brandGuideMatter3 from "../../../assets/ppc3.svg"
import brandGuideMatter4 from "../../../assets/ppc4.svg"
import brandGuideMatter5 from "../../../assets/ppc5.svg"
import brandGuideMatter6 from "../../../assets/ppc6.svg"
import { Col, Container, Row } from 'react-bootstrap'

const WhyInvestInPPC = () => {
    return (
        <div>
            <Container>
                <h1 className='brandguidelines-heading'>Why Should You Invest in PPC and Google Ads?</h1>
                <div className="brandguidelines-seperator"></div>
                <p className='brandguidelines-detail'>
                    PPC marketing provides excellent access to website traffic and potential revenue. Its positive impact on Dubai brands and business is undeniable and provides the following powerful advantages.</p>
                <Row className="brandGuideMatter-parent">
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter1} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Immediate Results</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">Effective marketing is timely. Unlike organic search strategies and content creation, PPC advertising promises immediate results. When online users search for local businesses, your business can tap into a reserve of potential traffic.</p>
                            <p className="brandingServices-text">PPC can help drive the appropriate customers to your website as a short-term solution.</p>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter2} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Trackable and Measurable Analytics</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                Thanks to analytics displaying high-level performance details, Google Ads results are easy to track. You can get a clear overview of metrics like impressions, clicks, and conversions to get a real-time look at how your campaigns are performing.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="brandGuideMatter-parent">
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter3} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Increased Website Traffic</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                While paid ads don’t directly impact your search engine ranking, they can drive significant traffic to your website. Over time, these quick results can increase user activity on your website and garner attention from new audience segments.</p>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter4} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Enhanced Brand Awareness and Recognition</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                Brand recognition plays an imperative role in revenue success. While social media recognition can direct high-volume traffic to your website, showing up on search engines can deliver even more effective results. In fact, consistently representing your brand can increase your revenue significantly.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="brandGuideMatter-parent">
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter5} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Impressive Targeting Options</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                Taking a multi-layered approach to your Google Ads campaign can improve brand exposure and strengthen your targeting options. Take advantage of the full scope of your PPC campaign by retargeting missed opportunities, using high-volume keywords, and focusing on specific audience demographics.</p>
                            <p className="brandingServices-text">
                                Testing segmented audiences can help you identify the most high-converting customers and tap into those who haven’t yet had exposure to your brand.</p>

                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter6} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Compatibility with Other Marketing Channels</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                Nowadays, content marketing is the primary driving force of most businesses. If your original content isn’t garnering the traffic you want, Google Ads can drive visitors to your website and deliver the recognition your Dubai or Miami brand deserves.</p>
                            <p className="brandingServices-text">
                                In addition, PPC campaigns also work hand-in-hand with SEO, as they tap into identical audiences that originate from the same places. You can align your efforts keyword-by-keyword by paying close attention to impressions, clicks, and conversions from your Google Ads.</p>
                            <p className="brandingServices-text">
                                Finally, Google Ads provides an excellent avenue for remarketing to site visitors by engaging them based on specific rules and audiences.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WhyInvestInPPC