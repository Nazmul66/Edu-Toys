import React from 'react';
import titleChange from '../../../TitleChange/TitleChange';

const Blog = () => {
    titleChange("Blog");
    return (
        <div className='py-20 px-5'>
          <div className='max-w-[700px] mx-auto'>
              <h2 className='text-center text-[#FBA628] font-bold text-[60px] underline mb-10'>Blog Page</h2>

               <div className='p-10 bg-[#00aeed65] rounded-md mb-10'>
                   <h3 className='mb-5 text-xl leading-7 border-b-[1px] pb-5 border-[#b1a8a885] font-semibold text-[#444]'>
                    1) What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                   <p className='text-[#444] font-medium leading-7'>A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.</p>
               </div>

               <div className='p-10 bg-[#00aeed65] rounded-md mb-10'>
                   <h3 className='mb-5 text-xl leading-7 border-b-[1px] pb-5 border-[#b1a8a885] font-semibold text-[#444]'>
                    2) Compare SQL and NoSQL databases?</h3>
                   <p className='text-[#444] font-medium leading-7'>SQL Database is a table form database.This database first created table field then all data put into that table related form.NoSQL database is json format style but there is no table related field.so user can get all data from backend, only json format.</p>
               </div>

               <div className='p-10 bg-[#00aeed65] rounded-md mb-10'>
                   <h3 className='mb-5 text-xl leading-7 border-b-[1px] pb-5 border-[#b1a8a885] font-semibold text-[#444]'>
                    3) What is express js? What is Nest JS</h3>
                   <p className='text-[#444] font-medium leading-7'>Express js is a Node js framework that user can use minimal and flexible code. And Next js is a another framework of React js that all ready gives you building blocks that can easily create, made and best for SEO user friendly.</p>
               </div>

               <div className='p-10 bg-[#00aeed65] rounded-md'>
                   <h3 className='mb-5 text-xl leading-7 border-b-[1px] pb-5 border-[#b1a8a885] font-semibold text-[#444]'>
                    4) What is MongoDB aggregate and how does it work</h3>
                   <p className='text-[#444] font-medium leading-7'>Aggregate is a way of processing a large number of document that can handle easily to store into database storage.So, there is stage what is called pipeline.The stages are maintain listed group what the client side said about their requirements.</p>
               </div>
          </div> 
        </div> 
    );
};

export default Blog;