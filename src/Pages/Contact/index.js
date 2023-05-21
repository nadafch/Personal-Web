import React from "react";
import Contact from "../../Assets/GirlWorking.png";
import { HiMail } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Pages() {
  return (
    <div className="w-full p-8" id="Contact">
      <div className="font-bold text-2xl md:text-3xl text-center">
        Get To Know Me
      </div>
      <div className="w-full flex flex-wrap justify-around mt-5">
        <div className="my-auto flex flex-col  justify-center gap-5">
          <div className="flex gap-3 items-center ">
            <div className="text-3xl">
              <HiMail />
            </div>
            <p className="">nadafilsa@gmail.com</p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="text-3xl">
              <FaMapMarkerAlt />
            </div>
            <p className="">Malang, East Java, Indonesia</p>
          </div>
          <div>
            <button className="border-2 border-stone-600 p-3 rounded-full hover:bg-stone-700 hover:text-white hover:duration-200">
              Hire Me Now
            </button>
          </div>
        </div>
        <div>
          <img src={Contact} alt="" className="w-[500px]" />
        </div>
      </div>
    </div>
  );
}
