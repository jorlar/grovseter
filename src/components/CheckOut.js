import React, { useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";
import { BsCalendar } from "react-icons/bs";
import { RoomContext } from "../context/RoomContext";

const CheckOut = () => {
  const { checkOut, setCheckOut, checkIn } = useContext(RoomContext);
  
  return (
    <div className='relative flex items-center justify-end h-full'>
      <div className='absolute z-10 pr-8'>
        <div>
          <BsCalendar className='text-accent text-base' />
        </div>
      </div>
      <DatePicker
        className='w-full h-full'
        selected={checkOut}
        placeholderText='Utsjekking'
        onChange={(date) => setCheckOut(date)}
        minDate={checkIn ? new Date(checkIn.getTime() + 86400000) : new Date()}
      />
    </div>
  );
};

export default CheckOut;