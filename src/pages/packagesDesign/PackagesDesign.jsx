import React from 'react'
import Carousel from './Crousel/Carousel'
import BrandingAndProduction from './brandingAndProduction/BrandingAndProduction'
import Portfolio from './Portfolio/Portfolio'
import DesignedPackaging from './designedPackaging/DesignedPackaging'
import StillHaveQuestion from '../branding/stillHaveQuestion/StillHaveQuestion'
import GetNotice from '../logo and brand guidelines/getNotice/GetNotice'
import BrandGuidelines from './brandGuidelines/BrandGuidelines'
import LastInsight from '../logo and brand guidelines/lastInsight/LastInsight'
import Faqs from '../logo and brand guidelines/faqs/Faqs'

const PackagesDesign = () => {
  return (
    <>
        <Carousel />
        <BrandingAndProduction />
        <Portfolio />
        <DesignedPackaging />
        <GetNotice />
        <BrandGuidelines />
        <StillHaveQuestion />
        <Faqs/>
        <LastInsight />
    </>
)
}

export default PackagesDesign