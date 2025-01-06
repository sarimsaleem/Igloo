import React from 'react'
import { Button, Container } from 'react-bootstrap'

const Services = () => {
    return (
        <div>
            <Container>
                <h1 className='agency-heading' style={{ marginTop: "40px" }}>Photography and Videography Services
                </h1>
                <div className='heading-underline'></div>
                <p className='agency-description'>
                Nowadays, one of the most authentic and efficient ways for a brand to build trust is through photography and videography. Because most consumers are visual learners, appealing to this sense can do wonders for your sales and following.</p>
                <p className='agency-description'>
                If you’re looking for the most innovative way to tell your story, our photographers and videographers are fully equipped to handle all types of applications. Book a consultation today to find out how we can make your brand shine through visual storytelling.</p>

                <h1 className='agency-heading' style={{ marginTop: "40px" }}>Become a Visual Storyteller</h1>

                <div className='heading-underline'></div>
                <p className='agency-description'>
                Nobody wants to read a boring wall of text. In fact, most people only retain 10% of the information they receive through text, whereas incorporating visuals can improve retention by up to 65%. On top of that, an article with images will garner up to 94% more views than one without them.</p>
                <p className='agency-description'>
                So if you’re looking to publish a successful marketing campaign, these statistics should remind you why photography and videography are the best tools for engaging your audience.</p>

                <div className="logoAndBrand-btn-parent">
                    <Button className="logoAndBrand-btn" >BOOK A FREE CONSULTATION
                    </Button>
                </div>
            </Container>
        </div>
    )
}

export default Services