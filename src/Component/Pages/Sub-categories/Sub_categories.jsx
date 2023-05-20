import React from 'react';
import './Sub_categories.css'

const Sub_categories = ({ sub_category }) => {
    const { Photo, ProductName, Price, Rating } = sub_category;
    // console.log(sub_category)
    return (
        <div className='category-card'>
            <div className=''>
                <img src={Photo} alt="" className='w-full' />
            </div>
            <div className=''>
               <h3 className='text-[#FBA628] font-bold text-xl mb-4'>{ProductName}</h3>
               <h5 className='text-[#8988F7] font-bold text-[16px] mb-4'>Price: ${Price}</h5>
               <p className='text-[#16BCA9] font-bold text-[16px] mb-4'>Ratings: {Rating}</p>
                <div class="text-center lg:text-left lg:mt-0 mt-10">
                    <button class="text-white font-medium text-[14px] bg-[#FF1276] px-[20px] py-[10px] rounded-lg">VISIT NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Sub_categories;