import React from 'react'
import Carousel from './carousel/Carousel'
import MarketingInsights from './marketingInsights/MarketingInsights'
import MarketingAnalytics from './marketingAnalytics/MarketingAnalytics'
import AccurateBussiness from './accurateBussiness/AccurateBussiness'
import OurServices from './ourServices/OurServices'
import Faqs from '../ppc/faqs/FAQS'
import LastInsight from '../../pages/logo and brand guidelines/lastInsight/LastInsight'
import BookConsultation from '../../pages/home/bookConsultation/BookConsultation'
const InsightsAnalytics = () => {
  return (
    <div>
        <Carousel />
        <MarketingInsights />
        <MarketingAnalytics />
        <AccurateBussiness /> 
        <OurServices />
        <BookConsultation />
        <Faqs />
        <LastInsight />
    </div>
  )
}

export default InsightsAnalytics