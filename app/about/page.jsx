"use client";
import React, { useContext } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { CursorContext } from '@/components/CursorContext';
import StatsItem from '@/components/StatsItem';

const About = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2 } }}
            className='min-h-screen flex items-center overflow-x-hidden'
        >
            <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0">
                <div className='w-full h-full flex flex-col xl:flex-row items-center
                    justify-between'>
                    {/* image */}
                    <motion.div
                        className='relative w-[304px] h-[423px] xl:w-[384px] xl:h-[534px] 
                            mb-8 xl:mx-0 overflow-hidden'
                        initial={{
                            opacity: 0,
                            rotateY: 120
                        }}
                        animate={{
                            opacity: 1,
                            rotateY: 0,
                            transition: {
                                delay: 2,
                                duration: 0.8,
                                ease: 'easeInOut'
                            }
                        }}
                        onMouseEnter={mouseEnterHandler}
                        onMouseLeave={mouseLeaveHandler}
                    >
                        <Image
                            src="/assets/about/img.jpg"
                            fill
                            quality={100}
                            priority
                            alt="about"
                            className='object-contain hover:scale-110 transition-all duration-1000'
                        />
                    </motion.div>

                    {/* text */}
                    <motion.div
                        className='flex flex-col items-start xl:max-w-[650px] text-center xl:text-left
                        mx-auto xl:mx-0'
                        initial={{
                            opacity: 0,
                            x: 60
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                delay: 2.4,
                                duration: 1,
                                ease: 'easeInOut'
                            }
                        }}
                        onMouseEnter={mouseEnterHandler}
                        onMouseLeave={mouseLeaveHandler}
                    >
                        <h2 className='h2 mb-6 mx-auto max-w-[540px] xl:max-w-none'>
                            Commited to Your Skin's Health and Beauty
                        </h2>

                        <p className='lead max-w-[600px] mx-auto xl:mx-0'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates,
                            qui corrupti! Ratione, voluptatibus error ab totam cumque illum perferendis
                            velit.
                        </p>

                        {/* items */}
                        <div className='grid grid-cols-3 gap-[30px] mb-14 mx-auto xl:mx-0'>
                            <div>
                                <StatsItem countNum={13} text="Years on Market" />
                            </div>
                            <div>
                                <StatsItem countNum={35} countText="k+" text="Happy Clients" />
                            </div>
                            <div>
                                <StatsItem countNum={97} countText="%" text="Natural Ingredients" />
                            </div>
                        </div>

                        {/* btn */}
                        <button className='btn mx-auto xl:mx-0'>
                            Contact Us
                        </button>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}

export default About;
