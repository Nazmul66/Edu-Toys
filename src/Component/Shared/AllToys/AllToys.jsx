import React, { useEffect, useState } from 'react';
import './AllToys.css'
import { FiSearch } from 'react-icons/fi';
import AllToyRow from '../../Pages/AllToyRow/AllToyRow';

const AllToys = () => {
    const [gerData, setGetData] = useState([]);
    const perPage = 20;

    useEffect(() =>{
        fetch(`http://localhost:3000/allToy?limit=${perPage}`)
        .then(res => res.json())
        .then(data => setGetData(data))
    },[perPage])

    return (
        <div className='py-20 allToy px-5'>
            <div className='max-w-[1140px] mx-auto'>
               <div className='bg-[#f9f2fac4] rounded-lg text-[36px] text-center py-7 mb-12 font-bold text-[#353A3c]'>
                    <h2>All Toy Data of All Users</h2>
                </div>

                <div className='max-w-[650px] mx-auto rounded-full bg-[#FF1276] flex items-center justify-between lg:p-4 p-2 mb-16 lg:static relative'>
                     <div className='bg-[#FBE628] lg:w-[50px] w-[40px] lg:h-[50px] h-[40px] flex justify-center items-center rounded-full absolute lg:static cursor-pointer top-[50%] translate-y-[-50%] lg:translate-y-0 left-[20px]'>
                        <FiSearch className='lg:text-[24px] text-[16px] block' />
                     </div>
                    <h3 className='font-semibold lg:text-[20px] text-[14px] text-white lg:block hidden'>Find your product</h3>
                    <input type="text" name="search" placeholder='Search here' className='outline-none lg:h-[50px] h-[50px] w-full lg:w-fit rounded-full lg:px-3 lg:pl-4 pl-16' />
                </div>

              <div className="overflow-x-auto w-full">
                    <table className="table table-compact w-full">
                        {/* table head part */}
                        <thead>
                            <tr>
                                <th>Sl.</th>
                                <th>Seller_Name</th>
                                <th>Toy_Name</th>
                                <th>Sub_Category</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Options</th>
                            </tr>
                        </thead>

                      {/* table body's part */}
                    {
                        gerData.map((data, index) => <AllToyRow 
                                  key={data._id} 
                                  index={index}
                                  data={data}
                                ></AllToyRow> )
                     }
                    
                   </table>
                </div>
            </div>
        </div> 
    );
};

export default AllToys;