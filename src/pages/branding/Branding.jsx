import React from 'react'
import Crousel from './crousel/Crousel'
import MarketingAgency from './marketingAgency/MarketingAgency'
import Bounce from '../home/bounce/Bounce'
import BookConsultation from '../home/bookConsultation/BookConsultation'
import Portfolio from './portfolio/Portfolio'
import BrandingAgencyChoose from './brandingAgencyChoose/BrandingAgencyChoose'
import BrandingServices from './brandingServices/BrandingServices'
import StillHaveQuestion from './stillHaveQuestion/StillHaveQuestion'
const Branding = () => {
    return (
        <>
            <Crousel />
            <MarketingAgency />
            <Portfolio />
            <BrandingAgencyChoose />
            <BrandingServices /> 
            <StillHaveQuestion />
            <Bounce />
            <BookConsultation />

        </>
    )
}

export default Branding