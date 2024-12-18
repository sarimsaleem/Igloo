import React from 'react'
import { Button, Container } from 'react-bootstrap'

const MarketingInsights = () => {
  return (
    <div>
        <Container>
                <h1 className='agency-heading' style={{ marginTop: "40px" }}>Digital Marketing Insights and Analytics</h1>
                <div className='heading-underline'></div>
                <p className='agency-description'>
                Data analytics play a central role in improving business decision-making processes and outcomes. Data-driven companies are 23 times more likely to acquire customers, while 83% of business leaders use insights to gain a competitive edge in the market.</p>
                <p className='agency-description'>
                If insights and analytics are not yet part of your marketing strategy, there are many reasons why they should be. At Igloo digital marketing agency, we use big data to inform your business decisions, communicate with customers, and enhance online and offline shopping experiences.</p>
                <div className="logoAndBrand-btn-parent">
                    <Button className="logoAndBrand-btn" >BOOK A FREE CONSULTATION
                    </Button>
                </div>
            </Container>
    </div>
  )
}

export default MarketingInsights