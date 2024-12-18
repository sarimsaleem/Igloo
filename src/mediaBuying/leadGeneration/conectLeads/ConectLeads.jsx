import React from 'react'
import { Button, Container } from 'react-bootstrap'
import "./conectLeads.css"
const ConectLeads = () => {
    return (
        <div className='ConectLeads'>
            <Container>
                <div className="stillQuestion-text-container">
                    <h1 className="stillQuestion-heading">Connect Leads with Your Offers and Content Today!</h1>
                    <div className="stillQuestion-seperator"></div>
                    <p className="stillQuestion-text">
                        If you want to generate high-quality leads at scale and maximize your returns, our lead generation services can make a real impact on your bottom line.</p>
                    <p className="stillQuestion-text">
                        Accessing and managing your leads shouldn’t have to take up a significant portion of your day. If you need a more effective method of automating leads, book a consultation with our experts at Igloo today to find out how we can help.</p>
                    <div className="stillQuestion-btn-parent">
                        <Button className="provenExpertise-btn">
                            Book a Free Consultation
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ConectLeads