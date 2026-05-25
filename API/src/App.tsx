// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Nav from './common/components/index/nav'
import Home from './common/components/index/home'
import Hero from './common/components/index/hero'
import Highlights from './common/components/index/highlights'

function App() {
  return (
    <>      
      <Nav />
      <Hero />
      <Home />
      <Highlights />
      <section id="Contact">
        <footer>
          <h2>Contactanos</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </footer>
      </section>
    </>
  )
}

export default App
