import React from 'react'
import "./brandingndproduction.css"
import { Button } from 'react-bootstrap'
const BrandingAndProduction = () => {
    return (
        <>
            <div className='brandingndproduction' style={{paddingBlock: "30px"}}>
                <div className='logoAndBrand'>
                    <h1 className='agency-heading'>Branding and Production | Packaging Design <br /> Services</h1>
                    <div className='heading-underline'></div>
                    <p className='agency-description'>
                        It’s often said that you shouldn’t judge a book by its cover—but in studying consumers for the past few years, we’ve learned that this isn’t usually the case. Your target market is most certainly judging their options based on first impressions, which is why we at Igloo are here to help you maximize your profits and brand equity through clever and unforgettable designs.</p>
                        <p className='agency-description'>
                        If you’re looking to win over your market with stellar packaging that speaks volumes about the quality of your product, contact us today.</p>
                </div>
                <div className='logoAndBrand'>
                    <h1 className='agency-heading'>Catch Eyes with the Right Product Packaging</h1>
                    <div className='heading-underline'></div>
                    <p className='agency-description'>
                    If you thought product and performance were the most critical aspects of your brand, think again. Add packaging to that list, and you could influence at least <b> 72% of consumers’ buying decisions! </b></p>
                    <p className='agency-description'>
                    Want to be part of the 30% of businesses that report increases in revenue thanks to intelligent packaging design? Then it’s time to invest in better packaging design.</p>
                </div>
                <div className="logoAndBrand-btn-parent">
                <Button className="logoAndBrand-btn" >BOOK A FREE CONSULTATION</Button>
            </div>
            </div>
            
        </>
    )
}

export default BrandingAndProduction