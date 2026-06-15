
//import './home'
import { Link } from "react-router-dom"
import './nav.css'
import {FeedRandomizer} from './nav'

function Nav () {
  let feed: string = ""

  function feedReplacer () {
    let data: string = ""
    setInterval(()=>{
    //alert("sexo")
      data = FeedRandomizer().content
    }, 10000)

    return feed = data
  }
  

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
            <p>{feed}</p>
          </li>
        </ul>
      </nav>
    </>
  )
}
export default Nav