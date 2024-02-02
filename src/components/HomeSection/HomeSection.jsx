import React, { useRef } from "react";
import TextSpan from "./TextSpan";
import { Box, Button, ButtonGroup, Image, Text } from "@chakra-ui/react";
import DownloadLogo from "../../images/download.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HomeSection = ({ tl, ease }) => {

  const InfoRef = useRef(null)
  const textRef = useRef(null);
  const sentence1 = "Hi , I'm, ".split("");
  const sentence2 = "Abhishek Padiyar,".split("");
  const sentence3 = "A Full Stack Developer.".split("");

  // const color1 = "#000000"
  // const gradient1 = "linear-gradient(to right, #6A0572, #AB83A1)";
  // const color2 = "#56F1B0"
  // const color2 = "#000000"

  // useGSAP(()=>{
  //   tl.from(textRef.current ,3, {
  //     // x:-900,
  //     opacity:0,
  //     duration:0.5,
  //     delay:-0.2
  //   })
  // },{scope:textRef.current})



  document.addEventListener("mousemove",function(e){

    var width = window.innerWidth
    var height = window.innerHeight

    var positionX = (e.clientX / width) - 0.55
     var positionY = (e.clientY / height) - 0.55
    gsap.to(InfoRef.current,{
       rotationY : positionX * 100,
       rotationX : positionY * 100,
       ease:"none"
    })
})


  return (
    <>
      <Box display="flex">
        <Box ref={textRef} marginTop="10vw">
          <Text>
            {sentence1.map((letter, index) => (
              <TextSpan key={index}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            ))}
          </Text>
          <Text color="black" marginTop="-1.5rem">
            {sentence2.map((letter, index) => (
              <TextSpan key={index}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            ))}
          </Text>
          <Text marginTop="-1.5rem">
            {sentence3.map((letter, index) => (
              <TextSpan key={index}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            ))}
          </Text>
          <ButtonGroup
            _hover={{ backgroundColor: "#E6146E" }}
            bg="#D34884"
            p="1.5vh"
            borderRadius="lg"
          >
            <Image width="2vw" height="2vw" src={DownloadLogo}></Image>
            <Text
              mt="0.5vh"
              fontFamily="Poppins"
              color="white"
              fontSize="2vh"
              fontWeight={600}
            >
              Download CV
            </Text>
          </ButtonGroup>
        </Box>
        {/* <Box
          ml="6vh"
          whiteSpace="pre-wrap"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          p={7}
          border="1px solid transparent"
          borderRadius="xl"
          width="64vh"
          height="50vh"
          mt="10rem"
          bg="#EEE6FC"
        >
          <Text fontWeight={300} color="#6C82F2" fontFamily="Montserrat">
            {"1 class "}
            <Text as="span" fontWeight={700}>
              Person
            </Text>
            {" {"}
          </Text>
          <Text color="#800000" fontFamily="Montserrat">
            {"2     constructor() {"}
          </Text>
          <Text color="#800000" fontWeight={300} fontFamily="Montserrat">
            {'3        this.name = "'}
            <Text as="span" fontWeight={700}>
              Abhishek Padiyar
            </Text>
            {'";'}
          </Text>
          <Text fontWeight={300} color="#800000" fontFamily="Montserrat">
            {"4        this.skills = ["}
            <Text as="span" fontWeight={700}>
              "Design"
            </Text>
            {", "}
            <Text as="span" fontWeight={700}>
              "Dev"
            </Text>
            {"];"}
          </Text>
          <Text fontWeight={300} color="#800000" fontFamily="Montserrat">
            {"5        this.hobbies = ["}
            <Text as="span" fontWeight={700}>
              "Sports"
            </Text>
            {", "}
            <Text as="span" fontWeight={700}>
              "Coding Challenges"
            </Text>
            {"];"}
          </Text>
          <Text fontWeight={300} color="#800000" fontFamily="Montserrat">
            {"6        this.personalityTraits = ["}
            <Text as="span" fontWeight={700}>
              "Creative"
            </Text>
            {", "}
            <Text as="span" fontWeight={700}>
              "Team Player"
            </Text>
            {"];"}
          </Text>
          <Text color="#800000" fontWeight={300} fontFamily="Montserrat">
            {"7        this.whyHireMe = ["}
            <Text as="span" fontWeight={700}>
              "Innovative"
            </Text>
            {", "}
            <Text as="span" fontWeight={700}>
              "Problem-solver"
            </Text>
            {"];"}
          </Text>

          <Text color="#800000" fontFamily="Montserrat">
            {"8      }"}
          </Text>
          <Text color="#800000" fontFamily="Montserrat">
            {"9   }"}
          </Text>
        </Box> */}



        {/* <Box
        transformStyle="preserve-3d"
        zIndex={1}
          ml="6vh"
          whiteSpace="pre-wrap"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          p={7}
          ref={InfoRef}
          border="1px solid transparent"
          borderRadius="xl"
          width="64vh"
          height="50vh"
          mt="10rem"
          bg="#EEE6FC"
          // bg="rgba(238, 246, 252, 0.5)"
        >
          <Text fontWeight={300} color="#6C82F2" fontFamily="Montserrat">
            {"1 class "}
            <Text as="span" fontWeight={700}>
              Person
            </Text>
            {" {"}
          </Text>
          <Text  fontWeight={300} color="#6C82F2" fontFamily="Montserrat">
            {"2     constructor() {"}
          </Text>
          <Text color="#6C82F2" fontWeight={300} fontFamily="Montserrat">
            {'3        this.name = "'}
            <Text as="span" fontWeight={700}>
              Abhishek Padiyar
            </Text>
            {'";'}
          </Text>
          <Text fontWeight={300} color="#6C82F2" fontFamily="Montserrat">
            {"4        this.skills = ["}
            <Text as="span" fontWeight={700}>
              "Design"
            </Text>
            {", "}
            <Text as="span" fontWeight={700}>
              "Dev"
            </Text>
            {"];"}
          </Text>
          <Text fontWeight={300} color="#6C82F2" fontFamily="Montserrat">
            {"5        this.hobbies = ["}
            <Text as="span" fontWeight={700}>
              "Sports"
            </Text>
            {", "}
            <Text as="span" fontWeight={700}>
              "Coding Challenges"
            </Text>
            {"];"}
          </Text>
          <Text fontWeight={300} color="#6C82F2" fontFamily="Montserrat">
            {"6        this.personalityTraits = ["}
            <Text as="span" fontWeight={700}>
              "Creative"
            </Text>
            {", "}
            <Text as="span" fontWeight={700}>
              "Team Player"
            </Text>
            {"];"}
          </Text>
          <Text color="#6C82F2" fontWeight={300} fontFamily="Montserrat">
            {"7        this.whyHireMe = ["}
            <Text as="span" fontWeight={700}>
              "Innovative"
            </Text>
            {", "}
            <Text as="span" fontWeight={700}>
              "Problem-solver"
            </Text>
            {"];"}
          </Text>

          <Text  fontWeight={300} color="#6C82F2" fontFamily="Montserrat">
            {"8      }"}
          </Text>
          <Text  fontWeight={300} color="#6C82F2" fontFamily="Montserrat">
            {"9   }"}
          </Text>
        </Box> */}
      </Box>
    </>
  );
};

export default HomeSection;
