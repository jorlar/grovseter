import React from "react";
import olabu from "../assets/img/rooms/olabu.jpg";

import HeroSlider from "../components/HeroSlider";
const About = () => {
  return (
    <>
      <HeroSlider />

      <section className='py-24'>
        <div className='container mx-auto lg:px-0'>
          <div className='text-center'>
            <div className='font-tertiary uppercase text-[55px] tracking-[6px]'>
              Om Grøv Seter
            </div>
            <div className='container mx-auto'>
              <div className='flex flex-col lg:flex-row h-full py-24'>
                {/* left */}
                <div className='w-full h-full px-6 lg:w-[50%]'>
                  <h2 className='h2'>Litt av historien</h2>
                  <p className='mb-8'>
                    Her kan vi legge inn litt kort om historien til Grøv Seter
                    og hvordan det hele startet.
                  </p>
                </div>
                {/* Right */}
                <div className='w-full h-full lg:w-[50%]'>
                  <img src={olabu} alt='olabu' />
                </div>
              </div>
              <div className='flex flex-col lg:flex-row h-full py-24'>
                {/* left */}
                <div className='w-full h-full px-6 lg:w-[50%]'>
                  <img src={olabu} alt='olabu' />
                </div>
                {/* Right */}
                <div className='w-full h-full lg:w-[50%]'>
                  <h2 className='h2'>Grøv Seter i dag</h2>
                  <p className='mb-8'>
                    En liten snutt om hvordan det er på setra i dag.
                  </p>
                  <div className='py-8 px-6 mb-12'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
