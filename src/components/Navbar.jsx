import React from 'react'
 import {assets} from '../assets/assets'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-4 border-b border-gray-300 ">
        <img className='w-44 cursor-pointer' src={assets.logo} alt="logo"  />
        <nav className="">
            <ul className="hidden md:flex items-start gap-10 font-medium">
                <li><a href="/">Home</a></li><hr/>
                <li><a href="/about">About</a></li><hr/>
                <li><a href="/contact">Contact</a></li><hr/>
                <li><a href="/login">Login</a></li><hr/>
                <li><a href="/myappointment">My Appointment</a></li><hr/>
            </ul>
        </nav>
            <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>  Create Account </button> 
    </div>
  )
}

export default Navbar
