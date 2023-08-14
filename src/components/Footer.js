import './FooterStyles.css'

const Footer = () => {
  return(
    <div className='footer'>
      <div className='top'>
      <div> <h1>Tren Maya</h1>
        <p> Escoge tu proximo destino</p>
      </div>
      <div>
        <a href='/'> 
          <i className='fa-brands fa-facebook'/>
        </a>
        <a href='/'> 
          <i className='fa-brands fa-instagram'/>
        </a>
        <a href='/'> 
          <i className='fa-brands fa-twitter'/>
        </a>
        <a href='/'> 
          <i className='fa-brands fa-tiktok'/>
        </a>
      </div>
      </div>
      <div className='bottom'>
      <div>
        <h4>
        Destinos
          </h4>
        <a href='/'> Campeche</a>
        <a href='/'> Yucatan</a>
        <a href='/'> Chiapas</a>
        <a href='/'> Quintana Roo</a>
      </div>
        <div>
        <h4>
        Recorridos
          </h4>
        <a href='/'> Tulum</a>
        <a href='/'> Uxmal</a>
        <a href='/'> Chichen Itza</a>
        <a href='/'> Bacalar</a>
      </div>
        <div>
        <h4>
        Servicios
          </h4>
        <a href='/'> Hospedaje</a>
        <a href='/'> Recorridos</a>
        <a href='/'> Recuerdos</a>
        <a href='/'> Alimentos</a>
      </div>
        <div>
        <h4>
        Informacion
          </h4>
        <a href='/'> FAQ</a>
        <a href='/'> Ubicaciones</a>
        <a href='/'> Costos</a>
        <a href='/'> Tramos</a>
      </div>
      </div>
    </div>
  )
}

export default Footer