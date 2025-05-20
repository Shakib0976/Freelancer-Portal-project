import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Home = () => {
    return (
        <Carousel showThumbs={false} autoFocus infiniteLoop>
            <div className='text-start py-20 md:py-30 bg-cover bg-center  px-10 md:px-20 text-white space-y-8' style={{ backgroundImage: "url('/i2.jpg')" }} >
                <h1 className=' text-3xl md:text-5xl font-bold'><span className='text-green-500'>Find</span> <span className=''>Expert</span> Freelancers</h1>
                <p className='md:text-xl'>Connect with skilled professionals ready  to tackle your <br /> projects quickly and efficiently.</p>
                <button className='btn btn-primary'>Post a Task</button>
            </div>
            <div className='text-start py-30 bg-cover bg-center px-20 text-white space-y-8' style={{ backgroundImage: "url('/s2.jpg')" }} >
                <h1 className='text-5xl font-bold'><span className='text-green-500'>Work on</span> Your Terms</h1>
                <p className='text-xl'>Set your own schedule, choose your projects, <br /> and build your freelance career.</p>
                <button className='btn btn-primary'>Post a Task</button>
            </div>
            <div className='text-start py-30 bg-cover bg-center px-20 text-white space-y-8' style={{ backgroundImage: "url('/s3.jpg')" }} >
                <h1 className='text-5xl font-bold'><span className='text-green-500'>Find</span> <span className=''>Expert</span> Freelancers</h1>
                <p className='text-xl'>Connect with skilled professionals ready  to tackle your <br /> projects quickly and efficiently.</p>
                <button className='btn btn-primary hover:btn-secondary'>Brows a task</button>
            </div>
        </Carousel>
    );
};

export default Home;