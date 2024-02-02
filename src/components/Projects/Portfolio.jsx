import { Box, IconButton, Image, Text, Wrap } from "@chakra-ui/react";
import React, { useRef } from "react";
import DevstoreImage from "../../images/devstore.png";
import { UilGithub } from "@iconscout/react-unicons";
import { UilEye } from "@iconscout/react-unicons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Power4 } from "gsap";

const Portfolio = () => {
  const PortfolioRef = useRef(null);
  const mainPortfolioRef = useRef(null);



   useGSAP(()=>{
      // tlProject.from(mainDevStoreRef.current , {
      gsap.from(mainPortfolioRef.current , {
        opacity:0,
        duration:5,
        scrollTrigger: {
          trigger: mainPortfolioRef.current,
          markers:true,
          start: "top 70%",
          // end: "+=500"
        },
        ease:Power4.easeOut
      })
      gsap.from(PortfolioRef.current,{
        x:-600,
        opacity:0,
        duration:1,
        delay:0.5,
        scrollTrigger: {
          trigger: PortfolioRef.current,
          markers:true,
          start: "top 70%",
        },
      })
    },{scope:mainPortfolioRef.current})


  document.addEventListener("mousemove", function (e) {
    var width = window.innerWidth;
    var height = window.innerHeight;

    var positionX = e.clientX / width - 0.55;
    var positionY = e.clientY / height - 0.55;
    gsap.to(PortfolioRef.current, {
      rotationY: positionX * 80,
      rotationX: -positionY * 80,
      translateZ: "100px",
      ease: "none",
    });
  });
  return (
    <>
      <Box
        position="relative"
        display="flex"
        ref={mainPortfolioRef}
        flexDirection="row"
        w="100%"
        h="60vh"
      >
        <Box
          bg="white"
          position="absolute"
          w="68%"
          h="100%"
          p={4}
          border="1px solid transparent"
          borderRadius="lg"
        >
          <Box zIndex="1" w="100%" height="100%" ref={PortfolioRef}>
            <Image src={DevstoreImage} w="100%" height="100%"></Image>
          </Box>
        </Box>
        <Box
          mt="7vh"
          display="flex"
          alignItems="flex-end"
          w=""
          zIndex="2"
          flexDirection="column"
        >
          <Text
            // fontFamily="Poppins"
            fontFamily="Nunito"
            fontWeight={700}
            fontSize="2vh"
            _hover={{ textDecoration: "underline" }}
            transition="textDecoration 0.3s ease"
            color="blue"
          >
            Featured Project
          </Text>
          <Text
            mr="2vh"
            mt="1vh"
            fontSize="4vh"
            fontFamily="Nunito"
            color="black"
            fontWeight={800}
          >
            My Portfolio
          </Text>
          <Text
            border="1px solid transparent"
            borderRadius="lg"
            bg="purple.200"
            color="black"
            fontFamily="Nunito"
            w="50%"
            p="2vh"
            mt="5vh"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut porro
            nostrum iste hic necessitatibus voluptatibus explicabo unde
            aspernatur officia, iure, non excepturi nam eius ipsum et veniam
            nesciunt quae quas perspiciatis, ad veritatis id doloribus!
            Quisquam, voluptates, quos id itaque nemo, ipsum adipisci provident
            recusandae vitae esse totam magnam ut.
          </Text>

          <Wrap mt="3vh" spacing="2vh" pl="4vh" maxW="45vh">
            <Text fontWeight={700} fontFamily="Nunito" fontSize="1.8vh" _hover={{ color: "purple" }}>
              React
            </Text>
            <Text fontWeight={700} fontFamily="Nunito" fontSize="1.8vh" _hover={{ color: "purple" }}>
              GSAP
            </Text>
            <Text fontWeight={700} fontFamily="Nunito" fontSize="1.8vh" _hover={{ color: "purple" }}>
              Spline
            </Text>
            <Text fontWeight={700} fontFamily="Nunito" fontSize="1.8vh" _hover={{ color: "purple" }}>
              ChakraUI
            </Text>
          </Wrap>

          <Box display="flex">
            <IconButton _hover={{ color: "purple" }} variant="transparent">
              <UilGithub />
            </IconButton>
            <IconButton _hover={{ color: "purple" }} variant="transparent">
              <UilEye />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Portfolio;
