import Navbar from "../components/Navbar"
import Hero from "../components/Hero";

function About (){
    return(
        <>
        <Navbar />
        <Hero 
          cName='hero-mid'
          heroImg='https://images.unsplash.com/photo-1541427468627-a89a96e5ca1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
      title='About'
          btnClass='hide'/>
      </>
    )
}

export default About;