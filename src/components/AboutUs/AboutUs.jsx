import {
  Box,
  Button,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import AboutMeImage from "../../images/portfolioAboutUs.jpg";
import ProfileImage from "../../images/profile.jpg"
import ProfileImage2 from "../../images/profile.png"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap, { Power3 } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger)
const AboutUs = () => {

  const profileRef = useRef(null)
  const profileTextRef = useRef(null)

  useGSAP(() => {
    if (profileRef.current) {
      gsap.from(profileRef.current, {
        x: -600,
        duration: 1,
        delay:0.5,
        scrollTrigger: {
          trigger: profileRef.current,
          // markers:true,
          start:"top 75%"
        },
        ease:Power3.easeOut
      });
    }
    if (profileTextRef.current) {
      gsap.from(profileTextRef.current, {
        x: 800,
        duration: 1,
        delay:1,
        scrollTrigger: {
          trigger: profileTextRef.current,
          start:"top 75%",
          ease:Power3.easeOut,
        },
       
      });
    }
  }, { scope: profileRef.current });

  return (
    <>
      <Box
        p="4vh"
        display="flex"
        flexDirection="row"
        w="90%"
        ml="8vh"
        //  bg="#F6E3F0"
        // bg="#F4DCEF"
        bgGradient="linear(to-b, #A0C4FF, #FFFFFF)"
        border="1px solid transparent"
        borderRadius="xl"
        h="68vh"
        justifyContent="center"
      >
        <Box ref={profileRef} p="2vh" w="35%" h="100%">
          <Image   bg='transparent'  mt="2vh" w="100%" h="100%" src={ProfileImage2}></Image>
        </Box>
        <Box ref={profileTextRef} ml="4vh" display="flex" flexDirection="column" w="40%" h="100%">
          <Text
            // bgGradient="linear(to-r, #001F3F, #00BFFF)"
            // bgGradient="linear(to-r, #311B92, #9C27B0)"
            bgGradient="linear(to-r, #004D40, #00E676)"
            bgClip="text"
            fontFamily="Poppins"
            fontSize="5vh"
            fontWeight={800}
          >
            About Me
          </Text>
          <Text  bgGradient="linear(to-r, #001F3F, #00BFFF)" bgClip="text" mt="2vh" fontFamily="Stylish" fontSize="3vh" fontWeight={500}>
            Hi , I'm here To Power Up Your Next Project
          </Text>
          <Box mt="2vh">
            <Text color="#000000" fontFamily="Nunito Sans" fontWeight={400} fontSize="2.1vh">
              Hey! 👋 I'm Abhishek Padiyar, a third-year BTech student and a
              seasoned full-stack developer with 2 years of experience.
              Proficient in both frontend and backend technologies, I specialize
              in crafting delightful user interfaces using the magic of React.
            </Text>
            <Text
              mt="2vh"
              fontFamily="Nunito Sans"
              fontWeight={400}
              fontSize="2.1vh"
            >
              My passion lies in continuous improvement, and I thrive on
              creating innovative applications and websites. A quick learner, I
              collaborate closely with clients to deliver efficient, scalable,
              and user-friendly solutions that tackle real-world problems.
            </Text>
            <Text
              mt="2vh"
              fontFamily="Nunito Sans"
              fontWeight={400}
              fontSize="2.1vh"
            >
              Let's collaborate and bring your ideas to life!
            </Text>
          </Box>
          <Button color="white" mt="2vh" w="18vh" bg="red">
            Resume
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default AboutUs;
