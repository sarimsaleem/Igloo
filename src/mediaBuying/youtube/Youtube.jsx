import React from 'react'
import Carousel from './carousel/Carousel'
import YoutubeAds from './youtubeAds/YoutubeAds'
import Portfolio from '../facebookAdds/portfolio/Portfolio'
import WhyChooseYoutube from './whyChooseYoutube/WhyChooseYoutube'
import Discover from './discover/Discover'
import OurClients from '../../socialMedia/socialMediaMangement/ourClients/OurClients'
import YoutubeManagement from './youtubeManagement/YoutubeManagement'
import StillHaveAQuestion from '../../socialMedia/socialMediaMangement/stillHaveAQuestion/StillHaveAQuestion'
import Bounce from '../../pages/home/bounce/Bounce'
import BookConsultation from '../../pages/home/bookConsultation/BookConsultation'
import Faqs from '../instagramAds/faqs/Faqs'
import LastInsight from '../../pages/logo and brand guidelines/lastInsight/LastInsight'

function Youtube() {
  return (
    <div>
      <Carousel />
      <YoutubeAds />
      <Portfolio />
      <WhyChooseYoutube />
      <Discover />
      <OurClients />
      <YoutubeManagement />
      <StillHaveAQuestion />
      <Bounce />
      <BookConsultation />
      <Faqs />
      <LastInsight />
    </div>
  )
}

export default Youtube