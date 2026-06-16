
//import './home'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import './nav.css'
import {FeedRandomizer} from './feedLogic'

function Nav () {
  const [feed, setFeed] = useState<string>("")
  const [animateKey, setAnimateKey] = useState<number>(0)

  useEffect(()=>{
    setFeed(FeedRandomizer().content)
    const interval = setInterval(()=>{
        setFeed(FeedRandomizer().content)
      }, 10000)
      return () => clearInterval(interval)
  })
  return (
    <>
      <nav className="topbar">
        <ul className="topbar-box">
          <li className="topbar-item">
            <Link className="link home-ico" to={"/"}>
              <img src="/favicon.svg" alt="" />
              <p> Hogar</p>
            </Link>
          </li>
          <li className="topbar-item">
            <Link className="link" to={"/About"}>Sobre Nosotros</Link>
          </li>
          <li className="topbar-item">
            <Link className="link" to={"/FindUs"}>Ubicanos</Link>
          </li>
          <li className="topbar-item">
            <Link className="link" to={"/Showcase"}>Destacados</Link>
          </li>
          <li className="topbar-item">
            <Link className="link" to={"/Registration"}>Inscripciones</Link>
          </li>
          <li className="topbar-item">
            <Link className="link" to={"/StudentPortal"}>Portal Estudiantil</Link>
          </li>
          <li className="topbar-item">
            <Link className="link" to={"/Contact"}>Contactanos</Link>
          </li>
          <ul className="topbar-options">
            <li>
              <Link className="link" to={"/Login"}>Login</Link>
            </li>
            <li>
              <Link className="link" to={"/Login"}>Settings</Link>
            </li>
          </ul>
        </ul>
        <ul className="highbar">
          <li>
            <p key={feed} className="feed-text-animate">{feed}</p>
          </li>
        </ul>
      </nav>
    </>
  )
}
export default Nav