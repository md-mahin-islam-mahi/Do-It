import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Header = () => {
    const {user, logout} = useContext(AuthContext);

    const signOut = () => {
        logout()
        .then(() => {})
        .then(() => {})
    }

    return (
        <div className='px-5 bg-gray-100'>
            <div className='flex-col lg:flex-row lg:justify-center lg:items-center rounded-lg'>
                <Link className=' text-2xl font-semibold transition delay-100 text-[#0074DD] hover:text-[#004889]  px-10 py-5' to="/">Home</Link>
                <Link className=' text-2xl font-semibold transition delay-100 text-[#0074DD] hover:text-[#004889]  px-10 py-5' to="/add-to-list">Add To List</Link>
                {
                    user?.email ? <p onClick={signOut} className='text-[#0074DD] text-2xl cursor-pointer'>Logout</p> : 
                <Link className=' text-2xl font-semibold transition delay-100 text-[#0074DD] hover:text-[#004889]  px-10 py-5' to="/signup">Sigh Up</Link>
                }
            </div>
        </div>
    );
};

export default Header;