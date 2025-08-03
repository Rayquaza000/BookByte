import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='flex flex-row w-full h-20 bg-gray-500 ps-10 text-white'> 
        <div>
            <div className='relative -translate-y-1/2 bg-[#784c86] w-fit h-fit p-2.5 px-10 text-white text-[24px] border-2 border-black'>BookByte</div>
        </div>
        <div className='w-full flex flex-row items-center justify-center'>
        <span className='px-5'><Link to="/">Home</Link></span>
        <span className='px-5'><Link to="/BrowseBooks">Browse Books</Link></span>
        <span className='px-5'><Link to="/AddBook">Add Book</Link></span>
        </div>
    </div>
  )
}

export default Header