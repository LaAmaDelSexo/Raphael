// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import router from './core/router/router'
import { RouterProvider } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
