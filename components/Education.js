import React from "react";
import { Chrono } from "react-chrono";
import Image from "next/image";
import {motion} from 'framer-motion';

const Education = ({darkMode}) => {
  const items = [
    {
      title: "2020-Present",
    },
    {
      title: "2019-2020",
    },
    {
      title: "2017-2018",
    },
  ];
  const items1 = [
    {
      title: "2020-Present",
      cardTitle:"Dr B R Ambedkar National Institute of Technology, Jalandhar",
      cardSubtitle:"Bachelor of Technology (B.Tech)",
      cardDetailedText:"GPA : 8.61",    
    },
    {
      title: "2019-2020",
      cardTitle:"Ryan International School, Ghaziabad",
      cardSubtitle:"XII (CBSE)",
      cardDetailedText:"Grade : 94.8%",
    },
    {
      title: "2017-2018",
      cardTitle:"Ryan International School, Ghaziabad",
      cardSubtitle:"X (CBSE)",
      cardDetailedText:"Grade : 96.4%",
    },
  ];

  return (
    <>
      <motion.div id='education' initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.5}}  className={`  md:w-9/12 mx-auto my-10 ${darkMode?'bg-[#121212]':'bg-white'}`}>
        <h1 className={`font-semibold hidden md:block text-6xl ${darkMode?'text-white':'text-gray-900'}  text-center mb-10`}>
          Education
        </h1>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.5}}  className="h-full hidden md:block">
          <Chrono
            items={items}
            mode="VERTICAL_ALTERNATING"
            hideControls={true}
            fontSizes={{
              cardSubtitle: "1.2rem",
              cardDetailedText: "2rem",
              cardTitle: "1.3rem",
              title: "1rem",
            }}
            
            
          >
            <div>
              <div className=" absolute left-0 md:ml-2 md:text-xl font-semibold flex mt-2">
                <div className="">
                  {" "}
                  <Image src="/nit.png" alt="nit" width={80} height={88} />{" "}
                </div>
                <div className=" md:ml-4">
                  {" "}
                  Dr. B.R. Ambedkar National Institute of Technology Jalandhar{" "}
                </div>
              </div>
              <div className=" absolute md:left-20 md:top-20 mt-5 md:text-xl font-semibold text-[#0F52BA]" >
                Bachelor of Technology (B.Tech)
              </div>
              <div className=" absolute md:left-20 md:top-32 mt-5 text-lg font-medium" >
                GPA : <b> 8.61 </b>
              </div>
            </div>
            <div>
              <div className="absolute left-0 ml-2 mb-2 text-xl font-semibold flex mt-2">
                <div className="">
                  {" "}
                  <Image
                    src="/ryan.png"
                    alt="ryan"
                    width={70}
                    height={70}
                  />{" "}
                </div>
                <div className=" ml-2">
                  {" "}
                  Ryan International School, Ghaziabad{" "}
                </div>
              </div>
              <div className=" absolute left-24 top-20 mt-5 text-xl font-semibold text-[#0F52BA]" >
                XII (CBSE)
              </div>
              <div className=" absolute left-24 top-32 mt-5 text-lg font-medium" >
                Grade : <b> 94.8%</b>
              </div>
            </div>
            <div>
              <div className="absolute left-0 ml-2 mb-2 text-xl font-semibold flex mt-2">
                <div className="">
                  {" "}
                  <Image
                    src="/ryan.png"
                    alt="ryan"
                    width={70}
                    height={70}
                  />{" "}
                </div>
                <div className=" ml-2">
                  {" "}
                  Ryan International School, Ghaziabad{" "}
                </div>
              </div>
              <div className=" absolute left-24 top-20 mt-5 text-xl font-semibold text-[#0F52BA]" >
                X (CBSE)
              </div>
              <div className=" absolute left-24 top-32 mt-5 text-lg font-medium" >
                Grade : <b> 96.4%</b>
              </div>
            </div>
          </Chrono>
        </motion.div>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2}}  className={`md:hidden  mx-auto my-10 ${darkMode?'bg-[#121212]':'bg-white'}`}>
        <h1 className={`font-semibold text-6xl ${darkMode?'text-white':'text-gray-900'}  text-center mb-10`}>
          Education
        </h1>

      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2}} className=' mx-auto w-full'>
  <Chrono items={items1} mode="VERTICAL_ALTERNATING" hideControls={true}
            fontSizes={{
              cardSubtitle: "1rem",
              cardDetailedText: "1rem",
              cardTitle: "1.2rem",
              title: "1rem",
            }}/>
</motion.div>
</motion.div>
      </motion.div>

      

    </>
  );
};

export default Education;
