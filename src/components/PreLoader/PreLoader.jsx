import React, { useEffect, useRef, useState } from "react";
import "../../App.css";
import { Box, Text } from "@chakra-ui/react";
import { gsap, CSSPlugin, Expo, Power3 } from "gsap";
import { Triangle } from "react-loader-spinner";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(CSSPlugin);

const Preloader = ({ isLoading , tl , ease }) => {
  const canvasRef = useRef(null);
  const LoaderRef = useRef(null);


   useGSAP(()=>{
      console.log("isLosdjga")
      tl.to(LoaderRef.current,1 , {
        height:"0",
        duration : 1,
        delay:2.5,
        onComplete: () => {
          console.log("Preloader Animation Completed");
        },
      })
   },{scope:LoaderRef.current})


  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d"); // this is to create an object
    const particlesArray = [];
    let hue = 0; //this is for color saturation

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const mouse = {
      x: undefined,
      y: undefined,
    };

    const handleMouseClick = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
      for (let i = 0; i < 2; i++) {
        particlesArray.push(new Particle());
      }
    };
    //create a particles every time we move
    canvas.addEventListener("click", handleMouseClick);

    const handleMouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
      for (let i = 0; i < 5; i++) {
        particlesArray.push(new Particle());
      }
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    class Particle {
      constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 15 + 1; // using particles make of any size
        this.speedX = Math.random() * 3 - 1.5; // using particles go to any side  in x or y
        this.speedY = Math.random() * 3 - 1.5; // using particles go to any side  in x or y
        this.color = "hsl(" + hue + " 100% , 50%)";
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) {
          this.size -= 0.1; // this is that shrinking size animation
        }
      }
      draw() {
        // ctx.fillStyle = 'white'
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function handleParticles() {
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        //calculate distance
        for (let j = 1; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy); // see pythagoras png and cal dist using pythagoras

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = particlesArray[i].color;
            ctx.lineWidth = 0.2;
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke(); //To draw the line
            ctx.closePath();
          }
        }

        //this is also used in shrinking and deltend element
        if (particlesArray[i].size <= 0.3) {
          particlesArray.splice(i, 1);
          i--;
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      handleParticles();
      hue += 2;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("click", handleMouseClick);
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animate); // Clear the animation frame
    };
  });
  return (
    <>
      <Box  w='100%' h='100%' bg='beige' pt='22vh'>
      <div className="canvas-container">
          <canvas ref={canvasRef} id="canvas1"></canvas>
        </div>
      <Box
          ref={LoaderRef}
          zIndex="1"
          display="flex"
          flexDirection='column'
          alignItems="center"
          justifyContent="center"
        >
          <Text color='black'  fontFamily='Poppins' fontWeight={800}   fontSize="8rem">
            Abhishek Padiyar
          </Text>
          <Box mb='18vh'>
          <Triangle
          visible={true}
          height="10rem"
          width="10rem"
          color="#4fa94d"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Preloader;
