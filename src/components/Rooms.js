import React, { useContext, useEffect } from "react";
import { RoomContext } from "../context/RoomContext";
import Room from "../components/Room";
import { SpinnerDotted } from "spinners-react";
import { supabase } from '../lib/supabase';

const Rooms = () => {
  const { rooms, loading, setRooms } = useContext(RoomContext);

  useEffect(() => {
    const fetchInitialRooms = async () => {
      try {
        const { data: cabins, error } = await supabase
          .from('cabins')
          .select(`
            *,
            cabin_facilities (
              name,
              icon
            )
          `);

        if (error) throw error;

        const transformedRooms = cabins.map(cabin => ({
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
        console.error('Error fetching rooms:', error);
      }
    };

    fetchInitialRooms();
  }, [setRooms]);

  return (
    <section className='py-24'>
      {loading && (
        <div className='h-screen fixed bottom-0 top-0 bg-black/90 w-full z-50 flex justify-center items-center'>
          <SpinnerDotted color='white' />
        </div>
      )}
      <div className='container mx-auto lg:px-0'>
        <div className='text-center'>
          <div className='font-tertiary uppercase text-[20px] tracking-[6px]'>
            Grøv Seter Hytteutleie
          </div>
          <h2 className='font-primary text-[45px] mb-4'>Våre hytter</h2>
        </div>
        <div className='grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0'>
          {rooms.map((room) => {
            return <Room room={room} key={room.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Rooms;