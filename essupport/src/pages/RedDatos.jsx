
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

export function RedDatos() {
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
                    / Servicio Técnico de Cableado de Red de Datos
                    </Link>
                </div>
                <div className="separador"></div>


                <div className="audio-video-container">
                    <p>¡Bienvenido a nuestro Servicio Técnico de Cableado de Red de Datos! 
                        Somos tu aliado confiable en todo lo relacionado con la instalación y 
                        mantenimiento de redes de datos en tu hogar u oficina. Nuestro equipo de expertos en 
                        cableado de redes está preparado para proporcionarte soluciones eficientes y de alta calidad que aseguren una conectividad rápida y 
                        confiable para tus necesidades de comunicación y transmisión de datos.</p>

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
                        Nuestros técnicos altamente capacitados tienen experiencia en la instalación de redes de
                         datos para diferentes entornos, desde hogares hasta empresas. Nos aseguramos de llevar 
                         a cabo una instalación profesional y ordenada,
                         minimizando el desorden de cables y optimizando la distribución de la red.</p>
                    </div>
                    <div></div>
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg2}
                            alt="Atención Personalizada"
                        />
                        <p> <span>Cableado Estructurado: </span>  Implementamos sistemas de cableado estructurado que 
                        permiten una gestión eficiente y organizada de tus conexiones de datos. Esto no solo mejora el 
                        rendimiento de tu red, sino que también facilita
                         futuras expansiones y cambios en tu infraestructura de datos.</p>
                    </div>
                </div>
                <div className="audio-video-container">
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg3}
                            alt="Diagnóstico Preciso"
                        />

                        <p> <span>Cumplimiento de Normativas y Estándares: </span> Seguimos rigurosamente las normativas y
                         estándares de cableado de red de datos. Nuestro equipo garantiza que cada instalación se realice de acuerdo con
                         las mejores prácticas, asegurando la calidad y la seguridad de tu red.</p>

                    </div>
                    <div></div>
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg4}
                            alt="Reparaciones Garantizadas"
                        />
                        <p> <span>Materiales de Calidad: </span> Utilizamos materiales de primera calidad en todas
                         nuestras instalaciones y reparaciones. Trabajamos con productos certificados y marcas reconocidas 
                        para asegurar la durabilidad y confiabilidad de tus conexiones de datos.</p>
                    </div>
                </div>
                <div className="audio-video-container">
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg5}
                            alt="Rápido Tiempo de Respuesta"
                        />

                        <p> <span>Mantenimiento Preventivo: </span> Realizamos revisiones periódicas para detectar y solucionar
                         posibles problemas antes de que afecten el rendimiento de tu red. El mantenimiento preventivo es clave 
                         para mantener tu red 
                        en óptimas condiciones y minimizar posibles interrupciones.</p>
                    </div>
                    <div></div>
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg6}
                            alt="Equipo Técnico Actualizado"
                        />
                        <p>
                            <span>Rápida Resolución de Problemas: </span> En caso de que surjan problemas en tu red de datos, 
                            nuestros técnicos están capacitados para realizar diagnósticos precisos y aplicar soluciones rápidas y efectivas,
                             minimizando el tiempo de inactividad y maximizando la productividad.
                        </p>
                    </div>
                </div>
                <div className="audio-video-container-ultimo">
                    <img className="soporte-img-container"
                        src={Audioimg7}
                        alt="Reparamos Diversidad de Equipos"
                    />
                    <p> <span>Atención Personalizada: </span>Valoramos las necesidades de cada cliente. Nuestro servicio se destaca por 
                    la atención personalizada, escuchando tus 
                    requerimientos para brindarte soluciones adaptadas a tus necesidades específicas.</p>
                </div>

                <p>
                Confía en nuestro Servicio Técnico de Cableado de Red de Datos para garantizar una conectividad sólida y 
                eficiente en tus sistemas de comunicación y transmisión de datos. Estamos comprometidos con ofrecer soluciones
                 confiables y servicios de alta calidad para mantener tus redes de datos funcionando sin problemas.
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
export default RedDatos;