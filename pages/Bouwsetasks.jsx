import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const Bouwsetasks = () => {
    const tasks = useLoaderData();
    const [seleCatergorys, setSelectedCategory] = useState("All");

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const tasksFiler = seleCatergorys === "All" || seleCatergorys === "Select a category"
      ? tasks
        : tasks.filter(task => task.options === seleCatergorys);
    return (
        <div className='w-11/12 mx-auto my-20'>
            <div className='ml-5 mb-5'>
                <h1 className='md:text-4xl text-2xl mb-2 font-bold '>Browse Tasks</h1>
                <p className='mb-4'>Find the perfect task that matches your skills and interests</p>
                <select onClick={handleCategoryChange} defaultValue="Server location" className="select mb-9 select-neutral">
                    <option >Select a category</option>
                    <option>Development</option>
                    <option>Marketing</option>
                    <option>Video Editing</option>
                    <option>Programming</option>
                    <option>Business</option>
                    <option>Others</option>
                </select>
            </div>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    tasksFiler.map(task => <div key={task._id} className="card w-11/12 mx-auto bg-[#0D4715] text-white shadow-sm">
                        <div className="card-body space-x-2">
                            <span className="badge badge-xs badge-warning"> <span className='font-bold'>Deadline:</span> {task.date}</span>
                            <div className="flex justify-between">
                                <h2 className="text-3xl font-bold">{task.options}</h2>
                                <span className="text-xl">${task.budget}</span>
                            </div>
                            <ul className="mt-6 flex h-50 flex-col p-5 rounded-2xl bg-yellow-500 text-black gap-2 text-xs">
                                <h1 className='text-lg'><span className='font-bold'>Title:  </span>{task.title}</h1>
                                <h1 className='text-lg'><span className='font-bold'>Bids :</span> 0</h1>
                                <h1 className='text-sm'><span className='font-semibold'>Descriptions</span> {task.description}</h1>
                            </ul>
                            <div className=" flex justify-end ">

                                <button className="btn btn-primary w-full mb-0 ">View Details</button>
                            </div>
                        </div>
                    </div>)
                }
            </div></div>
    );
};

export default Bouwsetasks;