import { Box, Button, Icon, Image, Input, InputGroup, InputLeftElement, Stack, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import PhoneAnimation from "./PhoneAnimation";
import GetInTouch from "../../images/getInTouch.png";
import { UilUser } from "@iconscout/react-unicons";
import { UilEnvelopeMinus } from "@iconscout/react-unicons";
import { UilPhone } from "@iconscout/react-unicons";
import { UilCommentAltDots } from "@iconscout/react-unicons";
import { UilMessage } from '@iconscout/react-unicons'

const Contact = () => {
  return (
    <>
      <Box
        p={2}
        w="100%"
        h="78vh"
        border={1}
        borderRadius="lg"
        bg="#E4ECFB"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box display="flex" alignItems="center">
          <Image w="6vh" h="6vh" src={GetInTouch}></Image>
          <Text ml="0.5vw" fontWeight={600} fontFamily="Poppins" fontSize="5vh">
            Get In Touch
          </Text>
        </Box>
        <Box display="flex" mt="1vh" w="70%" h="85%" bg="white">
        
          <Box  w="55%"  h="100%" >
            <Stack p='3vh'  w='93%' h='100%' direction="column" spacing="3vh">
              <InputGroup  alignItems='center' w='100%' h='7vh' bg='#E4ECFB'>
                <InputLeftElement mt='1vh' color="#7303A7" pointerEvents="none">
                 <UilUser />
                </InputLeftElement>
                <Input _hover={{ border: '1px solid black' }} _focus={{ border: '2px solid #7303A7' }} transition='border 0.3s ease'  w='100%' h='100%' fontFamily='Poppins' fontWeight={500}  border='1px solid black'  color='black' _placeholder={{ color: 'black' , fontWeight:'600' }}   type='text' placeholder="Name" />
              </InputGroup>

              <InputGroup  alignItems='center' w='100%' h='7vh' bg='#E4ECFB'>
                <InputLeftElement mt='1vh' color="#7303A7" pointerEvents="none">
                 <UilEnvelopeMinus />
                </InputLeftElement>
                <Input _hover={{ border: '1px solid black' }} _focus={{ border: '2px solid #7303A7' }} transition='border 0.3s ease'  w='100%' h='100%' fontFamily='Poppins'  border='1px solid black'   color='black' _placeholder={{ color: 'black' , fontWeight:'600' }}  type='text' placeholder="Email" />
              </InputGroup>

              <InputGroup  alignItems='center' w='100%' h='7vh' bg='#E4ECFB'>
                <InputLeftElement mt='1vh' color="#7303A7" pointerEvents="none">
                 <UilPhone />
                </InputLeftElement>
                <Input  _hover={{ border: '1px solid black' }} _focus={{ border: '2px solid #7303A7' }} transition='border 0.3s ease'  w='100%' h='100%' fontFamily='Poppins'  border='1px solid black'  color='black' _placeholder={{ color: 'black' , fontWeight:'600' }}  type='tel' placeholder="Phone" />
              </InputGroup>
              

              <InputGroup  w='100%' h='20vh' bg='#E4ECFB'>
                <InputLeftElement mt='1vh' color="#7303A7" pointerEvents="none">
                 <UilCommentAltDots />
                </InputLeftElement>
                <Textarea pl='2.8vw' pt='0.9rem'   _hover={{ border: '1px solid black' }} _focus={{ border: '2px solid #7303A7' }} transition='border 0.3s ease'  w='100%' h='100%' fontFamily='Poppins'  border='1px solid black'    color='black' _placeholder={{ color: 'black' , fontWeight:'600' }} placeholder="Message" />
              </InputGroup>

               <Button bg='#2506AD' color='white' _hover={{bg:"#4A25ED"}} ml='21rem' w='16vh' h='7vh'  rightIcon={<UilMessage />}>Submit</Button>
            </Stack>
          </Box>
          <Box pr='8vh' w="45%" h="100%">
          <PhoneAnimation />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
