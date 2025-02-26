import React from "react";

// Vercel Monitor
import { Analytics } from "@vercel/analytics/react";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";
import Facilities from "./pages/Facilities";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";

// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/room/:id",
    element: <RoomDetails />,
  },
  {
    path: "/Facilities",
    element: <Facilities />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "Booking",
    element: <Booking />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
]);

const App = () => {
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
      <Analytics />
      <Footer />
    </div>
  );
};

export default App;
