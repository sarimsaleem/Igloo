import React from 'react'
import Carousel from './carousel/Carousel'
import DigitalMarkeringAgency from './digitalMarkeringAgency/DigitalMarkeringAgency'
import SuperChargeYourExperiance from './superChargeYourExperiance/SuperChargeYourExperiance'
import CaseStudy from './caseStudy/CaseStudy'
import DigitalMarketingServices from './digitalMarketingServices/DigitalMarketingServices'
import LastInsight from '../../pages/logo and brand guidelines/lastInsight/LastInsight'
import Faqs from '../../pages/logo and brand guidelines/faqs/Faqs'
import StillHaveQuestion from '../../pages/branding/stillHaveQuestion/StillHaveQuestion'
import Bounce from '../../pages/home/bounce/Bounce'
import DigitalChannels from './digitalChannels/DigitalChannels'
import BookConsultation from '../../pages/home/bookConsultation/BookConsultation'

const DigitalMarketing = () => {
  return (
    <>
      <Carousel />
      <DigitalMarkeringAgency />
      <SuperChargeYourExperiance />
      <CaseStudy />
      <DigitalMarketingServices />
      <DigitalChannels/>
      <StillHaveQuestion />
      <Bounce />
      <BookConsultation />
      <Faqs />
      <LastInsight />
    </>
  )
}

export default DigitalMarketing