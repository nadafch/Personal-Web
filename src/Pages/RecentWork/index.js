import React from "react";

export default function Pages() {
  return (
    <div className="w-full p-8 mb-40" id="Experience">
      <div className="text-center font-semibold text-2xl lg:text-3xl ">
        Where I've Work
      </div>
      <div className="w-full mt-20 p-4 grid-cols-3 flex justify-center gap-10">
        <div className="w-[150px] md:w-full col-span-1 text-end">
          <div className="mt-20 md:mt-16">
            <h1 className="font-semibold text-xl">BALITTAS MALANG</h1>
            <p className="text-sm">March 2021 - May 2021</p>
            <p className="text-sm font-light">Frontend Deveoper</p>
          </div>
        </div>
        <div className="col-span-1 flex flex-col items-center">
          <div className="w-5 h-5 bg-stone-800 rounded-full cursor-pointer focus:bg-stone-500"></div>
          <hr className="w-[2px] h-20 md:h-14 -mt-1 bg-stone-800"></hr>
          <div className="w-5 h-5 bg-stone-800 rounded-full cursor-pointer focus:bg-stone-500"></div>
        </div>
        <div className="col-span-1 w-[150px] md:w-full">
          <div className=" -mt-10">
            <h1 className="font-semibold text-xl">PT Barrans Global Mandiri</h1>
            <p className="text-sm">November 2022 - February 2023</p>
            <p className="text-sm font-light">Ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
}
