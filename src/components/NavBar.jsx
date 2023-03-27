import React from 'react'
import logo from '../assets/vpnlogo.svg'

export default function NavBar() {
  return (
    <div className='flex flex-col lg:flex-row  w-full'>
     <nav className='flex flex-col lg:flex-row w-full justify-between py-[50px]  px-5 md:px-[150px]'>
      <div className='flex flex-row items-center'>
       <img
        src={logo}
        alt='logo'
        className='w-45 h-10'
       />
       </div>
       <div className='flex flex-row items-center gap-3 md:gap-10'>
        <a
         href='#'
         className='text-gray-500 hover:text-gray-900'
        >
         About
        </a>
        <a
         href='#'
         className='text-gray-500 hover:text-gray-900'
        >
         Features
        </a>
        <a
         href='#'
         className='text-gray-500 hover:text-gray-900'
        >
         Pricing

        </a>
        <a

         href='#'
         className='text-gray-500 hover:text-gray-900'
        >
         Testimonials
        </a>
        <a href='#' className='text-gray-500 hover:text-gray-900'>
         Help
        </a>
        </div>

        <div className='flex flex-row items-center gap-9'>
         <a
          href='#'
          className='text-[#0B132A] font-medium'
         >
          Login
         </a>
         <a
  

          href='#'
          className='border-[1px] rounded-full border-[#F53855]  text-[#F53855]'
         >
          <button className='px-[45px] py-3 text-sm font-medium'>
           Sign Up
          </button>
         </a>
         </div>
        </nav>
        


      


    </div>
  )
}
