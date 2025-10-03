import React from "react";
// import jull from "../assets/jjuul.png";
import download from "../assets/download.png";
import mufliha from "../assets/mufliha.jpg";


function Content() {
  return (
    <>
      <section id="content">
        <div className="md:pl-20 md:pr-20 mt-40 pl-5 pr-5  md:flex justify-between  relative z-1 ">
          <div>
            <span className="font-bold md:text-[30px]  text-gray-200 text-[20px]  ">
              Hi,
            </span>
            <br />
            <span className="font-bold md:text-[40px] text-gray-200  text-[30px]">
              I'am{" "}
              <span className="md:text-[50px] text-[32px] text-red-700 animate-pulse">
                {" "}
                Mufliha Azmi
              </span>
            </span>
            <p className="font-bold md:text-[40px] text-gray-200 text-[30px]">
              Frontend Developer
            </p>
            <p className="font-medium md:text-[15px]  text-gray-200 mt-5  text-[10px]">
              I craft engaging and responsive websites.<br></br> I’m passionate
              about learning new frameworks and delivering smooth user
              experiences.
            </p>
            <div>
              <a href="./Mufliha-Azmi.pdf">
                <button className="h-[35px] w-[100px]  md:mt-7 items-center justify-center bg-white px-3 py-1 mt-7 flex flex-row  rounded-3xl shadow-md  hover:bg-gray-200 cursor-pointer font-semibold text-[#4B0082] transform transition duration-300 hover:scale-105">
                  {" "}
                  Resume
                  <img className="h-[25px] w-[30px]" src={download} />
                </button>
              </a>
            </div>
          </div>
          <div className="pr-25 mt-5 md:mt-0">
          <img
  src={mufliha}
  alt="Mufliha"
  className="md:h-[450px] md:w-[350px] h-[300px] w-[250px] rounded-full border-10 p-1 border-gray-200 ml-10"
/>

          </div>
        </div>
      </section>
    </>
  );
}

export default Content;
