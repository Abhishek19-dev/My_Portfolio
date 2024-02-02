import { Box, Divider, Stack, Text, chakra} from "@chakra-ui/react";
import React, { useRef } from "react";
import Devstore from "./Devstore";
import Chatclass from "./ChatClass";
import Portfolio from "./Portfolio";
import gsap, { Power3 } from "gsap";

const Projects = () => {
    let tlProject = new gsap.timeline()
    let easeProject = Power3.easeOut();

  return (
    <>
      <Box
        backgroundColor="#F5F0FD"
        p="2vh"
        pl="7vh"
        width="100%"
        height="fit-content"
      >
        {/* <Text ml='8vh' mt='6vh' fontFamily='Kalnia' fontWeight={500}  color='black' fontSize='4vh'>Some Things I've <Text as='span'> */}
        <Text
        // bg='black'
        // width="53vh"
        //   _hover={{  borderBottom: "2px solid green",
        //   color:"green"}}
        //   ml="29rem"
          ml="3rem"
          textDecoration="none"
          mt="6vh"
          fontFamily="Nunito"
          fontWeight={800}
          color="black"
          fontSize="7vh"
        >
          Some Things I've{" "}
          <Text fontFamily="Nunito" fontWeight={800} as="span">
            Built{" "}
          </Text>
          .
        </Text>




        <Stack
          ml="6vh"
          border="1px solid transparent"
          borderRadius="xl"
          w="85%"
          pr="7vh"
          mt="4vh"
          direction="column"
          spacing="10vh"
        >
          <Devstore tlProject={tlProject} easeProject={easeProject} />
          <Chatclass />
          <Portfolio />
        </Stack>
      </Box>
    </>
  );
};

export default Projects;
