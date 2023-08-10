import './TripStyles.css'; 
import TripData from "./TripData"
import Card1 from '../assets/IMG_2926.jpeg'
import Card2 from '../assets/IMG_2929.jpeg'
import Card3 from '../assets/IMG_2930.jpeg'

function Trip() {
  return (
    <div className='trip'>
      <h1>Próximos Viajes</h1>
      <p>Descubre dónde iniciar tu próximo viaje</p>
      <div className='tripcard'>
        <TripData 
          image={Card1} heading="Viaja a Cancún" text='Cancún, situado en la costa del Caribe mexicano, es un destino turístico renombrado por sus playas de arena blanca y aguas turquesas. Con el segundo arrecife de coral más grande del mundo, es un paraíso para los amantes del buceo y el snorkel. Además, su Zona Hotelera vibrante ofrece una vida nocturna animada y una amplia variedad de actividades acuáticas.'
        />
        <TripData 
          image={Card2} heading="Viaja a Izamal" text='Izamal, un pintoresco pueblo mágico en Yucatán, México, te espera con calles amarillas y edificios llenos de historia. Explora su impresionante convento sobre una antigua pirámide maya, degusta la auténtica cocina yucateca y sumérgete en su atmósfera tranquila y encantadora. Un viaje a Izamal es una experiencia auténtica llena de cultura y belleza.'
        />
        <TripData 
          image={Card3} heading="Viaja a Bacalar" text='Un viaje a Bacalar, en el estado de Quintana Roo, México, te llevará a un paraíso de aguas cristalinas y tonos azules deslumbrantes. La Laguna de Bacalar, conocida como la "Laguna de los Siete Colores", ofrece una experiencia única de relajación y naturaleza. Explora cenotes y cuevas cercanas, y disfruta de actividades acuáticas como kayak y esnórquel. El ambiente tranquilo y la belleza natural hacen de Bacalar un destino ideal para desconectar y admirar paisajes impresionantes.'
        />
      </div>
    </div>
  )
}

export default Trip;