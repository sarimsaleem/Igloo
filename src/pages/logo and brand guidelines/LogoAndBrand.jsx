import React from 'react'
import Bounce from '../home/bounce/Bounce'
import BookConsultation from '../home/bookConsultation/BookConsultation'
import StillHaveQuestion from '../branding/stillHaveQuestion/StillHaveQuestion'
import Crousel from "./crousel/Crousel"
import LogoAnaBrandGuide from './logoAndBrandGuide/LogoAnaBrandGuide'
import Portfolio from './portfolio/Portfolio'
import BrandQuidesMatter from './brandQuidesMatter/BrandQuidesMatter'
import GetNotice from './getNotice/GetNotice'
const LogoAndBrand = () => {
  return (
    <>
        <Crousel />
        <LogoAnaBrandGuide />
        <Portfolio />
        <BrandQuidesMatter />

        <GetNotice />
        {/* <StillHaveQuestion /> */}
        <Bounce />
        <BookConsultation />
    </>
)
}

export default LogoAndBrand