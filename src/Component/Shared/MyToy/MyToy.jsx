import React, { useEffect, useState } from 'react';
import { AuthContexts } from '../../../AuthProvider/AuthProvider';

const MyToy = () => {
       const {user} = useState(AuthContexts);
       const [emailData, setEmailData] = useState([])

       useEffect(() =>{
          
       },[])

    return (
      <div className='py-20'>
         <div className='max-w-[1140px] mx-auto'>
               <div className='bg-[#f9f2fac4] rounded-lg text-[36px] text-center py-7 mb-12 font-bold text-[#353A3c]'>
                    <h2>Only My Toys</h2>
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

                    <tbody>
                        <tr>
                          <th>1</th> 
                          <td>Cy Ganderton</td> 
                          <td>Quality Control Specialist</td> 
                          <td>Littel, Schaden and Vandervort</td> 
                          <td>Canada</td> 
                          <td>12/16/2020</td> 
                          <td>Blue</td>
                        </tr>
                     </tbody>
                
              </table>
            </div>
        </div>
    </div> 
    );
};

export default MyToy;