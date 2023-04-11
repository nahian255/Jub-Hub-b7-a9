import React from 'react';
import logo from '../assets/P3OLGJ1 copy 1.png'

const Header = () => {
    return (
        <div className='d-flex justify-content-between'>
            <div className='align-items-center  my-auto'>
                <h1>One Step Closer To Your <span> Dream Job</span></h1>
                <p className='my-5'>This is the side of Job Hub that you can found your favourate job. This time you choose and pick on your carrer and make your future better</p>
                <button className='bg-info '> Get Start </button>
            </div>

            <img className='img-fluid w-50' src={logo} alt="" />

        </div>
    );
};

export default Header;