import React from 'react'
import Carousel from "./carousel/Carosel"
import Porfolio from '../communityManagement/porfolio/Porfolio'
import OurClients from '../socialMediaMangement/ourClients/OurClients'
import StillHaveAQuestion from '../socialMediaMangement/stillHaveAQuestion/StillHaveAQuestion'
import Bounce from '../../pages/home/bounce/Bounce'
import BookConsultation from '../../pages/home/bookConsultation/BookConsultation'
import Faqs from '../communityManagement/faqs/Faqs'
import LastInsight from '../../pages/logo and brand guidelines/lastInsight/LastInsight'
import ContentMarketing from './contentMarketing/ContentMarketing'
import Perks from './perks/Perks'
import BrandAmbasator from './brandAmbasator/BrandAmbasator'
import OurServices from './ourServices/OurServices'
const InfluencerMarketing = () => {
    return (
        <div>
            <Carousel />
            <ContentMarketing />
            <Porfolio />
            <Perks />
            <BrandAmbasator />
            <OurClients />
            <OurServices />
            <StillHaveAQuestion />
            <Bounce />
            <BookConsultation />
            <Faqs />
            <LastInsight />
        </div>
    )
}

export default InfluencerMarketing