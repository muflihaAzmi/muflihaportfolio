import React from "react";
import insta from "../assets/instagram.png";
import git from "../assets/github.png";
import linkdin from "../assets/message.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qc0wzib", "template_ugpfhmv", form.current, {
        publicKey: "OSdoB2iCBtRE9rJrh",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <section id="contact">
        <h1 className="text-center  text-3xl font-bold mb-8 text-white  md:mt-65 mt-40">
          CONTACT ME
        </h1>
        <div className=" md:w-[700px] w-[400px] md:ml-80 mt-20">
          <div className="text-white font-semibold md:ml-50 mt-10 ml-10  md:w-[600px]   ">
            <p className=" flex  ">
              Open to exciting opportunities where I can learn, grow, and
              contribute
            </p>
          </div>
          <form
            div
            className="flex flex-col gap-2 ml-2 md:items-center md:justify-center md:ml-50  mt-10"
            ref={form}
           onSubmit={sendEmail}
          >
            <input
              type="text"
              className="font-semibold w-[400px] px-2 py-2 bg-white/15 backdrop-blur-xl rounded-xl "
              placeholder="your name"
              name="your_name"
            />
            <input
              type="email"
              className="font-semibold w-[400px] px-2 py-2 bg-white/15 backdrop-blur-xl rounded-xl "
              placeholder="you Email"
              name="your_email"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="your message"
              className="font-semibold w-[400px] px-2 py-2 bg-white/15 backdrop-blur-xl rounded-xl border-none"
             
            ></textarea>
            <button
              type="submit"
              value="send"
              className="bg-white text-blue-900 px-6 py-2 w-[100px] ml-40 md:ml-0 rounded-2xl hover:bg-slate-300 md:transform md:transition md:duration-300 hover:scale-105 "
              
            >
          
              Submit
            </button>
            <div className="flex w-[50px] h-[50px]  flex-row gap-6 justify-center mt-10 ml-45 md:ml-0 ">
              <img
                src={insta}
                className=" w-[40px] h-[40px]  hover:scale-110 duration-300"
              ></img>
              <img
                src={git}
                className=" w-[40px] h-[40px] hover:scale-110 duration-300"
              />
              <img
                src={linkdin}
                className=" w-[40px] h-[40px] hover:scale-110 duration-300"
              ></img>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
