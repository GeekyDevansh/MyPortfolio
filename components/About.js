import React from 'react';
import {motion} from 'framer-motion';
import Skeleton from 'react-loading-skeleton';

const About = ({darkMode}) => {

  return (
    <>
        <motion.div id='about' initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2}} className={`w-9/12 mx-auto ${darkMode?'bg-black':'bg-white'}`} >

<motion.h1 initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:1}} className={`font-semibold ${darkMode?'text-white':'text-gray-900'} text-6xl text-center md:mt-10 md:mb-10 mb-5`} >About Me</motion.h1>

<motion.p className={`text-xl text-center font-lg ${darkMode?'text-gray-400':'text-gray-900'}`} >
  <motion.div initial={{opacity:0}} whileInView={{opacity:1}} >

I&apos;m a Full Stack Developer located in India. Currently I&apos;m in my Pre-final year, pursuing my Bachelors in Technology (B.Tech) from <b> NIT Jalandhar</b>. I am passionate for developing and contributing to projects that solve a problem for a better future. <br /> <br />
  </motion.div>
  <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2, delay:0.2}}>
Motivated, ambitious, a person with high aptitude for problem solving who pays high attention to detail. <br /> <br />
  </motion.div>
  <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2, delay:0.4}}>

Fan of pop music, love to play badminton and a public speaker.
  </motion.div>
</motion.p>
<br />
<div className='flex justify-between' >
    <motion.div className='hidden md:block' initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:1.2}} >
    <a href="https://drive.google.com/file/d/1umjYhyOaLjeg6zk-lYwofJFLjd0T-t8m/view?usp=sharing" target='_blank' rel="noreferrer"  className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 cursor-[url('/pointer.png'),_pointer]" >View My Resume.</a>
    </motion.div>
    <motion.div className='md:hidden block' initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2}} >
    <a href="https://drive.google.com/file/d/1umjYhyOaLjeg6zk-lYwofJFLjd0T-t8m/view?usp=sharing" target='_blank' rel="noreferrer"  className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 cursor-[url('/pointer.png'),_pointer]" >View My Resume.</a>
    </motion.div>
    <motion.div className='hidden md:block' initial={{opacity:0,x:100}} whileInView={{opacity:1,x:0}} transition={{duration:1.2}}>
    <a href="#contact"  className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 cursor-[url('/pointer.png'),_pointer]" >Let&apos;s build something great.</a>
    </motion.div>
    <motion.div className='md:hidden block' initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2}}>
    <a href="#contact"  className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 cursor-[url('/pointer.png'),_pointer]" >Let&apos;s build something great.</a>
    </motion.div>
</div>


</motion.div>
    </>
  )
}

export default About