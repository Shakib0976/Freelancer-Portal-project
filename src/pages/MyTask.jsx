import React, { use, useEffect, useState } from 'react';
import { Link, Links } from 'react-router';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { AuthContext } from '../Contest/AuthContest';


const MyTask = () => {
    const [tasks, setTasks] = useState([])
    const [selectedTaskId, setSelectedTaskId] = useState(null);



    const handleDelete = (id) => {
        console.log('delete', id);


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://freelance-project-server.vercel.app/task/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const remainTask = tasks.filter(task => task._id != id);
                            setTasks(remainTask)
                            console.log('afterDeleting data ', data);
                        }
                    })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your task has been deleted.",
                    icon: "success"
                });
            }
        });

    }


    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const addData = Object.fromEntries(formData.entries());
        console.log(addData);


        fetch(`https://freelance-project-server.vercel.app/task/${selectedTaskId}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addData)
        })
            .then(res => res.json())
            .then(data => {
                setTasks(prevTasks =>
                    prevTasks.map(task =>
                        task._id === selectedTaskId ? { ...task, ...addData } : task
                    )
                );
                console.log('updatebids', data);
                toast.success('bits Update successfull')
            })
    }

    const { user } = use(AuthContext);

    useEffect(() => {
        fetch(`https://freelance-project-server.vercel.app/task/email/${user.email}`)
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
                    <Link to={'/addtask'}> <button className='btn btn-primary'>Add New Task</button> </Link>
                </div>
            </div>
            <div>
                <div className="overflow-x-auto">
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
                                    <td className="px-6 py-4 whitespace-nowrap text-sm cursor-pointer">


                                        {/* update modal */}

                                        <button className="btn btn-primary" onClick={() => {
                                            setSelectedTaskId(task._id); // Set the ID of the task being updated
                                            document.getElementById(`modal-${task._id}`).showModal();
                                        }}>Update</button>
                                        <dialog id={`modal-${task._id}`} className="modal modal-bottom sm:modal-middle">
                                            <div className="modal-box">
                                                <div className="p-6  border-1 border-gray-400 rounded-lg ">
                                                    <form onSubmit={handleUpdate} className='space-y-4 '>
                                                        <div>
                                                            <label className="block font-medium mb-1">Task Title</label>
                                                            <input defaultValue={task.title} name='title' type="text" className="w-full px-4 py-2 border rounded-md " />
                                                        </div>

                                                        <div>
                                                            <label className="block  font-medium mb-1">Category</label>


                                                            <select name='options' defaultValue="Server location" className="select select-neutral">
                                                                <option >{task.options}</option>
                                                                <option>Development</option>
                                                                <option>Marketing</option>
                                                                <option>Video Editing</option>
                                                                <option>Programming</option>
                                                                <option>Business</option>
                                                                <option>Others</option>
                                                            </select>
                                                        </div>

                                                        <div>
                                                            <label className="block font-medium mb-1">Description</label>
                                                            <textarea defaultValue={task.description} name='description' rows="5" className="w-full px-4 py-2 border rounded-md "></textarea>
                                                        </div>

                                                        <div>
                                                            <label className="block  font-medium mb-1">Deadline</label>
                                                            <input name='date' type="date" defaultValue={task.date} className="w-full px-4 py-2 border rounded-md " />
                                                        </div>

                                                        <div>
                                                            <label className="block  font-medium mb-1">Budget ($)</label>
                                                            <input defaultValue={task.budget} name='budget' type="number" className="w-full px-4 py-2 border rounded-md " />
                                                        </div>

                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                            <div>
                                                                <label className="block  font-medium mb-1">Your Email</label>
                                                                <input name="email" readOnly value={user ? user.email : 'User name Not Found'} className="w-full px-4 py-2 border rounded-md " />
                                                            </div>
                                                            <div>
                                                                <label className="block font-medium mb-1">Your Name</label>
                                                                <input name='user' type="text" readOnly value={user ? user.displayName : 'user not found'} className="w-full px-4 py-2 border rounded-md " />
                                                            </div>
                                                            <div className='hidden'>
                                                                <label className="block font-medium mb-1">Your Name</label>
                                                                <input name='bids' type="text" defaultValue={0} className="w-full px-4 py-2 border rounded-md " />
                                                            </div>
                                                        </div>

                                                        <div method="dialog" className="w-full modal-action">
                                                            <button type='submit' className='btn w-full mb-1 btn-primary'>Update</button>
                                                        </div>
                                                    </form>
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="w-full btn btn-secondary">Close</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog></td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 cursor-pointer"><button onClick={() => handleDelete(task._id)} className='btn btn-primary'>Delete</button></td>
                                </tr>
                            </tbody>)
                        }


                    </table>
                    <div className="mt-4 text-center text-gray-500 text-sm">A list of your posted tasks</div>
                </div>


            </div>
        </div>
    );
};

export default MyTask;