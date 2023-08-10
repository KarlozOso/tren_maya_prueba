import Mountain1 from '../assets/IMG_2913.jpeg'
import Mountain2 from '../assets/IMG_2914.jpeg'
import Mountain3 from '../assets/IMG_2915.jpeg'
import Mountain4 from '../assets/IMG_2916.jpeg'
import Mountain5 from '../assets/IMG_2920.jpeg'
import Mountain6 from '../assets/IMG_2921.jpeg'
import Mountain7 from '../assets/IMG_2922.jpeg'
import Mountain8 from '../assets/IMG_2923.jpeg'
import DestinationData from "./DestinationData"

import './DestinationStyles.css'

const Destination = () => {
  return (
    <div className='destination'>
      <h1>Destinos Populares</h1>
      <p>Tu proxima Aventura te espera</p>

      <DestinationData heading="Campeche" className='first-des'
      text="Campeche es un estado en el sureste de México, conocido por su rica historia colonial, su impresionante arquitectura y su hermosa costa. La capital del estado lleva el mismo nombre y es una ciudad histórica que ha sido declarada Patrimonio de la Humanidad por la UNESCO. Campeche es famoso por sus fortificaciones, que alguna vez protegieron la ciudad de los ataques piratas, y por sus calles adoquinadas rodeadas de casas coloniales coloridas. Además de su riqueza histórica, el estado también ofrece playas pintorescas, gastronomía regional única y un ambiente tranquilo y relajado. Su mezcla de cultura, naturaleza y patrimonio hacen de Campeche un destino fascinante para los amantes de la historia y la belleza costera." 
        img1={Mountain1}
        img2={Mountain2}/>
      <DestinationData heading="Merida" className='first-des-reverse'text="Mérida es la capital del estado de Yucatán en México y es conocida por su rica historia, cultura y arquitectura colonial. La ciudad se destaca por su belleza y tranquilidad, con calles empedradas, plazas arboladas y edificios coloniales bien conservados. Mérida es famosa por ser una ciudad culturalmente diversa, donde se fusionan tradiciones mayas y españolas. Los mercados locales, como el Mercado Lucas de Gálvez, ofrecen una variedad de productos frescos y artesanías únicas. Además, la gastronomía yucateca es un punto destacado, con platos como la cochinita pibil y los salbutes. La ciudad también sirve como un punto de partida para explorar las ruinas mayas de Chichén Itzá y Uxmal, así como las playas cercanas en la costa del Golfo de México. Con su encanto colonial y vibrante escena cultural, Mérida es una ciudad que cautiva a los visitantes con su autenticidad y diversidad." 
        img1={Mountain3}
        img2={Mountain4}/>
      <DestinationData heading="Tulum" className='first-des' text="Tulum es un destino turístico ubicado en la Riviera Maya, en la costa del Caribe mexicano. Conocido por su mezcla única de belleza natural y rica historia, Tulum es famoso por sus playas de arena blanca y aguas turquesas que se extienden a lo largo de la costa. Lo que distingue a Tulum de otros lugares es la presencia de las ruinas arqueológicas mayas junto al mar. El sitio arqueológico de Tulum cuenta con antiguas estructuras mayas que ofrecen vistas impresionantes del océano.

Además de su patrimonio arqueológico, Tulum es un lugar de retiro y bienestar, con una creciente comunidad de viajeros que buscan relajación, meditación y yoga. Los centros de bienestar y spas se complementan con una oferta gastronómica saludable y variada.

La atmósfera bohemia y relajada, junto con la combinación de historia maya y belleza costera, hacen de Tulum un lugar único y atractivo para aquellos que buscan una experiencia tranquila, cultural y natural en la Riviera Maya." 
        img1={Mountain5}
        img2={Mountain6}/>
      <DestinationData heading="Palenque" className='first-des-reverse'text="Palenque, ubicado en el estado de Chiapas en México, es un sitio arqueológico maya icónico y un tesoro histórico rodeado por la exuberante selva tropical. El sitio arqueológico de Palenque es famoso por sus estructuras majestuosas y su impresionante arquitectura, que incluye templos, palacios y pirámides cuidadosamente diseñadas. Estas ruinas mayas ofrecen una visión fascinante de la antigua civilización y su estilo arquitectónico distintivo.

Situado en medio de la selva, el ambiente de Palenque es mágico y misterioso. Los visitantes pueden explorar las estructuras antiguas rodeadas por la vegetación tropical, y escuchar los sonidos de la naturaleza mientras caminan por los senderos.

La cascada de Misol-Ha y la cascada de Agua Azul también son atracciones cercanas que ofrecen la oportunidad de experimentar la belleza natural de Chiapas. Palenque es una parada imperdible para los amantes de la historia, la arqueología y la naturaleza, y brinda una visión cautivadora de la civilización maya en un entorno impresionante." 
        img1={Mountain7}
        img2={Mountain8}/>
    </div>
  )
}

export default Destination
