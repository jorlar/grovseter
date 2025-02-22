import React from "react";
// logo
import LogoWhite from "../assets/img/Logo_new_no_background.png";

const Footer = () => {
  return (
    <footer className='bg-primary py-12'>
      <div className='container mx-auto text-white flex justify-between'>
        {/*Logo*/}
        <a href='/'>
          <img src={LogoWhite} alt='' width={120} className='mx-auto flex' />
        </a>
        Copyright &copy; 2025, All rights reserved | Made by Jotun Utvikling AS
      </div>
    </footer>
  );
};

export default Footer;
