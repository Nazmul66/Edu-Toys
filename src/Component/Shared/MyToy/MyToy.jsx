import React, { useContext, useEffect, useState } from 'react';
import './MyToy.css'
import { AuthContexts } from '../../../AuthProvider/AuthProvider';
import MyToyRow from '../../Pages/MyToyRow/MyToyRow';

const MyToy = () => {
       const { user } = useContext(AuthContexts);
       const [emailData, setEmailData] = useState([])
       const url = `http://localhost:3000/myToy?email=${user?.email}`;

       useEffect(() =>{
          fetch(url)
          .then(res => res.json())
          .then(data => setEmailData(data))
       },[url])

    return (
      <div className='py-20 myToy'>
         <div className='max-w-[1140px] mx-auto'>
               <div className='bg-[#f9f2fac4] rounded-lg text-[36px] text-center py-7 mb-12 font-bold text-[#353A3c]'>
                    <h2>My Toys</h2>
                </div>

          <div className="overflow-x-auto w-full">
                <table className="table table-compact w-full">
                    {/* table head part */}
                    <thead>
                        <tr className='text-center'>
                            <th>Sl.</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Toy Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Description</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                        {/* table body's part */}
                    {
                        emailData.map((data, index) => <MyToyRow 
                                  key={data._id} 
                                  index={index}
                                  data={data}
                                ></MyToyRow> )
                     }
                
              </table>
            </div>
        </div>
    </div> 
    );
};

export default MyToy;