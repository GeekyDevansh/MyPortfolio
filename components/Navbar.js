import React from "react";
import Image from "next/image";
import {motion} from 'framer-motion';
import Link from 'next/link';
import {BsFillSunFill} from 'react-icons/bs';
import {BsFillMoonFill} from 'react-icons/bs';

const Navbar = ({ darkMode, handleOnClick }) => {

  return (
    <>
      <header className="text-gray-500 hidden md:block sticky top-0 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 z-10 body-font">
        <div className="  container w-9/12 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <motion.div initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} transition={{duration:1.5}} >

          <Link  href='/' className=" cursor-[url('/pointer.png'),_pointer] flex title-font font-medium items-center mb-4 md:mb-0">
          <a className="cursor-[url('/pointer.png'),_pointer]" >  {darkMode?( <Image src='/dk-dark.png' width={150} height={30} />):( <Image src='/dk.png' width={150} height={30} priority={true} />)}</a>
           
            
          </Link>
          </motion.div>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <motion.div initial={{opacity:0,y:-50}} animate={{opacity:1,y:0}} transition={{duration:1}} >

            <a
              href="#about"
              className={`mr-5 ml-5 ${
                darkMode ? "text-gray-100" : "text-gray-600"
              } ${
                darkMode ? "hover:text-gray-400" : "hover:text-gray-800"
              } hover:font-semibold cursor-[url('/pointer.png'),_pointer]`}
              >
              About Me
            </a>
              </motion.div>
              <motion.div initial={{opacity:0,y:-50}} animate={{opacity:1,y:0}} transition={{duration:1,delay:0.5}}>

            <a
              href="#experience"
              className={`mr-5 ml-5 ${darkMode?'text-gray-100':'text-gray-600'} ${
                darkMode ? "hover:text-gray-400" : "hover:text-gray-800"
              } hover:font-semibold cursor-[url('/pointer.png'),_pointer]`}
              >
              Experience
            </a>
            </motion.div>
            <motion.div initial={{opacity:0,y:-50}} animate={{opacity:1,y:0}} transition={{duration:1,delay:1}}>

            <a
              href="#education"
              className={`mr-5 ml-5 ${darkMode?'text-gray-100':'text-gray-600'} ${
                darkMode ? "hover:text-gray-400" : "hover:text-gray-800"
              } hover:font-semibold cursor-[url('/pointer.png'),_pointer]`}
              >
              Education
            </a>
              </motion.div>
              <motion.div initial={{opacity:0,y:-50}} animate={{opacity:1,y:0}} transition={{duration:1,delay:1.2}}>

            <a
              href="#skills"
              className={`mr-5 ml-5 ${darkMode?'text-gray-100':'text-gray-600'} ${
                darkMode ? "hover:text-gray-400" : "hover:text-gray-800"
              } hover:font-semibold cursor-[url('/pointer.png'),_pointer]`}
              >
              Skills
            </a>
              </motion.div>
              <motion.div initial={{opacity:0,y:-50}} animate={{opacity:1,y:0}} transition={{duration:1,delay:1.5}}>

            <a
              href="#projects"
              className={`mr-5 ml-5 ${darkMode?'text-gray-100':'text-gray-600'} ${
                darkMode ? "hover:text-gray-400" : "hover:text-gray-800"
              } hover:font-semibold cursor-[url('/pointer.png'),_pointer]`}
              >
              Projects
            </a>
              </motion.div>
              <motion.div initial={{opacity:0,y:-50}} animate={{opacity:1,y:0}} transition={{duration:1,delay:1.7}}>

            <a
              href="#contact"
              className={`mr-5 ml-5 ${darkMode?'text-gray-100':'text-gray-600'} ${
                darkMode ? "hover:text-gray-400" : "hover:text-gray-800"
              } hover:font-semibold cursor-[url('/pointer.png'),_pointer]`}
              >
              Contact Me
            </a>
              </motion.div>
          </nav>
          <motion.button
            initial={{opacity:0,x:100}} animate={{opacity:1,x:0}} transition={{duration:1.5}} 
            onClick={handleOnClick}
            className="inline-flex items-center border-2 p-2 border-gray-300 focus:outline-none rounded-full  mt-4 md:mt-0 cursor-[url('/pointer.png'),_pointer]"
          >
            {/* {darkMode ? (
              <Image src={sun} width={24} height={24} />
            ) : (
              <Image src={moon} width={24} height={24} />
            )} */}
            {darkMode ? (
              <BsFillSunFill size={24}/>
            ) : (
              <BsFillMoonFill size={24}/>
            )}
          </motion.button>
        </div>
      </header>
      
      <header className="text-gray-500 md:hidden sticky top-0 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 z-10 body-font">
        <div className="p-5">
          <motion.div  initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} transition={{duration:1.5}}>
            <Link href='/' >
          <a className=" cursor-[url('/pointer.png'),_pointer] flex title-font font-medium items-center mb-4 md:mb-0">
            {darkMode?( <Image src='/dk-dark.png' width={150} height={30} />):( <Image src='/dk.png' width={150} height={30} />)}
           
            
          </a>
            </Link>
          </motion.div>
          
          <motion.button
             initial={{opacity:0,x:50}} animate={{opacity:1,x:0}} transition={{duration:1.5}} 
            onClick={handleOnClick}
            className="inline-flex items-center absolute top-0 right-0 m-5 border-2 p-2 border-gray-300 focus:outline-none rounded-full text-base mt-4 md:mt-0 cursor-[url('/pointer.png'),_pointer]"
          >
            {darkMode ? (
              <BsFillSunFill size={24}/>
            ) : (
              <BsFillMoonFill size={24} />
            )}
          </motion.button>
        </div>
      </header>


    </>
  );
};

export default Navbar;
