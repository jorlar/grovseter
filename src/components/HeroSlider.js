import React from "react";
// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
//import swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
// Import required modules
import { EffectFade, Autoplay } from "swiper";
//images
import Img1 from "../assets/img/heroSlider/1.jpg";
import Img2 from "../assets/img/heroSlider/2.jpg";
import Img3 from "../assets/img/heroSlider/3.jpg";

const slides = [
  {
    title: "Fjellhytter i Valdres",
    bg: Img1,
  },
  {
    title: "Fjellhytter i Valdres",
    bg: Img2,
  },
  {
    title: "Fjellhytter i Valdres",
    bg: Img3,
  },
];
const HeroSlider = () => {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={"fade"}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className='heroSlider h-[600px] lg:h-[860px] md:h-[250px]'>
      {slides.map((slide, index) => {
        // destructure slide
        const { title, bg } = slide;
        return (
          <SwiperSlide
            className='h-full relative flex justify-center items-center'
            key={index}>
            <div className='z-20 text-white text-center'>
              <div className='uppercase font-tertiary tracking-[6px] mb-5'>
                Grøv Seter Hytteutleie
              </div>
              <h1 className='text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6 '>
                {title}
              </h1>
            </div>
            <div className='absolute top-0 w-full h-full'>
              <img className='object-cover h-full w-full' src={bg} alt='' />
            </div>

            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/70'></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
