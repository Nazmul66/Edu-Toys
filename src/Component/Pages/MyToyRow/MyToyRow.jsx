import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyToyRow = ({ data, index, handleDelete }) => {
    const {_id, ProductName, Photo, Price, Category, seller_Name, Quantity, Describe} = data;
    console.log(data)

    return (
        <>
        <tbody className='bg-[#f2f2f2]'>
            <tr className='text-center'>
                <th>{index + 1}</th>
                <td>
                    <img src={Photo} alt="" className='w-[50px] rounded-full' />
                </td>
                <td>{seller_Name}</td>
                <td>{ProductName}</td>
                <td>{Category}</td>
                <td>{Price}</td>
                <td>{Quantity}</td>
                <td>{Describe}</td>
                <td>
                    <div>
                       <Link to={`/updateToy/${_id}`} className='bg-success text-white inline-block text-center font-semibold text-[14px] px-4 py-3 rounded-md'><FaEdit /></Link>
                    </div>
                </td>
                <td>
                    <button onClick={() => handleDelete(_id) } className='bg-red-900 text-white text-center font-semibold text-[12px] px-4 py-3 inline-block rounded-md'><FaTrash className='mx-auto' /></button>
                </td>
            </tr>
        </tbody>
        </>
    );
};

export default MyToyRow;