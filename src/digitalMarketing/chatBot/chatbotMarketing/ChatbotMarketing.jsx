import React from 'react'
import "./chatbotmarketing.css"
import { Button, Container } from 'react-bootstrap'

const ChatbotMarketing = () => {
    return (
        <div>
            <Container>
                <h1 className='agency-heading' style={{ marginTop: "40px" }}>Lifecycle Marketing | Chatbots and Live Chat</h1>
                <div className='heading-underline'></div>
                <p className='agency-description'>
                    Nowadays, customers aren’t just looking for a high-quality product or service—they’re also after the experience behind it. If your website isn’t converting as many leads as it can, perhaps you’re missing a vital consumer journey element: The Chatbot.</p>
                <p className='agency-description'>
                    At Igloo, we are proud to be well-versed in the most advanced artificial intelligence systems that can significantly impact how users experience your website. If you want to incorporate digital assistance into your website, contact us to learn more about how we build chatbots for our clients.</p>
                <div className="logoAndBrand-btn-parent">
                    <Button className="logoAndBrand-btn" >BOOK A FREE CONSULTATION
                    </Button>
                </div>
            </Container>
        </div>
    )
}

export default ChatbotMarketing