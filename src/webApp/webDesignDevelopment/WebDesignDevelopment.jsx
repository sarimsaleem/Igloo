import React from 'react'
import Carousel from './carousel/Carousel'
import WebDesign from './webDesign/WebDesign'
import AdvantageOfCustomWeb from './advantageOfCustomWeb/AdvantageOfCustomWeb'
import BrandEngaging from './brandEngaging/BrandEngaging'
import OurClients from './ourClients/OurClients'
import Porfolio from './porfolio/Porfolio'
import ApplicationServices from './applicationServices/ApplicationServices'
import Bounce from '../../pages/home/bounce/Bounce'
import BookConsultation from '../../pages/home/bookConsultation/BookConsultation'
import Faqs from '../../pages/logo and brand guidelines/faqs/Faqs'
import LastInsight from '../../pages/logo and brand guidelines/lastInsight/LastInsight'
import StillHaveAQuestion from '../../digitalMarketing/contentCreationMaintenance/stillHaveAQuestion/StillHaveAQuestion'

const WebDesignDevelopment = () => {
  return (
    <>
      <Carousel />
      <WebDesign />
      <AdvantageOfCustomWeb />
      <BrandEngaging />
      <OurClients />
      <Porfolio />
      <ApplicationServices />
      <StillHaveAQuestion />
      <Bounce />
      <BookConsultation />
      <Faqs />
      <LastInsight />
    </>
  )
}

export default WebDesignDevelopment