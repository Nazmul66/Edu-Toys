import React from 'react';
import titleChange from '../../../TitleChange/TitleChange';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const fullDetails = useLoaderData();
    const { Photo, ProductName, seller_Name, Email, Price, Rating, Quantity, Describe} = fullDetails;
    // console.log(fullDetails)
    titleChange("Toy-Details");

    return (
        <div className='py-20 px-5'>
           <div className='max-w-[700px] mx-auto'>
              <h3 className='text-center font-bold text-[50px] text-[#404040] mb-16 underline'>Toy-Details</h3>
               <div className='p-10 border-[1px] border-[#e7e7e7] rounded-lg '>
                   <img src={Photo} alt="" className='w-full h-[500px] object-cover rounded-lg mb-6' />
                   <h3 className='text-[#FBA628] font-bold text-4xl mb-10 text-center'>{ProductName}</h3>
                   <h5 className='text-[#444] text-2xl font-semibold mb-4'><span className='font-extrabold'>Name :</span> {seller_Name}</h5>
                   <p className='text-[#444] text-[16px] font-bold mb-4'>Email : {Email}</p>
                   <p className='text-[#444] text-[16px] font-bold mb-6'>Available Quantity : {Quantity}</p>

                    <div className='flex justify-between items-center'>
                        <h5 className='text-[#444] text-lg font-bold mb-4'>Price : ${Price}</h5>
                        <span className='text-[#444] text-lg font-bold mb-4'>Ratings: {Rating} star</span>
                    </div>
                    <p className='text-[16px] text-medium leading-7 text-[#404040] mt-7'><span className='font-extrabold'>Description : </span>{Describe}</p>
               </div>
           </div>  
        </div>
    );
};

export default ToyDetails;