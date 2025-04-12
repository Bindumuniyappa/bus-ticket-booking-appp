import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import HomeContainer from "./pages/HomeContainer/HomeContainer";
import About from "./pages/About/About";
import Bus from "./pages/Bus/Bus";
import Service from "./pages/Service/Service";

function App() {
  return (
    <>
      <Router>
        <div className="w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 flex flex-col overflow-hidden">
          {/* Navbar */}
          <Navbar />

          {/* Home Content */}
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/about" element={<About />} />
            <Route path="/bus" element={<Bus />} />
            <Route path="/services" element={<Service />} />
          </Routes>
          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
