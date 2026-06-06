import Nav from "../shared/Nav"

function Contact() {
  return (
    <>      
      <Nav />
      <div>
        <h1>Contactanos :D</h1>
        <p>Quieres saber mas? Escribenos, y pongamonos en contacto!</p>
        <div className="mail-box">
          <input type="text" name="subject" id="subject" placeholder="Asunto" />
          <div>
            <input type="text" name="content" id="content" placeholder="Contenido" />
            <button>Borrar</button>
            <button>Enviar</button>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <img src="/assets/icons/facebook.svg" alt="" />
            </li>
            <li>
              <img src="/assets/icons/youtube.svg" alt="" />
            </li>
            <li>
              <img src="/assets/icons/whatsapp.svg" alt="" />
            </li>
            <li>
              <img src="/assets/icons/instagram.svg" alt="" />
            </li>
            <li>
              <img src="/assets/icons/telegram.svg" alt="" />
            </li>
            <li>
              <img src="/assets/icons/tiktok.svg" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Contact
