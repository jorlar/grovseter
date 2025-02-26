import React from "react";
import olabu from "../assets/img/rooms/olabu.jpg";

import HeroSlider from "../components/HeroSlider";
const Facilites = () => {
  return (
    <>
      <HeroSlider />

      <section className='py-24'>
        <div className='container mx-auto lg:px-0'>
          <div className='text-center'>
            <div className='font-tertiary uppercase text-[55px] tracking-[6px]'>
              Fasiliteter i nærområdet
            </div>
            <div className='container mx-auto'>
              <div className='flex flex-col lg:flex-row h-full py-24'>
                {/* left */}
                <div className='w-full h-full px-6 lg:w-[50%]'>
                  <h2 className='h2'>Turmuligheter</h2>
                  <p className='mb-8'>Litt turmuligheter og slikt</p>
                </div>
                {/* Right */}
                <div className='w-full h-full lg:w-[50%]'>
                  Bilde fra nærområdet
                </div>
              </div>
              <div className='flex flex-col lg:flex-row h-full py-24'>
                {/* left */}
                <div className='w-full h-full px-6 lg:w-[50%]'>
                  Bilde fra Eidsbugarden
                </div>
                {/* Right */}
                <div className='w-full h-full lg:w-[50%]'>
                  <h2 className='h2'>Eidsbugarden</h2>
                  <p className='mb-8'>Litt info om Eidsbugarden</p>
                  <div className='py-8 px-6 mb-12'></div>
                </div>
              </div>
              <div className='flex flex-col lg:flex-row h-full py-24'>
                {/* left */}
                <div className='w-full h-full px-6 lg:w-[50%]'>
                  <h2 className='h2'>Turmuligheter</h2>
                  <p className='mb-8'>Litt turmuligheter og slikt</p>
                </div>
                {/* Right */}
                <div className='w-full h-full lg:w-[50%]'>
                  Bilde fra nærområdet
                </div>
              </div>
              <div className='flex flex-col lg:flex-row h-full py-24'>
                {/* left */}
                <div className='w-full h-full px-6 lg:w-[50%]'>
                  Bilde fra Eidsbugarden
                </div>
                {/* Right */}
                <div className='w-full h-full lg:w-[50%]'>
                  <h2 className='h2'>Eidsbugarden</h2>
                  <p className='mb-8'>Litt info om Eidsbugarden</p>
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

export default Facilites;
