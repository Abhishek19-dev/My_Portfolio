import React, { useRef } from "react";
import Logo from "../images/logo.png";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap"; // Import gsap
import { UilPhoneAlt } from "@iconscout/react-unicons";
import { Box, Button, Image, Text } from "@chakra-ui/react";

const Navbar = ({ tl, ease }) => {
  let navRef = useRef(null);
  let logoRef = useRef(null);
  let buttonRef = useRef(null);

  // useGSAP(
  //   () => {
  //     tl.from(navRef.current, {
  //       opacity: 0,
  //       duration: 1,
  //       delay: 0.5,
  //     });
  //     tl.from(logoRef.current, {
  //       y: -100,
  //       duration: 1,
  //       opacity: 0,
  //     });
  //     tl.from(".animate", {
  //       duration: 1,
  //       opacity: 0,
  //       stagger: 0.2,
  //     });
  //     tl.from(buttonRef.current, {
  //       x:100,
  //       duration: 0.5,
  //       opacity: 0,
  //       ease:ease
  //     });
  //    },
  //   { scope: navRef.current }
  // );

  // useGSAP(()=>{
  //   tl.from(navRef.current,2, {
  //           y:-100,
  //           opacity: 0,
  //           duration: 0.5,
  //           delay: 0.5,
  //         });
  // },{scope: navRef.current})
  return (
    <>
      <Box
        // backgroundColor="#F5F0FD"
        backgroundColor="rgba(245, 240, 253, 0.1)" // Adjust the alpha value as needed
        ref={navRef}
        position="fixed"
        zIndex={4000}
        display="flex"
        justifyContent="space-between"
        flexDirection="row"
        px="2vh"
        py="2vh"
        width="100%"
        height="6vw"
      >
        <Box
          ref={logoRef}
          display="flex"
          alignItems="center"
          height="100%"
          width="20vw"
          flexDirection="row"
        >
          <Image width="12%" src={Logo}></Image>
          <Text
            fontSize="1.5vw"
            fontFamily="Stylish"
            fontWeight={600}
            color="#800000"
            ml="2vh"
          >
            Abhishek.Dev
          </Text>
        </Box>
        <Box
          pr="1vw"
          width="38%"
          alignItems="center"
          justifyContent="space-between"
          display="flex"
          flexDirection="row"
        >
          <Text
            className="animate"
            fontFamily="Stylish"
            fontWeight={600}
            fontSize="1.3rem"
            color="#228B22"
          >
            HOME
          </Text>
          <Text
            className="animate"
            fontFamily="Stylish"
            fontWeight={600}
            fontSize="1.3rem"
            color="#228B22"
          >
            ABOUT
          </Text>
          <Text
            className="animate"
            fontFamily="Stylish"
            fontWeight={600}
            fontSize="1.3rem"
            color="#228B22"
          >
            SKILLS
          </Text>
          <Text
            className="animate"
            fontFamily="Stylish"
            fontWeight={600}
            fontSize="1.3rem"
            color="#228B22"
          >
            PROJECT
          </Text>
        </Box>
        <Box marginRight="4vw" marginTop="0.5vw" ref={buttonRef}>
          <Button
            backgroundColor="#8D64D3"
            color="white"
            _hover={{ backgroundColor: "#521EA9" }}
            leftIcon={<UilPhoneAlt />}
            fontSize="2vh"
            fontFamily='Stylish'
          >
            Contact
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
