import React from 'react'
import Header from './Header';
import Body from './Body';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addBook } from '../utils/booksSlice';
import { useSelector } from 'react-redux';
function Home() {

  const booksfromredux=useSelector((store)=>{return store.books.items});
  if(booksfromredux[booksfromredux.length-1].id<=10){
    const dispatch=useDispatch();
  const booksfromls=JSON.parse(localStorage.getItem("booksinls"));
  console.log(booksfromls);
  if(booksfromls!=null){
  booksfromls.forEach(element => {
    
      console.log(Array.isArray(element));
      dispatch(addBook(element));
    
    
  });
  }
  }

  
  //console.log("executed");
  return (
    <div className='w-full h-full bg-[#E6E0EC] p-10'>
          <Header/>
          <Outlet/>
          
        </div>
  )
}

export default Home