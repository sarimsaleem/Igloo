import React from 'react'
import Carousel from './carousel/Carousel'
import CommunityManagemenetAgency from './communityManagemenetAgency/CommunityManagemenetAgency'
import Porfolio from './porfolio/Porfolio'
import KeyComponents from './keyComponents/KeyComponents'
import ProvenExpertise from '../socialMediaMangement/provenExpertise/ProvenExpertise'
import Bounce from '../../pages/home/bounce/Bounce'
import OurClients from '../socialMediaMangement/ourClients/OurClients'
import StillHaveAQuestion from '../socialMediaMangement/stillHaveAQuestion/StillHaveAQuestion'
import LastInsight from '../../pages/logo and brand guidelines/lastInsight/LastInsight'
import BookConsultation from '../../pages/home/bookConsultation/BookConsultation'
import BuildACommunity from './buildACommunity/BuildACommunity'
import CommunityManagementServices from './communityManagementServices/CommunityManagementServices'
import Faqs from './faqs/Faqs'

const CommunityManagement = () => {
  return (
    <div>
        <Carousel />
        <CommunityManagemenetAgency />
        <Porfolio />
        <KeyComponents />
        <BuildACommunity />
        <OurClients />
        <CommunityManagementServices />
        <StillHaveAQuestion />
        <Bounce />
        <BookConsultation />
        <Faqs />
        <LastInsight />
    </div>
  )
}

export default CommunityManagement