//import '../../asset/'
import './hero.css'
import '../../../../public/assets/icons/school_png.png'

function Hero () {
  return (
    <>
      <section>
        <div className="main">
          <h1> Unidad Educativa Dr. Rafael Lopez Baralt </h1>
          <img src="../../../../public/assets/icons/school_png.png" alt="" />
        </div>
        <hr className='separator' />
        <div className="hero">
          </div>
          <div className='information'>
            <h1>Cuna de la Excelencia.</h1>
            <p>
              "Mas de 40 años de Excelencia, Constancia y Disciplina, nos han enseñado la gracia y la virtud de la pedagogia.
              Nuestra institucion se honra en haber llevado a mas de 7000 profesionales al futuro, tanto laboral como personal en mas de 20 naciones a través de todo el mundo.
              Es por ende, nuestra mision y cometido tal estipulado por nuestra querida fundadora Dr. Elina Rosa Henriquez Fuenmayor el brindar la mejor educacion, enseñanza y 
              valores; para construir el puente entre nuestro alumnado y su futuro".
            </p>
          </div>
          <div className="containers">
            <div className="container">
              <div className='grades-information'>
                <p>Nuestras facultades garantizan el camino de tus mas pequeños desde sus inicios.</p>
              </div>
              <p className="highlight-data">
                Pre-escolar
              </p>
            </div>
            <div className="container">
              <div className='grades-information'>
                <p>- Example 1</p>
              </div>
              <p className="highlight-data">
                Primaria
              </p>
            </div>
            <div className="container">
              <div className='grades-information'>
                <p>- Example 1</p>
              </div>
              <p className="highlight-data">
                Secundaria
              </p>
            </div>
          </div>
      </section>
    </>
  )
}
export default Hero