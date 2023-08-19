
import { Link } from 'react-router-dom';
import serviciotecnico3 from '../assets/audiovideo.png';
import Audioimg1 from '../assets/Audioimg1.jpg';
import Audioimg2 from '../assets/audioimg2.jpg';
import Audioimg3 from '../assets/audioimg3.jpg';
import Audioimg4 from '../assets/audioimg4.jpg';
import Audioimg5 from '../assets/audioimg5.jpg';
import Audioimg6 from '../assets/audioimg6.jpg';
import Audioimg7 from '../assets/audioimg7.jpg';
import { FaChevronLeft } from 'react-icons/fa';
import { useState} from 'react';
import './Servicios.css';

export function PuestasTierra() {
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
                        / Servicio Técnico de Instalación de Puestas a Tierra
                    </Link>
                </div>
                <div className="separador"></div>


                <div className="audio-video-container">
                    <p>¡Bienvenido a nuestro Servicio Técnico de Instalación de Puestas a Tierra! La seguridad eléctrica es una preocupación primordial tanto en hogares como en negocios. Nuestro equipo de expertos está especializado en la instalación de sistemas de puesta a tierra, proporcionando una solución efectiva y confiable para proteger tus instalaciones y equipos eléctricos contra posibles descargas eléctricas y daños.</p>

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
                        <p> <span>Experiencia y Conocimiento: </span>
                        Nuestro equipo de técnicos cuenta con amplia experiencia y conocimientos en la instalación de sistemas de puesta a tierra. Estamos familiarizados con las mejores prácticas y regulaciones para asegurar una instalación segura y eficiente.</p>
                    </div>
                    <div></div>
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg2}
                            alt="Atención Personalizada"
                        />
                        <p> <span>Puesta a Tierra Efectiva: </span>  Nuestra prioridad es garantizar que tus instalaciones estén protegidas contra descargas eléctricas. Realizamos un análisis exhaustivo para determinar el tipo de sistema de puesta a tierra más adecuado para tus necesidades específicas.</p>
                    </div>
                </div>
                <div className="audio-video-container">
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg3}
                            alt="Diagnóstico Preciso"
                        />

                        <p> <span>Cumplimiento de Normativas: </span>  Nos aseguramos de cumplir con todas las normativas y estándares relevantes en cuanto a seguridad eléctrica y puesta a tierra. Garantizamos que cada instalación se realice de acuerdo con las regulaciones establecidas.</p>

                    </div>
                    <div></div>
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg4}
                            alt="Reparaciones Garantizadas"
                        />
                        <p> <span>Materiales de Calidad: </span> Utilizamos materiales de primera calidad y componentes certificados para nuestras instalaciones de puesta a tierra. Esto asegura la durabilidad y eficiencia del sistema en el tiempo.</p>
                    </div>
                </div>
                <div className="audio-video-container">
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg5}
                            alt="Rápido Tiempo de Respuesta"
                        />

                        <p> <span>Inspección y Mantenimiento: </span> Además de la instalación, ofrecemos servicios de inspección y mantenimiento periódico de tus sistemas de puesta a tierra. Esto asegura su correcto funcionamiento a lo largo del tiempo y permite detectar y resolver cualquier problema a tiempo.</p>
                    </div>
                    <div></div>
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg6}
                            alt="Equipo Técnico Actualizado"
                        />
                        <p>
                            <span>Protección de Equipos y Personas: </span> Nuestro servicio de instalación de puesta a tierra protege tanto tus equipos eléctricos como a las personas que trabajan o viven en tu propiedad. Garantizamos una protección completa contra descargas eléctricas y minimizamos los riesgos de accidentes.
                        </p>
                    </div>
                </div>
                <div className="audio-video-container-ultimo">
                    <img className="soporte-img-container"
                        src={Audioimg7}
                        alt="Reparamos Diversidad de Equipos"
                    />
                    <p> <span>Atención Personalizada: </span>Valoramos las necesidades individuales de cada cliente. Nos aseguramos de escuchar tus requerimientos y proporcionarte soluciones adaptadas a tus necesidades específicas.</p>
                </div>

                <p>
                Confía en nuestro Servicio Técnico de Instalación de Puestas a Tierra para proteger tus instalaciones y mantener un entorno eléctricamente seguro. Estamos dedicados a brindar soluciones confiables y servicios de alta calidad para garantizar la tranquilidad y seguridad de tus espacios.
                </p>
                <p>¡Contáctanos hoy mismo y permítenos encargarnos de la puesta a tierra de tus instalaciones! Tu seguridad y la protección de tus equipos eléctricos son nuestra principal prioridad.</p>

                <div>
                    <Link to="/garantia-contacto" className="nav-links-audiovideo ">
                        Contactanos<FaChevronLeft className="icon-chevron-left" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default PuestasTierra;