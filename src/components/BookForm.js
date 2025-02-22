import React from "react";

//Components
import AdultsDropDown from "../components/AdultsDropdown";
import KidsDropDown from "../components/KidsDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";

const BookForm = () => {
  return (
    <form className='h-[300px] w-full lg:h-[70px]'>
      <div className='flex flex-col w-full h-full lg:flex-row'>
        <div className='flex-1 border-r'>
          <CheckIn />
        </div>
        <div className='flex-1 border-r'>
          <CheckOut />
        </div>
        <div className='flex-1 border-r'>
          <AdultsDropDown />
        </div>
        <div className='flex-1 border-r'>
          <KidsDropDown />
        </div>
      </div>
    </form>
  );
};

export default BookForm;
