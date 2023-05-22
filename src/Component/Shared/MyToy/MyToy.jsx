import React, { useContext, useEffect, useState } from 'react';
import './MyToy.css'
import { AuthContexts } from '../../../AuthProvider/AuthProvider';
import MyToyRow from '../../Pages/MyToyRow/MyToyRow';
import Swal from 'sweetalert2';
import titleChange from '../../../TitleChange/TitleChange';

const MyToy = () => {
       titleChange("MyToys");
       const { user } = useContext(AuthContexts);
       const [emailData, setEmailData] = useState([])
       const url = `https://edu-toys-server-nine.vercel.app/myToy?email=${user?.email}`;

       useEffect(() =>{
          fetch(url)
          .then(res => res.json())
          .then(data => setEmailData(data))
       },[url])

       const handleDelete = (id) =>{
            
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

            // Users Toy will be DELETE
            fetch(`https://edu-toys-server-nine.vercel.app/delete/${id}`,{
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
    
                    if(data.deletedCount > 0){
                      Swal.fire(
                        'Deleted!',
                        'Your toy data has been deleted.',
                        'success'
                      )
                      const remaining = emailData.filter(emails => emails._id !== id)
                      setEmailData(remaining);
                    }
                })
            }
          })

       }

    return (
      <div className='py-20 myToy'>
         <div className='max-w-[1140px] mx-auto'>
               <div className='bg-[#f9f2fac4] rounded-lg text-[36px] text-center py-7 mb-12 font-bold text-[#353A3c]'>
                    <h2>My Toys</h2>
                </div>

          <div className="overflow-x-auto w-full" data-aos="zoom-in" data-aos-duration="1500">
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
                                  handleDelete={handleDelete}
                                ></MyToyRow> )
                     }
                
              </table>
            </div>
        </div>
    </div> 
    );
};

export default MyToy;