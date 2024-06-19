import React from 'react'
import Hero from '../components/hero/hero'
import Popular from '../components/Popular/Popular'
import Populars from '../components/Populars/Populars'
import Offers from '../components/Offers/Offers'
import Newcollections from '../components/Newcollections/Newcollections'
import Newsletter from '../components/Newsletter/Newsletter'
import Carousel from '../components/Carousel/Carousel'
import Carousel2 from '../components/Carousel2/Carousel2'
const Shop = () => {
  return (
    <div>
      <Carousel2/>
      <Hero/>
      <Carousel/>
      <Popular/>
      <Offers/>
      <Newcollections/>
      <Newsletter/>
      <Populars/>
    </div>
  )
}

export default Shop
