import React from 'react';
import './Footer.css'
import logo from '../../assets/all_image/logo.png'
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { GrLinkedinOption } from 'react-icons/gr';

const Footer = () => {
    return (
        <footer>
            <div className='max-w-[1140px] mx-auto' >
                <div className='flex lg:flex-row flex-col justify-between'>
                        <div className='lg:w-[46%] w-full'>
                        <img src={logo} alt="" className='w-[200px] lg:inline block mx-auto lg:mb-0 mb-10' />
                            <div className='social-icon mt-8'>
                                <ul className='flex items-center justify-center lg:justify-normal'>
                                    <li className='w-[45px] h-[45px] bg-[#0e57a0] text-[#e7e7e7] flex justify-center items-center rounded-full mr-4'><FaFacebookF /></li>
                                    <li className='w-[45px] h-[45px] bg-[#1c9cea] text-[#e7e7e7] flex justify-center items-center rounded-full mr-4'><BsTwitter /></li>
                                    <li className='w-[45px] h-[45px] bg-[#0A63BC] text-[#e7e7e7] flex justify-center items-center rounded-full'><GrLinkedinOption /></li>
                                </ul>
                            </div>
                            <p className='text-[#3b60f1] text-[16px] font-bold leading-6 mt-5 lg:text-left text-center mb-9 lg:mb-0'>Address: k-39/5,kuril vatara - 1229</p>
                        </div>
                        <div className='lg:w-[18%] w-full footer_menu lg:text-start text-center'>
                            <h5 className='text-[#98A2B3] font-semibold text-[20px] mb-6'>Product</h5>
                                <ul>
                                    <li>Overview</li>
                                    <li>Features</li>
                                    <li>Solutions</li>
                                    <li>Tutorials</li>
                                    <li>Pricing</li>
                                    <li>Releases</li>
                                </ul>
                        </div>
                        <div className='lg:w-[18%] w-full footer_menu lg:text-start text-center'>
                            <h5 className='text-[#98A2B3] font-semibold text-[20px] mb-6'>Company</h5>
                                <ul>
                                    <li>About us</li>
                                    <li>Careers</li>
                                    <li>Press</li>
                                    <li>News</li>
                                    <li>Media kit</li>
                                    <li>Contact</li>
                                </ul>
                        </div>
                        <div className='lg:w-[18%] w-full footer_menu lg:text-start text-center'>
                            <h5 className='text-[#98A2B3] font-semibold text-[20px] mb-6'>Resources</h5>
                                <ul>
                                    <li>Blog</li>
                                    <li>Newsletter</li>
                                    <li>Events</li>
                                    <li>Help centre</li>
                                    <li>Tutorials</li>
                                    <li>Support</li>
                                </ul>
                        </div>
                </div>
                <p className='text-center text-[#667085] mt-10'>copyright, designed by Nazmul Hassan</p>
            </div>
        </footer>
    );
};
import './Footer.css'

export default Footer;