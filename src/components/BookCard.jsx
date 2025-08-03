import React from 'react';
import WingsOfFire from '../assets/WingsOfFire.jpg';
import { useSelector } from 'react-redux';

function BookCard(params) {
    //const book=useSelector((store)=>store.books.items[0]);
    let fontSize="text-1xl";
    if(params.title.length>30)
    {
        console.log("true");
        fontSize="text-[12px]";
    }
    
  return (
    <div className='flex flex-col items-center w-60 h-90 bg-white border-1 border-black m-5'>
        <img src={params.imgsrc} className='w-56 h-60 border-1 border-black mt-2'></img>
        <div className={"flex w-full h-10 min-h-10 bg-[#EEECE1] items-center justify-center border-1 border-black mt-3 p-2 "+fontSize}>{params.title}</div>
        <button className='flex items-center justify-center w-30 h-10 bg-[#E6E0EC] border-1 border-black rounded-[5px] mt-2'>View Details</button>
    </div>
  )
}

export default BookCard