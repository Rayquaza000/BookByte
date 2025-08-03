import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx';
import Body from './components/Body.jsx'

// const appRouter=createBrowserRouter([
//   {
//     path:"/", 
//     element: <App/>,
//     children:[
//       {
//         path:"/",
//         element:<Body/>
//       },
//       {
//         path:"/BrowseBooks",
//         element:<div>BrowseBooks</div>,
//       },
//       {
//         path:"/AddBook",
//         element:<div>AddBook</div>
//       }
//     ]
// }
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={appRouter}/> */}
    <App/>
  </StrictMode>,
)
