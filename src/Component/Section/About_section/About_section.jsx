import React from 'react';
import './About_section.css'
import Content1 from '../../../assets/all_image/content-1.png'
import Content2 from '../../../assets/all_image/content-2.png'
import Content3 from '../../../assets/all_image/content-3.png'
import Content4 from '../../../assets/all_image/content-4.png'

const About_section = () => {
    return (
        <div className='py-10 px-5'>
            <div className='max-w-[1140px] mx-auto'>
                <h4 className='text-[#FF1276] text-2xl font-bold text-center mb-2'>Our services</h4>
                <p className='text-[36px] text-[#101828] font-bold text-center mb-14'>saying about this website features</p>
                <div className='flex flex-col gap-5 lg:flex-row justify-between'>
                    <div className='about-content lg:w-1/4 w-full lg:p-5 p-0 lg:mb-0 mb-8'>
                        <img src={Content1} alt="" className='block mx-auto' />
                        <h6>Import the full demo with 1 click</h6>
                        <p>You can get the entire PlayGrow theme demo with just a single click of your mouse.</p>
                    </div>
                    <div className='about-content lg:w-1/4 w-full lg:p-5 p-0 lg:mb-0 mb-8'>
                        <img src={Content2} alt="" className='mt-[-28px] block mx-auto' />
                        <h6>Easy drag-and-drop content editing</h6>
                        <p>PlayGrow is fully compatible with the user-friendly Elementor Page Builder plugin.</p>
                    </div>
                    <div className='about-content lg:w-1/4 w-full lg:p-5 p-0 lg:mb-0 mb-8'>
                        <img src={Content3} alt="" className='mt-[-10px] block mx-auto' />
                        <h6>Costumize anything with total ease</h6>
                        <p>Adjust any of the colors, choose from over IK Google Fonts available & lots more.</p>
                    </div>
                    <div className='about-content lg:w-1/4 w-full lg:p-5 p-0'>
                        <img src={Content4} alt="" className='block mx-auto' />
                        <h6>Fully responsive and retina-ready</h6>
                        <p>Your new website is sure to look absolutely stunning on all device types and screens.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About_section;