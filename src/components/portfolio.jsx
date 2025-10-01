import React from "react";
import port from "../assets/portfolio.png";
import clock from "../assets/clock.png";
import chatss from "../assets/chatss.png";

function Portfolio() {
  return (
    <>
      <section id="portfolio">
        <div class=" text-white py-10 mt-30">
          <h1 class="text-center text-3xl font-bold mb-8">MY PROJECTS</h1>

          <div class="md:flex md:flex-row flex flex-col gap-10 space-x-6 overflow-x-auto px-6 pb-10  no-scrollbar md:justify-center md:mt-40">
            <div class=" md:w-64  w-90 h-40  bg-white/15 backdrop-blur-xl rounded-xl   font-semibold transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl">
              <img className=" w-90 h-40" src={port} />
              <p>Responsive portfolio website</p>
            </div>

            <div class="flex-none  w-90 md:w-64 h-40  bg-white/15 backdrop-blur-xl rounded-xl  text-xl font-semibold transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl">
              <img className="h-40" src={clock} />
              <p>digital clock</p>
            </div>

            <div class="flex-none w-90 md:w-64 h-40  bg-white/15 backdrop-blur-xl rounded-xl  text-xl font-semibold transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl">
              <img className="h-40 w-40" src={chatss} />
              <p>chat page with REST API</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
