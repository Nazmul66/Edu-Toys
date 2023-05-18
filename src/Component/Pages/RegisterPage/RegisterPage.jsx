import React, { useContext, useState } from 'react';
import { BsGoogle } from 'react-icons/bs';
import formImg from '../../../assets/all_image/form.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContexts } from '../../../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const RegisterPage = () => {
    const { user, createUser } = useContext(AuthContexts);
    const navigate = useNavigate();
    const [errors, setErrors] = useState("");
    // console.log(user) 

    const handleRegister = (event) =>{
        event.preventDefault();
        const Name        = event.target.name.value;
        const Email       = event.target.email.value;
        const Password    = event.target.password.value;
        const Photo       = event.target.photo.value;
        const allFormDetails = { Name, Email, Password, Photo }
        console.log(allFormDetails)

        if(Email === "" || Password === "" || Name === "" || Photo === ""){
            return setErrors("!!! Please fill Up Empty Form Box !!!");
         }
         else if(Password.length < 6){
            return setErrors("!!! AtLeast use 6 Character Password !!!");
         }
         else if(!/(?=.*?[A-Z])/.test(Password)){
             return setErrors("!!! AtLeast use One UpperCase !!!");
         }
         else if(!/(?=.*[0-9])/.test(Password)){
            return setErrors("!!! AtLeast use One Number !!!");
        }
         else if(!/(?=[^#?!@$%^&*\n-])/.test(Password)){
            return setErrors("!!! AtLeast use One Special Character !!!");
        }

        // create user details info
        createUser(Email, Password)
        .then(result =>{
            const users = result.user;
            console.log(users)
            updateProfiles(result.user, Name, Photo)
            navigate("/login");
        })
        .catch(error =>{
            setErrors(error.message)
        })

    }

    const updateProfiles = (infos, name, photo) =>{
         updateProfile(infos, {
            displayName: name,
            photoURL: photo
         })
         .then(() =>{
            console.log("updated Profile");
         })
         .catch(error =>{
            setErrors(error.message);
         })
    }

    return (
        <div className='lg:py-20 py-10 px-5'>
        <div className='max-w-[1140px] mx-auto flex lg:flex-row flex-col justify-between items-center gap-12'>
            <div className='lg:w-[60%] w-full'>
                <img src={formImg} alt="" className='w-full' />
            </div>

            <div className='lg:w-[40%] w-full '>
                 <h2 className='text-[#202832] text-center mb-8 font-bold text-[30px]'>Register Form</h2>

                <form onSubmit={ handleRegister }>
                   <div className='mb-7'>
                        <input type="text" name="name" className='outline-none px-5 py-3 rounded-md bg-[#EEE] w-full' placeholder='Name' />
                    </div>
                    <div className='mb-7'>
                        <input type="Email" name="email" className='outline-none px-5 py-3 rounded-md bg-[#EEE] w-full' placeholder='Email' />
                    </div>
                    <div className='mb-7'>
                        <input type="password" name="password" className='outline-none px-5 py-3 rounded-md bg-[#EEE] w-full' placeholder='Password' />
                    </div>
                    <div className='mb-7'>
                        <input type="text" name="photo" className='outline-none px-5 py-3 rounded-md bg-[#EEE] w-full' placeholder='Photo url' />
                    </div>

                    <p className='text-[15px] text-red-600 font-bold text-center mb-4'>{errors}</p>

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