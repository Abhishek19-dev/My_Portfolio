import { Box, Image, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import React, { useRef } from "react";
import ReactAnimation from "./TechnologyAnimation.jsx/ReactAnimation";
import JavascriptAnimation from "./TechnologyAnimation.jsx/JavascriptAnimation";

import MongoDbAnimation from "./TechnologyAnimation.jsx/MongoDbAnimation";
import TailwindCssAnimation from "./TechnologyAnimation.jsx/TailwindAnimation";
import ChakraUiAnimation from "./TechnologyAnimation.jsx/ChakraUiAnimation";
import GsapAnimation from "./TechnologyAnimation.jsx/GsapAnimation";
import NextAnimation from "./TechnologyAnimation.jsx/NextJsAnimation";
import TypeScriptAnimation from "./TechnologyAnimation.jsx/TypeScript";
import ReduxAnimation from "./TechnologyAnimation.jsx/ReduxAnimation";
import SplineAnimation from "./TechnologyAnimation.jsx/SplineAnimation";
import HtmlAnimation from "./TechnologyAnimation.jsx/Html5Animation";
import ScssAnimation from "./TechnologyAnimation.jsx/ScssAnimation";
import SocketAnimation from "./TechnologyAnimation.jsx/SocketAnimation";
import PostmanAnimation from "./TechnologyAnimation.jsx/Postman";
import NodeAnimation from "./TechnologyAnimation.jsx/NodeAnimation";
import Skillpng from "../../images/skills.png";
import BackgroundImage from "../../images/background.jpg"
import { useGSAP } from "@gsap/react";
import TextSpan from "../HomeSection/TextSpan";
import gsap, { Power3 } from "gsap";

const Technology = () => {
    const blockRef = useRef(null)
    const mainBlockRef = useRef(null)
    const animationRef = useRef(null)
    const textSentence = "SKILLS".split("")

     useGSAP(()=>{
      gsap.from(mainBlockRef.current , {
        opacity:0,
        ease : Power3.easeInOut,
        delay:0.3,
        scrollTrigger:{
          trigger:mainBlockRef.current,
          start: "top 65%",
        }

      })
        gsap.from(blockRef.current , {
          opacity:0,
          x:-200,
          delay:1,
          duration : 1,
          delay:0.7,
          ease : Power3.easeInOut,
          scrollTrigger:{
            trigger:blockRef.current,
            start: "top 65%",
          }
        })
     },{scope : mainBlockRef.current})
  return (
    <>
      {/* <Box h="100%" bg="#bde0fe" display="flex"  bgImage={`url(${BackgroundImage})`} */}
      <Box h="100%"  ref={mainBlockRef} display="flex"  bg='#F5F0FF' justifyContent="space-between">
        <Box
          bg='#F5DDF2'
          ref={blockRef}
          display='flex'
          flexDirection='column'
          borderRadius="0% 50% 50% 0%"
          height="100%"
          w="110vh"
        >
         <Box marginLeft='1vh'>
         <Text>
         {
            textSentence.map((letter,index)=>   <TextSpan key={index}>
            {letter === " " ? "\u00A0":letter}
           </TextSpan>  )
         }
        </Text>
            <Image  ml='6vh' w='14vh' h='14vh' src={Skillpng}></Image>
         </Box>
         <Box>
            <Text color='black' fontFamily="Nunito" fontWeight={600}  mt='4vh' ml='2vh' mr='2vh'>I enjoy diving into and learning new things . Here's a list of technologies I have worked with</Text>
         </Box>
        </Box>
        <Box>
          <Wrap ref={animationRef} height="100%" marginLeft="3vh" justify="center">
            <WrapItem>
              <ReactAnimation />
            </WrapItem>
            <WrapItem>
              <JavascriptAnimation />
            </WrapItem>
            <WrapItem>
              <MongoDbAnimation />
            </WrapItem>
            <WrapItem>
              <TailwindCssAnimation />
            </WrapItem>
            ̀
            <WrapItem>
              <NodeAnimation />
            </WrapItem>
            <WrapItem>
              <ChakraUiAnimation />
            </WrapItem>
            <WrapItem>
              <GsapAnimation />
            </WrapItem>
            <WrapItem>
              <NextAnimation />
            </WrapItem>
            <WrapItem>
              <TypeScriptAnimation />
            </WrapItem>
            <WrapItem>
              <ReduxAnimation />
            </WrapItem>
            <WrapItem>
              <SplineAnimation />
            </WrapItem>
            <WrapItem>
              <HtmlAnimation />
            </WrapItem>
            <WrapItem>
              <ScssAnimation />
            </WrapItem>
            <WrapItem>
              <SocketAnimation />
            </WrapItem>
            <WrapItem>
              <PostmanAnimation />
            </WrapItem>
          </Wrap>
        </Box>
      </Box>
    </>
  );
};

export default Technology;
