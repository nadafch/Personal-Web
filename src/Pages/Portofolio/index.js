import React from "react";
import balittas from "../../Assets/balittas.png";
import learncode from "../../Assets/learncode.png";
import webBlog from "../../Assets/webblog.png";
import restaurant from "../../Assets/restaurant recommendation.png";
import agenone from "../../Assets/agenone.png";

export default function Pages() {
  const portofolio = [
    {
      image: balittas,
      link: "http://sipeka.balittas.or.id/",
      title: "Si-Peka Balittas",
    },
    {
      image: learncode,
      link: "https://app-learncode.netlify.app/",
      title: "Learn Code",
    },
    {
      image: webBlog,
      link: "https://blog-website-nada.vercel.app/",
      title: "Web-Blog",
    },
    {
      image: restaurant,
      link: "https://github.com/nadafch/restaurant-recommendation",
      title: "Restaurant Recommendation",
    },
    {
      image: agenone,
      link: "https://agegone.netlify.app/",
      title: "Agenone Landing Page",
    },
  ];

  return (
    <>
      <div className="w-full p-12 mb-24 md:mb-30" id="Portofolio">
        <div className="w-full flex items-center mx-auto gap-4">
          <div className="font-semibold text-2xl lg:text-3xl ml-20">
            Some Things I’ve Built
          </div>
          <hr className="w-2/5 h-[1.5px] mr-3 bg-stone-400 items-end"></hr>
        </div>
        <div className="w-full mt-20 p-5 flex flex-wrap justify-between items-center gap-5">
          {portofolio.map((item) => (
            <div
              className="w-[500px] relative overflow-hidden bg-white group rounded-xl border border-gray-500 shadow-md cursor-pointer"
              onClick={() => window.open(`${item.link}`, "_blank")}
            >
              <img
                src={item.image}
                alt=""
                className="transform group-hover:scale-105 transition ease-out duration-500"
              />
              <div className="w-full h-3/4 bg-gradient-to-t from-gray-800 to-transparent absolute bottom-0 ">
                <div className="p-2 text-white absolute bottom-0">
                  <h2 className="text-lg font-bold text-end">{item.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
