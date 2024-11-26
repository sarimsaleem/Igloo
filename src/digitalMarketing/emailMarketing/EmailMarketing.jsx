import React from 'react'
import LifeCycleMarketing from './lifeCycleMarketing/LifeCycleMarketing'
import Carousel from "./carousel/Carousel"
import EmailMarketingRelevant from './emailMarketingRelevant/EmailMarketingRelevant'
import MarketingStratigies from './marketingStratigies/MarketingStratigies'
import EmailMarketingServices from './emailMarketingServices/EmailMarketingServices'
import StillHaveAQuestion from '../marketingAutomation/stillHaveAQuestion/StillHaveAQuestion'
import Bounce from '../../pages/home/bounce/Bounce'
import BookConsultation from '../../pages/home/bookConsultation/BookConsultation'
import Faqs from '../../pages/logo and brand guidelines/faqs/Faqs'
import LastInsight from '../../pages/logo and brand guidelines/lastInsight/LastInsight'
const EmailMarketing = () => {
  return (
    <>
      <Carousel />
      <LifeCycleMarketing />
      <EmailMarketingRelevant />
      <MarketingStratigies />
      <EmailMarketingServices />
      <StillHaveAQuestion />
      <Bounce />
      <BookConsultation />
      <Faqs />
      <LastInsight />
    </>
  )
}

export default EmailMarketing