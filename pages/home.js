import React, {useEffect} from "react";
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
import {motion} from 'framer-motion';
// import "lottie-interactive/dist/lottie-interactive.js";


const Home = ({darkMode}) => {
  
  useEffect(() => {
    
    import("lottie-interactive/dist/lottie-interactive.js");
  
    
  }, [])
  
  

  return (
    <>
    <Head>
      <title>Devansh Khullar | Web Developer</title>
    </Head>
    {/* <Navbar/> */}
       <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.2,delay:1}} className="flex justify-center">
        <div className="md:w-1/3 md:h-1/3 w-1/2 h-1/2 " >
        <lottie-interactive
              path="/hello.json"
              autoplay
              loop
          />
        </div>
          
      </motion.div > 
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

export default Home;
