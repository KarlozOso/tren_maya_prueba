import Mountain1 from '../assets/IMG_2895.jpeg'
import Mountain2 from '../assets/IMG_2899.jpeg'
import Mountain3 from '../assets/IMG_2904.jpeg'
import Mountain4 from '../assets/IMG_2901.jpeg'
import './DestinationStyles.css'

const Destination = () => {
  return (
    <div className='destination'>
      <h1>Popular Destinations</h1>
      <p>Tours give you the oportunity to see a lot, within a time frame</p>
      <div className='first-des'>
        <div className='des-text'>
          <h2>Tall Volcano, Batangas</h2>
          <p>
            Taal Volcano in Batangas, Philippines, is a captivating complex
            volcano situated within a caldera on Volcano Island. Known for its
            stunning landscapes, including a sulfuric Crater Lake, it draws
            tourists despite its history of eruptions. Accessible by boat,
            visitors can trek to the crater rim for breathtaking views, although
            volcanic activity can limit access. This active yet scenic volcano
            is a testament to the Earth's geological forces at work.
          </p>
        </div>
      <div className='image'>
        <img alt='img' src={Mountain1} />
        <img alt='img' src={Mountain2} />
        </div>
      </div>
    </div>
  )
}

export default Destination
