import React from 'react'
import { Button, Container } from 'react-bootstrap'

const CommunityManagemenetAgency = () => {
    return (
        <div>
            <Container>
                <h1 className='agency-heading' style={{ marginTop: "40px" }}>Community Management Agency</h1>
                <div className='heading-underline'></div>
                <p className='agency-description'>
                Community management is essential to businesses that rely solely on social media to earn and retain leads. If a “happy wife makes for a happy life”, the same principle applies to your customer base.</p>
                <p className='agency-description'>
                Fortunately, our specialists at Igloo are experts at nurturing business relationships and can bridge the gap between consumers and your brand. If your social media accounts lack a dedicated community manager, contact Igloo for help today.</p>

                <h1 className='agency-heading' style={{ marginTop: "40px" }}>Happy Customers Make for a Successful Business</h1>
                <div className='heading-underline'></div>
                <p className='agency-description'>
                Social media community management defines the process by which your audience engages with consumers online. Community managers are responsible for managing communications, discovering new ways to engage digital communities, and being overall advocates for your brand.</p>
                <div className="logoAndBrand-btn-parent">
                    <Button className="logoAndBrand-btn" >BOOK A FREE CONSULTATION
                    </Button>
                </div>
            </Container>
        </div>
    )
}

export default CommunityManagemenetAgency