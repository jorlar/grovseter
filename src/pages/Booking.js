import { useRef, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import HeroSlider from "../components/HeroSlider";

// Components
import AdultsDropdown from "../components/AdultsDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import KidsDropdown from "../components/KidsDropdown";

// context
import { RoomContext } from "../context/RoomContext";

const Booking = () => {
  const form = useRef(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zkl7hev",
        "template_u76y4zd",
        form.current,
        "jzi6WEzjNkT3qtZHA"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <>
      <HeroSlider />

      <div
        id='form-container'
        className='py-24 lg:p-5 mx-auto font-Encode-Sans'>
        <motion.div
          transition={{ duration: 0.5, delay: 0.7 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='py-5'>
          <form method='POST' action='' ref={form} onSubmit={sendEmail}>
            <div className='mx-auto rounded-xl max-w-xl'>
              <div className='grid grid-cols-1 gap-6 label'>
                <div className='flex flex-col space-y-4 mb-4'>
                  <motion.h3
                    initial={{ y: "200%" }}
                    transition={{
                      ease: [0.455, 0.03, 0.515, 0.955],
                      duration: 1,
                    }}
                    animate={{ y: 0 }}
                    className='text-center lg:text-5xl text-5xl mt-10 pb-6 font-bold'>
                    Bestill din Booking her
                  </motion.h3>
                  <div className='py-8 px-6 bg-accent/20 mb-12'>
                    <div className='h-[60px]'>
                      <label htmlFor='CheckIn'>
                        <CheckIn />
                      </label>
                    </div>

                    <div className='h-[60px]'>
                      <label htmlFor='CheckOut'>
                        <CheckOut />
                      </label>
                    </div>
                    <div className='h-[60px]'>
                      <label htmlFor='Adults'>
                        <AdultsDropdown />
                      </label>
                    </div>
                    <div className='h-[60px]'>
                      <label htmlFor='Kids'>
                        <KidsDropdown />
                      </label>
                    </div>
                  </div>
                </div>
                <div className='overflow-hidden'>
                  <label htmlFor='name' className='block border-b py-2 '>
                    <input
                      id='name'
                      type='text'
                      name='name'
                      required='required'
                      placeholder='Navn'
                      className='
                    appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-tertiary uppercase text-[20px] tracking-[6px]'
                    />
                  </label>
                </div>
                <label htmlFor='email' className='block border-b'>
                  <input
                    id='email'
                    type='email'
                    name='email'
                    placeholder='Email'
                    pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                    required='required'
                    className='
                  appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-tertiary uppercase text-[20px] tracking-[6px]'
                  />
                </label>
                <label htmlFor='phone' className='block border-b'>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    placeholder='Telefon'
                    required='required'
                    className='
                  appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-tertiary uppercase text-[20px] tracking-[6px]'
                  />
                </label>
                <label htmlFor='company' className='block border-b'>
                  <input
                    id='company'
                    name='company'
                    type='text'
                    placeholder='Firma'
                    required='required'
                    className='
                  appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-tertiary uppercase text-[20px] tracking-[6px]'
                  />
                </label>

                <label className='block border-b'>
                  <textarea
                    id='message'
                    name='message'
                    rows='5'
                    required='required'
                    placeholder='Din melding..'
                    className='
                  appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none bg-cool-darker font-tertiary uppercase text-[20px] tracking-[6px]
                    '></textarea>
                </label>
                <div className='text-center'>
                  <button className='btn btn-lg btn-primary w-full'>
                    Book Nå for ,-
                  </button>
                  {error && "En feil har oppstått"}
                  {success && "Takk for din henvendelse"}
                </div>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default Booking;
