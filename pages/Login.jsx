import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
         <div className=' flex py-15  justify-center items-center   bg-cover' style={{ backgroundImage: "url('/bg.jpg')" }}>
            <div style={{ backgroundImage: "url('/bg2.jpg')" }} className="card bg-base-100 bg-cover text-white  w-full max-w-sm shrink-0 shadow-2xl">



                <h1 className='text-4xl text-center my-4'>Login Now !</h1>
                <div className="card-body">
                    <form  className="fieldset">
                        {/* email */}
                        <label className="label ">Email</label>
                        <input
                            required
                            name='email'
                            type="email"
                            className="input bg-black"
                            placeholder="Email" />
                        {/* password */}
                        <label className="label">Password</label>
                        <input

                            name='password'
                            type="password"
                            className="input bg-black"
                            placeholder="Password" />
                        <div><button type='button' className="link link-hover">Forgot password?</button></div>
                        {/* button */}
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </form>
                    <p className='text-center mb-3'>Don't have an account?<span className='text-blue-700'> <Link to='/signUp'>Sign up</Link></span></p>
                    <p className='font-bold text-gray-400 text-center'>Or, login with</p>

                    {/* google login button */}

                    <button  className="btn bg-white text-black border-[#e5e5e5] mt-1">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Login;