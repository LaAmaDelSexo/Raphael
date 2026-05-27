
//import './home'
import { Link } from "react-router-dom"


function Nav () {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Inicio</Link>
          </li>
          <li>
            <Link to={"/About"}>Sobre Nosotros</Link>
          </li>
          <li>
            <Link to={"/FindUs"}>Ubicanos</Link>
          </li>
          <li>
            <Link to={"/Showcase"}>Destacados</Link>
          </li>
          <li>
            <Link to={"/Registration"}>Inscripciones</Link>
          </li>
          <li>
            <Link to={"/StudentPortal"}>Portal Estudiantil</Link>
          </li>
          <li>
            <Link to={"/Contact"}>Contactanos</Link>
          </li>
          <li>
            <Link to={"/Login"}>Login</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
export default Nav