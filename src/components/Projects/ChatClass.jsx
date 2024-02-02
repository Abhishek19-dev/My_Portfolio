import { Box, IconButton, Image, Text, Wrap } from "@chakra-ui/react";
import React, { useRef } from "react";
import ChatClassImage from "../../images/chatclass.png";
import { UilGithub } from "@iconscout/react-unicons";
import { UilEye } from "@iconscout/react-unicons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Power4 } from "gsap";

const Chatclass = () => {
  const chatClassRef = useRef(null);
  const mainChatClassRef = useRef(null);

  useGSAP(()=>{
    gsap.from(mainChatClassRef.current , {
      opacity:0,
      duration:5,
      scrollTrigger: {
        trigger: mainChatClassRef.current,
        markers:true,
        start: "top 70%",
      },
      ease:Power4.easeOut
    })
    gsap.from(chatClassRef.current,{
      x:600,
      duration:1,
      opacity:0,
      delay:0.5,
      scrollTrigger: {
        trigger: chatClassRef.current,
        markers:true,
        start: "top 70%",
      },
    })
  },{scope:mainChatClassRef.current})
  

  document.addEventListener("mousemove", function (e) {
    var width = window.innerWidth;
    var height = window.innerHeight;

    var positionX = e.clientX / width - 0.55;
    var positionY = e.clientY / height - 0.55;
    gsap.to(chatClassRef.current, {
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
        flexDirection="row"
        ref={mainChatClassRef}
        w="100%"
        h="60vh"
      >
        <Box
          mt="7vh"
          display="flex"
          alignItems="flex-start"
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
            fontFamily="Nunito"
            mt="1vh"
            fontSize="4vh"
            // fontFamily="Poppins"
            color="black"
            fontWeight={800}
          >
            ChatClass
          </Text>
          <Text
          fontFamily="Nunito"
            border="1px solid transparent"
            borderRadius="lg"
            bg="purple.200"
            color="black"
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

          <Wrap mt="3vh" spacing="2vh" pl="1vh" maxW="45vh">
            <Text fontWeight={700} fontFamily="Nunito" fontSize="1.8vh" _hover={{ color: "purple" }}>
              React
            </Text>
            <Text fontWeight={700} fontFamily="Nunito" fontSize="1.8vh" _hover={{ color: "purple" }}>
              NodeJS
            </Text>
            <Text fontWeight={700} fontFamily="Nunito" fontSize="1.8vh" _hover={{ color: "purple" }}>
              MongoDB
            </Text>
            <Text fontWeight={700} fontFamily="Nunito" fontSize="1.8vh" _hover={{ color: "purple" }}>
              Express
            </Text>
            <Text fontWeight={700} fontFamily="Nunito" fontSize="1.8vh" _hover={{ color: "purple" }}>
              TailwindCSS
            </Text>
            <Text fontWeight={700} fontFamily="Nunito" fontSize="1.8vh" _hover={{ color: "purple" }}>
              Redux
            </Text>
            <Text fontWeight={700} fontFamily="Nunito" fontSize="1.8vh" _hover={{ color: "purple" }}>
              Socket.io
            </Text>
            <Text fontWeight={700} fontFamily="Nunito" fontSize="1.8vh" _hover={{ color: "purple" }}>
              Chakra Ui
            </Text>
          </Wrap>

          <Box mt='0.7rem' display="flex">
            <IconButton _hover={{ color: "purple" }} variant="transparent">
              <UilGithub />
            </IconButton>
            <IconButton _hover={{ color: "purple" }} variant="transparent">
              <UilEye />
            </IconButton>
          </Box>
        </Box>
        {/* <Box position='absolute' ref={chatClassRef} left='24vw' w='68%' h='100%' p={2}>
          <Image   src={ChatClassImage} zIndex='1' w='100%' height='100%'></Image>
        </Box> */}

        <Box
          bg="white"
          position="absolute"
          w="68%"
          h="100%"
          p={4}
          border="1px solid transparent"
          borderRadius="lg"
          left="24vw"
        >
          <Box zIndex="1" w="100%" height="100%" ref={chatClassRef}>
            <Image src={ChatClassImage} w="100%" height="100%"></Image>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Chatclass;
