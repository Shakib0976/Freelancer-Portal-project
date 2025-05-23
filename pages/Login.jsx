import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../src/Contest/AuthContest';
import toast from 'react-hot-toast';





const Login = () => {
    const locations = useLocation();

    const { setUser, googleSignIn, logInUser ,setLoading } = use(AuthContext);

    const navigate = useNavigate();


    const handleSigninGoogle = () => {
        setLoading(true);
        googleSignIn()
            .then((result) => {
                navigate(locations?.state || '/', {
                    state: { toastMessage: 'Login successful!' }
                });
                const user = result.user;
                setUser(user);
                toast.success('Successfully login')

            }).catch((error) => {

                const errorMessage = error.message;
                toast.error(errorMessage);
            });


    }


    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;


        logInUser(email, password)
            .then((result) => {
                const user = (result.user);
                setUser(user)
                // toast.success('Success full Login');
                navigate(locations?.state || '/', {
                    state: { toastMessage: 'Login successful!' }
                });

                toast.success('Successfully Login')

            })
            .catch((error) => {
                console.log(error.message);
                toast.error('Invalid email or password!');
            })


    }
    return (
        <div className=' flex py-15  justify-center items-center  mx-3  bg-cover' >
            <div className="card bg-base-100 bg-cover border border-gray-300  w-full max-w-sm shrink-0 shadow-xl">



                <h1 className='text-3xl font-bold text-center my-4'>Login Now !</h1>
                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset">
                        {/* email */}
                        <label className="label ">Email</label>
                        <input
                            required
                            name='email'
                            type="email"
                            className="input"
                            placeholder="Email" />
                        {/* password */}
                        <label className="label">Password</label>
                        <input

                            name='password'
                            type="password"
                            className="input "
                            placeholder="Password" />
                        <div><button type='button' className="link link-hover">Forgot password?</button></div>
                        {/* button */}
                        <button type='submit' className="btn hover:text-green-500 font-bold btn-neutral mt-4">Login</button>
                    </form>
                    <p className='text-center mb-3'>Don't have an account?<span className='text-blue-700'> <Link to='/signUp'>Sign up</Link></span></p>
                    <p className='font-bold text-gray-400 text-center'>Or, login with</p>

                    {/* google login button */}

                    <button onClick={handleSigninGoogle} className="btn  border-[#e5e5e5] mt-1">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Login;