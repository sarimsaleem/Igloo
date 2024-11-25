import React from 'react'
import Carousel from "./carousel/Carousel"
import LifecycleAutomation from './lifecycleAutomation/LifecycleAutomation'
import MarketingAutomationMatter from './marketingAutomation/MarketingAutomationMatter'
import GetAhead from './getAhead/GetAhead'
import AutomationServices from './automationServices/AutomationServices'
import StillHaveAQuestion from './stillHaveAQuestion/StillHaveAQuestion'
import Bounce from '../../pages/home/bounce/Bounce'
import BookConsultation from '../../pages/home/bookConsultation/BookConsultation'
import Faqs from '../../pages/logo and brand guidelines/faqs/Faqs'
import LastInsight from '../../pages/logo and brand guidelines/lastInsight/LastInsight'
const MarketingAutomation = () => {
    return (
        <div>
            <Carousel />
            <LifecycleAutomation />
            <MarketingAutomationMatter />
            <GetAhead />
            <AutomationServices />
            <StillHaveAQuestion />
            <Bounce />
            <BookConsultation />
            <Faqs />
            <LastInsight />
        </div>
    )
}

export default MarketingAutomation