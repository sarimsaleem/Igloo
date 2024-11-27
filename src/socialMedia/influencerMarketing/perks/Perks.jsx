import React from 'react'
import { Container } from 'react-bootstrap'
import { Col, Row } from 'react-bootstrap'
import brandguidelines1 from "./../../../assets/perk1.svg"
import brandguidelines2 from "./../../../assets/perk2.svg"
import brandguidelines3 from "./../../../assets/perk3.svg"
import brandguidelines4 from "./../../../assets/perk4.svg"
const Perks = () => {
  return (
    <div>
         <div className='brandguidelines'>
                <Container>
                    <h1 className='brandguidelines-heading'>What are the Perks of Influencer Marketing?</h1>
                    <div className="brandguidelines-seperator"></div>
                    <p className='brandguidelines-detail'>
                    Despite its growing popularity, not all marketers realize the advantages of an influencer marketing campaign.</p>
                </Container>
                <Row className="brandingServices-parent">
                    <Col md={2}>
                        <div className="brandingServices-icon-parent">
                            <img src={brandguidelines1} alt="Branding Icon" className="brandingServices-icon" />
                        </div>
                    </Col>
                    <Col md={10}>
                        <div className="brandingServices-text-parent">
                            <h1 className="brandingServices-text-heading">Brand Trust
                            </h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Consumers are more likely to purchase an item online when it’s endorsed by an influencer. If your company is looking to increase profits—and fast—influencer marketing is your best bet.</p>
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
                            <h1 className="brandingServices-text-heading">Increased Conversions and Sales
                            </h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Did you know that word-of-mouth marketing generates twice as many sales as paid ads? That means every time an influencer talks about your brand, you dramatically increase the chances of garnering new leads and getting site visitors to convert.</p>
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
                            <h1 className="brandingServices-text-heading">Impressive ROI</h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            On average, companies that utilize influencer marketing strategies will earn back $6.50 for every $1 they spend—that’s an ROI of 650%. Considering the minimal investments you have to make to get the most out of influencer marketing, it’s a strategy you’ll want to consider—and that we can perform right.</p>
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
                            <h1 className="brandingServices-text-heading">Boost Brand Awareness
                            </h1>
                            <div className="brandingServices-head-text-separator"></div>
                            <p className="brandingServices-text">
                            Naturally, the more consumers are aware of your brand, the higher your chances of increasing lead generation and sales. Influencers can directly impact your sales funnel by appealing to your audience and encouraging them to try out your products and services.</p>
                        </div>
                    </Col>
                </Row>
            </div>
    </div>
  )
}

export default Perks