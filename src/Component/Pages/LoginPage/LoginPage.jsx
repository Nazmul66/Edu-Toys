import React, { useContext } from 'react';
import { BsGoogle } from 'react-icons/bs';
import formImg from '../../../assets/all_image/form.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContexts } from '../../../AuthProvider/AuthProvider';

const LoginPage = () => {
    const {signInUser} = useContext(AuthContexts);
    const navigate = useNavigate();

    const handleLogin = (event) =>{
        event.preventDefault();
        const Email       = event.target.email.value;
        const Password    = event.target.password.value;
        const allFormDetails = { Email, Password }
        console.log(allFormDetails)

        signInUser(Email, Password)
        .then(result =>{
            const users = result.user;
            console.log("login successful")
            navigate('/');
        })
        .catch(error =>{
            console.log(error.message)
        })
    }

    return (
        <div className='lg:py-20 py-10 px-5'>
            <div className='max-w-[1140px] mx-auto flex lg:flex-row flex-col justify-between items-center gap-12'>
                <div className='lg:w-[60%] w-full'>
                    <img src={formImg} alt="" className='w-full' />
                </div>

                <div className='lg:w-[40%] w-full '>
                     <h2 className='text-[#202832] text-center mb-8 font-bold text-[30px]'>Login Form</h2>

                    <form  onSubmit={ handleLogin }>
                        <div className='mb-7'>
                            <input type="email" name="email" className='outline-none px-5 py-3 rounded-md bg-[#EEE] w-full' placeholder='Email' />
                        </div>
                        <div className='mb-7'>
                            <input type="password" name="password" className='outline-none px-5 py-3 rounded-md bg-[#EEE] w-full' placeholder='Password' />
                        </div>

                        <div className='flex justify-between mb-10'>
                            <div className='flex items-center'>
                                <input type="checkbox" name="" className='mr-3' required />
                                <span className='text-[#28343d] font-black'>Remember Me</span>
                            </div>
                            <span className='block text-[#5b8fd9] font-medium'>Forget Password?</span>
                        </div>

                        <button className='block w-full font-semibold text-white py-3 bg-[#4686ff] rounded-md'>Login</button>
                    </form>

                        <div className="flex flex-col w-full border-opacity-50 my-2">
                            <div className="divider text-[#e1e0e0]">OR</div>
                        </div>
                        <div className='bg-[#f64236] flex items-center justify-center rounded-md mb-6'>
                            <BsGoogle className='mr-2 text-white text-[18px]' />
                            <button className='font-semibold text-white py-3'>Login With Google</button>
                        </div>
                        <p className='font-medium text-[16px] text-center'>Gets Members Benefits. <Link
                        to="/register" className='text-[#5b8fd9]'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;