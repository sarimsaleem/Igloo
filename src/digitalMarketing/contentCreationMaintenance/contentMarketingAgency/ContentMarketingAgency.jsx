import React from 'react'
import { Button, Container } from 'react-bootstrap'

const ContentMarketingAgency = () => {
  return (
    <div>
      <Container>
        <h1 className='agency-heading' style={{ marginTop: "40px" }}>Content Marketing Agency</h1>
        <div className='heading-underline'></div>
        <p className='agency-description'>
        Content creation is an organic traffic driver that can help your business garner the leads it’s looking for. By partnering up with the right marketing agency—us—you can become a go-to for quality content that keeps your brand voice fresh and active.</p>
        <p className='agency-description'>
        At Igloo, we promise click and share-worthy content for businesses from every industry. Book a consultation with us today to develop a content plan that drives and converts!</p>

        <h1 className='agency-heading' style={{ marginTop: "40px" }}>GIVE YOUR BRAND A BOOST WITH THE RIGHT CONTENT</h1>
        <div className='heading-underline'></div>
        <p className='agency-description'>
        Nowadays, at least <b> 82% of businesses utilize content creation strategies,</b> proving its obvious success as a marketing effort. With our help, you can reach the right people, build brand awareness, increase traffic on your website, and gain qualified leads.</p>
        <div className="logoAndBrand-btn-parent">
          <Button className="logoAndBrand-btn" >BOOK A FREE CONSULTATION
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default ContentMarketingAgency