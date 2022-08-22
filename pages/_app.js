import Navbar from "../components/Navbar";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/index.css";
import {useState,useEffect} from 'react'
import {motion} from 'framer-motion';




function MyApp({ Component, pageProps,router}) {

  

  const [darkMode,setDarkMode]=useState(false);
  
  const handleOnClick= ()=>{

      setDarkMode(darkMode => !darkMode);
      console.log(darkMode);

  }
  


  return<>
  {/* <Navbar darkMode={darkMode} setDarkMode={setDarkMode}  />
  <Filters darkMode={darkMode}  /> */}
  <motion.div key={router.route} className={`${darkMode?'bg-[#121212]':'bg-white'}`} initial="pageInitial" animate="pageAnimate" variants={{
    pageInitial: {
      opacity:0
      
    },
    pageAnimate: {
      opacity:1
    },
  }} >
    {router.pathname!='/'&&(<Navbar darkMode={darkMode} handleOnClick={handleOnClick}/>)}
  <Component darkMode={darkMode} {...pageProps} />
  </motion.div>
  </> 
}

export default MyApp
