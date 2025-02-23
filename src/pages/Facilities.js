import React from "react";

//import heroslider
import HeroSlider from "../components/HeroSlider";

const Facilities = () => {
  return (
    <>
      <HeroSlider />

      <section className='py-24'>
        <div className='container mx-auto lg:px-0'>
          <div className='text-center'>
            <div className='font-tertiary uppercase text-[45px] tracking-[6px]'>
              Fasiliteter i nærområdet
            </div>
            <h2 className='font-primary text-[28px] mb-4 '>
              Høyt til fjells, men sentralt allikevel
            </h2>
            <div className='text-justify'>
              <p className='font-tertiary'>
                Her legger vi inn litt info om skiturer, Eidsbugarden, Filefjell
                etc.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Facilities;
