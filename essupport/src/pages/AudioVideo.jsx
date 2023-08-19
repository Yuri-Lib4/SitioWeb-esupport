
import { Link } from 'react-router-dom';
import { useState} from 'react';
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

export function AudioVideo() {
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
                    &#8592; 
                        Servicios
                    </Link>
                
                    <Link to="" className="nav-link-audiovideo">
                    / Servicio Técnico de Reparación de Equipos de Audio y Video
                    </Link>
                </div>
                <div className="separador"></div>


                <div className="audio-video-container">
                    <p>Bienvenido a nuestro Servicio Técnico de Reparación de Equipos de Audio y Video.
                        Somos tu aliado confiable para resolver cualquier inconveniente técnico que puedas tener con tus dispositivos de entretenimiento.
                        Nuestro equipo de expertos altamente capacitados está listo para brindarte soluciones rápidas y efectivas,
                        garantizando que tus equipos vuelvan a funcionar como nuevos.</p>

                    <img className="soporte-img-container"
                        src={serviciotecnico3}
                        alt="Reparación de Equipos de Audio y Video"
                    />


                </div>

                <p className="servicios-container-pregunta">¿Qué nos hace destacar?</p>
                <div className="audio-video-container">
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg1}
                            alt="Profesionalismo y Experiencia"
                        />
                        <p> <span>Profesionalismo y Experiencia: </span>
                            Contamos con años de experiencia en el sector de la reparación de equipos de audio y video.
                            Nuestro equipo de
                            técnicos especializados ha enfrentado una amplia gama de problemas técnicos y
                            ha encontrado soluciones innovadoras para cada uno de ellos.</p>
                    </div>
                    <div></div>
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg2}
                            alt="Atención Personalizada"
                        />
                        <p> <span>Atención Personalizada:</span> Entendemos lo importante que son tus dispositivos de entretenimiento para ti.
                            Por eso, ofrecemos un trato personalizado y cuidadoso con cada cliente. Nos aseguramos de escuchar tus
                            necesidades y preocupaciones antes de iniciar cualquier reparación.</p>
                    </div>
                </div>
                <div className="audio-video-container">
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg3}
                            alt="Diagnóstico Preciso"
                        />

                        <p> <span>Diagnóstico Preciso:</span> Nuestro proceso de diagnóstico es minucioso y preciso. Identificamos el problema exacto de
                            tu equipo para aplicar la solución más adecuada y evitar cualquier tipo de adivinanza en el proceso de reparación.</p>

                    </div>
                    <div></div>
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg4}
                            alt="Reparaciones Garantizadas"
                        />
                        <p> <span>Reparaciones Garantizadas:</span> Nos enorgullecemos de la calidad de nuestro trabajo. Por esta razón, ofrecemos garantía en todas nuestras reparaciones,
                            lo que te brinda la tranquilidad de que tus dispositivos estarán en buenas manos.</p>
                    </div>
                </div>
                <div className="audio-video-container">
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg5}
                            alt="Rápido Tiempo de Respuesta"
                        />

                        <p> <span>Rápido Tiempo de Respuesta:</span> Entendemos que la rapidez es esencial cuando se trata de reparaciones técnicas. Nuestro equipo se esfuerza por ofrecer un
                            tiempo de respuesta rápido y una pronta devolución de tus dispositivos reparados.</p>
                    </div>
                    <div></div>
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg6}
                            alt="Equipo Técnico Actualizado"
                        />
                        <p>
                            <span>Equipo Técnico Actualizado:</span> Nuestros técnicos se mantienen al día con las últimas tendencias y avances tecnológicos en el campo de la reparación de equipos de audio y video.
                            Esto nos permite ofrecer soluciones efectivas y actualizadas para cualquier tipo de dispositivo.
                        </p>
                    </div>
                </div>
                <div className="audio-video-container-ultimo">
                    <img className="soporte-img-container"
                        src={Audioimg7}
                        alt="Reparamos Diversidad de Equipos"
                    />
                    <p> <span>Reparamos Diversidad de Equipos:</span> Ya sea que necesites reparar un televisor, altavoces, amplificadores, reproductores de DVD, sistemas de cine en casa o cualquier
                        otro dispositivo de audio y video, ¡nosotros lo cubrimos!</p>
                </div>

                <p>
                    Confía en nuestro Servicio Técnico de Reparación de Equipos de Audio y Video para devolver la vida a tus dispositivos de entretenimiento. Nos enorgullece ayudarte a disfrutar de una experiencia de entretenimiento sin problemas,
                    y estamos aquí para resolver tus desafíos técnicos.
                </p>
                <p>¡Contáctanos hoy mismo y deja que nuestros expertos se encarguen de tus dispositivos! Tu satisfacción es nuestra prioridad número uno.</p>

                <div>
                <Link to="/garantia-contacto" className="nav-links-audiovideo ">
                        Contactanos<FaChevronLeft className="icon-chevron-left" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default AudioVideo;