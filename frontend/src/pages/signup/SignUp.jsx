import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import useSignup from "../../hooks/useSignup";

const Signup = () => {
    const [inputs, setinputs] = useState({
        fullName: '',
        userName: '',
        password: '',
        confirmPassword: '',
        gender: '',
    });

    const handleGender = (gender) => {
        setinputs({ ...inputs, gender });
    };

    const { loading, signup } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (inputs.gender === 'others') {
            toast('! LEDTV+ ')
            setTimeout(() => {
                toast.error('NO LEDTV+ members allowed')

            }, 2000);
            setTimeout(() => {
                toast.error('Don"t come bake again')

            }, 3500);
            localStorage.setItem('bgpic', 'bg4.webp')
            setTimeout(() => {
                window.location.reload()
            }, 5000)
            return
        }

        // Destructure state values before passing to signup
        const { fullName, userName, password, confirmPassword, gender } = inputs;

        await signup({ fullName, userName, password, confirmPassword, gender });
    };
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign Up <span className='text-blue-500'> ChatApp</span>
                </h1>

                <form>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input value={inputs.fullName} type='text' placeholder='Eg:John Doe' className='w-full input input-bordered  h-10' onChange={(e) => { setinputs({ ...inputs, fullName: e.target.value }) }} />
                    </div>

                    <div>
                        <label className='label p-2 '>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type='text' placeholder='Eg:johndoe' className='w-full input input-bordered h-10'
                            value={inputs.userName} onChange={(e) => setinputs({ ...inputs, userName: e.target.value })} />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10'
                            value={inputs.password} onChange={(e) => {
                                setinputs({ ...inputs, password: e.target.value })
                            }}
                        />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Confirm Password'
                            className='w-full input input-bordered h-10'
                            value={inputs.confirmPassword} onChange={(e) => setinputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>

                    <GenderCheckbox onCheckboxChange={handleGender} selectedGender={inputs.gender} />

                    <Link to={'/login'} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
                        Already have an account?
                    </Link>

                    <div>
                        <button onClick={(handleSubmit)} className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>{loading ? <span className="loading loading-spinner"></span> : 'Sign Up'}</button>
                    </div>
                </form>
            </div>
            <Toaster position="top-center"
                reverseOrder={false} />
        </div>
    );
};
export default Signup;