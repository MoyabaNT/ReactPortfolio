import React from 'react';
import HeroImage from "../assets/recent.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white text-center md:text-left">
            I am a Front-End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md text-center md:text-left">
            A passionate Front-End developer with a love for learning, I bring a touch of charm and excellence to every line of code I write in the ever-evolving world of IT. 🌸
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <FaArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="mt-8 md:mt-0"> 
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 sm:w-1/2 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
