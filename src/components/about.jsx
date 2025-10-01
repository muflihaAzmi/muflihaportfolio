import React from "react";
import fast from "../assets/fast-forward.png";
import { Link } from "react-scroll";

import { motion } from "framer-motion";

function About() {
  return (
    <>
      <section id="about" className="">
        <p className="text-gray-200 text-[30px] font-bold items-center flex justify-center mt-40  ">
          ABOUT ME
        </p>
        <div className="md:flex md:flex-row md:justify-between md:pl-20 md:pr-20 md:mt-30 mt-20 w-full gap-8 flex flex-col pl-5 ">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier easing
            }}
            viewport={{ once: true, amount: 0.8 }}
            className=" bg-white/15 backdrop-blur-xl text-gray-200 md:w-[600px] md:h-[250px] animate-in  w-[360px] flex flex-col items-center rounded-xl   "
          >
            <h2 className="font-bold text-[25px] text-red-600 mr-10 ">
              WHO I AM{" "}
            </h2>

            <p className="font-medium md:text-[15px] text-[10px] p-4 md:mt-2  text-center">
              Hi, I’m Mufliha Azmi, a Computer Science graduate passionate about
              building modern and user-friendly web applications.I love turning
              ideas into interactive websites and exploring new technologies to
              bring stories to life online.
            </p>
          </motion.div>
          <div className="p-4 hidden">
            <img src={fast} className="h-[200px] md:visible"></img>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier easing
            }}
            viewport={{ once: true, amount: 0.8 }}
            className=" bg-white/15 backdrop-blur-xl text-gray-200 md:w-[600px] md:h-[250px]  w-[360px] flex flex-col items-center justify-center rounded-xl p-2 mt-10"
          >
            <h2 className="font-bold text-[25px] text-red-600 mr-10 mt-2 ">
              {" "}
              WHAT I DO{" "}
            </h2>

            <p className="font-medium md:text-[15px] text-[10px] p-8 items-center text-center ">
              I specialize in front-end development,creating responsive and
              user-friendly websites using HTML, CSS, Tailwind, React, and
              JavaScript. I enjoy bringing designs to life with clean code and
              smooth interactions. Currently, I’m expanding my skills into
              full-stack development to build complete web solutions.”
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default About;
