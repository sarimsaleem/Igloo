import React from 'react'
import Carousel from '../ppc/carousel/Carousel'
import PPCAgency from '../ppc/ppcAgency/PPCAgency'
import WhyInvestInPPC from '../ppc/whyInvestInPPC/WhyInvestInPPC'
import AccelerateBusiness from '../ppc/accelerateBusiness/AccelerateBusiness'
import OurClients from '../../socialMedia/socialMediaMangement/ourClients/OurClients'
import CaseStudy from '../ppc/caseStudy/Casetudy'
import OurServices from '../ppc/ourServices/OurServices'
import StillHaveAQuestion from '../../socialMedia/socialMediaMangement/stillHaveAQuestion/StillHaveAQuestion'
import Bounce from '../../pages/home/bounce/Bounce'
import BookConsultation from '../../pages/home/bookConsultation/BookConsultation'
import Faqs from '../ppc/faqs/FAQS'
import LastInsight from '../../pages/logo and brand guidelines/lastInsight/LastInsight'

const PPCs = () => {
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

export default PPCs