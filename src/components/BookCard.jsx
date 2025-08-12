import React from 'react';
import WingsOfFire from '../assets/WingsOfFire.jpg';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

//Component to create a card to show book image, title and "view details" button
function BookCard(params) {
    const navigate=useNavigate();
    const bookId=params.id;
    let fontSize="text-1xl";
    if(params.title.length>30)
    {
        fontSize="text-[12px]";
    }
    function handleViewDetails(){
      navigate("/BookDetails/"+bookId);
    }
  return (
    <div className='flex flex-col items-center w-60 h-90 bg-white border-1 border-black m-5'>
        <img src={params.imgsrc} className='w-56 h-60 border-1 border-black mt-2'></img>
        <div className={"flex w-full h-10 min-h-10 bg-[#EEECE1] items-center justify-center border-1 border-black mt-3 p-2 "+fontSize}>{params.title}</div>
        <button className='flex items-center justify-center w-30 h-10 bg-[#E6E0EC] border-1 border-black rounded-[5px] mt-2 hover:w-32 transition-width duration-300 transition-backgroundColor hover:bg-gray-400 active:bg-gray-400 active:w-32' onClick={handleViewDetails}>View Details</button>
    </div>
  )
}

export default BookCard