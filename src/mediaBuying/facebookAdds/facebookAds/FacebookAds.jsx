import React from 'react'
import { Button, Container } from 'react-bootstrap'
import "./facebookAds.css"
const FacebookAds = () => {
    return (

        <Container>
            <h1 className='agency-heading' style={{ marginTop: "40px" }}>Facebook Ads</h1>
            <div className='heading-underline'></div>
            <p className='agency-description'>
                While the need for a Facebook presence is nothing new, marketing strategies have changed drastically over the last decade. With over 1.56 billion users active on Facebook daily, how you market your brand matters more than ever before.</p>
            <p className='agency-description'>
                Facebook is one of the best channels for connecting, engaging, and nurturing new audiences. Your business
                can thrive on the world’s biggest social media platform with our services. Don’t wait—let us help.</p>

            <h1 className='agency-heading' style={{ marginTop: "40px" }}>Facebook | Advertising for Billions</h1>

            <div className='heading-underline'></div>
            <p className='agency-description'>
                Facebook is a hotbed for advice, inquiries, and reviews. As such, promoting the right content to the right audience is the key to your success. By trusting us to handle your Facebook advertising you can reap the benefits of:</p>
            <ul class="two-columns">
                <li>Reaching a broader, more engaged audience</li>
                <li>Full-funnel targeting for higher conversions</li>
                <li>Remarketing opportunities</li>
                <li>Multiple effective ad formats</li>
                <li>Driving traffic directly to your website</li>
                <li>Measurable and actionable results</li>
            </ul>

            <div className="logoAndBrand-btn-parent">
                <Button className="logoAndBrand-btn" >BOOK A FREE CONSULTATION
                </Button>
            </div>
        </Container>

    )
}

export default FacebookAds