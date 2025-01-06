import React from 'react'
import { Button, Container } from 'react-bootstrap'

const ConversionRate = () => {
  return (
    <div> <Container>
    <h1 className='agency-heading' style={{ marginTop: "40px" }}>Conversion Rate Optimization Agency</h1>
    <div className='heading-underline'></div>
    <p className='agency-description'>
    Many marketers who prioritize website traffic tend to forget the importance of conversions. While high visibility can improve brand awareness for businesses, conversions make the most significant impact on your bottom line.</p>
    <p className='agency-description'>
    On average, most websites only have a conversion rate of 2.35%, which leaves a lot for potential buyers to be desired. Our CRO services can turn your success around if you have an impressive lineup of high-quality products and a beautifully designed website but aren’t achieving conversions.</p>
    <div className="logoAndBrand-btn-parent">
        <Button className="logoAndBrand-btn" >BOOK A FREE CONSULTATION
        </Button>
    </div>
</Container></div>
  )
}

export default ConversionRate