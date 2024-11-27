import React from 'react'
import { Button, Container } from 'react-bootstrap'

const ContentMarketing = () => {
    return (
        <Container>
            <h1 className='agency-heading' style={{ marginTop: "40px" }}>Content Marketing | Influencer Marketing Agency</h1>
            <div className='heading-underline'></div>
            <p className='agency-description'>
                Since becoming a $10 billion industry, influencer marketing has become unstoppable. At Igloo, we don’t undermine the power of a celebrity voice—brands that want to boost awareness and significantly improve their bottom line will understand why!</p>
            <p className='agency-description'>
            Depending on your business goals, we at Igloo can create a unique influencer strategy that can help you better engage with consumers. Contact us today to find the right face for your brand.</p>
            <h1 className='agency-heading' style={{ marginTop: "40px" }}>Let the Loudest Voices Speak for Your Brand</h1>
            <div className='heading-underline'></div>
            <p className='agency-description'>
            Compared to other marketing channels, nearly 90% of marketers find that influencers offer the best ROI. By taking your influencer marketing efforts to Instagram—home to over a billion active users—you may very well become part of this statistic.</p>
            <p className='agency-description'>
            And don’t worry about being a smaller brand. Since the rise of micro-influencers and ease of content creation over the years, startups have just as big a chance at success.</p>
            <div className="logoAndBrand-btn-parent">
                <Button className="logoAndBrand-btn" >BOOK A FREE CONSULTATION
                </Button>
            </div>
        </Container>)
}

export default ContentMarketing