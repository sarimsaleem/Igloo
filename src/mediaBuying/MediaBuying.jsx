import React from 'react'
import Carousel from './carousel/Carousel'
import PPCAgency from './ppcAgency/PPCAgency'
import WhyInvestInPPC from './whyInvestInPPC/WhyInvestInPPC'
import AccelerateBusiness from './accelerateBusiness/AccelerateBusiness'
import OurClients from '../socialMedia/socialMediaMangement/ourClients/OurClients'
import CaseStudy from './caseStudy/Casetudy'
import OurServices from './ourServices/OurServices'
import StillHaveAQuestion from '../socialMedia/socialMediaMangement/stillHaveAQuestion/StillHaveAQuestion'
import Bounce from '../pages/home/bounce/Bounce'
import BookConsultation from '../pages/home/bookConsultation/BookConsultation'
import Faqs from './faqs/FAQS'
import LastInsight from '../pages/logo and brand guidelines/lastInsight/LastInsight'

const MediaBuying = () => {
    return (
        <div>
            <Carousel />
            <PPCAgency />
            <WhyInvestInPPC />
            <AccelerateBusiness />
            <OurClients />
            <CaseStudy />
            <OurServices />
            <StillHaveAQuestion />
            <Bounce />
            <BookConsultation />
            <Faqs />
            <LastInsight />
        </div>
    )
}

export default MediaBuying