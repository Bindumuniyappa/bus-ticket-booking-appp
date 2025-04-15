import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = () => {
    navigate(`/bus?from=${from}&to=${to}&date=${date}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-96 bg-blue-100 dark:bg-gray-500">
      <div className="bg-black p-6 rounded-lg shadow-md w-96 dark:bg-green-50">
        <div className="grid grid-cols-2 gap-4">
          <label className="block">
            <span className="text-gray-200 font-medium">From:</span>
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Mysore">Mysore</option>
              <option value="Hassan">Hassan</option>
            </select>
          </label>
          <label className="block">
            <span className="text-gray-200 font-medium">To:</span>
            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select</option>
              <option value="Mangalore">Mangalore</option>
              <option value="Udupi">Udupi</option>
              <option value="Gokarna">Gokarna</option>
            </select>
          </label>
          <label className="block col-span-2">
            <span className="text-gray-200 font-medium">Date:</span>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 block  px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
            />
          </label>
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600"
          >
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
