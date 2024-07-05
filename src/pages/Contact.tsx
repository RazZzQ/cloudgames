import './Contact.css'; // Asegúrate de tener tu archivo CSS para estilos adicionales
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
function Contact(){
    return(
        <div id="contact-info">
            <h2>Información de contacto</h2>
            <p>
                <strong>Correo electrónico:</strong> <a href="mailto:roswell.quispe@tecsup.edu.pe">roswell.quispe@tecsup.edu.pe</a>
            </p>
            <p>
                <strong>Teléfono:</strong> <a href="tel:906675868">906675868</a>
            </p>
            <p>
                <strong>Dirección:</strong> Santa Anita-Lima
            </p>
            <p>
                <strong>Horarios de atención:</strong> Lunes a Viernes, 9am - 5pm
            </p>
            <div className="social-media">
                <p>Síguenos en nuestras redes sociales:</p>
                <ul className="social-media">
                <li><a href="https://facebook.com/tuempresa"><FontAwesomeIcon icon={faFacebookSquare} /></a></li>
                <li><a href="https://twitter.com/tuempresa"><FontAwesomeIcon icon={faTwitterSquare} /></a></li>
                <li><a href="https://linkedin.com/tuempresa"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            </ul>
            </div>
        </div>
    );
}

export default Contact