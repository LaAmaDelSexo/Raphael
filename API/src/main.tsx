import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './index.css'
import App from './App.tsx'
import Home from './common/components/index/home.tsx';

const router =createBrowserRouter([
  {path:"/",element:<App />},
  {path:"/Home",element:<Home />},
//  {path:"/About",element:<About />},
//  {path:"/Showcase",element:<Showcase />}
//  {path:"/Registration",element:<Registration />},
//  {path:"/Login",element:<Login />},
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

// <RouterProvider router={router}/>