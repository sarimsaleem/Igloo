import React from 'react'
import Carousel from './carousel/Carousel'
import ConversionRate from './conversionRate/ConversionRate'
import CroServices from './croServices/croServices'
import WebsideConversion from './websiteConveversion/WebsideConversion'
import OurClients from '../../socialMedia/socialMediaMangement/ourClients/OurClients'
import Bounce from '../../pages/home/bounce/Bounce'
import BookConsultation from '../../pages/home/bookConsultation/BookConsultation'
import LastInsight from '../../pages/logo and brand guidelines/lastInsight/LastInsight'
import StillHaveAQuestion from '../../digitalMarketing/contentCreationMaintenance/stillHaveAQuestion/StillHaveAQuestion'
import OptimizationServices from './optimizationServices/OptimizationServices'

const Cro = () => {
    return (
        <div>
            <Carousel />
            <ConversionRate />
            <CroServices />
            <WebsideConversion />
            <OurClients />
            <OptimizationServices />
            <StillHaveAQuestion />
            <Bounce />
            <BookConsultation />
            <LastInsight />
        </div>
    )
}

export default Cro