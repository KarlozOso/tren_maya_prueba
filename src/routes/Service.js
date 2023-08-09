import Navbar from "../components/Navbar"
import Hero from "../components/Hero";

function Service (){
    return(
        <>
         <Navbar />
        <Hero 
          cName='hero-mid'
          heroImg='https://images.unsplash.com/photo-1588779815790-d5b9de4ca045?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80'
      title='Service'
          btnClass='hide'/>
        </>
    )
}

export default Service;
