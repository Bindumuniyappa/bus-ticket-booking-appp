import React from "react";
// import bg from "../../../assets/bg1.jpg";
// import bus3 from "../../../assets/bus3.png";
import bg from "../../assets/bg1.jpg";
import bus3 from "../../assets/bus3.png";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-cover bg-center h-screen w-full"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {" "}
      <div className="flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-50 px-4 relative">
        {" "}
        <h1 className="text-5xl font-bold mb-6">
          Reserve Your Bus Tickets Now{" "}
        </h1>{" "}
        <p className="text-lg mb-8 max-w-2xl">
                    Find and book your bus tickets with just a few clicks. We
          offer a wide           range of bus routes and schedules to suit your
          needs.        {" "}
        </p>
               {" "}
        <button
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
          onClick={() => navigate("/search")}
        >
                    Reserve Seat Now        {" "}
        </button>
               {" "}
        <img
          src={bus3}
          alt="Bus"
          className="absolute bottom-0 right-0 w-80 h-auto object-contain rounded-lg shadow-lg transform translate-x-1/4 translate-y-1/4"
        />
             {" "}
      </div>
         {" "}
    </div>
  );
};
export default Hero;
