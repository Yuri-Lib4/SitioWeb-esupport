
import { Link } from 'react-router-dom';
import serviciotecnico3 from '../assets/audiovideo.png';
import Audioimg1 from '../assets/Audioimg1.jpg';
import Audioimg2 from '../assets/audioimg2.jpg';
import Audioimg3 from '../assets/audioimg3.jpg';
import Audioimg4 from '../assets/audioimg4.jpg';
import Audioimg5 from '../assets/audioimg5.jpg';
import Audioimg6 from '../assets/audioimg6.jpg';
import { useState } from 'react';
import { FaChevronLeft} from 'react-icons/fa';
import './Servicios.css';

export function RedElectrica() {
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
                    / Servicio Técnico de Cableado de Red Eléctrica
                    </Link>
                </div>
                <div className="separador"></div>


                <div className="audio-video-container">
                    <p>Bienvenido a nuestro Servicio Técnico de Cableado de Red Eléctrica. 
                        Nos enorgullecemos de ser tu solución integral para cualquier necesidad
                        relacionada con el cableado eléctrico en tu hogar o negocio. Nuestro equipo
                         de expertos está altamente capacitado para ofrecer servicios de instalación,
                          mantenimiento y reparación de cableado eléctrico, garantizando una distribución 
                        segura y eficiente de la energía eléctrica en tus espacios.</p>

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
                        <p> <span>Instalación Profesional: </span>
                        Nuestro equipo de técnicos altamente calificados realiza instalaciones
                         eléctricas de manera profesional y precisa. Ya sea que necesites instalar 
                         un nuevo sistema de cableado o realizar una ampliación en tu red eléctrica, estamos preparados
                         para llevar a cabo el proceso de manera eficiente y segura.</p>
                    </div>
                    <div></div>
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg2}
                            alt="Atención Personalizada"
                        />
                        <p> <span>Cumplimiento de Normativas y Seguridad: </span> La seguridad es 
                        nuestra prioridad. Nos aseguramos de seguir estrictamente las normativas y 
                        estándares eléctricos vigentes, garantizando que el cableado se realice de 
                        acuerdo con las regulaciones establecidas 
                        para prevenir accidentes y garantizar un funcionamiento confiable.</p>
                    </div>
                </div>
                <div className="audio-video-container">
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg3}
                            alt="Diagnóstico Preciso"
                        />

                        <p> <span>Materiales de Alta Calidad: </span> Utilizamos materiales de primera
                         calidad en todas nuestras instalaciones y reparaciones. Trabajamos con proveedores
                          de confianza y marcas reconocidas para asegurar 
                        la durabilidad y el rendimiento óptimo de tu red eléctrica.</p>

                    </div>
                    <div></div>
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg4}
                            alt="Reparaciones Garantizadas"
                        />
                        <p> <span>Mantenimiento Preventivo: </span> Nuestro servicio incluye inspecciones
                         periódicas para detectar y solucionar posibles problemas antes de que se conviertan
                          en fallas mayores. El mantenimiento preventivo es esencial para garantizar el correcto 
                          funcionamiento de tu red 
                        eléctrica y evitar costosas reparaciones a largo plazo.</p>
                    </div>
                </div>
                <div className="audio-video-container">
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg5}
                            alt="Rápido Tiempo de Respuesta"
                        />

                        <p> <span>Reparaciones Rápidas y Efectivas: </span>  En caso de enfrentar problemas
                         con tu red eléctrica, nuestros técnicos están preparados para realizar diagnósticos precisos
                          y aplicar soluciones rápidas y efectivas. Restableceremos la funcionalidad de tu red eléctrica para
                         que puedas seguir con tus actividades sin interrupciones.</p>
                    </div>
                    <div></div>
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg6}
                            alt="Equipo Técnico Actualizado"
                        />
                        <p>
                            <span>Atención Personalizada: </span>Entendemos que cada cliente 
                            tiene necesidades únicas. Nuestro servicio se caracteriza por la atención personalizada y 
                            escuchar tus requerimientos para brindarte soluciones a medida.
                        </p>
                    </div>
                </div>
                

                <p>
                Confía en nuestro Servicio Técnico de Cableado de Red Eléctrica para garantizar la seguridad y
                 eficiencia de la energía eléctrica en tus espacios. Estamos comprometidos con brindar soluciones 
                 confiables y servicios 
                de alta calidad para mantener tus instalaciones eléctricas en óptimas condiciones.
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
export default RedElectrica;