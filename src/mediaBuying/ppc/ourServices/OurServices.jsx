import React from 'react'
import { Container } from 'react-bootstrap'
import { Col, Row } from 'react-bootstrap'
import brandguidelines1 from "../../../assets/ppcService1.svg"
import brandguidelines2 from "../../../assets/ppcService2.svg"
import brandguidelines3 from "../../../assets/ppcService3.svg"
import brandguidelines4 from "../../../assets/ppcService4.svg"
import brandguidelines5 from "../../../assets/ppcService5.svg"
const OurServices = () => {
    return (
        <div>
            <div className='brandguidelines'>
                <Container>
                    <h1 className='brandguidelines-heading'>Our PPC Services</h1>
                    <div className="brandguidelines-seperator"></div>
                    <p className='brandguidelines-detail'>
                        Successful PPC campaigns require strict management and analysis. Consider our PPC services if you lack the resources to ensure that your Google Ads deliver the results you’re looking for.
                    </p>
                </Container>
                <Row className="brandingServices-parent">
                    <Col md={2}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandguidelines1} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={10}>
                        <div className="brandingServices-text-parent">
                            <h1 className="brandingServices-text-heading">Competitor Analysis</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            To create a high-performing PPC campaign, you’ll have to gain insight into how your competitors are currently performing on search engines. Our experts perform comprehensive SWOT analyses to identify high-bidding keywords and determine methods to place you ahead of competitors.</p>
                            <p className="brandingServices-text">
                            We spend ample time dissecting competitor strategies and presenting probable solutions through detailed reports.</p>
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
                            <h1 className="brandingServices-text-heading">Keyword Research</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            The key to a high-performing paid ad campaign is extensive keyword research. We identify keywords that are performing well and use them to increase clicks. We combine these specified keywords with your ad copy to return optimum conversions.</p>
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
                            <h1 className="brandingServices-text-heading">Optimization and Implementation</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            If you’re looking for an entirely new setup or if your existing Google Ads campaign could use a fine-tune, we ensure that your efforts are wholly optimized.
                            </p>
                            <p className="brandingServices-text">
                            First, we develop ad groups and determine geographic targeting factors. From here, we can narrow our keyword research based on group demographics and decide on your initial bidding strategy.</p>
                            <p className="brandingServices-text">
                            On top of standard keyword research, we collect negative keywords to keep unqualified leads from entering your sales funnel.</p>
                            <p className="brandingServices-text">
                            Before launching your initial campaign, we test your conversion goals and monitor average positions to ensure quality. We then integrate Google Analytics to align ad copy and review existing landing pages.</p>
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
                            <h1 className="brandingServices-text-heading">Conversion Rate Optimization</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            We don’t just research keywords and competitors before launching a campaign—we repeat the process throughout to ensure your efforts result in high conversions.</p>
                            <p className="brandingServices-text">
                            We also adjust our interest-based targeting efforts, ad copy, and tracking methods if necessary. Our go-to strategy for tracking ad performance is through A/B testing. We evaluate copy and landing page variations, tweaking them to suit optimal configurations.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="brandingServices-parent">
                    <Col md={2}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandguidelines5} alt="Branding Icon" className="brandingServices-icon" />
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
            </div>
        </div>
    )
}

export default OurServices