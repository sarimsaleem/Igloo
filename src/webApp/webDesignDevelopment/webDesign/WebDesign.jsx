import React from 'react'
import "./webdesign.css"
import { Button, Container } from 'react-bootstrap'
const WebDesign = () => {

    return (
        <div>
            <Container>
                <h1 className='agency-heading' style={{ marginTop: "40px" }}>Web Design Agency</h1>
                <div className='heading-underline'></div>
                <p className='agency-description'>
                If you’ve ever heard the term “there’s an app for that,” you’ll know the importance of having web applications as part of your business. While most people associate the word “app” with a mobile application, many online users still prefer web-based applications.</p>
                <p className='agency-description'>
                With over 65% of people preferring dynamic and interactive web pages over plain sites, prioritizing web design can make or break your success. If you want to increase website accessibility and provide a seamless user experience for site visitors, Igloo has comprehensive web and app development services that can provide impactful solutions.</p>
                <div className="logoAndBrand-btn-parent">
                    <Button className="logoAndBrand-btn" >BOOK A FREE CONSULTATION
                    </Button>
                </div>
            </Container>
        </div>
    )
}

export default WebDesign