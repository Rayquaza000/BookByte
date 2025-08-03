import React from 'react'
import Header from './Header';
import Body from './Body';
import { Outlet } from 'react-router-dom';
function Home() {
  return (
    <div className='w-full h-full bg-[#E6E0EC] p-10'>
          <Header/>
          <Outlet/>
          
        </div>
  )
}

export default Home