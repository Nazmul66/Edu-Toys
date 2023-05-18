import React from 'react';
import './Footer.css'
import logo from '../../assets/all_image/logo.png'

const Footer = () => {
    return (
        <footer>
            <div className='max-w-[1140px] mx-auto flex lg:flex-row flex-col justify-between'>
                <div className='lg:w-[46%] w-full'>
                   <img src={logo} alt="" className='w-[200px] lg:inline block mx-auto lg:mb-0 mb-10' />
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
        </footer>
    );
};
import './Footer.css'

export default Footer;