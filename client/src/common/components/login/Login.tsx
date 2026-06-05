import Nav from "../shared/Nav"
function Login() {
  return (
    <>      
      <Nav />
      <div className="login-placeholder">
        <div className="login-box" style={{border: "medium solid red"}}>
          <div className="inputs_box" style={{border: "medium dashed green"}}>
            <p>Usuario</p>
            <div>
              <input type="email" name="user" id="email-box" />
            </div>
            <p>Contraseña</p>
            <div>
              <input type="password" name="password" id="password_box" />
            </div>
          </div>
          <p>Se me olvido la contraseña?</p>
          <p>Registrate</p>
        </div>
      </div>
    </>
  )
}

export default Login
