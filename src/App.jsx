import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import HomeContainer from "./pages/HomeContainer/HomeContainer";
import About from "./pages/About/About";
import Bus from "./pages/Bus/Bus";
import BusBooking from "./pages/Bus/BusBooking";
import Bus1Booking from "./pages/Bus/Bus1Booking";
import Bus2Booking from "./pages/Bus/BUs2Booking";
import Bus3Booking from "./pages/Bus/Bus3Booking";
import Bus4Booking from "./pages/Bus/Bus4Booking";
import Bus5Booking from "./pages/Bus/Bus5Booking";
import Bus6Booking from "./pages/Bus/Bus6Booking";
import Bus7Booking from "./pages/Bus/Bus7Booking";
import Bus8Booking from "./pages/Bus/Bus8Booking";
import Search from "./pages/Search/Search";
import Service from "./pages/Service/Service";
import { createBrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      {/* <Router>
        <div className="w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 flex flex-col overflow-hidden">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/about" element={<About />} />
            <Route path="/bus" element={<Bus />} />
            <Route path="/search" element={<Search />} />
            <Route path="/services" element={<Service />} />
            <Route path="/busBooking" element={<BusBooking />} />
            <Route path="/busBooking1" element={<Bus1Booking />} />
            <Route path="/busBooking2" element={<Bus2Booking />} />
            <Route path="/busBooking3" element={<Bus3Booking />} />
            <Route path="/busBooking4" element={<Bus4Booking />} />
            <Route path="/busBooking5" element={<Bus5Booking />} />
            <Route path="/busBooking6" element={<Bus6Booking />} />
            <Route path="/busBooking7" element={<Bus7Booking />} />
            <Route path="/busBooking8" element={<Bus8Booking />} />
          </Routes>
          <Footer />
        </div>
      </Router> */}
    </>
  );
}

export default App;
