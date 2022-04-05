import React from 'react';
import { motion } from "framer-motion";

// to add animation on pages, do the following on the pages 
// import AnimationPage from "./AnimationPage";
// <AnimationPages> WRAP THIS IN TEXT </AnimationPages>

//store the animation in an object 
const animations = {
    intial: {opacity:0, x:100},
    animate: {opacity:1, x: 0},
    exit: {opacity: 0, x: -100},
}

const AnimationPage = ({children}) => {
  return (
    <motion.div variants={animations} initial="initial" animate="animate" exit="exit">
        {children}
    </motion.div>
  )
}

export default AnimationPage;

