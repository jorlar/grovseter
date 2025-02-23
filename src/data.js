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
    name: "Røisheim",
    description:
      "Røisheim har 6 soverom, hvorav 3 med dobbeltseng, 3 med enkeltseng og en familiekøye. Totalt er det 18 sengeplasser på hytta. 1 bad med WC, og et separat WC. Vaskemaskin og tørketrommel samt godt utstyrt kjøkken med oppvaskmaskin, microbølgeovn etc. Hytta disponerer stor parkeringsplass og har rullestolrampe. Alle våre hytter har innlagt fiber og TV fra Telia. Pakker med sengetøy og håndklær kan leies eller medbringes selv",
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
      "Midtgard har 3 soverom, hvorav 1 med dobbeltseng, 1 med køyeseng og 1 med familiekøye. Totalt er det 8 sengeplasser på hytta. 1 bad med WC, og et separat WC. Vaskemaskin og tørketrommel samt godt utstyrt kjøkken med oppvaskmaskin, microbølgeovn etc. Hytta disponerer stor parkeringsplass. Alle våre hytter har innlagt fiber og TV fra Telia. Pakker med sengetøy og håndklær kan leies eller medbringes selv",
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
      "Olabu har 2 soverom, hvorav 1 med dobbeltseng og 1 med familiekøye. Totalt er det 7 sengeplasser på hytta. 1 bad med WC, Vaskemaskin og tørketrommel samt godt utstyrt kjøkken med oppvaskmaskin, microbølgeovn etc. Hytta disponerer stor parkeringsplass. Alle våre hytter har innlagt fiber og TV fra Telia. Pakker med sengetøy og håndklær kan leies eller medbringes selv",
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
