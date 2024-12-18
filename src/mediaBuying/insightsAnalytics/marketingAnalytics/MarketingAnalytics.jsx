import React from 'react'
import brandGuideMatter1 from "../../../assets/insight1.svg"
import brandGuideMatter2 from "../../../assets/insight2.svg"
import brandGuideMatter3 from "../../../assets/insight3.svg"
import brandGuideMatter4 from "../../../assets/insight4.svg"
import brandGuideMatter5 from "../../../assets/insight5.svg"
import brandGuideMatter6 from "../../../assets/insight6.svg"
import { Button, Col, Container, Row } from 'react-bootstrap'
const MarketingAnalytics = () => {
    return (
        <div>
            <Container>
                <h1 className='brandguidelines-heading'>How Digital Marketing Analytics Can Benefit Your Business</h1>
                <div className="brandguidelines-seperator"></div>
                <p className='brandguidelines-detail'>
                    The better you understand your customers, the more likely you can get them to convert; but how can you more deeply understand their pain points and desires? The answer is simple: actionable insights. Here are a few other ways your business can benefit from big data.</p>

                <Row className="brandGuideMatter-parent">
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter1} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Better Engage Customers</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">The key to better consumer engagement is providing value. Big data can help you identify weak points in your sales journey and create more realistic targets.</p>
                            <p className="brandingServices-text">We help determine where your strategy might be lacking and use actionable insights to make relevant recommendations to potential buyers.</p>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter2} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Make Clear Product Improvements</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                Product development doesn’t stop as soon as your offers hit the market. Consumer needs constantly change, so even the most effective products are at risk of becoming obsolete.</p>
                            <p className="brandingServices-text">
                                At Igloo, we develop a log of customer suggestions and feedback that we can use to inform product improvements. We don’t just consider what customers want to change about your product; we also take an in-depth look at why your existing product isn’t meeting their needs.</p>
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
                            <h1 className="brandingServices-text-heading">Improve Support Resources</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                Contrary to popular belief, you don’t lose a customer when they become dissatisfied with your business. By determining which customer interactions are causing dissatisfaction, we can determine how best to address specific issues.
                            </p>
                            <p className="brandingServices-text">
                                Big data can also identify holes in resource allocation, indicating where customer service might be lacking.

                            </p>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter4} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Mitigate Risks and Setbacks</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                Business risks are inevitable, no matter how much you prepare for them. However, data analytics can help you better understand these vulnerabilities and implement the appropriate prevention strategies.</p>
                            <p className="brandingServices-text">
                                For instance, if your business has previously experienced uncollected receivables, we can develop a system for identifying unpaid invoices, lost checks, and other related materials.</p>
                            <p className="brandingServices-text">
                                In addition, we can use data analytics to minimize losses, especially if your business is undergoing a fluctuation in product demand. We create statistical models to make automatic recommendations based on your profits, returns, and customer-related metrics.</p>
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
                            <h1 className="brandingServices-text-heading">Enhance Data Security</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                                Many businesses will experience data breaches at least once in their lifetime. However, by processing and visualizing relevant data, we can determine the cause of specific attacks and what measures to take to prevent them from reoccurring.
                            </p>
                            <p className="brandingServices-text">
                                We can develop statistical models to flag anomalies and alert security professionals to keep your UAE business safe 24/7.
                            </p>

                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandGuideMatter6} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="brandingServices-text-parent2">
                            <h1 className="brandingServices-text-heading">Increase Sales</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Data analytics can flag negative experiences within your sales funnel that keep customers from following through with a purchase. By running predictive models on transaction data, we can determine the best methods for sales closing, ultimately increasing your profits and returns.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MarketingAnalytics