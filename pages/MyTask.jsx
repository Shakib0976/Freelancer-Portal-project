import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../src/Contest/AuthContest';
import { Link, Links } from 'react-router';


const MyTask = () => {
    const [tasks, setTasks] = useState([])

    const updatehandle = (id) => {
        console.log('updated', id);
    }

    const { user } = use(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/task/email/${user.email}`)
            .then(res => res.json())
            .then(result => {
                setTasks(result);
                console.log(result);
            })

    }, [user])

    return (
        <div className='w-11/12 mx-auto my-10'>
            <div className='flex justify-between mb-10'>
                <div>
                    <h1 className='md:text-4xl text-2xl font-bold mb-2'>My Posted Task</h1>
                    <p>Manage the tasks you've posted on the platform</p>
                </div>
                <div>
                    <Link  to={'/addtask'}> <button className='btn btn-primary'>Add New Task</button> </Link>
                </div>
            </div>
            <div>
                <div className="overflow-x-auto hidden lg:block">
                    <table className="min-w-full border-2 border-gray-300 divide-y divide-gray-200">
                        <thead className="">
                            <tr className='bg-gray-900 text-white'>
                                <th className="px-6 border-b-3 border-gray-300 py-5 text-left text-xl font-medium  uppercase tracking-wider">Title</th>
                                <th className="px-6 border-b-3 border-gray-300 py-5 text-left text-xl font-medium  uppercase tracking-wider">Category</th>
                                <th className="px-6 border-b-3 border-gray-300 py-5 text-left text-xl font-medium  uppercase tracking-wider">Budget</th>
                                <th className="px-6 border-b-3 border-gray-300 py-5 text-left text-xl font-medium  uppercase tracking-wider">Deadline</th>
                                <th className="px-6 border-b-3 border-gray-300 py-5 text-left text-xl font-medium  uppercase tracking-wider">Bids</th>
                                <th className="px-6 border-b-3 border-gray-300 py-5 text-left text-xl font-medium  uppercase tracking-wider">update</th>
                                <th className="px-6 border-b-3 border-gray-300 py-5 text-left text-xl font-medium  uppercase tracking-wider">Delete</th>
                            </tr>
                        </thead>
                        {
                            tasks.map(task => <tbody key={task._id} className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">{task.title}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="inline-flex items-center px-2.5 py-0.5  font-medium  ">{task.options}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm t">${task.budget}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm ">{task.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm "> <Link to={`/bids/${task._id}`} className='btn btn-primary'>View Bids</Link> </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 cursor-pointer"><button onClick={()=>updatehandle(task._id)} className='btn btn-primary'>Update</button></td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 cursor-pointer"><button className='btn btn-primary'>Delete</button></td>
                                </tr>
                            </tbody>)
                        }


                    </table>
                    <div className="mt-4 text-center text-gray-500 text-sm">A list of your posted tasks</div>
                </div>

                <div className='lg:hidden md:grid-cols-2 grid gap-5 grid-cols-1 '>
                    {
                        tasks.map(task => <div key={task._id} className="card mx-auto w-11/12 bg-[#0D4715] text-white shadow-sm">
                            <div className="card-body">
                                <span className="badge badge-xs badge-warning"> <span className='font-bold'>Deadline:</span> {task.date}</span>
                                <div className="flex justify-between">
                                    <h2 className="text-xl font-bold">{task.options}</h2>
                                    <span className="text-xl">${task.budget}</span>
                                </div>
                                <ul className="mt-6 flex flex-col p-5 rounded-2xl bg-yellow-500 text-black gap-2 text-xs">
                                    <h1 className='text-lg'><span className='font-bold'>Title:  </span>{task.title}</h1>
                                    <h1 className='text-lg'><span className='font-bold'>Bids :</span> 0</h1>
                                    <h1 className='text-sm'><span className='font-semibold'>Descriptions</span> {task.description}</h1>
                                </ul>
                                <div className="mt-6 flex justify-end space-x-4">
                                    <button  className="btn btn-primary ">Delete</button>
                                    <button onClick={()=>updatehandle(task._id)} className="btn btn-primary ">Update</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>


            </div>
        </div>
    );
};

export default MyTask;