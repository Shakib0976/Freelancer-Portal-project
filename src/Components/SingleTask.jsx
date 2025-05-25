import React from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router';

const SingleTask = () => {
    const userTask = useLoaderData();
    console.log(userTask);


    const updateBids = () => {
        fetch(`http://localhost:5000/task/${userTask._id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                bids: Number(userTask.bids) + 1
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log('updatebids', data);
                toast.success('bits added successfull')
            })
    }
    return (
        <div className="max-w-4xl bg-[#0D4715] mx-auto my-20 border-2 border-gray-300 rounded-2xl shadow-md p-6 space-y-4">
            {/* Header */}
            <div className="flex items-start justify-between">
                <div>
                    <span className="bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full">
                        {userTask.options}
                    </span>
                    <h2 className="text-2xl text-white md:text-3xl font-bold mt-2">{userTask.title}</h2>
                    <p className=" text-white mt-1">Posted by: <span className="font-medium">{userTask.user}</span></p>
                </div>
                <div className="text-right text-white">
                    <p className="text-xl font-bold ">${userTask.budget}</p>
                    <p className="text-sm">Posted on: {userTask.date}</p>
                </div>
            </div>

            <hr />

            {/* Description and Sidebar */}
            <div className="flex flex-col md:flex-row gap-6">
                {/* Description */}
                <div className="md:w-2/3">
                    <h3 className="text-lg text-white font-semibold mb-2">{userTask.description}</h3>
                </div>

                {/* Sidebar */}
                <div className="md:w-1/3 text-white bg-purple-700  rounded-xl p-4 space-y-4 border ">
                    <div>
                        <p className="text-sm font-medium">Deadline</p>
                        <p className="text-white font-semibold">
                            {userTask.date} <span className="text-sm"></span>
                        </p>
                    </div>
                    <div>
                        <p className="text-sm font-medium">Budget</p>
                        <p className=" font-bold text-lg">${userTask.budget}</p>
                    </div>
                   <div className='space-x-5 flex w-full'>
                     <button onClick={updateBids} className=" text-white btn hover:btn-secondary   btn-primary  font-semibold py-2 px-4 rounded-lg">
                        Bid on This Task
                    </button>
                    <Link className=" text-white btn hover:btn-secondary   btn-primary  font-semibold py-2 px-4 rounded-lg" to={'/'}>Go Home</Link>
                   </div>
                </div>
            </div>
        </div>

    );
};

export default SingleTask;