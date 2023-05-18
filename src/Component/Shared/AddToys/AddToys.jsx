import React from 'react';

const AddToys = () => {

    const handleAdd = (event) =>{
        event.preventDefault();
        const form         = event.target;
        const Name         = form.name.value;
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

        const allData = {Name, seller_Name, Email, Category, Price, Rating, Quantity, Photo, Describe}
        console.log(allData)
    }
    return (
        <div className='py-20 px-5'>
            <div className='max-w-[1000px] mx-auto'>
                <div className='bg-[#f9f2fa] rounded-lg text-[36px] text-center py-7 mb-24 font-bold text-[#353A3c]'>
                    <h2>Online Add Toy</h2>
                </div>

               <form onSubmit={ handleAdd }>
                   <div className='flex lg:flex-row flex-col justify-between items-center gap-10 mb-8'>
                      <div className="lg:w-1/2 w-full">
                        <label htmlFor="" className='text-[22px] font-semibold text-[#353A3c] mb-2 block'>Name</label>
                          <input type="text" name="name" placeholder="Name" className="outline-none border-[2px] border-[#D1D1D1] text-[#353A3c] font-medium px-5 py-3 w-full rounded-lg" />
                      </div>
                      <div className="lg:w-1/2 w-full">
                          <label htmlFor="" className='text-[22px] font-semibold text-[#353A3c] mb-2 block'>Seller Name</label>
                          <input type="text" name="seller_name" placeholder="Seller Name" className="outline-none border-[2px] border-[#D1D1D1] text-[#353A3c] font-medium px-5 py-3 w-full rounded-lg" />
                      </div>
                   </div>

                   <div className='flex lg:flex-row flex-col justify-between items-center gap-10 mb-8'>
                      <div className="lg:w-1/2 w-full">
                        <label htmlFor="" className='text-[22px] font-semibold text-[#353A3c] mb-2 block'>Seller Email</label>
                          <input type="email" name="email" placeholder="Seller Email Address" className="outline-none border-[2px] border-[#D1D1D1] text-[#353A3c] font-medium px-5 py-3 w-full rounded-lg" />
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
                          <input type="text" name="photo" placeholder="Rating" className="outline-none border-[2px] border-[#D1D1D1] text-[#353A3c] font-medium px-5 py-3 w-full rounded-lg" />
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