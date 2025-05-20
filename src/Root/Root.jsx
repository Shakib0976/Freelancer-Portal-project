import React from 'react';
import Navbar from '../Layouts/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Layouts/Footer';

const Root = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;