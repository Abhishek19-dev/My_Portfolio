import "./App.css";
import Navbar from "../src/components/Navbar";
import HomeSection from "../src/components/HomeSection/HomeSection";
import { useEffect, useRef, useState } from "react";
import Animation from "../src/components/Animation";
import { gsap, Power3 } from "gsap";
import { Box } from "@chakra-ui/react";
import Technology from "./components/Technologies/Technology";
import Preloader from "./components/PreLoader/PreLoader";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();

  const [isLoading, setIsLoading] = useState(true);
  const [finalLoading, setFinalLoading] = useState(true);
  const handleLoading = () => {
    setTimeout(()=>{
      setIsLoading(false)
    },4000)
    
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);
  
  return (
    <>
      {
  isLoading? (
    <div>
     <Preloader tl={tl} ease={ease} isLoading={isLoading} />
    </div>
  ) : (
    <div>
      <Navbar tl={tl} ease={ease} />
      <Box height='55vw' backgroundColor='#F5F0FD' position='relative'>
      {/* <Box height='55vw'    bgGradient="linear(to-b, #A0C4FF, #FFFFFF)" position='relative'> */}
      {/* <Box height='55vw' backgroundColor='#FEF0F8' position='relative'> */}
      {/* <Box height='55vw' backgroundColor='#F3FFEF' position='relative'> */}
      {/* <Box height='55vw'  position='relative'> */}
    <Box>
    <Animation   />
    </Box>
      
        <Box className="home-section">
          <HomeSection  ease={ease} tl={tl} />
        </Box>
      </Box>
      <Box backgroundColor='#F5F0FD'>
      <AboutUs />
    </Box>
      <Box>
        <Projects />
      </Box>
      <Box mt='7vh' height='28rem'>
        <Technology  />
      </Box>
      <Box>
        <Contact />
      </Box>
    </div>
  )
}
     
    </>
  );
}

export default App;
