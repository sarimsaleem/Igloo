import React from 'react'
import Carousel from "./carousel/Carousel"
import ContentMarketingAgency from './contentMarketingAgency/ContentMarketingAgency'
// import KeyComponentCreation from './keyComponentCreation/KeyComponentCreation'
import OurClients from './ourClients/OurClients'
import ContentMaintenanceServices from './contentMaintenanceServices/ContentMaintenanceServices'
import LastInsight from '../../pages/logo and brand guidelines/lastInsight/LastInsight'
import Faqs from '../../pages/logo and brand guidelines/faqs/Faqs'
import BookConsultation from '../../pages/home/bookConsultation/BookConsultation'
import Bounce from '../../pages/home/bounce/Bounce'
import StillHaveAQuestion from './stillHaveAQuestion/StillHaveAQuestion'
const ContentCreationMaintenance = () => {
  return (
    <>
      <Carousel />
      <ContentMarketingAgency />
      <KeyComponentCreation />
      <OurClients />
      <ContentMaintenanceServices />
      <StillHaveAQuestion /> 
      <Bounce />
      <BookConsultation />
      <Faqs />
      <LastInsight />
    </>
  )
}

export default ContentCreationMaintenance