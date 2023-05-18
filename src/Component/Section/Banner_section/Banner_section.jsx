import React from 'react';
import './Banner_section.css'
import toy1 from '../../../assets/all_image/image 4.png'
import toy2 from '../../../assets/all_image/image 5.png'
import banner from '../../../assets/all_image/banner.png'

const Banner_section = () => {
    return (
        <div className='lg:py-20 py-10 px-5'>
            <div className='max-w-[1140px] mx-auto flex lg:flex-row flex-col justify-between items-center relative'>
                 <div className='lg:w-1/2 w-full banner-title'>
                    <div className='main lg:mx-0 mx-auto'>
                        <h2 className='titles'>Fun to care,</h2>
                        <img src={toy1} alt="" className='absolute top-[-40px] right-[-40px] lg:block hidden' />
                        <img src={toy2} alt="" className='absolute top-[40px] left-[-80px] lg:block hidden' />
                    </div>
                        <h2 className='text-[#FBA628] lg:text-left text-center font-bold lg:text-[64px] text-[50px] lg:ml-24 ml-0'>Comfy Feel</h2>
                        <p>Mauris aliquet enim quis odio lacinia, id viverra elit convallis. Nunc nulla massa elit</p>
                       <div className='text-center lg:text-left'>
                          <button className='text-white font-medium text-[14px] bg-[#FF1276] px-[20px] py-[10px] rounded-lg'>VISIT NOW</button>
                       </div>
                 </div>
                 <div className='lg:w-[60%] w-full lg:absolute static right-0 lg:mt-0 mt-20'>
                    <img src={banner} alt="" className='w-full' />
                 </div>
            </div>
        </div>
    );
};

export default Banner_section;