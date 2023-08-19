import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Contacto.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp as fabWhatsapp } from '@fortawesome/free-brands-svg-icons';
import mapaesupport from '../assets/mapaesupport.png';


library.add(faPhone, faWhatsapp, fabWhatsapp);

export function Garantiacontacto() {
    const [formData, setFormData] = useState({
        country: '',
        city: '',
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });
    const handleCall = (phoneNumber) => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleWhatsApp = (phoneNumber) => {
        window.open(`https://wa.me/${phoneNumber}`, '_blank');
    };
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío de datos del formulario
        console.log('Datos del formulario enviados:', formData);
    };
    const handleClick = (email) => {
        const subject = '¡Escribe tu asunto aquí!';
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
        window.location.href = mailtoLink;
    };
    const handleWhatsAppMessage = () => {
        const phoneNumber = '51949723120'; // Número de WhatsApp de destino
        const message = `País: ${formData.country}\nCiudad: ${formData.city}\nNombre: ${formData.firstName}\nApellido: ${formData.lastName}\nEmail: ${formData.email}\nMensaje: ${formData.message}`;
        const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    };

    const handleEmail = () => {
        const emailAddress = 'ventasyservicios@eyesupportperu.com'; // Correo electrónico de destino
        const subject = 'Formulario de contacto';
        const body = `País: ${formData.country}\nCiudad: ${formData.city}\nNombre: ${formData.firstName}\nApellido: ${formData.lastName}\nEmail: ${formData.email}\nMensaje: ${formData.message}`;
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };
    return (
        <div>

            <div className="header-esupport">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        {/* Agrega el icono solo en modo móvil */}
                        <button className="navbar-toggler" type="button" onClick={toggleMobileMenu}>
                            <span className="navbar-toggler-icon">
                                {/* Agrega el icono SVG aquí */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
                                    <path d="M 0 9 L 0 11 L 30 11 L 30 9 Z M 0 15 L 0 17 L 30 17 L 30 15 Z M 0 21 L 0 23 L 30 23 L 30 21 Z" />
                                    <path fill="#00D8FF" d="..."></path>
                                </svg>
                            </span>
                        </button>

                        <ul className={`menu-links ${isMobileMenuOpen ? 'open' : ''}`}>
                            {/* Agrega los enlaces aquí */}
                            <li className="nav-item">
                                <Link to="/home" className="nav-link ">
                                    Inicio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/categorias" className="nav-link">
                                    Categorías
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/ofertas" className="nav-link">
                                    Ofertas
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/desktops" className="nav-link">
                                    Desktops
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/servicios" className="nav-link">
                                    Servicios
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/proveedores" className="nav-link">
                                    Proveedores
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/soporte" className="nav-link">
                                    Soporte
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contacto" className="nav-link home-link-header">
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div className="contacto-container">
                <div className="header-contacto-container">
                    <Link to="/contacto">
                        <p className="header-contacto-container-links">PREGUNTAS FRECUENTES</p>
                    </Link>

                    <Link to="/drivers">
                        <p className="header-contacto-container-links">DRIVERS</p>
                    </Link>

                    <Link className="preguntas-contacto" to="/garantia-contacto">
                        <p className="header-contacto-container-links">GARANTIA Y CONTACTO</p>
                    </Link>

                    <Link to="/tutoriales-consejos">
                        <p className="header-contacto-container-links">TUTORIALES Y CONSEJOS</p>
                    </Link>
                </div>
                <div className="contacto-separator"></div> {/* Barra vertical separadora */}


                <div className="formulario-contacto">
                    <div>
                        <h2>¿NECESITAS AYUDA?</h2>
                        <p>Escríbenos y completa el formulario para que podamos ayudarte.</p>
                    </div>
                    <div></div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="formulario-contacto-campos">
                                <div>
                                    <div className="formulario-contacto-campo">
                                        <label htmlFor="country">País</label>
                                        <input
                                            type="text"
                                            id="country"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            placeholder="DÍNOS TU PAÍS..."
                                        />
                                        <div className="contacto-formulario-separator"></div> {/* Barra vertical separadora */}

                                    </div>

                                    <div className="formulario-contacto-campo">
                                        <label htmlFor="firstName">Nombre</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder="EJ. YURI"
                                        />
                                        <div className="contacto-formulario-separator"></div> {/* Barra vertical separadora */}
                                    </div>

                                    <div className="formulario-contacto-campo">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="EJ. YURI@MAIL.COM"
                                        />
                                        <div className="contacto-formulario-separator"></div> {/* Barra vertical separadora */}
                                    </div>

                                </div>
                                <div></div>
                                <div>

                                    <div className="formulario-contacto-campo">
                                        <label htmlFor="city">Ciudad</label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            placeholder="DINOS TU CIUDAD..."
                                        />
                                        <div className="contacto-formulario-separator"></div> {/* Barra vertical separadora */}
                                    </div>
                                    <div className="formulario-contacto-campo">
                                        <label htmlFor="lastName">Apellido</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            placeholder="EJ. CARRASCO"
                                        />
                                        <div className="contacto-formulario-separator"></div> {/* Barra vertical separadora */}
                                    </div>



                                </div>
                            </div>



                            <div className="formulario-contacto-campo">
                                <label htmlFor="message">Mensaje</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="MOTIVO POR EL QUE NECESITAS COMUNICARTE CON NOSOTROS"
                                />
                                <div className="contacto-formulario-separator"></div> {/* Barra vertical separadora */}
                            </div>
                            <button className="contacto-formulario-bottom" onClick={handleWhatsAppMessage}>ENVIAR POR WHATSAPP</button>
                            <button className="contacto-formulario-bottom" onClick={handleEmail}>ENVIAR POR EMAIL</button>
                        </form>
                    </div>
                </div>
                <div className="contacto-formulario-separator"></div> {/* Barra vertical separadora */}

                <div className="contacto-formulario-ubicanos">
                    <div>
                        <h2>Donde ubicarnos</h2>

                        <h3>DIRECCIÓN</h3>
                        <p> Jr. Zepita #728 Of. 108 – Trujillo</p>
                        <h3>TELÉFONO</h3>
                        <ul>
                            <div className="contacto-formulario-ubicanos-iconos">
                                <li>
                                    FIJO:

                                </li>
                                <p>
                                    <FontAwesomeIcon className="contacto-formulario-ubicanos-icon" icon="phone" onClick={() => handleCall('044200291')} />(044) – 200291</p>
                            </div>
                            <div className="contacto-formulario-ubicanos-iconos">
                                <li>
                                    CELULAR:

                                </li>
                                <p>
                                    <FontAwesomeIcon className="contacto-formulario-ubicanos-icon" icon={['fab', 'whatsapp']} onClick={() => handleWhatsApp('51949723120')} />(+51) 949 723 120</p>
                            </div>
                        </ul>
                        <h3>EMAIL

                            <div className="contacto-formulario-ubicanos-links">
                                <a className="contacto-formulario-ubicanos-link" onClick={() => handleClick('ebravo@eyesupportperu.com')}>asistente.gerencia@eyesupportperu.com</a>
                                <br />
                                <a className="contacto-formulario-ubicanos-link" onClick={() => handleClick('asistente.gerencia@eyesupportperu.com')}>asistente.gerencia@eyesupportperu.com</a>
                                <br />
                                <a className="contacto-formulario-ubicanos-link" onClick={() => handleClick('ventasyservicios@eyesupportperu.com')}>ventasyservicios@eyesupportperu.com</a>
                            </div>

                        </h3>
                    </div>
                    <div className="contacto-formulario-ubicanos-img">
                        <a href="https://www.google.com/maps/place/E%26E+Support/@-8.1070013,-79.033177,16z/data=!4m15!1m8!3m7!1s0x91ad3d850c9fc5f3:0x19c8293154d18b28!2sOf.+108,+VXVC%2B8Q4,+Jirón+Zepita+728,+Trujillo+13001!3b1!8m2!3d-8.1066952!4d-79.0281345!16s%2Fg%2F11pw1zcw3m!3m5!1s0x91ad3d850c566487:0xdc3f9e267cc79d3b!8m2!3d-8.1067436!4d-79.028032!16s%2Fg%2F11b6ht5041?hl=es-419&entry=ttu">
                            <img
                                src={mapaesupport}
                                alt="Imagen usando impresoras"
                            />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Garantiacontacto;
