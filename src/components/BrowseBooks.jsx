import React from 'react'
import { useSelector } from 'react-redux';
import BookCard from './BookCard';

function BrowseBooks() {

    const books=useSelector((store)=>{return store.books.items});
  return (
    <>
    <div className='mt-5 flex justify-center'>
    <input type='text' placeholder=' Search books by author or title' className='w-100 h-10 border-b-2 border-b-gray-400 outline-none'></input>
    &nbsp;
    <button className='w-20 h-10 text-center border-2'>Search</button>
    </div>
    <div className='flex flex-wrap px-10 justify-around'>
            {
                books.map((book,index)=>{
                        return <BookCard key={index} id={book.id} title={book.title} author={book.author} description={book.description} imgsrc={book.imgsrc}/>
                })
            }
            
        </div>
        </>
  )
}

export default BrowseBooks