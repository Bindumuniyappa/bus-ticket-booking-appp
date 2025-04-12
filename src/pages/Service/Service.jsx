import React from "react";
import bg from "../../assets/bg1.jpg";
import { FaBus, FaSuitcase, FaHeadset } from "react-icons/fa";

const Service = () => {
  return (
    <div
      className="p-5 font-sans text-white min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center bg-black bg-opacity-60 p-10 rounded-lg">
        <h1 className="text-4xl font-bold text-yellow-400">Our Services</h1>
        <p className="text-lg text-gray-300 mt-2">
          We provide top-notch travel services to make your journey comfortable
          and memorable.
        </p>
        <div className="flex justify-around mt-10 flex-wrap gap-5">
          <div className="text-center max-w-sm bg-black bg-opacity-60 p-5 rounded-lg">
            <FaBus className="text-yellow-400 text-6xl mx-auto" />
            <h3 className="text-yellow-400 text-xl font-semibold mt-3">
              Bus Ticket Booking
            </h3>
            <p className="text-gray-300 mt-2">
              Book bus tickets easily with our user-friendly platform. Enjoy a
              hassle-free experience.
            </p>
          </div>
          <div className="text-center max-w-sm bg-black bg-opacity-60 p-5 rounded-lg">
            <FaSuitcase className="text-yellow-400 text-6xl mx-auto" />
            <h3 className="text-yellow-400 text-xl font-semibold mt-3">
              Tour Packages
            </h3>
            <p className="text-gray-300 mt-2">
              Explore our curated tour packages for an unforgettable travel
              experience.
            </p>
          </div>
          <div className="text-center max-w-sm bg-black bg-opacity-60 p-5 rounded-lg">
            <FaHeadset className="text-yellow-400 text-6xl mx-auto" />
            <h3 className="text-yellow-400 text-xl font-semibold mt-3">
              24/7 Customer Support
            </h3>
            <p className="text-gray-300 mt-2">
              Our dedicated support team is here to assist you anytime,
              anywhere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
