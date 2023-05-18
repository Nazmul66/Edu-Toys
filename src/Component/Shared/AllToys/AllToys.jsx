import React, { useEffect, useState } from 'react';
import AllToyRow from '../../Pages/AllToyRow/AllToyRow';

const AllToys = () => {
    const [gerData, setGetData] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:3000/allToy")
        .then(res => res.json())
        .then(data => setGetData(data))
    },[])

    return (
        <div className='py-20'>
            <div className='max-w-[1140px] mx-auto'>
               <div className='bg-[#f9f2fac4] rounded-lg text-[36px] text-center py-7 mb-12 font-bold text-[#353A3c]'>
                    <h2>All Toy Data of All Users</h2>
                </div>

              <div className="overflow-x-auto w-full">
                    <table className="table table-compact w-full">
                        {/* table head part */}
                        <thead>
                            <tr>
                                <th>Sl.</th>
                                <th>Name</th>
                                <th>Toy Name</th>
                                <th>Sub-Category</th>
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