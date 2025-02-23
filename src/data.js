// rooms images
import Room1Img from "./assets/img/rooms/rosheim_ut.jpg";
import Room1ImgLg from "./assets/img/rooms/rosheim.jpg";
import Room2Img from "./assets/img/rooms/midtgard_ut.jpg";
import Room2ImgLg from "./assets/img/rooms/midtgard.jpg";
import Room3Img from "./assets/img/rooms/olabu_ut.jpg";
import Room3ImgLg from "./assets/img/rooms/olabu.jpg";

// import icons
import {
  FaWifi,
  FaCoffee,
  FaBath,
  FaParking,
  FaWheelchair,
} from "react-icons/fa";

export const roomData = [
  {
    id: 1,
    name: "Røsheim",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Kaffe", icon: <FaCoffee /> },
      { name: "Bad", icon: <FaBath /> },
      { name: "Parkeringsplass", icon: <FaParking /> },
      { name: "Tilrettelagt for rullestol", icon: <FaWheelchair /> },
    ],
    size: 80,
    maxPerson: 18,
    price: 2500,
    image: Room1Img,
    imageLg: Room1ImgLg,
  },
  {
    id: 2,
    name: "Midtgard",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Kaffe", icon: <FaCoffee /> },
      { name: "Bad", icon: <FaBath /> },
      { name: "Parkeringsplass", icon: <FaParking /> },
    ],
    size: 65,
    maxPerson: 8,
    price: 2200,
    image: Room2Img,
    imageLg: Room2ImgLg,
  },
  {
    id: 3,
    name: "Olabu",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Kaffe", icon: <FaCoffee /> },
      { name: "Bad", icon: <FaBath /> },
      { name: "Parkeringsplass", icon: <FaParking /> },
    ],
    size: 70,
    maxPerson: 7,
    price: 2650,
    image: Room3Img,
    imageLg: Room3ImgLg,
  },
];
