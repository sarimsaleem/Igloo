import React from 'react'
import "./buildACommunity.css"
import { Button, Container } from 'react-bootstrap'
const BuildACommunity = () => {
  return (
    <div className='buildAcommunity'>
      <Container>
        <div className="stillQuestion-text-container">
          <h1 className="stillQuestion-heading">Don’t Just Build a Business - Build a Community</h1>
          <div className="stillQuestion-seperator"></div>
          <p className="stillQuestion-text">
            The key to a lasting business is a powerful relationship between consumer and company. Community management allows your business to present itself as a knowledgeable and engaging entity that exists to solve common buyer problems.</p>
          <p className="stillQuestion-text">
            Contact Igloo today to begin building a loyal fanbase that allows and empowers your brand to thrive.</p>
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

export default BuildACommunity