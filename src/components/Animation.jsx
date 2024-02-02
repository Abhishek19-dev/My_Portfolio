import { Box } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import Spline from "@splinetool/react-spline";
import { useEffect, useRef, useState } from "react";

export default function Animation() {
  
  return (
    <Box>
      <Spline scene="https://prod.spline.design/G5wAwMFiTF9iEkSt/scene.splinecode" />
    </Box>
  );
}
