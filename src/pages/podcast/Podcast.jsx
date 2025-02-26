import React from 'react'
import "./podcast.css"
import Carousel from '../../components/carousel/Carousel'

const Podcast = () => {
  return (
    <>
      <Carousel
        heading="Masters of marketing podcast"
        breadcrumb="Home | Masters of marketing podcast"
        imageUrl="podcastCarousel.jpg"
        textColor="var(--white)"
      />
    </>
  )
}

export default Podcast