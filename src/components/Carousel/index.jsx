import HeroSlider, { Slide, MenuNav } from 'hero-slider'

import CarretaIMG from '../../assets/3.png'
import TruckIMG from '../../assets/2.png'
import BusIMG from '../../assets/1.jpg'

export function Carousel() {
  return (
    <HeroSlider
      height={"700px"}
      width={"100%"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),

        onBeforeSliding: (previousSlide, nextSlide) => 
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),

        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide)
      }}
    >
      <Slide 
        background={{
          backgroundImageSrc: BusIMG,
        }}
      />
      <Slide 
        background={{
          backgroundImageSrc: TruckIMG
        }}
      />
      <Slide 
        background={{
          backgroundImageSrc: CarretaIMG
        }}
      />

      <MenuNav />
    </HeroSlider>
  )
}