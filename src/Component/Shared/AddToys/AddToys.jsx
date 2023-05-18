import React, { useContext } from 'react';
import './AddToys.css'
import { AuthContexts } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const AddToys = () => {
    const { user } = useContext(AuthContexts);

    const handleAdd = (event) =>{
        event.preventDefault();
        const form         = event.target;
        const ProductName  = form.name.value;
        const seller_Name  = form.seller_name.value;
        const Email        = form.email.value;
        const Category     = form.category.value;
        const Price        = form.price.value;
        const Rating       = form.rating.value;
        const Quantity     = form.quantity.value;
        const Photo        = form.photo.value;
        const Describe     = form.describe.value;

        if(Rating > 5){
         return alert("star rating highest star add 5");
        }
        const allData = {ProductName, seller_Name, Email, Category, Price, Rating, Quantity, Photo, Describe}
        console.log(allData)
        event.target.reset();

        // backend Post data
        fetch("http://localhost:3000/addToy",{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(allData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: 'center-center',
                    icon: 'success',
                    title: 'Your toy Product has been added',
                    showConfirmButton: false,
                    timer: 2000
                  })
            }
        })
    }
    return (
        <div className='py-20 px-5 addtoy'>
            <div className='max-w-[1000px] mx-auto'>
                <div className='bg-[#f9f2fac4] rounded-lg text-[36px] text-center py-7 mb-24 font-bold text-[#353A3c]'>
                    <h2>Online Add Toy</h2>
                </div>

               <form onSubmit={ handleAdd }>
                   <div className='flex lg:flex-row flex-col justify-between items-center gap-10 mb-8'>
                      <div className="lg:w-1/2 w-full">
                        <label htmlFor="" className='text-[22px] font-semibold text-[#353A3c] mb-2 block'>Toy Name</label>
                          <input type="text" name="name" placeholder="Name" className="outline-none border-[2px] border-[#D1D1D1] text-[#353A3c] font-medium px-5 py-3 w-full rounded-lg" />
                      </div>
                      <div className="lg:w-1/2 w-full">
                          <label htmlFor="" className='text-[22px] font-semibold text-[#353A3c] mb-2 block'>Seller Name</label>
                          <input type="text" name="seller_name" value={user?.displayName} placeholder="Seller Name" className="outline-none border-[2px] border-[#D1D1D1] text-[#353A3c] font-medium px-5 py-3 w-full rounded-lg" />
                      </div>
                   </div>

                   <div className='flex lg:flex-row flex-col justify-between items-center gap-10 mb-8'>
                      <div className="lg:w-1/2 w-full">
                        <label htmlFor="" className='text-[22px] font-semibold text-[#353A3c] mb-2 block'>Seller Email</label>
                          <input type="email" name="email" value={user?.email} placeholder="Seller Email Address" className="outline-none border-[2px] border-[#D1D1D1] text-[#353A3c] font-medium px-5 py-3 w-full rounded-lg" />
                      </div>
                      <div className="lg:w-1/2 w-full">
                          <label htmlFor="" className='text-[22px] font-semibold text-[#353A3c] mb-2 block'>Sub-Category</label>
                          <input type="text" name="category" placeholder="Sub-Category" className="outline-none border-[2px] border-[#D1D1D1] text-[#353A3c] font-medium px-5 py-3 w-full rounded-lg" />
                      </div>
                   </div>

                   <div className='flex lg:flex-row flex-col justify-between items-center gap-10 mb-8'>
                      <div className="lg:w-1/2 w-full">
                        <label htmlFor="" className='text-[22px] font-semibold text-[#353A3c] mb-2 block'>Price</label>
                          <input type="text" name="price" placeholder="Price" className="outline-none border-[2px] border-[#D1D1D1] text-[#353A3c] font-medium px-5 py-3 w-full rounded-lg" />
                      </div>
                      <div className="lg:w-1/2 w-full">
                          <label htmlFor="" className='text-[22px] font-semibold text-[#353A3c] mb-2 block'>Rating</label>
                          <input type="number" name="rating" placeholder="Rating" className="outline-none border-[2px] border-[#D1D1D1] text-[#353A3c] font-medium px-5 py-3 w-full rounded-lg" />
                      </div>
                   </div>

                   <div className='flex lg:flex-row flex-col justify-between items-center gap-10 mb-8'>
                      <div className="lg:w-1/2 w-full">
                        <label htmlFor="" className='text-[22px] font-semibold text-[#353A3c] mb-2 block'>Available Quantity</label>
                          <input type="text" name="quantity" placeholder="Quantity" className="outline-none border-[2px] border-[#D1D1D1] text-[#353A3c] font-medium px-5 py-3 w-full rounded-lg" />
                      </div>
                      <div className="lg:w-1/2 w-full">
                          <label htmlFor="" className='text-[22px] font-semibold text-[#353A3c] mb-2 block'>Picture URL</label>
                          <input type="text" name="photo" placeholder="Picture URL" className="outline-none border-[2px] border-[#D1D1D1] text-[#353A3c] font-medium px-5 py-3 w-full rounded-lg" />
                      </div>
                   </div>   

                    <div className="">
                         <label htmlFor="" className='text-[22px] font-semibold text-[#353A3c] mb-2 block'>Detail Description</label>
                        <textarea name="describe" className="outline-none border-[2px] border-[#D1D1D1] text-[#353A3c] font-medium px-5 py-3 w-full h-[280px] resize-none rounded-lg" placeholder="Detail Description"></textarea>
                    </div> 

                    <button className="text-center text-white font-semibold block w-full bg-[#A46B9E] rounded-[4px] py-3 mt-10">Add New Toys</button>          

               </form>
            </div>
        </div>
    );
};

export default AddToys;