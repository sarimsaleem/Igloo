import React from 'react'
import Carousel from './carousel/Carousel'
import SocialMediaAgency from './socialMediaAgency/SocialMediaAgency'
import ComprehenciveSocialMedia from './comprehenciveSocialMedia/ComprehenciveSocialMedia'
import ProvenExpertise from './provenExpertise/ProvenExpertise'
import Bounce from '../../pages/home/bounce/Bounce'
import OurClients from './ourClients/OurClients'
import ExpertiseAccrossPlatforms from './expertiseAccrossPlatforms/ExpertiseAccrossPlatforms'
import LastInsight from '../../pages/logo and brand guidelines/lastInsight/LastInsight'
import BookConsultation from '../../pages/home/bookConsultation/BookConsultation'
import StillHaveAQuestion from './stillHaveAQuestion/StillHaveAQuestion'
import Faqs from './faqs/Faqs'
import Portfolio from './portfolio/Portfolio'

const SocialMediaManegement = () => {
    return (
        <div>
            <Carousel />
            <SocialMediaAgency />
            <ComprehenciveSocialMedia />
            <ProvenExpertise />
            <Bounce />
            <OurClients />
            <ExpertiseAccrossPlatforms />
            <Portfolio />
            <StillHaveAQuestion />
            <BookConsultation />
            <Faqs />
            <LastInsight />

        </div>
    )
}

export default SocialMediaManegement