import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-gray-100 flex justify-center rounded-lg'>
            <Link className=' text-2xl font-semibold transition delay-100 text-[#0074DD] hover:text-[#004889] hover:bg-white px-10 py-5' to = "/">Home</Link>
            <Link className=' text-2xl font-semibold transition delay-100 text-[#0074DD] hover:text-[#004889] hover:bg-white px-10 py-5' to = "/add-to-list">Add To List</Link>
            <Link className=' text-2xl font-semibold transition delay-100 text-[#0074DD] hover:text-[#004889] hover:bg-white px-10 py-5' to ="/finished">Finishd Tasks</Link>
        </div>
    );
};

export default Header;