import React from 'react'
import LastInsight from '../../pages/logo and brand guidelines/lastInsight/LastInsight'
import Faqs from '../../pages/logo and brand guidelines/faqs/Faqs'
import StillHaveQuestion from '../../pages/branding/stillHaveQuestion/StillHaveQuestion'
import Bounce from '../../pages/home/bounce/Bounce'
import Carosel from './Carousel/Carosel'
import CompetetiveDetail from './competetiveDetail/CompetetiveDetail'
import SuperChargeYourExperiance from '../digitalMarketing/superChargeYourExperiance/SuperChargeYourExperiance'
import BookConsultation from './bookConsultation/BookConsultation'
import PerformCompetetiveAnalysis from './performCompetetiveAnalysis/PerformCompetetiveAnalysis'
const CompetetiveAnalysis = () => {
    return (
        <div>
            <Carosel />
            <CompetetiveDetail/>
            <PerformCompetetiveAnalysis />
            <SuperChargeYourExperiance />
            <StillHaveQuestion />
            <Bounce />
            <BookConsultation />
            <Faqs />
            <LastInsight />
        </div>
    )
}

export default CompetetiveAnalysis