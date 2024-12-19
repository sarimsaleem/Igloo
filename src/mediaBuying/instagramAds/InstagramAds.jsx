import React from 'react'
import Carousel from './carousel/Carousel'
import InstagramAdds from './instagramAdds/InstagramAdds'
import Portfolio from './portfolio/Portfolio'
import Advertise from './advertise/Advertise'
import OurClients from '../../socialMedia/socialMediaMangement/ourClients/OurClients'
import IncreaseConversions from './increaseConversions/IncreaseConversions'
import InstagrarmAdMangement from './instagrarmAdMangement/InstagrarmAdMangement'
import StillHaveAQuestion from '../../socialMedia/socialMediaMangement/stillHaveAQuestion/StillHaveAQuestion'
import Bounce from '../../pages/home/bounce/Bounce'
import BookConsultation from '../../pages/home/bookConsultation/BookConsultation'
import Faqs from './faqs/Faqs'
import LastInsight from '../../pages/logo and brand guidelines/lastInsight/LastInsight'

const InstagramAds = () => {
  return (
    <div>
      <Carousel />
      <InstagramAdds />
      <Portfolio />
      <Advertise />
      <IncreaseConversions />
      <OurClients />
      <InstagrarmAdMangement />
      <StillHaveAQuestion />
      <Bounce />
      <BookConsultation />
      <Faqs />
      <LastInsight />
    </div>
  )
}

export default InstagramAds