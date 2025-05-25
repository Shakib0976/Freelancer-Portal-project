import React from 'react';
import { motion } from "framer-motion";

const CardAnnimation = () => {
    return (
        <div className='shadow-sm'>
            <div className='w-11/12 mx-auto my-17 '>
                <div className='text-center mb-8'>
                    <h1 className='md:text-5xl text-3xl  mt-20 mb-2 font-semibold'>Popular Categories</h1>
                    <p>Browse tasks by category to find the perfect match for your skills and interests.</p>
                </div>

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
                                    <img className='rounded-2xl md:h-30 w-full' src="https://i.ibb.co/KcQpj6h8/c7.jpg" alt="" />

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
                                    <img className='rounded-2xl md:h-30 w-full' src="https://i.ibb.co/MvQj1rm/c2.jpg" alt="" />
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
                                    <img className='rounded-2xl md:h-30 w-full' src="https://i.ibb.co/Fb87N5vb/c3.jpg" alt="" />
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
                                    <img className='rounded-2xl md:h-30 w-full' src="https://i.ibb.co/sv8zv54P/c4.jpg" alt="" />
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
                                    <img className='rounded-2xl md:h-30 w-full ' src="https://i.ibb.co/5hcX50Nr/c5.jpg" alt="" />
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
                                    <img className='rounded-2xl md:h-30 w-full' src="https://i.ibb.co/p5NQ4q6/c6.jpg" alt="" />
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

