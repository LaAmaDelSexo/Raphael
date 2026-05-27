// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Nav from './common/components/shared/Nav'
import Summary from './common/components/index/Summary'
import Hero from './common/components/index/Hero'
import Highlights from './common/components/index/Highlights'
import Footer from './common/components/index/Footer'
function App() {
  return (
    <>      
      <Nav />
      <Hero />
      <Summary />
      <Highlights />
      <Footer />
    </>
  )
}

export default App
