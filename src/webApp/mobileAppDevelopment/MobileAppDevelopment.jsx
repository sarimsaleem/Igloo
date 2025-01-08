import React from 'react'
import Carousel from './carousel/Carousel'
import MobileAppDesign from './mobileAppDesign/Index'
import Portfolio from '../webDesignDevelopment/portfolio/Portfolio'
import MobileAppVerticals from './mobileAppVerticals/index'

const MobileAppDevelopment = () => (
  <div>
    <Carousel />
    <MobileAppDesign />
    <Portfolio />
    <MobileAppVerticals />
  </div>
)

export default MobileAppDevelopment