import React, { useEffect, useState } from 'react';
import './Category_section.css'
import Sub_categories from '../../Pages/Sub-categories/Sub_categories';

const Category_section = () => {
    const [activeTabs, setActiveTabs] = useState("science");
    const [toggle, setToggle] = useState([]);

    useEffect(() =>{
        fetch(`http://localhost:3000/category/${activeTabs}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setToggle(data)
        })
    },[activeTabs])

    const tabToggle = (property) =>{
        setActiveTabs(property)
    }
    return (
        <div className='py-20 px-5'>
           <div className='max-w-[1140px] mx-auto'>
              <h4 className='text-[#FF1276] text-2xl font-bold text-center mb-3'>Our Category</h4>
              <p className='text-[36px] text-[#101828] font-bold text-center mb-10'>Shop By Category</p>

              <div className='mb-20'>
                   <ul className='flex justify-center'>
                        <li onClick={() => tabToggle("science")} className={`${activeTabs == "science" ? "active" : "inActive"} px-8 py-3 font-medium cursor-pointer`}>Science Kits</li>

                        <li onClick={() => tabToggle("math")} className={`${activeTabs == "math" ? "active" : "inActive"} px-8 py-3 font-medium cursor-pointer`}>Math Learning Toys</li>

                        <li onClick={() => tabToggle("puzzle")} className={`${activeTabs == "puzzle" ? "active" : "inActive"} px-8 py-3 font-medium cursor-pointer`}>Puzzle Toys</li>
                   </ul>
              </div>

              <div className='grid lg:grid-cols-2 grid-cols-1 gap-8'> 
                  {
                    toggle.map(sub_category => <Sub_categories
                           key={sub_category._id}
                           sub_category={sub_category}
                        ></Sub_categories> )
                  }
              </div>
           </div>
        </div>
    );
};

export default Category_section;