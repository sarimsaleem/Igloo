import React from 'react'
import Carousel from './carousel/Carousel'
import AwardWinningSeo from './awardWinningSeo/AwardWinningSeo'
import BusinessSuccess from './businessSuccess/BusinessSuccess'
import IncreaseTraffic from './increaseTraffic/IncreaseTraffic'
import OurClients from '../../socialMedia/socialMediaMangement/ourClients/OurClients'
import CaseStudy from './caseStudy/CaseStudy'
import LastInsight from '../../pages/logo and brand guidelines/lastInsight/LastInsight'
import BookConsultation from '../../pages/home/bookConsultation/BookConsultation'
import Bounce from '../../pages/home/bounce/Bounce'
import StillHaveAQuestion from './stillHaveAQuestion/StillHaveAQuestion'
import OurServices from './ourServices/OurServices'
import Faqs from './faqs/FAQs'

const SEOs = () => {
  return (
    <div>
      <Carousel />
      <AwardWinningSeo />
      <BusinessSuccess />
      <IncreaseTraffic />
      <OurClients />   
      <CaseStudy />
      <OurServices />
      <StillHaveAQuestion />
      <Bounce />
      <BookConsultation />
      <Faqs />
      <LastInsight />
    </div>
  )
}

export default SEOs