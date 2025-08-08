import React, { use, useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import { NavLink } from 'react-router';
import { AuthContext } from '../Contest/AuthContest';
import { RxAvatar } from "react-icons/rx";
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';
import { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';



const Navbar = () => {
    const { toggleTheme } = useContext(ThemeContext);
    
    const { user, setUser } = use(AuthContext);
    console.log(user);



    const logoutUser = () => {

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
                signOut(auth)
                    .then(() => {
                        console.log("User signed out");
                        setUser(null); // Clear user from context
                    })
                    .catch((error) => {
                        console.log("Logout error:", error.message);
                    });
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });




    }

    const links = <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/addtask'}>Add Task</NavLink>
        <NavLink to={'/browsetasks'}>Browse Tasks</NavLink>
        <NavLink to={'/mytask'}>My Posted Tasks</NavLink></>

    return (
        <div className=' mx-auto shadow-xl '>
            <Toaster position="top-right" />
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className=' hidden md:block'>

                        <a className="btn btn-ghost text-2xl"><img className='w-10' src='/logo.png' alt="" />Freelancer Market</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-5 font-semibold">
                        {links}
                    </ul>
                </div>




                <div className="navbar-end">
                    <div className='mr-4 '>
                        {user ? (
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0}  className="btn btn-ghost btn-circle avatar">
                                    <div className="w-12 rounded-full content-center">
                                        {user.photoURL ? (
                                            <img src={user.photoURL} alt="User Avatar" />
                                        ) : ( <RxAvatar size={35} />
                                        )}
                                    </div>
                                </div>
                                <ul className="mt-3 z-[1] p-2 border shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-60">
                                    <li>
                                        <span className="font-bold">Name:</span>
                                        <span className="text-sm break-all">{user.user}</span>
                                    </li>
                                     <li>
                                        <span className="font-bold">Email:</span>
                                        <span className="text-sm break-all">{user.email}</span>
                                    </li>
                                    <li>
                                        <button onClick={logoutUser} className="btn btn-sm btn-error mt-1">Log Out</button>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <div className="space-x-5 mx-4 flex">
                                <NavLink className='hover:text-green-500 font-bold hidden md:block' to="/signup">Sign Up</NavLink>
                                <NavLink className='hover:text-green-500 font-bold' to="/login">Login</NavLink>
                            </div>
                        )}


                    </div>


                    {/* Toogle theme contronl button  button */}
                    <button onClick={toggleTheme}><label className="flex mr-2 cursor-pointer gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <path
                                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label></button>
                </div>
            </div>

        </div>
    );
};

export default Navbar;