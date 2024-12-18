import React from 'react'
import "./accurateBussiness.css"
import { Button, Container } from 'react-bootstrap'
const AccurateBussiness = () => {
    return (
        <div className='accurate-buss'>
            <Container>
                <div className="stillQuestion-text-container">
                    <h1 className="stillQuestion-heading">Grow Your Business with Accurate and Actionable Insights</h1>
                    <div className="stillQuestion-seperator"></div>
                    <p className="stillQuestion-text">
                        Getting a clearer picture of your data in relation to the customers you’re servicing is the best way to drive success. If you’re having trouble making sense of what your numbers mean, we at Igloo have the experience and expertise to inform your decision-making process.
                    </p>
                    <p className="stillQuestion-text">
                        If you’re ready to start growing your Dubai-based business, reach out to us today to book a consultation.</p>
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

export default AccurateBussiness