import React from 'react'
import "./logoanabrandguide.css"
import { Button } from 'react-bootstrap'
const LogoAnaBrandGuide = () => {
    return (
        <>
            <div className='logoAndBrand'>
                <h1 className='agency-heading'>Logo and Brand Guidelines</h1>
                <div className='heading-underline'></div>
                <p className='agency-description'>
                    Cultivating brand recognition involves being cohesive, recognizable, and memorable. From your social media accounts to your primary website and offline presence, every element has to come together. With the help of our design experts at Igloo, you can develop a brand guide that improves credibility and streamlines your processes.</p>
                <p className='agency-description'>
                    Contact us today if building brand guidelines is on your list of things to do—we can help empower your team and tell your story effectively.</p>
            </div>
            <div className='logoAndBrand'>
                <h1 className='agency-heading'>Be Consistent, Be Remembered</h1>
                <div className='heading-underline'></div>
                <p className='agency-description'>
                It can take between five and seven impressions for a consumer to remember your brand, so if consistent isn’t a word you’d use to describe your business, it may need a makeover!</p>
                <p className='agency-description'>
                Choosing the right colors alone can <b> improve brand recognition by up to 80%,</b> so if you aren’t already crafting your brand guide, now is the best time to do so.</p>
            </div>


            <div className='logoAndBrand'>
                <h1 className='agency-heading'>What’s in a Logo?</h1>
                <div className='heading-underline'></div>
                <p className='agency-description'>
                One of the most defining aspects of a brand is its logo. Logos are intended to be attention-grabbing and make a strong first impression. At Igloo, we create logos that define your brand identity and separate you from the rest.</p>
                <p className='agency-description'>
                When developing a logo, we consider everything from color choices to brand psychology. Our logos don’t just satisfy internet appeal—they also further your marketing efforts and define your business.</p>
            </div>

            <div className="logoAndBrand-btn-parent">
                <Button className="logoAndBrand-btn" >BOOK A FREE CONSULTATION</Button>
            </div>
        </>
    )
}

export default LogoAnaBrandGuide