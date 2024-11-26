import React from 'react'
import "./stillhaveaquestion.css"
import { Button, Container } from 'react-bootstrap'
const StillHaveAQuestion = () => {
  return (
    <div>
      <div className="stillQuestion">
        <Container>
          <div className="stillQuestion-text-container">
            <h1 className="stillQuestion-heading">Still Have Questions?</h1>
            <div className="stillQuestion-seperator"></div>
            <div className="stillQuestion-btn-parent">
              <Button className="stillQuestion-btn">
                Book a Free Consultation
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default StillHaveAQuestion