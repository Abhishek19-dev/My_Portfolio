import { motion, transform, useAnimationControls } from 'framer-motion';
import React, { useState } from 'react'; 
import './TextSpan.css'
 
 const TextSpan = ({children}) =>{

    const [isPlaying , setIsPlaying] = useState(false)
    const controls = useAnimationControls()

    const letterMovement = ()=>{
        controls.start({
            transform:[
                "scale3d(1,1,1)",
                "scale3d(1.4,0.55,1)",
                "scale3d(0.75,1.25,1)",
                "scale3d(1.25,0.85,1)",
                "scale3d(0.90,1.05,1)",
                "scale3d(1,1,1)",
            ],
            transition:{
                duration: 0.8,
                // ease: "easeInOut",
                times:[0, 0.4, 0.6, 0.7, 0.8 ,0.9]
            },
            color: [
                "#5BBC66", // Green color
                "#5BBC66", // Green color
                "#5BBC66", // Green color
                "#5BBC66", // Green color
                "#5BBC66", // Green color
                 "#000000", // Original color
            ],
        })
        setIsPlaying(true)
    }

return (
    <>
  <motion.span animate={controls} onMouseOver={()=> {
    !isPlaying && letterMovement()}} onAnimationComplete={()=> setIsPlaying(false)} class="text_span">
      {children}
   </motion.span>
    </>
)
};
 
export default TextSpan