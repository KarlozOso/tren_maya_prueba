import './ContactFormStyles.css'

function ContactForm() {
    return(
        <div className='form-container'>
            <h1>Enviame un mensaje</h1>
            <form>
                <input placeholder='Nombre'/>
                <input placeholder='Email'/>
                <input placeholder='Asunto'/>
                <textarea placeholder='Mensaje' rows='6'></textarea>
                <button>Enviame un mensaje</button>
            </form>
        </div>
    )
    
}

export default ContactForm