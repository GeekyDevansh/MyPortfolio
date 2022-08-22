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


const slider = ({darkMode}) => {
  React.useEffect(() => {
    import("lottie-interactive/dist/lottie-interactive.js");
  });

  return (
    <>
    <Head>
      <title>Devansh Khullar | Web Developer</title>
    </Head>
    {/* <Navbar/> */}
      <div className="flex justify-center">
        <div className="md:w-1/3 w-8/12">
          <lottie-interactive
            path="/hello.json"
            interaction="play-on-show"
            loop
          />
          
        </div>
      </div >
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
