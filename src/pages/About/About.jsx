import React from "react";
import bg from "../../assets/bg1.jpg";

const About = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-white bg-opacity-90 shadow-lg rounded-lg p-8 max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 leading-relaxed mb-4">
          Welcome to our travel company! We are dedicated to providing you with
          the best travel experiences, ensuring comfort, safety, and
          affordability. Whether you're planning a family vacation, a business
          trip, or a solo adventure, we are here to make your journey
          unforgettable.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our company has been in the travel industry for over a decade,
          building a reputation for excellence and reliability. With a team of
          experienced professionals and a fleet of modern vehicles, we strive to
          deliver top-notch services tailored to your needs. Thank you for
          choosing us as your travel partner!
        </p>
      </div>
    </div>
  );
};

export default About;
