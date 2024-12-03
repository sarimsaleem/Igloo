import React from 'react'
import { Button, Container } from 'react-bootstrap'

const LeadgenerationAgency = () => {
  return (
    <div>
        <div>
            <Container>
                <h1 className='agency-heading' style={{ marginTop: "40px" }}>Lead Generation Agency</h1>
                <div className='heading-underline'></div>
                <p className='agency-description'>
                Leveraging Google Ads is the most effective way to drive qualified pay-per-click results and maximize returns.</p>
                <p className='agency-description'>
                PPC campaigns can drastically increase website traffic and yield an impressive ROI when adequately deployed. At Igloo, we focus on developing Google Ads to deliver immediate results, target customers in real-time, and improve brand recognition for your Dubai business.</p>
                <div className="logoAndBrand-btn-parent">
                    <Button className="logoAndBrand-btn" >BOOK A FREE CONSULTATION
                    </Button>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default LeadgenerationAgency