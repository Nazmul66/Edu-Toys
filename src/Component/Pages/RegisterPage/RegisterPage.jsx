import React from 'react';
import { BsGoogle } from 'react-icons/bs';
import formImg from '../../../assets/all_image/form.jpg'
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div className='lg:py-20 py-10 px-5'>
        <div className='max-w-[1140px] mx-auto flex lg:flex-row flex-col justify-between items-center gap-12'>
            <div className='lg:w-[60%] w-full'>
                <img src={formImg} alt="" className='w-full' />
            </div>

            <div className='lg:w-[40%] w-full '>
                 <h2 className='text-[#202832] text-center mb-8 font-bold text-[30px]'>Register Form</h2>
                <form action="">
                   <div className='mb-7'>
                        <input type="text" name="name" className='outline-none px-5 py-3 rounded-md bg-[#EEE] w-full' placeholder='Name' />
                    </div>
                    <div className='mb-7'>
                        <input type="email" name="email" className='outline-none px-5 py-3 rounded-md bg-[#EEE] w-full' placeholder='Email' />
                    </div>
                    <div className='mb-7'>
                        <input type="password" name="password" className='outline-none px-5 py-3 rounded-md bg-[#EEE] w-full' placeholder='Password' />
                    </div>
                    <div className='mb-7'>
                        <input type="text" name="photo" className='outline-none px-5 py-3 rounded-md bg-[#EEE] w-full' placeholder='Photo url' />
                    </div>

                    <button className='block w-full font-semibold text-white py-3 bg-[#4686ff] rounded-md '>Register</button>

                    <div className="flex flex-col w-full border-opacity-50 my-2">
                            <div className="divider text-[#e1e0e0]">OR</div>
                        </div>
                        <div className='bg-[#f64236] flex items-center justify-center rounded-md mb-6'>
                            <BsGoogle className='mr-2 text-white text-[18px]' />
                            <button className='font-semibold text-white py-3'>Login With Google</button>
                    </div>

                    <p className='font-medium text-[16px] text-center'>Already have an account? please <Link
                    to="/login" className='text-[#5b8fd9]'>Sign In</Link></p>
                </form>
            </div>
        </div>
    </div>
    );
};

export default RegisterPage;