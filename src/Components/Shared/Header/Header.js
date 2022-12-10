import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='flex flex-row-reverse justify-between items-center px-5 bg-gray-100'>
            <div className=' flex justify-center rounded-lg'>
                <Link className=' text-2xl font-semibold transition delay-100 text-[#0074DD] hover:text-[#004889] hover:bg-white px-10 py-5' to="/">Home</Link>
                <Link className=' text-2xl font-semibold transition delay-100 text-[#0074DD] hover:text-[#004889] hover:bg-white px-10 py-5' to="/add-to-list">Add To List</Link>
                <Link className=' text-2xl font-semibold transition delay-100 text-[#0074DD] hover:text-[#004889] hover:bg-white px-10 py-5' to="/signup">Sigh Up</Link>
            </div>
            <div>
                {
                    user?.email && <p className='text-[#0074DD] text-2xl'>{user.email}</p>
                }
            </div>
        </div>
    );
};

export default Header;