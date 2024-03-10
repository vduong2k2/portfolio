import React from "react";
import hero from "../assets/hero.png";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'am Viet Duong
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi autem
            reiciendis assumenda, quo, ratione amet deleniti excepturi dicta
            consequatur repellat labore placeat quaerat inventore dolor
            officiis. Sit tempora ipsa cupiditate!
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineArrowForwardIos className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={hero}
            alt="My Avatar"
            className="rounded-2xl mx-auto h-80 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
