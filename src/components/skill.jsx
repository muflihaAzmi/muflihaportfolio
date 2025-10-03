import React from "react";
import html from "../assets/html-5.png";
import css from "../assets/css-3.png";
import tailwind from "../assets/Tailwind CSS.png";
import javascript from "../assets/java-script.png";
import Reactt from "../assets/react.svg";
function Skill() {
  return (
    <>
      <section id="skill">
         <div className=" flex justify-center mt-20">
            <h1 className="font-bold  text-[30px] text-white md:mt-20 mt-20" >
              MY SKILL
            </h1>
          </div>
        <div className=" flex flex-col md:mt-20 ">
         

          <div className="  md:w-full md:h-[400px] h-[500px] flex flex-col  md:gap-13 md:pl-20 md:pr-20 md:mt-4 justify-center ">
            <div className="md:flex justify-between p-50">
              <div className="md:flex md:flex-col md:gap-10">
                <div className="flex items-center md:gap-25 gap-10 justify-center">
                  <div>
                    <img src={html} className="w-[50px] h-[50px] "></img>
                    <h1 className="font-semibold text-gray-200  ">HTML</h1>
                  </div>
                  <div>
                    <div className="w-[200px] bg-gray-700 h-1 rounded-full flex">
                      <div
                        className="bg-blue-500 h-1 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                      <div className=" text-gray-200 font-semibold ">90%</div>
                    </div>
                  </div>
                </div>

                <div className=" flex items-center md:gap-27 gap-12 justify-center">
                  <div>
                    <img src={css} className="w-[40px] h-[40px]"></img>
                    <h1 className="font-semibold text-gray-200 ">CSS</h1>
                  </div>
                  <div>
                    <div className="w-[200px] bg-gray-700 h-1 rounded-full flex">
                      <div
                        className="bg-blue-500 h-1 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                      <div className=" text-gray-200 font-semibold ">85%</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center md:gap-10 gap-2 justify-center">
                  <div>
                    <img src={tailwind} className="w-[40px] h-[40px]"></img>
                    <h1 className="font-semibold text-gray-200 ">
                      TAILWIND CSS
                    </h1>
                  </div>
                  <div>
                    <div className="w-[200px] bg-gray-700 h-1 rounded-full flex">
                      <div
                        className="bg-blue-500 h-1 rounded-full"
                        style={{ width: "80%" }}
                      ></div>
                      <div className=" text-gray-200 font-semibold ">80%</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:flex md:flex-col md:gap-10 md:mt-15 mt-5">
                <div className=" flex items-center md:gap-15 gap-4 justify-center   ">
                  <div>
                    <img src={javascript} className="w-[30px] h-[30px]"></img>
                    <h1 className=" text-gray-200 font-semibold">JAVASCRIPT</h1>
                  </div>
                  <div>
                    <div className="w-[200px] bg-gray-700 h-1 rounded-full flex  ">
                      <div
                        className="bg-blue-500 h-1 rounded-full transition-all duration-700 ease-in-out"
                        style={{ width: "70%" }}
                      ></div>
                      <div className=" text-gray-200 font-semibold ">70%</div>
                    </div>
                  </div>
                </div>

                <div className=" mt-4 flex items-center md:gap-24 gap-12 justify-center">
                  <div>
                    <img src={Reactt}></img>
                    <h1 className="font-semibold text-gray-200 ">REACT</h1>
                  </div>
                  <div>
                    <div className="w-[200px] bg-gray-700 h-1 rounded-full flex ">
                      <div
                        className="bg-blue-500 h-1 rounded-full"
                        style={{ width: "70%" }}
                      ></div>
                      <div className=" text-gray-200 font-semibold ">70%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Skill;
