import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


//when user clicks on view details the user is directed here to show full details of the selected book
function BookDetailsById() {
    const {bookId}=useParams();
    const books=useSelector((store)=>{return store.books.items});
    let bookName,bookAuthor,bookImage,bookDescription,bookRating,bookCategory;
    console.log("bookid= "+bookId);
    books.map((book)=>{
        if(bookId==book.id)
        {
            console.log("true");
            bookName=book.title;
            bookAuthor=book.author;
            if(book.imgsrc)
            {
                bookImage=book.imgsrc;
            }
            else
            {
                bookImage=`data:image/png;base64,${book.bkimage}`;
            }
            bookDescription=book.description;
            bookRating=book.rating;
            bookCategory=book.category;
        }
        console.log("bkrating: "+bookRating);
    })
    
  return (
    <div className='flex flex-wrap justify-center'>
    <div className='flex flex-col items-center w-[500px]'>
        <img src={bookImage} className='w-100 h-150 mt-10'></img>
    </div>
    <div className='flex flex-col items-start ps-5 w-[500px]'>
    <span className='font-bold mt-10'>Details of {bookName}:</span>
        <div className='mt-1'><span className='font-bold'>Id:</span> {bookId}</div>
        <div className='mt-1'><span className='font-bold'>Title:</span> {bookName}</div>
        <div className='mt-1'><span className='font-bold'>Author:</span> {bookAuthor}</div>
        <div className='mt-1'><span className='font-bold'>Description:</span> {bookDescription}</div>
        <div className='mt-1'><span className='font-bold'>Ratings:</span> {bookRating}</div>
        
        <div className='flex flex-wrap mt-1'>{bookCategory.map((cat)=>{
            if(cat=="Non-Fiction")
            {
                return <div className='border-1 border-white bg-[#B7DEE8] px-3 py-1'>Non-Fiction</div>
            }
            else if(cat=="Fiction")
            {
                return <div className='border-1 border-white bg-[#FEA8A8] px-3 py-1'>Fiction</div>
            }
            else if(cat=="Science-Fiction")
            {
                return <div className='border-1 border-white bg-[#f0ff65] px-3 py-1'>Science-Fiction</div>
            }
            else if(cat=="Fantasy")
            {
                return <div className='border-1 border-white bg-[#CCC1DA] px-3 py-1'>Fantasy</div>
            }
            else if(cat=="Mystery")
            {
                return <div className='border-1 border-white bg-[#7fe581] px-3 py-1'>Mystery</div>
            }
            else if(cat=="Thriller")
            {
                return <div className='border-1 border-white bg-[#FAC090] px-3 py-1'>Thriller</div>
            }
            else if(cat=="Horror")
            {
                return <div className='border-1 border-white bg-[#BFBFBF] px-3 py-1'>Horror</div>
            }
            else if(cat=="Comedy")
            {
                return <div className='border-1 border-white bg-[#f5abf0] px-3 py-1'>Comedy</div>
            }
            else if(cat=="Biography")
            {
                return <div className='border-1 border-white bg-[#ddb075] px-3 py-1'>Biography</div>
            }
            else
            {
                return;
            }
            })}</div>
    </div>
    </div>
  )
}

export default BookDetailsById