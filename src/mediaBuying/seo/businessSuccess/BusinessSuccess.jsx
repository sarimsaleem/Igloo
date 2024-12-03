import React from 'react'
import "./businessSuccess.css"
import brandGuideMatter1 from "../../../assets/seo1.svg"
import brandGuideMatter2 from "../../../assets/seo2.svg"
import brandGuideMatter3 from "../../../assets/seo3.svg"
import brandGuideMatter4 from "../../../assets/seo4.svg"
import brandGuideMatter5 from "../../../assets/seo5.svg"
import brandGuideMatter6 from "../../../assets/seo6.svg"
import { Button, Col, Container, Row } from 'react-bootstrap'
const BusinessSuccess = () => {
    return (
        <div>
            <Container>
                <h1 className='brandguidelines-heading'>Why seo is essential for business success</h1>
                <div className="brandguidelines-seperator"></div>
                <p className='brandguidelines-detail'>
                    Despite its accessibility and ease of implementation, many businesses tend to neglect their SEO efforts. By investing time and a portion of your budget in SEO, or alternatively working with an SEO agency, your business can reap the following benefits:</p>
                <Row className="brandGuideMatter-parent">
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter1} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Generate Higher-Quality Leads</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">Compared to other marketing strategies, SEO is proven to generate the most high-quality leads in a short period. Not to mention, SEO guarantees a significantly higher conversion rate than outbound methods.</p>
                            <p className="brandingServices-text">Working with the right SEO agency can help you rank at the top for popular search engines for industry-related terms, building trust and helping you to empower your sales team.</p>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter2} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Focus on User Experience
                                Focus on User Experience</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                While only implemented recently, Google considers a positive user experience as a ranking factor on search engines. By focusing on customer needs, your website ranks higher. A positive customer experience also significantly increases conversions.
                            </p>
                            <p className="brandingServices-text">
                                Factors like technical SEO (backlinks, page speed, site navigation, etc.) also improve site health and make site experiences seamless for visitors, while simultaneously improving your SEO rankings.</p>
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
                            <h1 className="brandingServices-text-heading">Improve Brand Awareness</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                Simply put, ranking on Google’s first page tangentially increases your brand awareness. Even if potential customers don’t click through to your website, they will associate your brand with specific search terms and solutions.
                            </p>
                            <p className="brandingServices-text">
                            SEO can also improve brand credibility as a secondary benefit to increasing brand awareness. When you rank high on Google, people assume you are one of the top players in the industry, and may be more likely to work with you.</p>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter4} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Get Measurable Results</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            SEO metrics are easy to track. While not as straightforward as paid ads, you can easily make sense of metrics like page views, ad clicks, and order completions to determine how well your campaigns perform.</p>
                            <p className="brandingServices-text">
                            At Igloo, we use tools like Google Search Console to determine how people are discovering your business, what topics and keywords you’re ranking for, and where your campaign could use improvement.</p>
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
                            <h1 className="brandingServices-text-heading">Achieve Long-Term Success</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            While your website may take a few months to achieve an optimal ranking, SEO provides long-term results that can far outweigh the upfront investments of time and money.</p>
                            <p className="brandingServices-text">
                            With that in mind, Google’s algorithm regularly changes, so we monitor your ranking and make adjustments as fluctuations occur. On top of this, we stay on top of SEO trends and optimize your pages as necessary.</p>

                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter6} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Shrink Your Marketing Budget</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            SEO is inexpensive to implement and can even improve cost management. If your website ranks well, you won’t have to invest in costly pay-per-click campaigns—as long as people click through your links, you can maintain your position as a thought leader.</p>
                            <p className="brandingServices-text">
                            The marketing tasks involved in an SEO strategy are also relatively inexpensive. These include blogs, social media posts, and referrals.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BusinessSuccess