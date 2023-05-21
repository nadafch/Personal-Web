import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaRegPaperPlane } from "react-icons/fa";
import profile from "../../Assets/Profile.jpeg";

export default function HeroSection() {
  return (
    <div className="w-full h-[500px] p-5 mb-10 grid grid-flow-col items-center">
      <div className="w-[100px] flex flex-col gap-5 items-start absolute top-1/4 md:top-auto">
        <a
          href="https://www.linkedin.com/in/nadafilsa/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin size={20} />
        </a>
        <a href="https://github.com/nadafch" target="_blank" rel="noreferrer">
          <BsGithub size={20} />
        </a>
        <a
          href="https://www.instagram.com/nadafch"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram size={20} />
        </a>
      </div>
      <div className="w-full flex flex-col justify-center md:flex-row items-center">
        <div className="w-48 h-4w-48 mt-8 mb-8 block md:hidden">
          <img
            src={profile}
            alt="Profile"
            className="rounded-full animate-profile__animate ring-[5px]
           ring-stone-400 ring-opacity-40"
          />
        </div>
        <div className="max-w-[300px] md:max-w-[500px] md:mr-20 ">
          <h1 className="flex text-2xl md:text-3xl font-semibold mb-5">
            Nada Filsa <span className="text-3xl">👋</span>
          </h1>
          <div className="flex items-center mb-5">
            <hr className="w-8 h-[1.5px] mr-3 bg-stone-400"></hr>
            <h3 className="text-lg md:text-xl">Web Developer</h3>
          </div>
          <div className="text-sm md:text-base text-justify font-light leading-5 mb-6">
            Hi!! iam a web developer enthusiast espescially frontend web
            development. Iam very Passionate and dedicated to my work
          </div>
          <button
            className="flex items-center gap-1 p-3 text-stone-50 rounded-xl text-[12px] bg-stone-800 duration-200 hover:bg-stone-400 hover:text-stone-800 hover:scale-105 hover:delay-200"
            onClick={() => (window.location = "mailto:nadafilsa@gmail.com")}
          >
            Keep In Touch
            <span>
              <FaRegPaperPlane />
            </span>
          </button>
        </div>
        <div className="w-64 h-5w-64 hidden md:block">
          <img
            src={profile}
            alt="Profile"
            className="rounded-full animate-profile__animate ring-[7px] ring-stone-400 ring-opacity-30"
          />
        </div>
      </div>
    </div>
  );
}
