import React from 'react'
import Carousel from './carousel/Carousel'
import LinkDinAdds from './linkdinAds/LinkDinAdds'
import Portfolio from '../facebookAdds/portfolio/Portfolio'
import CustomerExperiance from './customerExperiance/CustomerExperiance'
import BestInBuiness from './bestInBuiness/BestInBuiness'
import OurClients from '../../socialMedia/socialMediaMangement/ourClients/OurClients'
import LinkdinAdManagement from './linkdinAdManagement/LinkdinAdManagement'
import StillHaveAQuestion from '../../socialMedia/socialMediaMangement/stillHaveAQuestion/StillHaveAQuestion'
import Bounce from '../../pages/home/bounce/Bounce'
import BookConsultation from '../../pages/home/bookConsultation/BookConsultation'
import Faqs from '../instagramAds/faqs/Faqs'
import LastInsight from '../../pages/logo and brand guidelines/lastInsight/LastInsight'

const Linkdin = () => {
  return (
    <div>
      <Carousel />
      <LinkDinAdds />
      <Portfolio />
      <CustomerExperiance />
      <BestInBuiness />
      <OurClients />
      <LinkdinAdManagement />
      <StillHaveAQuestion />
      <Bounce />
      <BookConsultation />
      <Faqs />
      <LastInsight />
    </div>
  )
}

export default Linkdin