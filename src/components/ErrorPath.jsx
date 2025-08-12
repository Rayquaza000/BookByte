import React from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorPath() {
    const navigate=useNavigate();
    function handleBackToHomePageButton(){
        navigate("/");
    }
    return (
  <>
    <div className='flex flex-col p-5 mx-30 mt-5 bg-red-400 border-1 border-black items-center'><span className='text-[40px] text-red-700 font-bold'>Error 404: Page Not Found</span><br/><span className='font-bold'>Choose a valid path!</span></div>
    <div className='flex flex-wrap p-4 mx-30 border-2 border-black justify-center font-bold' onClick={handleBackToHomePageButton}><span>CLICK HERE TO GO BACK TO HOME PAGE</span></div>
  </>
  )
}

export default ErrorPath