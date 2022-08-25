import React from "react";
import Image from "next/image";
import {motion} from 'framer-motion';

const Experience = ({darkMode}) => {
  return (
    <>
      <motion.div id='experience' initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2}} className={`w-9/12 mx-auto my-10 ${darkMode?'bg-[#121212]':'bg-white'}`}>
        <motion.h1 initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:1.2,delay:1.2}} className={`hidden md:block font-semibold text-6xl ${darkMode?'text-white':'text-gray-900'}  text-center md:mb-10 mb-6`}>
          Experience
        </motion.h1 >
        <motion.h1 initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:1.2,delay:0.5}} className={`md:hidden block font-semibold text-6xl ${darkMode?'text-white':'text-gray-900'}  text-center md:mb-10 mb-6`}>
          Experience
        </motion.h1 >

        <div className="md:flex md:justify-between">
          <div >
            <motion.a 
              initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:1.2,delay:1.5}}
              href="https://www.propreturns.com/"
              target='_blank' rel="noreferrer"
              className=" hidden cursor-[url('/pointer.png'),_pointer] md:flex justify-center"
            >
              {darkMode?(<Image
                src="/logo1.png"
                alt="PropReturns"
                width={184.5}
                height={55}
              />):(<Image
                src="/propreturns.png"
                alt="PropReturns"
                width={184.5}
                height={55}
              />)}
              
            </motion.a>{" "}
            <motion.a 
              initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2,delay:0.75}}
              href="https://www.propreturns.com/"
              target='_blank' rel="noreferrer"
              className="md:hidden cursor-[url('/pointer.png'),_pointer] flex justify-center"
            >
              {darkMode?(<Image
                src="/logo1.png"
                alt="PropReturns"
                width={184.5}
                height={55}
              />):(<Image
                src="/propreturns.png"
                alt="PropReturns"
                width={184.5}
                height={55}
              />)}
              
            </motion.a>{" "}
            <br />
            <motion.h1 initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:1.2,delay:2.5}} className={`hidden md:flex font-semibold md:flex-none md:justify-start justify-center text-xl ${darkMode?'text-gray-100':'text-gray-800'}`}>
              {" "}
              SDE Intern{" "}
            </motion.h1>
            <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2,delay:1}} className={`md:hidden font-semibold md:flex-none md:justify-start flex justify-center text-xl ${darkMode?'text-gray-100':'text-gray-800'}`}>
              {" "}
              SDE Intern{" "}
            </motion.h1>
          </div>
          <motion.div initial={{opacity:0,x:100}} whileInView={{opacity:1,x:0}} transition={{duration:1.2,delay:2}} className={`md:mt-5 mt-2 md:flex-none md:justify-start md:block hidden justify-center text-lg font-semibold  ${darkMode?'text-gray-100':'text-gray-500'}`}>
            June 2022 - July 2022
          </motion.div>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2,delay:1.25}} className={`md:mt-5 mt-2 md:hidden md:justify-start flex justify-center text-lg font-semibold  ${darkMode?'text-gray-100':'text-gray-500'}`}>
            June 2022 - July 2022
          </motion.div>
        </div>
        <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2,delay:1.25}} className={`mt-5 text-2xl font-semibold ${darkMode?'text-gray-100':'text-gray-900'} tracking-widest`}>
          Tasks/Roles :
        </motion.h1>
        <div className="hidden md:block mx-2">
          <ul className={`list-disc mx-10 mt-5 text-lg font-lg ${darkMode?'text-gray-100':'text-gray-700'}`}>
            <motion.li initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2,delay:1.2}} >
              Developed reusable components for the marketplace product using{" "}
              <b> NextJS </b> and <b>TailwindCSS</b> and saved the user&apos;s
              inquiries to <b>MongoDB</b>.
            </motion.li>
            <motion.li initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2,delay:1.25}} className="md:mt-0 mt-2">
              Automated watermarking of uploaded images on <b>AWS S3 bucket</b>{" "}
              through lambda function written in <b>NodeJS</b>.
            </motion.li>
            <motion.li initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2,delay:1.5}} className="md:mt-0 mt-2">
              <b>Analyzed</b> and <b>Optimized</b> pages for best performance,
              improving the overall performance by <b>36%</b>.
            </motion.li>
            <motion.li initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2,delay:1.75}} className="md:mt-0 mt-2">
              Collaborated in <b>Search Engine Optimization</b> tasks such as{" "}
              <b>implementing breadcrumbs</b>, <b>adding schema markup</b> and{" "}
              <b>sitemap</b> which increased the overall <b>SEO score</b> to{" "}
              <b>95</b>.
            </motion.li>
          </ul>
        </div>
        <div className="md:hidden block mx-2">
          <ul className={`list-disc mx-10 mt-5 text-lg font-lg ${darkMode?'text-gray-100':'text-gray-700'}`}>
            <motion.li initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2,delay:1.25}} >
              Developed reusable components for the marketplace product using{" "}
              <b> NextJS </b> and <b>TailwindCSS</b> and saved the user&apos;s
              inquiries to <b>MongoDB</b>.
            </motion.li>
            <motion.li initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2,delay:1.5}} className="md:mt-0 mt-2">
              Automated watermarking of uploaded images on <b>AWS S3 bucket</b>{" "}
              through lambda function written in <b>NodeJS</b>.
            </motion.li>
            <motion.li initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2,delay:1.75}} className="md:mt-0 mt-2">
              <b>Analyzed</b> and <b>Optimized</b> pages for best performance,
              improving the overall performance by <b>36%</b>.
            </motion.li>
            <motion.li initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2,delay:2}} className="md:mt-0 mt-2">
              Collaborated in <b>Search Engine Optimization</b> tasks such as{" "}
              <b>implementing breadcrumbs</b>, <b>adding schema markup</b> and{" "}
              <b>sitemap</b> which increased the overall <b>SEO score</b> to{" "}
              <b>95</b>.
            </motion.li>
          </ul>
        </div>
        <motion.div initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:1.2}} className="mt-5 " >  

        <a  href="https://drive.google.com/file/d/1Uz7mrjHVdvaLUlVrLpd6rbBLrpLBx19v/view" target='_blank' rel="noreferrer" className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 cursor-[url('/pointer.png'),_pointer]"> View Certificate</a>
        </motion.div>
      </motion.div>
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2,delay:1}} className="w-8/12 mx-auto hidden md:block" >
        <Image src='/somil.png' width={1169} height={299} />
      </motion.div>
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2,delay:1}} className="w-8/12 mx-auto mt-10 hidden md:block" >
        <Image src='/syed.png' width={1169} height={299} />
      </motion.div>

      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2,delay:1}} className="relative object-cover w-80 h-24 mx-auto md:hidden block" >
        <Image src='/somil.png' layout='fill' />
      </motion.div>
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2,delay:1}} className=" relative object-cover w-80 h-24 mx-auto mt-10 md:hidden block" >
        <Image src='/syed.png' layout='fill' />
      </motion.div>

    </>
  );
};

export default Experience;
