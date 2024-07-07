"use client";
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { CursorContext } from '@/components/CursorContext';


const Treatments = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2 } }}
            className='min-h-screen flex items-center overflow-x-hidden'
        >
            <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0">
                <div className='w-full h-full flex items-center justify-between'>
                    {/* text */}
                    <motion.div
                        className='flex flex-col items-start xl:max-w-[650px] text-center
                        xl:text-left mx-auto'
                        initial={{ opacity: 0, x: -60 }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                delay: 2,
                                duration: 0.8,
                                ease: 'easeInOut'
                            }
                        }}
                        onMouseEnter={mouseEnterHandler}
                        onMouseLeave={mouseLeaveHandler}
                    >
                        <h2 className='h2 mb-6 mx-auto max-w-[540px] xk:max-w-none'>
                            Indulge in our Luxurious Treatments
                        </h2>

                        <p className='lead max-w-[600px] mx-auto xl:mx-0'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
                            reprehenderit iste, ad sit et, vel commodi ullam iure harum assumenda
                            corporis.
                        </p>

                        {/* items */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-14 mx-auto xl:mx-0'>
                            <div className='flex-1 flex flex-col justify-center items-center xl:items-start'>
                                <div className="flex items-center gap-[12px] mb-2">
                                    <div className='w-[14px] h-[14px] bg-accent rounded-tl-[28px]
                                    rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]'></div>
                                    <h3 className='text-2xl'>
                                        Classic Fasial
                                    </h3>
                                </div>

                                <p className='pl-6 text-[15px] '>
                                    Deep cleaning, exfoliation and hydration for a refreshed complexion
                                </p>
                            </div>

                            <div className='flex-1 flex flex-col justify-center items-center xl:items-start'>
                                <div className="flex items-center gap-[12px] mb-2">
                                    <div className='w-[14px] h-[14px] bg-accent rounded-tl-[28px]
                                    rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]'></div>
                                    <h3 className='text-2xl'>
                                        Chemical Peel
                                    </h3>
                                </div>

                                <p className='pl-6 text-[15px] '>
                                    Exfoliationg treatment to improve skin texture and tone
                                </p>
                            </div>

                            <div className='flex-1 flex flex-col justify-center items-center xl:items-start'>
                                <div className="flex items-center gap-[12px] mb-2">
                                    <div className='w-[14px] h-[14px] bg-accent rounded-tl-[28px]
                                    rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]'></div>
                                    <h3 className='text-2xl'>
                                        Eyebrow Waxing/Shaping
                                    </h3>
                                </div>

                                <p className='pl-6 text-[15px] '>
                                    Deep cleaning, exfoliation and hydration for a refreshed complexion
                                </p>
                            </div>

                            <div className='flex-1 flex flex-col justify-center items-center xl:items-start'>
                                <div className="flex items-center gap-[12px] mb-2">
                                    <div className='w-[14px] h-[14px] bg-accent rounded-tl-[28px]
                                    rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]'></div>
                                    <h3 className='text-2xl'>
                                        Hydra Fasial
                                    </h3>
                                </div>

                                <p className='pl-6 text-[15px] '>
                                    Multi-step treatment for instant hydration and glow
                                </p>
                            </div>
                        </div>

                        {/* btn */}
                        <button className='btn mx-auto xl:mx-0'>
                            Discover More
                        </button>
                    </motion.div>

                    {/* image */}
                    <motion.div
                        className='hidden xl:flex w-[384px] h-[534px] relative overflow-hidden'
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
                            src="/assets/treatments/img.jpg"
                            alt="treatments"
                            fill
                            quality={100}
                            className='object-contain hover:scale-110 transition-all duration-1000'
                        />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}

export default Treatments;
