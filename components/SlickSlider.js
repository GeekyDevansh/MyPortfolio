import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";

const SlickSlider = ({ darkMode }) => {
  var settingsLg = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 9000,
    pauseOnHover: false,
    cssEase: "linear",
  };

  var settingsSm = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    pauseOnHover: false,
    cssEase: "linear",
  };


  return (
    <>
      <div
        id="skills"
        className={`w-8/12 mx-auto ${darkMode ? "bg-[#121212]" : "bg-white"}`}
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className={`font-semibold text-6xl ${
            darkMode ? "text-white" : "text-gray-900"
          }  text-center mb-10 mt-10`}
        >
          Skills
        </motion.h1>
      </div>

      <div className=" overflow-x-hidden hidden md:block" >
        <Slider
          {...settingsLg}
          className={`${
            darkMode ? "text-gray-100" : "text-gray-900"
          }`}
        >
          <div className="mt-2">
            <Image
              src="/html.png"
              height={96}
              width={96}
              className="grayscale hover:grayscale-0 duration-200 "
            />
            <div className="ml-7 font-semibold">HTML</div>
          </div>

          <div className="mt-2">
            <Image
              src="/css.png"
              height={96}
              width={96}
              className="grayscale hover:grayscale-0 duration-200"
            />
            <div className="ml-8 font-semibold">CSS</div>
          </div>
          <div className="mt-2">
            <Image
              src="/javascript.png"
              height={96}
              width={96}
              className="grayscale hover:grayscale-0 duration-200"
            />
            <div className="ml-3 font-semibold">JavaScript</div>
          </div>
          <div className="mt-2">
            <Image
              src="/typescript.png"
              height={96}
              width={96}
              className="grayscale hover:grayscale-0 duration-200"
            />
            <div className="ml-3 font-semibold">TypeScript</div>
          </div>
          <div className="mt-2">
            <Image
              src="/react.png"
              height={96}
              width={96}
              className="grayscale hover:grayscale-0 duration-200"
            />
            <div className="ml-5 font-semibold">ReactJs</div>
          </div>
          <div className="mt-2">
            {darkMode?(<Image
              src="/next-dark.png"
              height={96}
              width={96}
              className="grayscale hover:grayscale-0 duration-200"
            />):(<Image
              src="/nextjs.png"
              height={96}
              width={96}
              className="grayscale hover:grayscale-0 duration-200"
            />)}
            
            <div className="ml-5 font-semibold">NextJs</div>
          </div>
          <div className="mt-2">
            <Image
              src="/tailwindcss.png"
              height={96}
              width={96}
              className="grayscale hover:grayscale-0 duration-200"
            />
            <div className="ml-1 font-semibold">TailwindCSS</div>
          </div>
          <div className="mt-2">
            <Image
              src="/nodejs.png"
              height={96}
              width={96}
              className="grayscale hover:grayscale-0 duration-200"
            />
            <div className="ml-5 font-semibold">NodeJs</div>
          </div>
          <div className="mt-2">
            <Image
              src="/mongodb.png"
              height={96}
              width={96}
              className="grayscale hover:grayscale-0 duration-200"
            />
            <div className="ml-3 font-semibold">MongoDB</div>
          </div>
          <div className="mt-2">
            <Image
              src="/aws.png"
              height={96}
              width={96}
              className="grayscale hover:grayscale-0 duration-200"
            />
            <div className="ml-8 font-semibold">AWS</div>
          </div>
          <div className="mt-2">
            <Image
              src="/git.png"
              height={96}
              width={96}
              className="grayscale hover:grayscale-0 duration-200"
            />
            <div className="ml-9 font-semibold">Git</div>
          </div>
        </Slider>
      </div>

      <div className=" overflow-x-hidden md:hidden block" >
        <Slider {...settingsSm} className="">
          <div>
            <Image
              src="/html.png"
              height={72}
              width={72}
              className="grayscale pt-2 hover:grayscale-0 duration-500"
            />
          </div>
          <div>
            <Image
              src="/css.png"
              height={72}
              width={72}
              className="grayscale pt-2 hover:grayscale-0 duration-500"
            />
          </div>
          <div>
            <Image
              src="/javascript.png"
              height={72}
              width={72}
              className="grayscale pt-2 hover:grayscale-0 duration-500"
            />
          </div>
          <div>
            <Image
              src="/react.png"
              height={72}
              width={72}
              className="grayscale pt-2 hover:grayscale-0 duration-500"
            />
          </div>
          <div className="">
          {darkMode?(<Image
              src="/next-dark.png"
              height={72}
              width={72}
              className="grayscale hover:grayscale-0 duration-200"
            />):(<Image
              src="/nextjs.png"
              height={72}
              width={72}
              className="grayscale hover:grayscale-0 duration-200"
            />)}
          </div>
          <div>
            <Image
              src="/nodejs.png"
              height={72}
              width={72}
              className="grayscale pt-2 hover:grayscale-0 duration-500"
            />
          </div>
          <div>
            <Image
              src="/mongodb.png"
              height={72}
              width={72}
              className="grayscale pt-2 hover:grayscale-0 duration-500"
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default SlickSlider;
