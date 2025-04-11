import React from "react";
import { useNavigate } from "react-router-dom";
import bus1 from "../../assets/bus1.png";
import bus3 from "../../assets/bus3.png";
import bus9 from "../../assets/bus9.png";

const Category = () => {
  const navigate = useNavigate();

  const handleBusClick = (busType) => {
    navigate(`/bus?type=${busType}`);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 text-center">Select a Bus</h1>
      <div className="flex justify-center gap-10">
        <div
          onClick={() => handleBusClick("private")}
          className="cursor-pointer text-center relative w-48 transform transition-transform hover:scale-105"
        >
          <img
            src={bus1}
            alt="Private Bus"
            className="w-full rounded-lg shadow-lg"
          />
          <p className="mt-4 font-semibold text-lg text-gray-700">
            Private Bus
          </p>
        </div>
        <div
          onClick={() => handleBusClick("government")}
          className="cursor-pointer text-center relative w-48 transform transition-transform hover:scale-105"
        >
          <img
            src={bus3}
            alt="Government Bus"
            className="w-full rounded-lg shadow-lg"
          />
          <p className="mt-4 font-semibold text-lg text-gray-700">
            Government Bus
          </p>
        </div>
        <div
          onClick={() => handleBusClick("tourist")}
          className="cursor-pointer text-center relative w-48 transform transition-transform hover:scale-105"
        >
          <img
            src={bus9}
            alt="Tourist Bus"
            className="w-full rounded-lg shadow-lg"
          />
          <p className="mt-4 font-semibold text-lg text-gray-700">
            Tourist Bus
          </p>
        </div>
      </div>
    </div>
  );
};

export default Category;
