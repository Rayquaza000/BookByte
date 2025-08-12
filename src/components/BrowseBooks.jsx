import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import BookCard from './BookCard';
import { useNavigate } from 'react-router-dom';

function BrowseBooks() {

    const books=useSelector((store)=>{return store.books.items});
    

    const [searchValue,setSearchValue]=useState("");
    const [searchOnClick,setSearchOnClick]=useState("");
    const [selectedCategory,setSelectedCategory]=useState("");
    const navigate=useNavigate();
    function getSearchValue(e){
        setSearchValue(e.target.value);
    }
    useEffect(()=>{console.log(searchValue)},[searchValue]);
    function handleSearchOnClick(){
        setSearchOnClick(searchValue);
    }
    function handleSelectCategory(e)
    {
        if(e.target.innerHTML=="All")
        {
            setSelectedCategory("");
        }
        else{
        setSelectedCategory(e.target.innerHTML);
        }
    }
    let fontSize="text-1xl";
    console.log(books);
    if(books[books.length-1].title.length>30)
    {
        fontSize="text-[12px]";
    }
    

    function handleViewDetails(){
        navigate("/BookDetails/"+books[books.length-1].id);
    }

  return (
    <>
    <div className='mt-5 flex justify-center'>
    <input type='text' placeholder=' Search books by author or title' className='w-100 h-10 border-b-2 border-b-gray-400 outline-none' onChange={getSearchValue} value={searchValue}></input>
    &nbsp;
    <button className='w-20 h-10 text-center border-2 duration-300 transition-backgroundColor hover:bg-zinc-500 active:bg-zinc-500' onClick={handleSearchOnClick}>Search</button>
</div>
   { books[books.length-1].isRecent==1?<div className='flex flex-col items-center'>
        <h1 className='font-bold mt-4'>Recently added book:</h1>
        <div className='flex flex-col items-center w-90 h-120 bg-white border-1 border-black m-5'>
            <img src={`data:image/png;base64,${books[books.length-1].bkimage}`} className='w-86 h-90 border-1 border-black mt-2'></img>
            <div className={"flex w-full h-10 min-h-10 bg-[#EEECE1] items-center justify-center border-1 border-black mt-3 p-2 "+fontSize}>{books[books.length-1].title}</div>
            <button className='flex items-center justify-center w-30 h-10 bg-[#E6E0EC] border-1 border-black rounded-[5px] mt-2 hover:w-32 transition-width duration-300 transition-backgroundColor hover:bg-gray-400 active:bg-gray-400 active:w-32' onClick={handleViewDetails}>View Details</button>
        </div>
    </div>:null}
    <div className='flex flex-wrap my-8 justify-center gap-2'>
        <div className={"w-fit h-fit p-2 text-purple-200" + (selectedCategory == "" ? " bg-black " : " bg-[#784c86]") + " border-1 border-black rounded-[10px]"} onClick={handleSelectCategory}>All</div>
        <div className={"w-fit h-fit p-2 text-purple-200" + (selectedCategory == "Fiction" ? " bg-black " : " bg-[#784c86]") + " border-1 border-black rounded-[10px]"} onClick={handleSelectCategory}>Fiction</div>
        <div className={"w-fit h-fit p-2 text-purple-200" + (selectedCategory == "Non-Fiction" ? " bg-black " : " bg-[#784c86]") + " border-1 border-black rounded-[10px]"} onClick={handleSelectCategory}>Non-Fiction</div>
        <div className={"w-fit h-fit p-2 text-purple-200" + (selectedCategory == "Science-Fiction" ? " bg-black " : " bg-[#784c86]") + " border-1 border-black rounded-[10px]"} onClick={handleSelectCategory}>Science-Fiction</div>
        <div className={"w-fit h-fit p-2 text-purple-200" + (selectedCategory == "Fantasy" ? " bg-black " : " bg-[#784c86]") + " border-1 border-black rounded-[10px]"} onClick={handleSelectCategory}>Fantasy</div>
        <div className={"w-fit h-fit p-2 text-purple-200" + (selectedCategory == "Mystery" ? " bg-black " : " bg-[#784c86]") + " border-1 border-black rounded-[10px]"} onClick={handleSelectCategory}>Mystery</div>
        <div className={"w-fit h-fit p-2 text-purple-200" + (selectedCategory == "Thriller" ? " bg-black " : " bg-[#784c86]") + " border-1 border-black rounded-[10px]"} onClick={handleSelectCategory}>Thriller</div>
        <div className={"w-fit h-fit p-2 text-purple-200" + (selectedCategory == "Horror" ? " bg-black " : " bg-[#784c86]") + " border-1 border-black rounded-[10px]"} onClick={handleSelectCategory}>Horror</div>
        <div className={"w-fit h-fit p-2 text-purple-200" + (selectedCategory == "Comedy" ? " bg-black " : " bg-[#784c86]") + " border-1 border-black rounded-[10px]"} onClick={handleSelectCategory}>Comedy</div>
        <div className={"w-fit h-fit p-2 text-purple-200" + (selectedCategory == "Biography" ? " bg-black " : " bg-[#784c86]") + " border-1 border-black rounded-[10px]"} onClick={handleSelectCategory}>Biography</div>
    </div>
    
    <div className='flex flex-wrap px-10 justify-around'>
            {
                books.map((book,index)=>{
                    console.log(book);
                    if((book.title.toLowerCase().includes(searchOnClick.toLowerCase()) || book.author.toLowerCase().includes(searchOnClick.toLowerCase())) && (book.category.includes(selectedCategory) || selectedCategory=="")){
                        
                        if(book.imgsrc){
                        return <BookCard key={index} id={book.id} title={book.title} author={book.author} description={book.description} imgsrc={book.imgsrc}/>
                        }
                        else    
                        {
                            return <BookCard key={index} id={book.id} title={book.title} author={book.author} description={book.description} imgsrc={`data:image/png;base64,${book.bkimage}`}/>
                        }
                    }
                    })
            }
            
        </div>
        </>
  )
}

export default BrowseBooks