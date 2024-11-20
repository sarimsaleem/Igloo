import React from 'react'
import Bounce from '../home/bounce/Bounce'
import BookConsultation from '../home/bookConsultation/BookConsultation'
import StillHaveQuestion from '../branding/stillHaveQuestion/StillHaveQuestion'
import Crousel from "./crousel/Crousel"
import LogoAnaBrandGuide from './logoAndBrandGuide/LogoAnaBrandGuide'
const LogoAndBrand = () => {
  return (
    <>
        <Crousel />
        <LogoAnaBrandGuide />
        

        <StillHaveQuestion />
        <Bounce />
        <BookConsultation />
    </>
)
}

export default LogoAndBrand