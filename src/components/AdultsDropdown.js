import React, { useContext } from "react";
//room Context
import { RoomContext } from "../context/RoomContext";
//Headless UI Menu
import { Menu } from "@headlessui/react";
//icons
import { BsChevronDown } from "react-icons/bs";

const lis = [
  { name: "1 Voksen" },
  { name: "2 Voksne" },
  { name: "3 Voksne" },
  { name: "4 Voksne" },
];

const AdultsDropdown = () => {
  const { adults, setAdults } = useContext(RoomContext);
  return (
    <Menu as='div' className='w-full h-full bg-white relative'>
      {/* BTN */}
      <Menu.Button className='w-full h-full flex items-center justify-between px-8'>
        {adults}
        <BsChevronDown className='text-base text-accent-hover' />
      </Menu.Button>
      {/* Items */}
      <Menu.Items
        as='ul'
        className='bg-white absolute w-full flex flex-col z-40'>
        {lis.map((li, index) => {
          return (
            <Menu.Item
              onClick={() => setAdults(li.name)}
              as='li'
              className='border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer'
              key={index}>
              {li.name}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default AdultsDropdown;
