import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { busData } from "../../api/Busdata";

function BusBooking() {
  const { id } = useParams();
  const bus = busData.find((b) => b.id === parseInt(id));

  if (!bus)
    return <div className="text-center mt-10 text-red-600">Bus not found</div>;

  const totalSeats = 48;
  const seatPrice = bus.price;

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState(""); 

  const handleSeatClick = (seatNumber) => {
    if (bookedSeats.includes(seatNumber)) return;

    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats((prev) => prev.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats((prev) => [...prev, seatNumber]);
    }
  };

  const handleBooking = () => {
    if (!selectedTime) {
      alert("Please select a time before booking.");
      return;
    }

    const isConfirmed = window.confirm(
      `Confirm booking for seat(s): ${selectedSeats.join(
        ", "
      )} at ${selectedTime}?`
    );
    if (isConfirmed) {
      setBookedSeats((prev) => [...prev, ...selectedSeats]);
      setSelectedSeats([]);
    }
  };

  const totalPrice = selectedSeats.length * seatPrice;

  const rows = useMemo(() => {
    const seatRows = [];
    for (let i = 0; i < totalSeats; i += 4) {
      const row = [];
      for (let j = 0; j < 4 && i + j < totalSeats; j++) {
        row.push(i + j + 1);
      }
      seatRows.push(row);
    }
    return seatRows;
  }, [totalSeats]);

  return (
    <div className="flex flex-col md:flex-row items-start gap-6 p-4 border rounded-lg shadow-md mt-24">
      <img
        src={bus.image}
        alt={bus.busName}
        className="w-full md:w-1/3 h-auto rounded-md"
      />

      <div className="flex flex-col w-full md:w-2/3">
        <h2 className="text-xl font-semibold mb-2">{bus.busName}</h2>

        <p className="text-gray-600 mb-1">
          Available Seats:{" "}
          <span className="font-bold">{totalSeats - bookedSeats.length}</span>
        </p>

        <p className="text-gray-600 mb-1">
          Date: <span className="font-bold">{bus.date}</span>
        </p>

        <label className="mb-2 font-medium">
          Select Time:
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="ml-2 p-2 border rounded"
          >
            <option value="" required>
              {" "}
              Select Time{" "}
            </option>
            {bus.timings.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </label>

        <p className="text-gray-600 mb-4">
          Price per Seat: ₹<span className="font-bold">{seatPrice}</span>
        </p>

        <div className="flex flex-wrap gap-4 bg-gray-100 p-4 rounded-md justify-start">
          {rows.map((row, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col gap-2">
                {row.slice(0, 2).map((seat) => (
                  <button
                    key={seat}
                    onClick={() => handleSeatClick(seat)}
                    disabled={bookedSeats.includes(seat)}
                    className={`w-10 h-10 border rounded text-sm transition ${
                      bookedSeats.includes(seat)
                        ? "bg-gray-400 text-white cursor-not-allowed"
                        : selectedSeats.includes(seat)
                        ? "bg-blue-500 text-white"
                        : "bg-green-200 hover:bg-green-300"
                    }`}
                  >
                    {seat}
                  </button>
                ))}
              </div>

              {row.length > 2 && <div className="w-4" />}

              {row.length > 2 && (
                <div className="flex flex-col gap-2">
                  {row.slice(2).map((seat) => (
                    <button
                      key={seat}
                      onClick={() => handleSeatClick(seat)}
                      disabled={bookedSeats.includes(seat)}
                      className={`w-10 h-10 border rounded text-sm transition ${
                        bookedSeats.includes(seat)
                          ? "bg-gray-400 text-white cursor-not-allowed"
                          : selectedSeats.includes(seat)
                          ? "bg-blue-500 text-white"
                          : "bg-green-200 hover:bg-green-300"
                      }`}
                    >
                      {seat}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {selectedSeats.length > 0 && (
          <div className="mt-4 text-lg font-semibold">Total: ₹{totalPrice}</div>
        )}

        <button
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mx-auto block"
          disabled={selectedSeats.length === 0 || !selectedTime}
          onClick={handleBooking}
        >
          Book Selected Seat{selectedSeats.length > 1 ? "s" : ""}
        </button>
      </div>
    </div>
  );
}

export default BusBooking;
