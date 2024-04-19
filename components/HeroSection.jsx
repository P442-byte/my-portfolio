"use client";

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <section className='lg:py-16'>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div 
                initial={{opacity: 0, scale: 0.5}} 
                animate={{opacity: 1, scale: 1}} 
                transition={{duration: 0.5}} 
                className=" col-span-8 place-self-center text-center sm:text-left justify-self-start">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600">
                        Hi, Im {' '}
                    </span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            'Pieter',
                            1000, 
                            'A Game Developer',
                            1000,
                            'A Web Developer',
                            1000,
                            'A Programmer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className=' text-gray-400 text-base sm:text-lg mb-6 lg:text-xl'>
                    I am a full-stack developer specializing in web and game development
                </p>
                <div>
                    
                    <Link
                        href="/#contact"
                        className="border-4 border-black hover:border-orange-400 w-full sm:w-fit px-4 py-2.5 bg-gradient-to-br from-yellow-300 via-orange-500 to-red-600 text-white rounded-full mb-4 mr-4"
                    >
                        Hire Me
                    </Link>
                    <Link
                        href="/"
                        className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-yellow-300 via-orange-500 to-red-600 hover:bg-orange-500 text-white mt-3"
                    >
                        <span className="block bg-[#000000] hover:bg-orange-500 rounded-full px-5 py-2">
                            Download CV
                        </span>
                    </Link>
                </div>
            </motion.div>
            <motion.div 
                initial={{opacity: 0, scale: 0.5}} 
                animate={{opacity: 1, scale: 1}} 
                transition={{duration: 0.5}} 
                className="col-span-4 place-self-center mt-4 lg:mt-0">  
                <div className='rounded-full bg-[#181818] h-[305px] w-[305px] lg:w-[305px] lg:h-[305px]  relative'>
                    <div className=' h-[305px] w-[305px] lg:w-[305px] lg:h-[305px] blur-sm  bg-orange-400 rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'></div>                   
                    <Image
                        className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        src='/images/header-img.jpg'
                        alt='logo'
                        width={300}
                        height={300}   />
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default HeroSection
