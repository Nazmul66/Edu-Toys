import React from 'react';
import { Link } from 'react-router-dom';

const AllToyRow = ({ data, index }) => {    
      const {_id, ProductName, Price, Category, seller_Name, Quantity} = data;
    //   console.log(data)

    return (
        <>
        <tbody className='bg-[#f2f2f2]'>
            <tr>
                <th>{index + 1}</th>
                <td>{seller_Name}</td>
                <td>{ProductName}</td>
                <td>{Category}</td>
                <td>{Price}</td>
                <td>{Quantity}</td>
                <td>
                    <Link to={`/toy/${_id}`} className='bg-[#FF1276] text-white font-semibold text-[14px] px-5 py-2 rounded-md'>View Details</Link>
                </td>
            </tr>
        </tbody>
    </>
    );
};

export default AllToyRow;