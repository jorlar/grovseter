import React, { useState, useEffect } from "react";
//Logo
import LogoWhite from "../assets/img/Logo_new_no_background.png";
import LogoDark from "../assets/img/Logo_new_no_background.png";

const Header = () => {
  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY < 50 ? setHeader(true) : setHeader(false);
    });
  });
  return (
    <header
      className={`${
        header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"
      }  z-50 w-full transition-all duration-300 sticky`}>
      <div className='container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0'>
        {/*logo*/}
        <a href='/'>
          {header ? (
            <img className='w-[100px]' src={LogoDark} alt='' />
          ) : (
            <img className='w-[100px]' src={LogoWhite} alt='' />
          )}
        </a>
        {/*NAV */}
        <nav
          className={`${
            header ? "text-primary" : "text-white"
          } flex gap-x-4 font-tertiary tracking-[3px] text-[15px] items-center uppercase lg:gap-x-8`}>
          <a href='/' className='hover:text-accent transition'>
            Hjem
          </a>
          <a href='/About' className='hover:text-accent transition'>
            Om Oss
          </a>

          <a href='/Facilities' className='hover:text-accent transition'>
            Fasiliteter
          </a>

          <a href='/Contact' className='hover:text-accent transition'>
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
