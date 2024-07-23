import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter,Cursor } from 'react-simple-typewriter'
import Lottie from "lottie-react";
import Animation from '../Animation/Animation - 1721648937407.json'

const About = () => {
  return (
    <>
      <div className='container'>
        <motion.div initial={{ x: -100 }} transition={{ duration: 1 }} animate={{ x: 80 }} className='row mt-4'>
          <div className='col-lg-6 col-sm-12 col-md-6'>
            <p className='display-6 text-light'>
              Welcome to my portfolio! 
            </p>
            <p className=' display-6 text-info '>My name is Shah hussain</p>
            <h1>
            <span className='text-light display-5 '>I'm a </span>
        <span className='display-6 text-warning fw-bold ' >
          <Typewriter
            words={['MERN stack developer', 'Graphic designer','Laravel Php developer']}
            loop={Infinity}
            cursor
            cursorStyle='!'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
          </div>
          <div  className='col-lg-6 col-sm-12 mt-2 '>
            <div style={{width:"50%"}}>
            <Lottie animationData={Animation} loop={true}/>
            </div>
          </div>
        </motion.div>
      </div>
       
    </>
  );
}

export default About;
