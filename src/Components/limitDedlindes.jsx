import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const LimitDeadlines = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://freelance-project-server.vercel.app/task/latesttask/taskdeadlines")
      .then((res) => res.json())
      .then((data) => {
        console.log("Nearest 6 deadlines:", data);
        setTasks(data);
      });
  }, []);

  return (
    <div className='w-11/12 mx-auto my-10 md:my-30'>
      <h1 className='md:text-5xl mb-2 text-4xl text-center font-bold'>Featured Tasks</h1>
      <p className='text-center mb-10 md:mb-20'>Browse our most urgent tasks with upcoming deadlines. Find the perfect project for your skills and start earning.</p>
      <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {tasks.map(task => <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{duration: 0.6, ease: 'easeOut' }}
          whileHover={{ scale: 1.03 }}
          key={task._id} className="card w-11/12 mx-auto bg-gu text-white shadow-sm">
          <div className="card-body space-x-2">
            <span className="badge badge-xs badge-warning"> <span className='font-bold'>Deadline:</span> {task.date}</span>
            <div className="flex justify-between">
              <h2 className="text-3xl font-bold">{task.options}</h2>
              <span className="text-xl">${task.budget}</span>
            </div>
            <ul className="mt-6 flex h-50 flex-col p-5 rounded-2xl bg-pu text-black gap-2 text-xs">
              <h1 className='text-lg'><span className='font-bold'>Title:  </span>{task.title}</h1>
              <h1 className='text-lg'><span className='font-bold'>Bids :</span>{task.bids
              }</h1>
              <h1 className='text-sm'><span className='font-semibold'>Descriptions</span> {task.description}</h1>
            </ul>
            <div className=" flex justify-end ">

              <Link to={`/task/${task._id}`} className="btn btn-primary w-full mb-0 ">View Details</Link>
            </div>
          </div>
        </motion.div>)}
      </div>
    </div>
  );
};

export default LimitDeadlines;
