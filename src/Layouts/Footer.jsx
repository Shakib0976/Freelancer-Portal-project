import React from 'react';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <div className='bg-gray-900 text-white py-10 md:py-20 md:px-15 px-8'>
            <div className='lg:flex justify-between'>
                <div>
                    {/* logo and title */}
                    <div className='flex '>
                        <img className='w-10' src='/logo.png' alt="" />
                        <a className="btn btn-ghost text-2xl text-xl">Freelancer Market</a>
                    </div>
                    <div className='my-5'>
                        <p>Connecting talented freelancers with businesses <br /> and individuals who need their services.</p>
                    </div>
                    {/* social login */}
                    <div>
                        <div className="flex gap-5">
                            <a href="https://www.facebook.com/md.shakib.khan.809698" target='_blank'><img src="/insta.png" alt="" /></a>
                            <a href="https://www.google.com/" target='_blank'><img src="/tw.png" alt="" /></a>
                            <a href="https://www.instagram.com/" target='_blank'><img src="/facebook.png" alt="" /></a>
                            <a href="https://www.youtube.com/" target='_blank'><img src="/youtube.png" alt="" /></a>
                        </div>

                    </div>
                </div>
                <div className='mt-3 md:mt-0'>
                    <h1 className='font-bold text-2xl mb-5'>Quick Links</h1>
                    <div className='grid mt-2 space-x-3'>
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/addtask'}>Add Task</NavLink>
                        <NavLink to={'/browsetasks'}>Browse Tasks</NavLink>
                        <NavLink to={'/mytask'}>My Posted Tasks</NavLink>
                    </div>
                </div>
                <div className='mt-3 md:mt-0'>
                    <h1 className='font-bold text-2xl mb-5'>Contact Us</h1>
                    <div className='mt-2'>
                        <p>123 Market Street, Suite 100</p>
                        <p>San Francisco, CA 94103</p>
                        <p>Email: support@taskforce.com</p>
                        <p>Phone: (555) 123-4567</p>
                    </div>
                </div>
            </div>
            <div className='border border-gray-500 my-5'></div>
            <div className='text-center text-gray-300'>
                <h1 className='mb-2'>© 2025 TaskForce</h1>
                <p> All rights reserved.    Terms of ServicePrivacy Policy</p>
            </div>
        </div>
    );
};

export default Footer;