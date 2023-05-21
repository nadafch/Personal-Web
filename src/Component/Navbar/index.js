import React, { useState } from "react";
import { BsList } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const navigation = ["Home", "About", "Experience", "Portofolio", "Contact"];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full p-4 px-10 flex flex-wrap justify-between bg-stone-200/70 shadow-md sticky top-0 z-30">
        <div className="ml-2 text-lg font-semibold">Nadafch</div>
        <button className="block md:hidden" onClick={() => setOpen(!open)}>
          {!open ? <BsList /> : null}
        </button>
        <div className="w-1/2 hidden md:block">
          <div className="flex justify-around ">
            {navigation.map((item) => (
              <a
                href={`#${item}`}
                className="delay-150 hover:scale-110 hover:duration-150"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
      {open ? (
        <div className="block md:hidden relative z-50">
          <div className="w-full fixed inset-0 backdrop-blur-sm bg-black/10"></div>
          <div className="w-1/2 p-5 fixed bg-white h-screen right-0 top-0 shadow-lg ">
            <div className="w-full flex justify-end pr-5 mb-8">
              <button onClick={() => setOpen(!open)}>
                <RxCross2 />
              </button>
            </div>
            <div className="w-full flex flex-col items-center gap-3">
              {navigation.map((item) => (
                <a
                  href={`#${item}`}
                  className="delay-150 hover:scale-110 hover:duration-150"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
