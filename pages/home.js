import React from "react";
import SlickSlider from "../components/SlickSlider";
import Navbar from "../components/Navbar";
import About from '../components/About';
import Experience from '../components/Experience';
import Education from "../components/Education";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import Head from "next/head";
import Image from "next/image";
// import "lottie-interactive/dist/lottie-interactive.js";


const slider = ({darkMode}) => {
  

  return (
    <>
    <Head>
      <title>Devansh Khullar | Web Developer</title>
    </Head>
    {/* <Navbar/> */}
      {/* <div className="flex justify-center">
        <div className=" ">
          <Image src='/hello.gif' alt='hello' width={500} height={500} />
          
        </div>
      </div > */}
      <About darkMode={darkMode}/>
      <Experience darkMode={darkMode}/>
      <Education darkMode={darkMode}/>
      <SlickSlider  darkMode={darkMode}/>
      <Projects darkMode={darkMode}/>
      <Contact darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
      <ScrollToTop />
    </>
  );
};

export default slider;
