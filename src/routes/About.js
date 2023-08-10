import Navbar from "../components/Navbar"
import AboutImg from '../assets/IMG_2924.jpeg'
import Hero from "../components/Hero";
import Footer from "../components/Footer"
import AboutData from '../components/AboutData.js';

function About (){
    return(
        <>
        <Navbar />
        <Hero 
          cName='hero-mid'
          heroImg={AboutImg}
      title='About'
          btnClass='hide'/>
          <AboutData />
          <Footer />
      </>
    )
}

export default About;