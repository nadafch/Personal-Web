import React from "react";
import profile from "../../Assets/Profile.jpeg";

export default function About() {
  return (
    <div className="w-full p-8 mt-10 mb-24 md:mb-48" id="About">
      <div className="block lg:hidden text-2xl lg:text-3xl font-semibold text-center mb-8">
        About Me
      </div>
      <div className="w-full flex flex-col items-center gap-4 lg:flex-row lg:justify-around">
        <div className="flex relative">
          <img
            src={profile}
            alt="profile"
            className="w-60 md:w-80 rounded-md hover:translate-x-4 hover:translate-y-3 grayscale hover:grayscale-0 duration-100 hover:delay-100"
          />
          <div className="w-[240px] h-[240px]  lg:w-[320px] lg:h-[320px] border-2 border-stone-500 -z-10 absolute rounded-md"></div>
        </div>
        <div className="w-full lg:w-1/2 text-justify justify-end font-light">
          <div className="hidden lg:block">
            <div className="flex justify-between items-center gap-3 text-2xl lg:text-3xl font-semibold mb-8">
              About Me
              <hr className="w-2/3 h-[1.5px] mr-3 bg-stone-400"></hr>
            </div>
          </div>
          <div className="max-w-[90%]  md:w-full mx-auto mt-8 md:mt-0 text-sm md:text-base">
            <p className="indent-8">
              Hello!! My name is Nada Filsa. I am someone who is motivated and
              has a high interest in developing web-based applications. I have
              an understanding of HTML, CSS, Javascript, PHP, and several
              frameworks such as Bootstrap, Tailwind, CodeIgniter, and Laravel.
              And I'm at the stage of learning React.js
            </p>
            <p className="indent-8">
              Besides focusing on frontend development, I also have experience
              making Restfull APIs for personal projects using the CodeIgniter
              framework, as well as creating 3-minute 2D animations using
              toonboom harmony and 3D animations using Blender.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
