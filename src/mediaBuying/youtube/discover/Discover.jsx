import React from 'react'
import { Button, Container } from 'react-bootstrap'

const Discover = () => {
  return (
    <div className='facebook-Bee-Seen'>
    <Container>
        <div className="stillQuestion-text-container">
            <h1 className="stillQuestion-heading">Be the Best in Business Today </h1>
            <div className="stillQuestion-seperator"></div>
            <p className="stillQuestion-text">
                If you want to stand out amongst a B2B crowd, Igloo has years of experience in producing high-converting LinkedIn ads. Because we have a knack for capturing the essence of your brand, you can rest assured that we create content that is uniquely yours.
            </p>
            <p className="stillQuestion-text">
                Want to get started on your LinkedIn campaign? Contact us today to find out how we can launch your brand into a B2B success.
            </p>
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

export default Discover