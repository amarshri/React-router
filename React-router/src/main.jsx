import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Home from './Components/Home/Home.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contectus/Contect.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/Github/Github.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>

    <Route path='' element={<Home/>}/>
    <Route path='About' element={<About/>}/>
    <Route path='Contect' element={<Contact/>}/>
    <Route path='user/:userid' element={<User/>}/>
    <Route path='github' element={<Github/>}/>
  
    </Route>

  )
)

// or

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children: [
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"About",
//         element:<About/>
//       },
//       {
//         path:"Contect",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
