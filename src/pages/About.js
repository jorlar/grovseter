import React from "react";

import HeroSlider from "../components/HeroSlider";
const About = () => {
  return (
    <>
      <HeroSlider />

      <section className='py-24'>
        <div className='container mx-auto lg:px-0'>
          <div className='text-center'>
            <div className='font-tertiary uppercase text-[45px] tracking-[6px]'>
              Om Grøv Seter
            </div>
            <h2 className='font-primary text-[28px] mb-4 '>
              Litt av historien
            </h2>
            <div className='text-justify'>
              <p className='font-tertiary'>
                Her kommer historien til Grøv seter
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
