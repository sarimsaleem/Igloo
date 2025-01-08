import React from 'react'
import { Button, Container } from 'react-bootstrap'
const AwardWinningSeo = () => {
  return (
    <div>
      <Container>
        <h1 className='agency-heading' style={{ marginTop: "40px" }}>AWARD-WINNING SEO AGENCY</h1>
        <div className='heading-underline'></div>
        <p className='agency-description'>
        Google accounts for 93% of all global traffic, which means if you aren’t ranking, your business is already falling behind. Regardless of the company’s products and services, potential customers are already looking for similar solutions online. If you want to stand out amongst competitors and direct traffic to your website, working with the right SEO Agency might be the answer.</p>
        <p className='agency-description'>
        At Igloo, search engine optimization is just one of the marketing solutions we use to enhance your digital presence and improve your bottom line. Because search engines constantly change, we ensure that our solutions can keep up.</p>
        <div className="logoAndBrand-btn-parent">
          <Button className="logoAndBrand-btn" >BOOK A FREE CONSULTATION
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default AwardWinningSeo