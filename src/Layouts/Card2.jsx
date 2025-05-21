import React from 'react';

const Card2 = () => {
    return (
        <div className='w-11/12 mx-auto '>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 my-40 gap-5 space-x-5'>
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
            <div></div>
        </div>
    );
};

export default Card2;