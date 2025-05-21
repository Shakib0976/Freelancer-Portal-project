import React from 'react';

const Card2 = () => {
    return (
        <div className='w-11/12 mx-auto  '>
            <div className='grid md:grid-cols-2  lg:grid-cols-3 my-40 gap-5 space-x-5'>
                <div className='p-4 border-1 border-gray-400 rounded-2xl  h-50 w-90 mx-auto shadow-xl'>
                    <h1 className='text-5xl font-semibold text-green-800  mb-4'>3 million</h1>
                    <p className='text-xl '>rated freelancers, covering 8,766 skills</p>
                </div>

                <div className='p-4 border-1 border-gray-400 rounded-2xl h-50 w-90 mx-auto shadow-xl'>
                    <h1 className='text-5xl font-semibold text-green-800 mb-4 '>$150 million</h1>
                    <p className='text-xl '>earned by freelancers, with top freelancers earning over $7,000/m</p>
                </div>

                <div className='p-4 border-1 border-gray-400 rounded-2xl h-50 w-90 mx-auto shadow-xl'>
                    <h1 className='text-5xl font-semibold text-green-800 mb-4'>10 minutes</h1>
                    <p className='text-xl '>to task a freelancer, with 90% of projects completed in 7 days</p>
                </div>
            </div>
            <div className='md:flex justify-between my-30'>
                

                <div className='flex-1 bg-gray-900 py-17 px-12 rounded-t-2xl md:rounded-l-2xl'>
                    <h1 className='font-bold text-xl text-green-500 mb-4'>Grow your business</h1>
                    <p className='font-bold text-2xl md:text-4xl text-white mb-8'>
                        Trusted globally by over 1 million businesses, small to large
                    </p>
                    <button className='bg-green-700 hover:bg-green-400 font-semibold text-white px-3 md:px-5 md:py-3 py-2 rounded'>Start Now For Free</button>
                </div>

                <div className='flex-1'>
                    <img className='w-full rounded-b-2xl md:rounded-r-2xl h-full object-cover' src="/bs.jpg" alt="Business support" />
                </div>
            </div>
        </div>
    );
};

export default Card2;