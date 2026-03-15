import React from 'react'
import img1 from './NUTRILOCK AGRO FOODS_20251120_162643_0000.png';
import { FaUser } from 'react-icons/fa';

function Navbar() {
    
  return (
    <div className='flex items-center py-3 px-5 justify-between'>
        <img src={img1} className="h-16 w-auto" alt="logo"/>
        <div className='text-[#03256c] font-merri flex items-center space-x-5 text-xl font-semibold'>
            <button>Home</button>
            <button>About Us</button>
            <button>Contact Us</button>
        </div>
        <FaUser size={30} className='border border-[#03256c] text-[#333333] p-1 rounded-full' />
    </div>
  )
}

export default Navbar