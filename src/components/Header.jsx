import React from 'react'
import { Link, NavLink } from 'react-router-dom'

//Header component which will be visible throuhout the application
function Header() {
  return (
    <div className='flex flex-row w-full h-20 bg-gray-500 ps-10 text-white'> 
        <div>
            <div className='relative -translate-y-1/2 bg-[#784c86] w-fit h-fit p-2.5 px-10 text-white text-[24px] border-2 border-black'>BookByte</div>
        </div>
        <div className='w-full flex flex-row items-center justify-center'>
        <span className='px-5'><NavLink to="/" className={({ isActive }) => (isActive ? 'underline underline-offset-2' : '')}>Home</NavLink></span>
        <span className='px-5'><NavLink to="/BrowseBooks" className={({ isActive }) => (isActive ? 'underline underline-offset-2' : '')}>Browse Books</NavLink></span>
        <span className='px-5'><NavLink to="/AddBook" className={({ isActive }) => (isActive ? 'underline underline-offset-2' : '')}>Add Book</NavLink></span>
        </div>
    </div>
  )
}

export default Header