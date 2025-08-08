import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';

const Carusel = () => {
    return (
        <Carousel showThumbs={false} autoPlay infiniteLoop>
            <div className=' text-start py-20 md:py-40 bg-cover bg-center  px-5 md:px-20 text-white space-y-2 md:space-y-8' style={{ backgroundImage: "url('https://i.ibb.co/SX7NLrWL/html-css-collage-concept-with-person-23-2150062008.jpg')" }}>
                <h1 className=' text-xl md:text-4xl lg:text-6xl font-bold'><span className='text-green-500'>Find</span> <span className=''>Expert</span> <span><Typewriter
                    words={['Developer', 'Designer', 'Creator', 'programmer']}
                    loop={5}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                /></span></h1>
                <p className='md:text-xl'>Connect with skilled professionals ready  to tackle your <br /> projects quickly and efficiently.</p>

                <Link to={'/addtask'}><button className='btn btn-primary'>Post a Task</button></Link>
            </div>
            <div className='text-start py-20 md:py-40 bg-cover bg-center  px-5 md:px-20 text-white space-y-2 md:space-y-8' style={{ backgroundImage: "url('https://i.ibb.co/XQkWMyP/concept-partnership-teamwork-mixed-media-641298-14963.jpg')" }} >
                <h1 className='text-xl md:text-4xl lg:text-6xl font-bold'><span><Typewriter
                    words={['Connect with Clients Worldwide', 'Join the Freelance Marketplace', 'Find Work That Fits Your Skills', 'Work Remotely on Your Terms']}
                    loop={5}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                /></span></h1>
                <p className='md:text-xl'>Connect with skilled professionals ready  to tackle your <br /> projects quickly and efficiently.</p>
                <Link to={'/browsetasks'}><button className='btn btn-primary hover:btn-secondary'>Brows a task</button></Link>
            </div>
            <div className=' text-start py-20 md:py-40 bg-cover bg-center  px-5 md:px-20 text-white space-y-2 md:space-y-8' style={{ backgroundImage: "url('https://i.ibb.co/1J8wSQ8y/business-men-collaboration-planning-laptop-office-startup-online-company-web-design-corporate-team-c.jpg')" }} >
                <h1 className='text-xl md:text-4xl lg:text-6xl font-bold'><span className='text-green-500'>Work on</span> <span><Typewriter
                    words={['Business Plan', 'E-commerce Store', 'Website', 'personal Branding']}
                    loop={5}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                /></span></h1>
                <p className='md:text-xl'>Set your own schedule, choose your projects,  and build your <br /> freelance career. and successfully</p>

                <Link to={'/addtask'}><button className='btn btn-primary'>Post a Task</button></Link>
            </div>
        </Carousel>
    );
};

export default Carusel;