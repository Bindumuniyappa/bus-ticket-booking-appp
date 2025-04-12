import React from "react";
import bus from "../../assets/bus.png";
import bus1 from "../../assets/bus1.png"; 
import bus2 from "../../assets/bus2.png";
import bus3 from "../../assets/bus3.png";
import bus4 from "../../assets/bus4.png";
import bus5 from "../../assets/bus5.png";
import bus6 from "../../assets/bus6.png";
import bus7 from "../../assets/bus7.png";
import bus8 from "../../assets/bus8.png";
import bus9 from "../../assets/bus9.png";

import { useNavigate } from "react-router-dom";

const Bus = () => {
  const navigate=useNavigate();
  return (
    <>
      <div className="bus-container">
        <div className="d-flex justify-between items-center w-full flex-column mt-20">
          <img
            src={bus}
            alt="bus"
            width="33%"
            onClick={() => {
              navigate("/busBooking");
            }}
          />
          <img
            src={bus1}
            alt="bus"
            width="33%"
            onClick={() => {
              navigate("/busBooking1");
            }}
          />
          <img
            src={bus2}
            alt="bus"
            width="33%"
            onClick={() => {
              navigate("/busBooking2");
            }}
          />
          <img
            src={bus3}
            alt="bus"
            width="33%"
            onClick={() => {
              navigate("/busBooking3");
            }}
          />
          <img
            src={bus4}
            alt="bus"
            width="33%"
            onClick={() => {
              navigate("/busBooking4");
            }}
          />
          <img
            src={bus5}
            alt="bus"
            width="33%"
            onClick={() => {
              navigate("/busBooking5");
            }}
          />
          <img
            src={bus6}
            alt="bus"
            width="33%"
            onClick={() => {
              navigate("/busBooking6");
            }}
          />
          <img
            src={bus7}
            alt="bus"
            width="33%"
            onClick={() => {
              navigate("/busBooking7");
            }}
          />
           <img
            src={bus9}
            alt="bus"
            width="33%"
            onClick={() => {
              navigate("/busBooking8");
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Bus;
