import React from 'react'
import Carousel from './carousel/Carousel'
import FacebookAds from './facebookAds/FacebookAds'
import Portfolio from './portfolio/Portfolio'
import OurClients from '../../socialMedia/socialMediaMangement/ourClients/OurClients'
import Bounce from '../../pages/home/bounce/Bounce'
import BookConsultation from '../../pages/home/bookConsultation/BookConsultation'
import Faqs from '../ppc/faqs/FAQS'
import LastInsight from '../../pages/logo and brand guidelines/lastInsight/LastInsight'
import StillHaveAQuestion from '../../socialMedia/socialMediaMangement/stillHaveAQuestion/StillHaveAQuestion'
import BeSeen from './beSeen/BeSeen'
import FacebookAdManagement from './facebookAdManagement/FacebookAdManagement'
const FacebookAdds = () => {
  return (
    <>
      <Carousel />
      <FacebookAds />
      <Portfolio />
      <FacebookAdManagement />
      <BeSeen />
      <OurClients />
      <StillHaveAQuestion />
      <Bounce />
      <BookConsultation />
      <Faqs />
      <LastInsight />
    </>
  )
}

export default FacebookAdds