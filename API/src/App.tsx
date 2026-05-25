// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Nav from './common/components/index/nav'
import Home from './common/components/index/home'
import Hero from './common/components/index/hero'
import Highlights from './common/components/index/highlights'
import Footer from './common/components/index/footer'

function App() {
  return (
    <>      
      <Nav />
      <Hero />
      <Home />
      <Highlights />
      <Footer />
    </>
  )
}

export default App
