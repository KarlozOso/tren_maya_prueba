import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Hero from "../components/Hero"
import Train from '../assets/IMG_2919.jpeg'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"



function Home (){
    return(
        <>
          <Navbar />
          <Hero 
            cName='hero'
            heroImg={Train}
        title='Tu proximo destino te espera'
        text='Aqui comienza tu proxima aventura'
            buttonText='Plan de viaje'
            url='/' 
            btnClass='show'/>
            <Destination />
          <Trip />
          <Footer />
        </>
    )
}

export default Home;