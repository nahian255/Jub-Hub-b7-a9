import React from 'react';
import logo from '../assets/P3OLGJ1 copy 1.png'

const Header = () => {
    return (
        <div className='d-flex justify-content-between'>
            <div className='align-items-center bg-info my-auto'>
                <h1>One Step Closer To Your <span> Dream Job</span></h1>
                <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt veritatis fugit veniam.</p>
                <button>Get Start</button>
            </div>

            <img className='img-fluid w-50' src={logo} alt="" />

        </div>
    );
};

export default Header;