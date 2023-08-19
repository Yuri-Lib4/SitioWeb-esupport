
import { Link } from 'react-router-dom';
import serviciotecnico3 from '../assets/audiovideo.png';
import Audioimg1 from '../assets/Audioimg1.jpg';
import Audioimg2 from '../assets/audioimg2.jpg';
import Audioimg3 from '../assets/audioimg3.jpg';
import Audioimg4 from '../assets/audioimg4.jpg';
import Audioimg5 from '../assets/audioimg5.jpg';
import Audioimg6 from '../assets/audioimg6.jpg';
import Audioimg7 from '../assets/audioimg7.jpg';
import { FaChevronLeft} from 'react-icons/fa';
import { useState } from 'react';
import './Servicios.css';

export function Redtelefonia() {
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
                    / Servicio Técnico de Cableado 
                        de Red de Telefonía
                    </Link>
                </div>
                <div className="separador"></div>


                <div className="audio-video-container">
                    <p>Bienvenido a nuestro Servicio Técnico de Cableado 
                        de Red de Telefonía. Sabemos que la conectividad es
                         crucial en el mundo actual, y nuestra misión es asegurar 
                         que tus redes de telefonía estén optimizadas y funcionando de
                          manera confiable. Nuestro equipo de técnicos altamente capacitados
                           está listo para ofrecerte soluciones efectivas y servicios de alta 
                        calidad para garantizar una comunicación fluida y sin interrupciones.</p>

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
                        Nuestro equipo cuenta con amplia experiencia en la instalación de 
                        cableado de red de telefonía. Ya sea que necesites una nueva instalación 
                        o una actualización de tus redes existentes, nuestros
                         técnicos llevarán a cabo el proceso de manera profesional y cuidadosa.</p>
                    </div>
                    <div></div>
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg2}
                            alt="Atención Personalizada"
                        />
                        <p> <span>Cableado Estructurado: </span>  Implementamos sistemas de cableado 
                        estructurado que aseguran una distribución eficiente y ordenada de tus conexiones
                         telefónicas. Esto no solo mejora el rendimiento de tus redes, sino que también facilita
                         futuras expansiones y cambios en tu infraestructura de comunicaciones.</p>
                    </div>
                </div>
                <div className="audio-video-container">
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg3}
                            alt="Diagnóstico Preciso"
                        />

                        <p> <span>Diagnóstico Preciso: </span> Utilizamos herramientas avanzadas
                         para realizar diagnósticos precisos. Así, podemos identificar rápidamente la causa de cualquier problema
                         y aplicar la solución más adecuada, evitando tiempo y recursos innecesarios.</p>

                    </div>
                    <div></div>
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg4}
                            alt="Reparaciones Garantizadas"
                        />
                        <p> <span>Materiales de Calidad: </span> Utilizamos materiales de primera
                         calidad para asegurar la durabilidad y fiabilidad de tus redes de telefonía. 
                         Trabajamos con productos certificados
                         y de marcas reconocidas para ofrecerte resultados de alto nivel.</p>
                    </div>
                </div>
                <div className="audio-video-container">
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg5}
                            alt="Rápido Tiempo de Respuesta"
                        />

                        <p> <span>Optimización de Rendimiento: </span> Nuestro servicio no 
                        se limita solo a la instalación. También optimizamos tus redes de telefonía
                         para garantizar un rendimiento 
                        óptimo y reducir cualquier tipo de interferencias o problemas de señal.</p>
                    </div>
                    <div></div>
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg6}
                            alt="Equipo Técnico Actualizado"
                        />
                        <p>
                            <span>Diagnóstico y Solución de Problemas: </span> Si enfrentas problemas
                             con tus redes de telefonía, nuestros técnicos tienen la experiencia necesaria para realizar 
                            un diagnóstico preciso y aplicar soluciones rápidas y efectivas.
                        </p>
                    </div>
                </div>
                <div className="audio-video-container">
                    <div>
                    <img className="soporte-img-container"
                        src={Audioimg7}
                        alt="Reparamos Diversidad de Equipos"
                    />
                    <p> <span>Cumplimiento de Normativas: </span> Nuestro equipo se asegura 
                    de cumplir con todas las normativas y estándares relevantes para el cableado 
                    de red de telefonía. Esto te brinda la tranquilidad de que tu infraestructura de
                     comunicaciones está en manos de profesionales confiables.</p>
                    </div>
                    <div></div>
                    <div>
                    <img className="soporte-img-container"
                        src={Audioimg7}
                        alt="Reparamos Diversidad de Equipos"
                    />
                    <p> <span>Atención Personalizada: </span>  Valoramos a nuestros clientes y 
                    sus necesidades únicas. Nos aseguramos de escuchar tus 
                    requerimientos y adaptar nuestras soluciones a tus necesidades específicas.</p>
                    </div>
                </div>

                <p>
                Confía en nuestro Servicio Técnico de Cableado de Red de Telefonía para 
                garantizar una conectividad confiable y estable en tu entorno laboral o residencial.
                 Estamos dedicados a brindarte soluciones a medida y servicios 
                excepcionales para que puedas mantener una comunicación efectiva en todo momento.
                </p>
                <p>¡Contáctanos hoy mismo y permite que nuestros expertos se encarguen de tus redes de telefonía! Tu satisfacción y la eficiencia de tus comunicaciones son nuestra principal prioridad.</p>

                <div>
                <Link to="/garantia-contacto" className="nav-links-audiovideo ">
                        Contactanos<FaChevronLeft className="icon-chevron-left" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Redtelefonia;