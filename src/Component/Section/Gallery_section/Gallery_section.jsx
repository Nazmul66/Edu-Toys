import React from 'react';
import './Gallery_section.css'
import gallery_1 from "../../../assets/photo_gallery/gallary-1.png";
import gallery_2 from '../../../assets/photo_gallery/gallary-2.png';
import gallery_3 from '../../../assets/photo_gallery/gallary-3.png';
import gallery_4 from '../../../assets/photo_gallery/gallary-4.png';
import gallery_5 from '../../../assets/photo_gallery/gallary-5.jpg';
import gallery_6 from '../../../assets/photo_gallery/gallary-6.jpg';
import gallery_7 from '../../../assets/photo_gallery/gallary-7.jpeg';
import gallery_8 from '../../../assets/photo_gallery/gallary-8.jpg';

const Gallery_section = () => {
    return (
        <div className='py-16 px-5'>
            <h4 className='text-[#FF1276] text-2xl font-bold text-center mb-3'>Our Gallery</h4>
              <p className='text-[36px] text-[#101828] font-bold text-center mb-10'>Kid's Playing with Toys</p>
             <div className='grid lg:grid-cols-4 grid-cols-1 gap-7 max-w-[1140px] mx-auto'
             data-aos="zoom-in-down"
             data-aos-duration="2000">
                <div className='imgBox'>
                   <img src={gallery_1} alt="" className='images' />
                </div>
                <div className='imgBox'>
                   <img src={gallery_2} alt="" className='images' />
                </div>
                <div className='imgBox'>
                   <img src={gallery_3} alt="" className='images' />
                </div>
                <div className='imgBox'>
                   <img src={gallery_4} alt="" className='images' />
                </div>
                <div className='imgBox'>
                   <img src={gallery_5} alt="" className='images' />
                </div>
                <div className='imgBox'>
                   <img src={gallery_6} alt="" className='images' />
                </div>
                <div className='imgBox'>
                   <img src={gallery_7} alt="" className='images' />
                </div>
                <div className='imgBox'>
                   <img src={gallery_8} alt="" className='images' />
                </div>
             </div>
        </div>
    );
};

export default Gallery_section;