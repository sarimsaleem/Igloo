import React from 'react'
import "./socialMediaAgency.css"
import { Button, Container } from 'react-bootstrap'
const SocialMediaAgency = () => {
    return (
        <div>
            <Container>
                <h1 className='agency-heading' style={{ marginTop: "40px" }}>Social Media Agency</h1>
                <div className='heading-underline'></div>
                <p className='agency-description'>
                    Welcome to Igloo, the premier social media agency in Dubai dedicated to transforming your online presence. With over 15 years of experience, our team of social media experts and content creators in Dubai is committed to helping you achieve your business objectives through innovative and effective social media strategies.</p>
                <div className="logoAndBrand-btn-parent">
                    <Button className="logoAndBrand-btn" >BOOK A FREE CONSULTATION
                    </Button>
                </div>
            </Container>
        </div>
    )
}

export default SocialMediaAgency