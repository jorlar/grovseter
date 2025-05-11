import React, { createContext, useEffect, useState } from "react";
import { supabase } from '../lib/supabase';

// Create context
export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [adults, setAdults] = useState("1 Voksen");
  const [kids, setKids] = useState("0 Barn");
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  }, [adults, kids]);

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Get all bookings between check-in and check-out dates
      const { data: bookings } = await supabase
        .from('bookings')
        .select('cabin_id')
        .gte('check_in', checkIn)
        .lte('check_out', checkOut);

      // Get all cabins that are not booked for the selected dates
      const { data: availableCabins } = await supabase
        .from('cabins')
        .select(`
          *,
          cabin_facilities (
            name,
            icon
          )
        `)
        .lte('max_persons', total)
        .not('id', 'in', `(${bookings.map(b => b.cabin_id).join(',')})`);

      // Transform the data to match the current room structure
      const transformedRooms = availableCabins.map(cabin => ({
        id: cabin.id,
        name: cabin.name,
        description: cabin.description,
        facilities: cabin.cabin_facilities,
        size: cabin.size_m2,
        maxPerson: cabin.max_persons,
        price: cabin.price_per_night,
        image: cabin.image_url,
        imageLg: cabin.image_lg_url
      }));

      setRooms(transformedRooms);
    } catch (error) {
      console.error('Error fetching available rooms:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RoomContext.Provider
      value={{ 
        rooms, 
        adults, 
        setAdults, 
        kids, 
        setKids, 
        handleClick, 
        loading,
        checkIn,
        setCheckIn,
        checkOut,
        setCheckOut
      }}>
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;