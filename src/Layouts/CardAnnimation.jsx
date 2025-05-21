import React from 'react';
import { motion } from "framer-motion";

const CardAnnimation = () => {
    return (
        <div className='bg-[#f5f7fa] py-12'>
            <div className='w-11/12 mx-auto my-7 '>
                <h1 className='md:text-5xl text-3xl  mt-20 mb-8 font-semibold'>Popular services</h1>

                <div className='grid  md:grid-cols-2 lg:grid-cols-6'>
                    <div className='m-5'>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileInView={{ y: [50, 0], opacity: [0, 1] }}
                            transition={{ type: "spring", bounce: 0.6, duration: 0.6 }}
                        >
                            <div className='bg-[#0D4715] p-3 rounded-2xl '>
                                <h1 className=' text-white mt-2 mb-12 font-semibold text-xl '>Architecture & Interior Design</h1>
                                <div className='bg-[#71C0BB] p-1 rounded-2xl'>
                                    <img className='rounded-2xl md:h-30 w-full' src="/c7.jpg" alt="" />

                                </div>
                            </div>

                        </motion.div>
                    </div>


                    <div className='m-5'>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileInView={{ y: [50, 0], opacity: [0, 1] }}
                            transition={{ type: "spring", bounce: 0.6, duration: 0.6 }}
                        >
                            <div className='bg-[#0D4715] p-3 rounded-2xl'>
                                <h1 className='  text-white mt-2 mb-12 font-semibold text-xl '>Software Development</h1>
                                <div className='bg-[#FAE3C6] rounded-2xl p-1'>
                                    <img className='rounded-2xl md:h-30 w-full' src="/c2.jpg" alt="" />
                                </div>

                            </div>

                        </motion.div>
                    </div>



                    <div className='m-5'>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileInView={{ y: [50, 0], opacity: [0, 1] }}
                            transition={{ type: "spring", bounce: 0.6, duration: 0.6 }}
                        >
                            <div className='bg-[#0D4715]  p-3 rounded-2xl '>
                                <h1 className=' text-white mt-2 mb-12 lg:mb-19 font-semibold text-xl '>Video Editing</h1>
                                <div className='bg-[#F8B55F] rounded-2xl p-1'>
                                    <img className='rounded-2xl md:h-30 w-full' src="/c3.jpg" alt="" />
                                </div>


                            </div>

                        </motion.div>
                    </div>



                    <div className='m-5'>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileInView={{ y: [50, 0], opacity: [0, 1] }}
                            transition={{ type: "spring", bounce: 0.6, duration: 0.6 }}
                        >
                            <div className='bg-[#0D4715] p-3 rounded-2xl'>
                                <h1 className=' text-white mt-2 mb-12 font-semibold text-xl '>Website Development</h1>
                                <div className=' bg-[#C95792] rounded-2xl p-1'>
                                    <img className='rounded-2xl md:h-30 w-full' src="/c4.jpg" alt="" />
                                </div>


                            </div>

                        </motion.div>
                    </div>



                    <div className='m-5'>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileInView={{ y: [50, 0], opacity: [0, 1] }}
                            transition={{ type: "spring", bounce: 0.6, duration: 0.6 }}
                        >
                            <div className='bg-[#0D4715] p-3 rounded-2xl'>
                                <h1 className=' text-white mt-2 mb-19 font-semibold text-xl '>AI Development</h1>
                                <div className='bg-[#077A7D] p-1 rounded-2xl'>
                                    <img className='rounded-2xl md:h-30 w-full ' src="/c5.jpg" alt="" />
                                </div>


                            </div>

                        </motion.div>
                    </div>



                    <div className='m-5'>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileInView={{ y: [50, 0], opacity: [0, 1] }}
                            transition={{ type: "spring", bounce: 0.6, duration: 0.6 }}
                        >
                            <div className='bg-[#0D4715] p-3 rounded-2xl'>
                                <h1 className=' text-white mt-2 mb-19 font-semibold text-xl  '>SEO</h1>
                                <div className='bg-[#FAE3C6] rounded-2xl p-1'>
                                    <img className='rounded-2xl md:h-30 w-full' src="/c6.jpg" alt="" />
                                </div>

                            </div>

                        </motion.div>
                    </div>


                </div>


            </div>
        </div>
    );
};

export default CardAnnimation;

