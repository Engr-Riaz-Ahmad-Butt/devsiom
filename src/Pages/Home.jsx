import React from 'react'
import BannerCarousel from '../Components/BannerCarousel/BannerCarousel'
import About from '../Components/About/About'
import WhatWeDo from '../Components/WhatWeDo/WhatWeDo'
import Transformation from '../Components/Transformation/Transformation'
import ProcessWeFollow from '../Components/ProcessWeFollow/ProcessWeFollow'
import TechAndBusiness from '../Components/Technology & Business/TechAndBusiness'
import WhoWeWorkWith from '../Components/WhoWeWorkWith/WhoWeWorkWith'
import Products from '../Components/Products/Products'
import Industries from '../Components/Industries/Industries'
import ReviewCarouselItemParent from '../Components/ReviewCarouselItem/ReviewCarouselItemParent'
import StatsDisplay from '../Components/StatsDisplay/StatsDisplay'
import Clients from '../Components/Clients/Clients'

const Home = () => {
  return (
    <div>
      <div style={{ background: 'linear-gradient(90.16deg, #03254B 0.13%, #0F72B5 99.85%)' }}>
        <BannerCarousel />
      </div>
      <About />
      <WhatWeDo />
      <Transformation />
      <ProcessWeFollow />
      <TechAndBusiness />
      <WhoWeWorkWith/>
      <Products/>
      <Industries />
      <ReviewCarouselItemParent/>
      <StatsDisplay />
      <Clients />
    </div>
  )
}

export default Home
