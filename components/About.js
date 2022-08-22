import React from 'react';
import {motion} from 'framer-motion';

const About = ({darkMode}) => {

  return (
    <>
        <motion.div id='about' initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2}} className={`w-9/12 mx-auto ${darkMode?'bg-[#121212]':'bg-white'}`} >

<motion.h1 initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:1}} className={`font-semibold ${darkMode?'text-white':'text-gray-900'} text-6xl text-center md:mt-10 md:mb-10 mb-5`} >About Me</motion.h1>

<motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2,delay:1}} className={`text-xl font-lg ${darkMode?'text-gray-100':'text-gray-900'}`} >
I&apos;m a Full Stack Developer located in India. Currently I&apos;m in my Pre-final year, pursuing my Bachelors in Technology (B.Tech) from <b> NIT Jalandhar</b>. I have a serious passion for developing and contributing to projects that solve a problem for a better future. <br /> <br />
Motivated and ambitious person, problem solver and a person with high attention to detail. <br /> <br />
Fan of pop music, love to play badminton and a public speaker.
</motion.p>
<br />
<div className='flex justify-between' >
    <motion.div className='hidden md:block' initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:1.2,delay:0.5}} >
    <a href="https://drive.google.com/file/d/1nNXNn63rUfBixWax--gNQgKS9OAGGuEL/view" target='_blank' rel="noreferrer"  className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 cursor-[url('/pointer.png'),_pointer]" >View My Resume.</a>
    </motion.div>
    <motion.div className='md:hidden block' initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2,delay:0.5}} >
    <a href="https://drive.google.com/file/d/1nNXNn63rUfBixWax--gNQgKS9OAGGuEL/view" target='_blank' rel="noreferrer"  className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 cursor-[url('/pointer.png'),_pointer]" >View My Resume.</a>
    </motion.div>
    <motion.div className='hidden md:block' initial={{opacity:0,x:100}} whileInView={{opacity:1,x:0}} transition={{duration:1.2,delay:1}}>
    <a href="#contact"  className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 cursor-[url('/pointer.png'),_pointer]" >Let&apos;s build something great.</a>
    </motion.div>
    <motion.div className='md:hidden block' initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2,delay:1}}>
    <a href="#contact"  className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 cursor-[url('/pointer.png'),_pointer]" >Let&apos;s build something great.</a>
    </motion.div>
</div>


</motion.div>
    </>
  )
}

export default About