import React from 'react'
import Carousel from './carousel/Carousel'
import Services from './services/Services'
import Portfolio from '../../mediaBuying/facebookAdds/portfolio/Portfolio'
import ImpactOfPhoto from './impactOfPhoto/ImpactOfPhoto'
import CreativeVision from './creativeVision/CreativeVision'
import OurClients from '../../webApp/webDesignDevelopment/ourClients/OurClients'
import PhotographyAndVideoServices from './photographyAndVideoServices/PhotographyAndVideoServices'
import Bounce from '../../pages/home/bounce/Bounce'
import BookConsultation from '../../pages/home/bookConsultation/BookConsultation'
import Faqs from '../../pages/logo and brand guidelines/faqs/Faqs'
import LastInsight from '../../pages/logo and brand guidelines/lastInsight/LastInsight'
import StillHaveAQuestion from '../../digitalMarketing/contentCreationMaintenance/stillHaveAQuestion/StillHaveAQuestion'

const PhotographyVideograpy = () => {
    return (
        <div>
            <Carousel />
            <Services />
            <Portfolio />
            <ImpactOfPhoto />
            <CreativeVision />
            <OurClients />
            <PhotographyAndVideoServices />
            <StillHaveAQuestion />
            <Bounce />
            <BookConsultation />
            <Faqs />
            <LastInsight />
        </div>
    )
}

export default PhotographyVideograpy