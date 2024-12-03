import React from 'react'
import { Button, Container } from 'react-bootstrap'
import "./stillQuestion.css"
const StillHaveAQuestion = () => {
    return (
        <>
            <div className='stillQuestion-bg-Img'></div>
                <div className="stillQuestion">
                    <Container>
                        <div className="stillQuestion-text-container">
                            <h1 className="stillQuestion-heading">Still Have Questions?</h1>
                            <div className="stillQuestion-seperator"></div>
                            <p className="stillQuestion-text">
                                Branding is a complex topic that we could discuss for hours on end. If
                                there’s anything you need to know that wasn’t covered on this page, feel
                                free to contact us.
                            </p>
                            <div className="stillQuestion-btn-parent">
                                <Button className="stillQuestion-btn">
                                    Book a Free Consultation
                                </Button>
                            </div>
                        </div>
                    </Container>
                </div>
        </>
    )
}

export default StillHaveAQuestion