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
                        <h6>Toy car</h6>
                        <p>You can get those car for your children because they will loved for toy cars.</p>
                    </div>
                    <div className='about-content lg:w-1/4 w-full lg:p-5 p-0 lg:mb-0 mb-8'>
                        <img src={Content2} alt="" className='mt-[-28px] block mx-auto' />
                        <h6>Berbie Dolls</h6>
                        <p>Girls really love those berbie girl's doll to play several hours to their friends.</p>
                    </div>
                    <div className='about-content lg:w-1/4 w-full lg:p-5 p-0 lg:mb-0 mb-8'>
                        <img src={Content3} alt="" className='mt-[-10px] block mx-auto' />
                        <h6>Lego City</h6>
                        <p>Every single children will also love to play lego city toyand most of the they play hours and hours.</p>
                    </div>
                    <div className='about-content lg:w-1/4 w-full lg:p-5 p-0'>
                        <img src={Content4} alt="" className='block mx-auto' />
                        <h6>Marbel's Toys</h6>
                        <p>Those are the coolest action figure toy that every single children's will buy those and play most likely.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About_section;