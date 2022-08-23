import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Contact = ({darkMode}) => {
  
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className={`w-10/12 mx-auto ${darkMode?'bg-[#121212]':'bg-white'}`}
        id="contact"
      >
        <motion.h1 initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:1}} className={`font-semibold text-6xl ${darkMode?'text-white':'text-gray-900'}  text-center`}>
          Contact Me
        </motion.h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="md:flex w-8/12 mx-auto justify-around"
      >
        <motion.div initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }} className="md:w-1/2 w-full">
          {" "}
          {darkMode?( <Image src="/contact-dark.gif" width={500} height={500} />):( <Image src="/contact.gif" width={500} height={500} />)}
         {" "}
        </motion.div>

        <form className="w-full max-w-lg md:mt-20" action="https://formsubmit.co/devanshkhullar11@gmail.com" method="POST">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                name="name"
                id="grid-first-name"
                type="text"
              />
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <input type="hidden" name="_captcha" value="false"/>
            <input type="hidden" name="_next" value="https://devansh-khullar.vercel.app/home" />
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                E-mail*
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="email"
                id="email"
                type="email"
                required='true'
              />
              {/* <p className="text-gray-600 text-xs italic">Some tips - as long as needed</p> */}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Message
              </label>
              <textarea
                className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                name="message"
                id="message"
              ></textarea>
              {/* <p className="text-gray-600 text-xs italic"> 
                Re-size can be disabled by set by resize-none / resize-y /
                resize-x / resize
               </p> */}
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="shadow bg-cyan-200 text-gray-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none hover:text-white py-2 px-4 rounded cursor-[url('/pointer.png'),_pointer]"
                type="submit"
              >
                Send
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </motion.div>
    </>
  );
};

export default Contact;
