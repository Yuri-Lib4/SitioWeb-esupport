
import { Link } from 'react-router-dom';
import { useState } from 'react';
import serviciotecnico3 from '../assets/audiovideo.png';
import Audioimg1 from '../assets/Audioimg1.jpg';
import Audioimg2 from '../assets/audioimg2.jpg';
import Audioimg3 from '../assets/audioimg3.jpg';
import Audioimg4 from '../assets/audioimg4.jpg';
import Audioimg5 from '../assets/audioimg5.jpg';
import Audioimg6 from '../assets/audioimg6.jpg';
import Audioimg7 from '../assets/audioimg7.jpg';
import { FaChevronLeft} from 'react-icons/fa';
import './Servicios.css';

export function PortatilesTablets() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
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
                                <Link to="/servicios" className="nav-link home-link-header">
                                    Servicios
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/nosotros" className="nav-link">
                                    Nosotros
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/soporte" className="nav-link">
                                    Soporte
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contacto" className="nav-link">
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div className="servicios-container">

                <div>
                    <Link to="/servicios" className="nav-links-audiovideo ">
                    <FaChevronLeft className="icon-chevron-left" />
                        Servicios
                    </Link>
                
                    <Link to="" className="nav-link-audiovideo">
                    / Servicio Técnico de Reparación de Computadoras Portátiles y Tablets
                    </Link>
                </div>
                <div className="separador"></div>


                <div className="audio-video-container">
                    <p>¡Bienvenido a nuestro Servicio Técnico de Reparación de Computadoras Portátiles y Tablets! Somos tu solución confiable y eficiente para resolver cualquier problema técnico que puedas enfrentar con tus dispositivos portátiles. Nuestro equipo de técnicos altamente capacitados está dedicado a brindarte soluciones rápidas y efectivas para que puedas volver a utilizar tus computadoras y tablets sin inconvenientes.</p>

                    <img className="soporte-img-container"
                        src={serviciotecnico3}
                        alt="Reparación de Equipos de Audio y Video"
                    />


                </div>

                <p className="servicios-container-pregunta">¿Por qué elegir nuestro servicio?</p>
                <div className="audio-video-container">
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg1}
                            alt="Profesionalismo y Experiencia"
                        />
                        <p> <span>Amplia Experiencia en Reparaciones: </span>
                        Nuestro equipo de técnicos cuenta con una amplia experiencia en la reparación de computadoras portátiles y tablets. Hemos enfrentado una gran variedad de problemas técnicos en estos dispositivos y tenemos la experiencia necesaria para abordar cada fallo de manera eficiente.</p>
                    </div>
                    <div></div>
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg2}
                            alt="Atención Personalizada"
                        />
                        <p> <span>Diagnóstico Preciso: </span>  Nuestro proceso de diagnóstico es minucioso y preciso. Identificamos rápidamente la causa del problema en tus dispositivos y te proporcionamos un informe detallado sobre las soluciones necesarias.</p>
                    </div>
                </div>
                <div className="audio-video-container">
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg3}
                            alt="Diagnóstico Preciso"
                        />

                        <p> <span>Reparaciones Rápidas: </span> Entendemos lo importante que son tus computadoras portátiles y tablets en tus actividades diarias. Nos esforzamos por proporcionar un tiempo de respuesta rápido y resolver los problemas en el menor tiempo posible, para que puedas continuar con tus tareas sin demoras.</p>

                    </div>
                    <div></div>
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg4}
                            alt="Reparaciones Garantizadas"
                        />
                        <p> <span>Reparaciones Garantizadas:  </span> Nos enorgullecemos de la calidad de nuestro trabajo. Por ello, todas nuestras reparaciones están respaldadas por una garantía para tu tranquilidad y satisfacción.

</p>
                    </div>
                </div>
                <div className="audio-video-container">
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg5}
                            alt="Rápido Tiempo de Respuesta"
                        />

                        <p> <span>Reparaciones en Diversos Componentes:  </span>Ya sea que necesites reparar el hardware, reemplazar la pantalla, solucionar problemas de software o cualquier otro inconveniente, nuestro equipo está preparado para abordar una amplia gama de problemas en tus computadoras portátiles y tablets.</p>
                    </div>
                    <div></div>
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg6}
                            alt="Equipo Técnico Actualizado"
                        />
                        <p>
                            <span>Atención Personalizada: </span>  Valoramos a cada cliente y sus necesidades individuales. Nos aseguramos de escuchar tus inquietudes y proporcionarte soluciones personalizadas y adaptadas a tus requerimientos específicos.
                        </p>
                    </div>
                </div>
                <div className="audio-video-container-ultimo">
                    <img className="soporte-img-container"
                        src={Audioimg7}
                        alt="Reparamos Diversidad de Equipos"
                    />
                    <p> <span>Mantenimiento Preventivo: </span> Además de las reparaciones, ofrecemos servicios de mantenimiento preventivo para mantener tus dispositivos en óptimas condiciones y prevenir futuros problemas.</p>
                </div>

                <p>
                Confía en nuestro Servicio Técnico de Reparación de Computadoras Portátiles y Tablets para mantener tus dispositivos en pleno funcionamiento y evitar interrupciones en tus tareas diarias. Estamos comprometidos a brindar soluciones confiables y servicios de alta calidad para mantener tus computadoras portátiles y tablets en su mejor rendimiento.
                </p>
                <p>¡Contáctanos hoy mismo y deja tus impresoras en manos de expertos! Tu satisfacción y la calidad de tus impresiones son nuestra principal prioridad.</p>

                <div>
                <Link to="/garantia-contacto" className="nav-links-audiovideo ">
                        Contactanos<FaChevronLeft className="icon-chevron-left" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default PortatilesTablets;