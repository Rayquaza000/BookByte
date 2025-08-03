import React from 'react'
import BookGenreCategories from './BookGenreCategories'
import BookCard from './BookCard'
import { useSelector } from 'react-redux'
function Body() {
    const books=useSelector((store)=>{return store.books.items});
    //console.log(books);
  return (
    <>
    <div className='w-full h-full bg-[#784c86] pt-10 text-white'>
        <div className='flex flex-col items-center'>
            <span className='text-3xl text-[#E6E0EC] font-bold'>Welcome to</span>
            <span className='text-3xl text-white font-bold'>BookByte</span>
            <span className='text-[#E6E0EC] font-bold'>An online library system.</span>
        </div>
        <br></br>
        <span className="px-10 text-[20px] font-bold">This library contains books of following categories:</span>
        <div className='flex flex-wrap flex-row items-stretch justify-around gap-x-40 px-10 text-[18px] font-bold pb-15'>
            
            <BookGenreCategories genreName="Fiction" bgColor="bg-[#FEA8A8]"/>
            <BookGenreCategories genreName="Non-Fiction" bgColor="bg-[#B7DEE8]"/>
            <BookGenreCategories genreName="Science Fiction" bgColor="bg-[#f0ff65]"/>
            
            
            <BookGenreCategories genreName="Fantasy" bgColor="bg-[#CCC1DA]"/>
            <BookGenreCategories genreName="Mystery" bgColor="bg-[#7fe581]"/>
            <BookGenreCategories genreName="Thriller" bgColor="bg-[#FAC090]"/>
            
            
            <BookGenreCategories genreName="Horror" bgColor="bg-[#BFBFBF]"/>
            <BookGenreCategories genreName="Comedy" bgColor="bg-[#f5abf0]"/>
            <BookGenreCategories genreName="Biography" bgColor="bg-[#ddb075]"/>
            
        </div>
    </div>
    <span className='block text-[20px] px-10 font-bold mt-8 py-5'>Popular Books:</span>
    <div className='flex flex-wrap px-10 justify-around'>
        {
            books.map((book,index)=>{
                if(book.isPopular==true)
                {   
                    console.log(book);
                    return <BookCard key={index} id={book.id} title={book.title} author={book.author} description={book.description} imgsrc={book.imgsrc}/>
                }
            })
        }
        
    </div>
    </>
  )
}

export default Body