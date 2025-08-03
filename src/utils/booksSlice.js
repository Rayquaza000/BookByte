import { createSlice } from "@reduxjs/toolkit";
import wof from "../assets/WingsOfFire.jpg";
import tdvc from "../assets/TheDaVinciCode.jpg";
import thgttg from "../assets/TheHitchhikersGuideToTheGalaxy.webp"

const booksSlice=createSlice({
    name:"books",
    initialState:{
        items:[{
            id:1,
            title:"Wings of Fire",
            author:"Arun Tiwari",
            imgsrc:wof,
            description:"Wings of Fire is the 1999 autobiography of Indian aerospace scientist and future President of India, A. P. J. Abdul Kalam. It was written by Kalam and Arun Tiwari.",
            rating: 4.8,
            category:["Biography,Non-Fiction"],
            isPopular:true,
            dateAddedToLibrary:new Date("2025-08-01T06:00:00")
        },
        {
            id:2,
            title:"The Da Vinci Code",
            author:"Dan Brown",
            imgsrc:tdvc,
            description:"'The Da Vinci Code' by Dan Brown is a thriller novel that follows Harvard symbologist Robert Langdon and cryptologist Sophie Neveu as they investigate the murder of a curator at the Louvre Museum.",
            rating:4.7,
            category:["Fiction","Thriller","Mystery"],
            isPopular:true,
            dateAddedToLibrary:new Date("2025-08-01T06:00:00")
        },
        {
            id:3,
            title:"The Hitchhiker's Guide to the Galaxy",
            author:"Douglas Adams",
            imgsrc:thgttg,
            description:"'The Hitchhiker's Guide to the Galaxy' follows Arthur Dent, rescued from Earth's destruction by his friend Ford Prefect, an alien researcher, as they journey through space. Their adventures are guided by the titular encyclopedia, encountering absurd characters and exploring the universe's mysteries, including the answer to the ultimate question of life, the universe, and everything: 42.",
            rating:4.5,
            category:["Fiction","Science Fiction","Comedy","Fantasy"],
            isPopular:true,
            dateAddedToLibrary:new Date("2025-08-01T06:00:00")
        }
    ],
    },
    reducers:{
        addBook:(state,action)=>{
            state.items.push(action.payload);
        }
    }
})

export const {addBook}=booksSlice.actions;

export default booksSlice.reducer;