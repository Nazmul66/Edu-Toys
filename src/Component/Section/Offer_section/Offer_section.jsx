import React from 'react';
import './Offer_section.css'
import teddy from '../../../assets/all_image/teddy.png'
import vector1 from '../../../assets/all_image/image 17.png'
import vector2 from '../../../assets/all_image/image 18.png'
import vector3 from '../../../assets/all_image/image 19.png'

const Offer_section = () => {
    return (
        <div className='offer-section'>
            <div className='max-w-[1140px] mx-auto'>
               <h4 className='text-[#FF1276] text-2xl font-bold text-center mb-20'>Our Offer</h4>
               <div className='flex lg:flex-row flex-col justify-between gap-20'>
                   <div className='lg:w-1/2 w-full'>
                      <img src={teddy} alt="" className='w-full' />
                   </div>
                   <div className='lg:w-1/2 w-full'>
                       <div className='flex items-center border-dashed border-2 border-[#FBA628] bg-[#FFF8EF] px-9 py-8 mb-[35px] rounded-lg'>
                           <img src={vector1} alt="" className='mr-3' />
                             <div className=''>
                                <h2 className='text-[#FBA628] lg:text-[26px] text-[22px] font-bold'>New Born & Baby Care Shop</h2>
                                <span className='block font-semibold text-[14px] text-[#919191]'>Mauris vitae erat non nisi consequat</span>
                             </div>
                       </div>
                       <div className='flex items-center border-dashed border-2 border-[#8988F7] bg-[#F6F7FF] px-9 py-8 mb-[35px] rounded-lg'>
                           <img src={vector2} alt="" className='mr-3' />
                             <div className=''>
                                <h2 className='text-[#8988F7] lg:text-[26px] text-[22px] font-bold'>Toddlers Clothing </h2>
                                <span className='block font-semibold text-[14px] text-[#919191]'>Duis eget suscipit nibh, et condimentum risus</span>
                             </div>
                       </div>
                       <div className='flex items-center border-dashed border-2 border-[#16BCA9] bg-[#F6FEFE] px-9 py-8 mb-[35px] rounded-lg'>
                           <img src={vector3} alt="" className='mr-3' />
                             <div className=''>
                                <h2 className='text-[#16BCA9] lg:text-[26px] text-[22px] font-bold'>Toys and Games</h2>
                                <span className='block font-semibold text-[14px] text-[#919191]'>Phasellus ultricies urna tortor, a porttitor</span>
                             </div>
                       </div>

                   </div>
               </div>
            </div>
        </div>
    );
};

export default Offer_section;