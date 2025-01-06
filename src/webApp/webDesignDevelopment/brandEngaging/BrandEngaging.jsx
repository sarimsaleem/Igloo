import React from 'react'
import "./brandEngaging.css"
import { Button, Container } from 'react-bootstrap'

const BrandEngaging = () => {
    return (
        <div className='buildAcommunity'>
            <Container>
                <div className="stillQuestion-text-container">
                    <h1 className="stillQuestion-heading">Make Your Brand Engaging and Interactive</h1>
                    <div className="stillQuestion-seperator"></div>
                    <p className="stillQuestion-text">
                    Our web app development services encompass every step of the process; from planning to building to deployment. If you want to develop an impactful and easy-to-use web app that engages consumers, reach out to our specialists to find out what our Dubai based agency can create.</p>
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

export default BrandEngaging