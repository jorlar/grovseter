import React, { createContext, useEffect, useState } from "react";

// data
import { roomData } from "../data";

// Create context
export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState("1 Voksen");
  const [kids, setKids] = useState("0 Barn");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  });

  const handleClick = (e) => {
    e.preventDefault();
    //Filter Rooms based on totalt (persons)
    const newRooms = roomData.filter((room) => {
      return total <= room.maxPerson;
    });
    setRooms(newRooms);
  };
  return (
    <RoomContext.Provider
      value={{ rooms, adults, setAdults, kids, setKids, handleClick }}>
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
