import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
// Components
import AdultsDropdown from "../components/AdultsDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import KidsDropdown from "../components/KidsDropdown";

//scroll top
import ScrollToTop from "../components/ScrollToTop";

// context
import { RoomContext } from "../context/RoomContext";
//icons
import { FaCheck } from "react-icons/fa";
import About from "./About";

const RoomDetails = () => {
  const { rooms } = useContext(RoomContext);
  const { id } = useParams();

  const navigate = useNavigate();

  // get room
  const room = rooms.find((room) => {
    return room.id === Number(id);
  });

  // destructure room
  const { name, description, facilities, imageLg, price } = room;
  return (
    <section>
      <ScrollToTop />
      {/* banner */}
      <div className='bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center'>
        {/*Overlay*/}
        <div className='absolute w-full h-full bg-black/70'></div>
        {/* title */}
        <h1 className='text-6xl text-white z-20 font-primary text-center'>
          {name}
        </h1>
      </div>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row h-full py-24'>
          {/* left */}
          <div className='w-full h-full px-6 lg:w-[60%]'>
            <h2 className='h2'>{name}</h2>
            <p className='mb-8'>{description}</p>
            <img className='mb-8' src={imageLg} alt='' />
            {/* Facilities */}
            <div className='mt-12'>
              <h3 className='h3 mb-3'>Fasiliteter i hytta</h3>
              <p className='mb-12 '>
                {" "}
                Her kan vi legge inn mer generell info om fasiliteter på
                hyttene. Feks peisovn, sofakrok etc
              </p>
              {/* Grid */}
              <div className='grid grid-cols-3 gap-6 mb-12'>
                {facilities.map((item, index) => {
                  // destructure item
                  const { name, icon } = item;
                  return (
                    <div
                      className='flex items-center gap-x-3 flex-1'
                      key={index}>
                      <div className='text-3xl text-accent'>{icon}</div>
                      <div className='text-base'>{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Right */}
          <div className='w-full h-full lg:w-[40%]'>
            {/* Resevation */}
            <div className='py-8 px-6 bg-accent/20 mb-12'>
              <div className='flex flex-col space-y-4 mb-4'>
                <h3>Din Booking</h3>
                <div className='h-[60px]'>
                  <CheckIn />
                </div>
                <div className='h-[60px]'>
                  <CheckOut />
                </div>
                <div className='h-[60px]'>
                  <AdultsDropdown />
                </div>
                <div className='h-[60px]'>
                  <KidsDropdown />
                </div>
              </div>
              <button
                className='btn btn-lg btn-primary w-full'
                onClick={() => navigate("/Booking")}>
                Book Nå for {price},-
              </button>
            </div>
            {/* RULES */}
            <div>
              <h3 className='h3'>Våre Regler</h3>
              <p className='mb-6'>
                {" "}
                Her kan vi legge inn litt bookingregler eller lignende og
                ordensregler kanskje??
              </p>
              <ul className='flex flex-col gap-y-4'>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  Check-in 14:00 - 16:00
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  Check-out 10:00 - 12:00
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  Kjeledyr er velkomne hos oss
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  Røyking kun på tillatte områder
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
