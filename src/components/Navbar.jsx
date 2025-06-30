import React from 'react'
 import {assets} from '../assets/assets'

const Navbar = () => {
  return (
    <>
     <div className="flex items-center justify-between text-sm py-4 mb-4 border-b border-gray-300 ">
         <img className='w-44 cursor-pointer' src={assets.logo} alt="logo"  />
         <nav className="">
             <ul className="hidden md:flex items-start gap-10 font-medium">
                <li className='py-1 hover:underline'><a href="/">HOME</a></li><hr/>
                <li className='py-1 hover:underline hover:text-green'><a href="/myappointment">All DOCTORS</a></li><hr />
                <li className='py-1 hover:underline'><a href="/about">ABOUT</a></li><hr />
                <li className='py-1 hover:underline'><a href="/contact">CONTACT</a></li><hr/>
             </ul>
         </nav>
            <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>  Create Account </button> 
     </div>
    </>
  )
}

export default Navbar
