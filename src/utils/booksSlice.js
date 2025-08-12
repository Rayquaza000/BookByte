import { createSlice } from "@reduxjs/toolkit";
import wof from "../assets/WingsOfFire.jpg";
import tdvc from "../assets/TheDaVinciCode.jpg";
import thgttg from "../assets/TheHitchhikersGuideToTheGalaxy.webp";
import emtsatqfaff from "../assets/emtsatqfaff.jpeg";
import It from "../assets/It.png";
import ts from "../assets/TheShining.jpeg";
import gs from "../assets/GhostStory.jpeg";
import an from "../assets/Automatic Noodle.jpeg";
import ac from "../assets/AlienClay.jpeg";
import tgwtdt from "../assets/TheGirlWithTheDragonTattoo.jpeg";

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
            category:["Biography","Non-Fiction"],
            isPopular:true,
            //dateAddedToLibrary:new Date("2025-08-01T06:00:00")
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
            //dateAddedToLibrary:new Date("2025-08-01T06:00:00")
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
            //dateAddedToLibrary:new Date("2025-08-01T06:00:00")
        },
        {
            id:4,
            title:"Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
            author:"Ashlee Vance",
            imgsrc:emtsatqfaff,
            description:"Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future is an unofficial biography of Elon Musk, written by Ashlee Vance and published on May 19, 2015.",
            rating:4.1,
            category:["Biography","Non-Fiction"],
            isPopular:true,
            //dateAddedToLibrary:new Date("2025-08-03T10:52:00")
        },
        {
            id:5,
            title:"It",
            author:"Stephen King",
            imgsrc:It,
            description:"'It', a 1986 horror novel by Stephen King, tells the story of the Losers' Club, a group of childhood friends in Derry, Maine, who confront a malevolent, shapeshifting entity called It, also known as Pennywise the Dancing Clown. The story alternates between their childhood in 1957-58, when they first encounter It, and their adult lives in 1985, when they return to Derry to fight it again.",
            rating:4.5,
            category:["Horror","Fiction","Fantasy","Thriller"],
            isPopular:false,
            //dateAddedToLibrary:new Date("2025-08-03T10:59:00")
        },
        {
            id:6,
            title:"The Shining",
            author:"Stephen King",
            imgsrc:ts,
            description:"'The Shining' is a Gothic horror novel about a family being the care takers of The Overlook. The Overlook is a hotel in the Colorado Mountains which needs to be tended to when it is closed during the winter months. However, the hotel has an evil past and presence.",
            rating:4.4,
            category:["Horror","Fiction","Thriller"],
            isPopular:false,
            //dateAddedToLibrary:new Date("2025-08-03T11:17:00")
        },
        {
            id:7,
            title:"Ghost Story",
            author:"Peter Straub",
            imgsrc:gs,
            description:"The story involves a writer named Donald 'Don' Wanderley who goes to the town of Milburn in upstate New York after the death of his uncle.",
            rating:3.9,
            category:["Horror","Fiction","Thriller"],
            isPopular:false,
            //dateAddedToLibrary:new Date("2025-08-03T11:20:00")
        },
        {
            id:8,
            title:"Automatic Noodle",
            author:"Annalee Newitz",
            imgsrc:an,
            description:"A cozy near-future novella about a crew of leftover robots opening their very own noodle shop, from acclaimed sci-fi author Annalee Newitz.",
            rating:4.0,
            category:["Science-Fiction","Fiction"],
            isPopular:true,
            //dateAddedToLibrary:new Date("2025-08-03T11:22:00")
        },
        {
            id:9,
            title:"Alien Clay",
            author:"Adrian Tchaikovsky",
            imgsrc:ac,
            description:"Alien Clay is a 2024 science fiction novel by Adrian Tchaikovsky. It tells the story of Arton Daghdev, a biologist who rebels against a fascist government on Earth and is exiled to a labor camp on an alien planet.",
            rating:4.7,
            category:["Science-Fiction","Fiction"],
            isPopular:false,
            //dateAddedToLibrary:new Date("2025-08-03T11:25:00")
        },
        {
            id:10,
            title:"The Girl with the Dragon Tattoo",
            author:"Stieg Larsson",
            imgsrc:tgwtdt,
            description:"'The Girl with the Dragon Tattoo,' the first novel in Stieg Larsson's Millennium series, follows journalist Mikael Blomkvist as he investigates the disappearance of Harriet Vanger, a young woman from a wealthy Swedish family. He's aided by the enigmatic and brilliant hacker Lisbeth Salander.",
            rating:4.2,
            category:["Mystery","Fiction","Thriller"],
            isPopular:false,
            //dateAddedToLibrary:new Date("2025-08-03T11:31:00")
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