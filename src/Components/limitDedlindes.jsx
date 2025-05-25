import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';

const LimitDeadlines = () => {
   const [tasks, setTasks] = useState([]);

 useEffect(() => {
  fetch("http://localhost:5000/task/latesttask/taskdeadlines")
    .then((res) => res.json())
    .then((data) => {
      console.log("Nearest 6 deadlines:", data);
      setTasks(data);
    });
}, []);

  return (
    <div className='w-11/12 mx-auto my-30'>
      <h1 className='md:text-5xl mb-2 text-4xl text-center font-bold'>Featured Tasks</h1>
      <p className='text-center mb-20'>Browse our most urgent tasks with upcoming deadlines. Find the perfect project for your skills and start earning.</p>
      <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {tasks.map(task => <div key={task._id} className="card w-11/12 mx-auto bg-[#0D4715] text-white shadow-sm">
                        <div className="card-body space-x-2">
                            <span className="badge badge-xs badge-warning"> <span className='font-bold'>Deadline:</span> {task.date}</span>
                            <div className="flex justify-between">
                                <h2 className="text-3xl font-bold">{task.options}</h2>
                                <span className="text-xl">${task.budget}</span>
                            </div>
                            <ul className="mt-6 flex h-50 flex-col p-5 rounded-2xl bg-yellow-500 text-black gap-2 text-xs">
                                <h1 className='text-lg'><span className='font-bold'>Title:  </span>{task.title}</h1>
                                <h1 className='text-lg'><span className='font-bold'>Bids :</span>{task.bids
                                }</h1>
                                <h1 className='text-sm'><span className='font-semibold'>Descriptions</span> {task.description}</h1>
                            </ul>
                            <div className=" flex justify-end ">

                                <Link to={`/task/${task._id}`} className="btn btn-primary w-full mb-0 ">View Details</Link>
                            </div>
                        </div>
                    </div>)}
      </div>
    </div>
  );
};

export default LimitDeadlines;
