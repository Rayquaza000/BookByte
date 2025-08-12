import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import { Provider, useDispatch } from 'react-redux';
import appStore from './utils/appStore.js'
import Home from './components/Home.jsx'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import BrowseBooks from './components/BrowseBooks.jsx'
import AddBook from './components/AddBook.jsx'
import BookDetailsById from './components/BookDetailsById.jsx'
import ErrorPath from './components/ErrorPath.jsx'
import { addBook } from './utils/booksSlice.js'

function App() {
  
  const appRouter=createBrowserRouter([
  {
    path:"/", 
    element: <Home/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/BrowseBooks",
        element:<BrowseBooks/>,
      },
      {
        path:"/AddBook",
        element:<AddBook/>
      },
      {
        path:"/BookDetails/:bookId",
        element:<BookDetailsById/>
      }
    ],
    errorElement:<ErrorPath/>
}
]);

  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter}/>
        
    </Provider>
  )
}

export default App
