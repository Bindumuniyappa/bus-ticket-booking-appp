import React from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-96 bg-blue-100">
      <div className="bg-black p-6 rounded-lg shadow-md w-96">
        <div className="grid grid-cols-2 gap-4">
          <label className="block">
            <span className="text-gray-200 font-medium">From:</span>
            <select className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option value="location1">Bangalore</option>
              <option value="location2">Mysore</option>
              <option value="location3">Hassan</option>
            </select>
          </label>
          <label className="block">
            <span className="text-gray-200 font-medium">To:</span>
            <select className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option value="location1">Mangalore</option>
              <option value="location2">Udupi</option>
              <option value="location3">Gokarna</option>
            </select>
          </label>
          <label className="block">
            <span className="text-gray-200 font-medium">Date:</span>
            <input
              type="date"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </label>
          <label className="block">
            <span className="text-gray-200 font-medium">Number of Seats:</span>
            <input
              type="number"
              min="1"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </label>
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={() => navigate("/bus")}>
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
