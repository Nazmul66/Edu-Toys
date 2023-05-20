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
                <p className='text-[36px] text-[#101828] font-bold text-center mb-14'>Saying About Educational Children's Toy</p>
                <div className='flex flex-col gap-5 lg:flex-row justify-between'>
                    <div className='about-content lg:w-1/4 w-full lg:p-5 p-0 lg:mb-0 mb-8'>
                        <img src={Content1} alt="" className='block mx-auto' />
                        <h6>Science Kits</h6>
                        <p>Children's need to learn something new that they can increase their knowledge quickly.</p>
                    </div>
                    <div className='about-content lg:w-1/4 w-full lg:p-5 p-0 lg:mb-0 mb-8'>
                        <img src={Content2} alt="" className='mt-[-28px] block mx-auto' />
                        <h6>Math Learning</h6>
                        <p>Math is the most intelligence and bright thing that quickly catchup the knowledge.</p>
                    </div>
                    <div className='about-content lg:w-1/4 w-full lg:p-5 p-0 lg:mb-0 mb-8'>
                        <img src={Content3} alt="" className='mt-[-10px] block mx-auto' />
                        <h6>Doctor Kits</h6>
                        <p>Children love to play doctor game.They will think that he/she grow up then became a doctor.</p>
                    </div>
                    <div className='about-content lg:w-1/4 w-full lg:p-5 p-0'>
                        <img src={Content4} alt="" className='block mx-auto' />
                        <h6>Engineering Tools</h6>
                        <p>Many children's has a dream to build a house, bridge or others stuff that children love the most.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About_section;