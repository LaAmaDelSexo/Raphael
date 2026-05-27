import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './index.css'
import App from './App.tsx'
import FindUs from './common/components/findUs/FindUs.tsx'
import About from './common/components/about/About.tsx';
import Showcase from './common/components/showcase/Showcase.tsx';
import Registration from './common/components/registration/Registration.tsx';
import Social from './common/components/index/Social.tsx';
import StudentPortal from './common/components/studentPortal/StudentPortal.tsx';
import Contact from './common/components/contacts/Contact.tsx';
import Login from './common/components/login/Login.tsx';

const router =createBrowserRouter([
  {path:"/",element:<App />},
  {path:"/About",element:<About />},
  {path:"/FindUs",element:<FindUs />},
  {path:"/Showcase",element:<Showcase />},
  {path:"/Registration",element:<Registration />},
  {path:"/Social",element:<Social />},
  {path:"/StudentPortal",element:<StudentPortal />},
  {path:"/Contact",element:<Contact />},
  {path:"/Login",element:<Login />},
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

// <RouterProvider router={router}/>