import React from "react";
import balittas from "../../Assets/balittas.png";
import learncode from "../../Assets/learncode.png";

export default function Pages() {
  return (
    <>
      <div className="w-full p-12 mb-24 md:mb-30" id="Portofolio">
        <div className="w-full flex items-center mx-auto gap-4">
          <div className="font-semibold text-2xl lg:text-3xl ml-20">
            Some Things I’ve Built
          </div>
          <hr className="w-2/5 h-[1.5px] mr-3 bg-stone-400 items-end"></hr>
        </div>
        <div className="w-full mt-20 flex flex-wrap justify-around gap-5">
          <div
            className="w-[500px] relative overflow-hidden bg-white group rounded-xl border border-gray-500 shadow-md cursor-pointer"
            onClick={() =>
              window.open("http://sipeka.balittas.or.id/", "_blank")
            }
          >
            <img
              src={balittas}
              alt=""
              className="transform group-hover:scale-105 transition ease-out duration-500"
            />
            <div className="w-full h-3/4 bg-gradient-to-t from-gray-800 to-transparent absolute bottom-0 ">
              <div className="p-2 text-white absolute bottom-0">
                <h2 className="text-lg font-bold uppercase text-end">
                  Si-Peka Balittas
                </h2>
              </div>
            </div>
          </div>
          <div
            className="w-[500px] relative overflow-hidden bg-white group rounded-xl border border-gray-500 shadow-md cursor-pointer"
            onClick={() =>
              window.open("https://app-learncode.netlify.app/", "_blank")
            }
          >
            <img
              src={learncode}
              alt=""
              className="transform group-hover:scale-105 transition ease-out duration-500"
            />
            <div className="w-full h-3/4 bg-gradient-to-t from-gray-800 to-transparent absolute bottom-0 ">
              <div className="p-2 text-white absolute bottom-0">
                <h2 className="text-lg font-bold uppercase text-end">
                  Learn Code
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
