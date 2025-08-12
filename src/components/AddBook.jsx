import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../utils/booksSlice';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function AddBook() {

    const [uploadedFile,setUploadedFile]=useState(null);
    const [bkTitle,setBkTitle]=useState("");
    const [bkAuthor,setBkAuthor]=useState("");
    const [bkDescription,setBkDescription]=useState("");
    const [catFiction,setCatFiction]=useState(false);
    const [catNonFiction,setCatNonFiction]=useState(false);
    const [catSciFiction,setCatSciFiction]=useState(false);
    const [catFantasy,setCatFantasy]=useState(false);
    const [catMystery,setCatMystery]=useState(false);
    const [catThriller,setCatThriller]=useState(false);
    const [catHorror,setCatHorror]=useState(false);
    const [catComedy,setCatComedy]=useState(false);
    const [catBio,setCatBio]=useState(false);
    const [bkPopular,setBkPopular]=useState(false);
    const [bkRating,setBkRating]=useState(null);
    const [bkAddedSuccessMsg,setBkAddedSuccessMsg]=useState(false);
    const [errorMsg,setErrorMsg]=useState("");
    const [bookImgPreview,setBookImgPreview]=useState(null);
    const reader=new FileReader();
    const[base64String,setBase64String]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();

    function handleUploadedFile(e){
        setBookImgPreview(URL.createObjectURL(e.target.files[0]));
        setUploadedFile(e.target.files[0]);
    }

    function addBookToSystem(){

        const booksforls=[];
        const categoryChecks=[];

        if(catFiction==true){categoryChecks.push("Fiction");}
        if(catNonFiction==true){categoryChecks.push("Non-Fiction");}
        if(catSciFiction==true){categoryChecks.push("Science-Fiction");}
        if(catFantasy==true){categoryChecks.push("Fantasy");}
        if(catMystery==true){categoryChecks.push("Mystery");}
        if(catThriller==true){categoryChecks.push("Thriller");}
        if(catHorror==true){categoryChecks.push("Horror");}
        if(catComedy==true){categoryChecks.push("Comedy");}
        if(catBio==true){categoryChecks.push("Biography");}

        if(bkTitle=="" || bkAuthor=="" || bkDescription=="" || bkRating=="" || categoryChecks==[] || setUploadedFile==null)
        {
            setErrorMsg("Enter data in all fields");
            return;
        }

        if(bkRating<0 || bkRating>5)
        {
            setErrorMsg("Enter rating between 0 and 5");
            //setTimeout(()=>{setErrorMsg(false)},3000);
            return;
        }
        setErrorMsg("");
        
        

        
        reader.onloadend = () => {
            const base64WithPrefix = reader.result;
            setBase64String(base64WithPrefix.replace(/^data:.+;base64,/, ''));

            const individualBookData={
            title:bkTitle,
            author:bkAuthor,
            description:bkDescription,
            category:categoryChecks,
            rating:bkRating,
            isPopular:bkPopular,
            bkimage:base64WithPrefix.replace(/^data:.+;base64,/, ''),
        }
        
        
        if(localStorage.getItem("booksinls")==null)
        {
            individualBookData.id=11;
            individualBookData.isRecent=1;
            booksforls.push(individualBookData);
            localStorage.setItem("booksinls",JSON.stringify(booksforls));
        }
        else
        {
            const getPrevData = JSON.parse(localStorage.getItem("booksinls"));
            const convertedPrevData=[];
            //convertedPrevData.push(JSON.parse(getPrevData));
            //console.log("####"+convertedPrevData[convertedPrevData.length-1].id);
            individualBookData.id=parseInt(getPrevData[getPrevData.length-1].id)+1;
            individualBookData.isRecent=1;
            booksforls.push(individualBookData);
            getPrevData[getPrevData.length-1].isRecent=0;
            convertedPrevData.push(...getPrevData);
            convertedPrevData.push(individualBookData);
            try{
            localStorage.setItem("booksinls",JSON.stringify(convertedPrevData));
            }catch(e)
            {
                console.log(e);
                setErrorMsg("Local Storage Full. Cannot add more books.");
                setTimeout(()=>{setErrorMsg("")},3000)
                return;
            }
        }
        
        dispatch(addBook(individualBookData));
        setBkAddedSuccessMsg(true);

        setTimeout(()=>{setBkAddedSuccessMsg(false); 
            navigate("/BrowseBooks")},3000);
        };

        reader.onerror = (error) => {
            console.error('Error reading file:', error);
        };
        reader.readAsDataURL(uploadedFile);
        
    }

  return (
    <div className='flex flex-row justify-center mt-5'>
        
        <div className='flex flex-col'>
        <span className='text-[18px] font-bold'>Fill the details to add book:</span><br></br>
        <label>Title:</label>
        <input type="text" placeholder='title' className='outline-none border-b-1 border-fuchsia-950' onChange={(e)=>{setBkTitle(e.target.value);}} value={bkTitle}></input>
        <label className='mt-4'>Author:</label>
        <input type="text" placeholder='author' className='outline-none border-b-1 border-fuchsia-950' onChange={(e)=>{setBkAuthor(e.target.value);}} value={bkAuthor}></input>
        <label className='mt-4'>Description:</label>
        <textarea placeholder='description' type="text" className='outline-none border-b-1 border-fuchsia-950' onChange={(e)=>{setBkDescription(e.target.value);}} value={bkDescription}></textarea>
        <label className='mt-4'>Category:</label>
        <div className='flex flex-row justify-between'>
        <div className='flex flex-col'>
        <label><input type="checkbox" value={"Fiction"} onChange={(e)=>{setCatFiction(e.target.checked)}} checked={catFiction}></input>Fiction</label>
        <label><input type="checkbox" value={"Non-Fiction"} onChange={(e)=>{setCatNonFiction(e.target.checked)}} checked={catNonFiction}></input>Non-Fiction</label>
        <label><input type="checkbox" value={"Science-Fiction"} onChange={(e)=>{setCatSciFiction(e.target.checked)}} checked={catSciFiction}></input>Science-Fiction</label>
        <label><input type="checkbox" value={"Fantasy"} onChange={(e)=>{setCatFantasy(e.target.checked)}} checked={catFantasy}></input>Fantasy</label>
        <label><input type="checkbox" value={"Mystery"} onChange={(e)=>{setCatMystery(e.target.checked)}} checked={catMystery}></input>Mystery</label>
        </div>
        <div className='flex flex-col'>
        <label><input type="checkbox" value={"Thriller"} onChange={(e)=>{setCatThriller(e.target.checked)}} checked={catThriller}></input>Thriller</label>
        <label><input type="checkbox" value={"Horror"} onChange={(e)=>{setCatHorror(e.target.checked)}} checked={catHorror}></input>Horror</label>
        <label><input type="checkbox" value={"Comedy"} onChange={(e)=>{setCatComedy(e.target.checked)}} checked={catComedy}></input>Comedy</label>
        <label><input type="checkbox" value={"Biography"} onChange={(e)=>{setCatBio(e.target.checked)}} checked={catBio}></input>Biography</label>
        </div>
        </div>
        <label className='mt-4'> <input type="checkbox" onChange={(e)=>{setBkPopular(e.target.checked)}} checked={bkPopular}></input> Popular?</label>
        <label className='mt-4'>Rating:</label>
        <input type="number" placeholder='rating' className='outline-none border-b-1 border-fuchsia-950' onChange={(e)=>{setBkRating(e.target.value)}}></input>
        
        <label className='mt-4'>Add book image:</label>
        <input type="file" className='border-b-1 border-fuchsia-950' onChange={handleUploadedFile} accept="image/*"></input>
        <img src={bookImgPreview} className='w-56 h-60 mt-4' id="bookPreview"></img>
        <button className='border-2 border-black bg-gray-700 text-white mt-4 duration-300 transition-backgroundColor hover:bg-gray-400 hover:text-black active:bg-gray-400 active:text-black' onClick={addBookToSystem}>Add Book</button>
        {bkAddedSuccessMsg?<div className='w-full h-fit mt-4 border-2 border-green-950 bg-green-600 text-white text-center'>Book Added Successfully</div>:null}
        {errorMsg?<div className='w-full h-fit mt-4 border-2 border-red-700 bg-red-400 text-red-700 text-center'>{errorMsg}</div>:null}       
        </div>
    </div>
  )
}

export default AddBook