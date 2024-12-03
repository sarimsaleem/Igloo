import React from 'react'
import Carousel from './carousel/Carousel'
import LeadgenerationAgency from './leadgenerationAgency/LeadgenerationAgency'
import LeadGenerationBusiness from './leadGenerationBusiness/LeadGenerationBusiness'
import ConectLeads from './conectLeads/ConectLeads'
import OurClients from '../../socialMedia/socialMediaMangement/ourClients/OurClients'
import GenerationServices from './generationServices/GenerationServices'
import StillHaveAQuestion from '../../socialMedia/socialMediaMangement/stillHaveAQuestion/StillHaveAQuestion'
import Bounce from '../../pages/home/bounce/Bounce'
import BookConsultation from '../../pages/home/bookConsultation/BookConsultation'
import Faqs from '../ppc/faqs/FAQS'
import LastInsight from '../../pages/logo and brand guidelines/lastInsight/LastInsight'

const LeadGeneration = () => {
  return (
    <div>
      <Carousel />
      <LeadgenerationAgency />
      <LeadGenerationBusiness />
      <ConectLeads />
      <OurClients />
      <GenerationServices />
      <StillHaveAQuestion />
      <Bounce />
      <BookConsultation />
      <Faqs />
      <LastInsight />
    </div>
  )
}

export default LeadGeneration