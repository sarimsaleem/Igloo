import React from 'react'
import DigitalMarketing from './digitalMarketing/DigitalMarketing'
import OurProcess from './ourProcess/OurProcess'
// import Featured from './featurerd/Featured'
import LatestWork from './latestWork/LatestWork'
import OurServices from './ourServices/OurServices'
import LeaderShip from './leadership/LeaderShip'
import Bounce from './bounce/Bounce'
import OurClients from './ourClients/OurClients'
import BookConsultation from './bookConsultation/BookConsultation'
import Banner from '../../components/banner/Banner'
import CaseStudy from './caseStudy/CaseStudy'

const Home = () => {
    return (
        <>
            <Banner />
            <DigitalMarketing />
            <OurProcess />
            {/* <Featured /> */}
            <LatestWork />
            <OurServices />
            <LeaderShip />
            <CaseStudy />  
            <Bounce />
            <OurClients />
            <BookConsultation />
        </>
    )
}


export default Home