
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
import { useState} from 'react';
import './Servicios.css';

export function EquiposImpresion() {
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
                    / Servicio Técnico de Mantenimiento Preventivo y Correctivo de Equipos
                         de Impresión
                    </Link>
                </div>
                <div className="separador"></div>


                <div className="audio-video-container">
                    <p>¡Bienvenido a nuestro Servicio Técnico de Mantenimiento Preventivo y Correctivo de Equipos
                         de Impresión! Entendemos lo esencial que son las impresoras en tu negocio u hogar, y nuestro 
                         equipo de expertos está listo para mantener tus dispositivos de impresión en óptimas condiciones 
                         de funcionamiento. Ya sea para evitar problemas futuros o resolver inconvenientes actuales, 
                        estamos comprometidos a brindarte un servicio profesional y confiable para garantizar la máxima eficiencia en tus impresiones.</p>

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
                        <p> <span>Mantenimiento Preventivo Especializado: </span>
                        Nuestro enfoque en el mantenimiento preventivo asegura que tus impresoras
                         funcionen de manera óptima durante más tiempo. Nuestros técnicos altamente
                          capacitados realizarán inspecciones regulares para identificar 
                        y corregir posibles problemas antes de que afecten la calidad de tus impresiones.</p>
                    </div>
                    <div></div>
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg2}
                            alt="Atención Personalizada"
                        />
                        <p> <span>Reparaciones Eficientes: </span> Si enfrentas problemas técnicos con 
                        tu impresora, no te preocupes, ¡nosotros lo resolveremos! Nuestro equipo de 
                        expertos cuenta con la experiencia y habilidades necesarias para abordar cualquier 
                        tipo de fallo y restablecer el funcionamiento normal de tus equipos de impresión.</p>
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
                        <p> <span>Repuestos Originales: </span> Siempre utilizamos repuestos originales y de alta calidad en nuestras reparaciones. 
                        Esto garantiza un rendimiento óptimo y prolonga la vida útil de tus impresoras.</p>
                    </div>
                </div>
                <div className="audio-video-container">
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg5}
                            alt="Rápido Tiempo de Respuesta"
                        />

                        <p> <span>Tiempo de Respuesta Rápido: </span> Entendemos que el tiempo es crucial en el entorno empresarial y en el hogar. 
                        Nuestro servicio se caracteriza por su rapidez y eficiencia, para que puedas seguir imprimiendo sin demoras innecesarias.</p>
                    </div>
                    <div></div>
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg6}
                            alt="Equipo Técnico Actualizado"
                        />
                        <p>
                            <span>Atención Personalizada: </span> Valoramos a cada cliente y sus necesidades únicas. Nos aseguramos 
                            de escuchar tus preocupaciones y brindarte un servicio personalizado que se adapte a tus requerimientos específicos.
                        </p>
                    </div>
                </div>
                <div className="audio-video-container-ultimo">
                    <img className="soporte-img-container"
                        src={Audioimg7}
                        alt="Reparamos Diversidad de Equipos"
                    />
                    <p> <span>Reparamos Diferentes Tipos de Impresoras: </span> Ya sea que tengas una impresora láser, de inyección de tinta, matricial o 
                    de cualquier otro tipo, nuestro equipo de técnicos está preparado para manejar una amplia variedad de marcas y modelos.</p>
                </div>

                <p>
                Confía en nuestro Servicio Técnico de Mantenimiento Preventivo y Correctivo de Equipos de Impresión para mantener tus impresoras en perfecto estado y asegurar la continuidad de tus actividades diarias. Estamos dedicados
                 a ofrecerte soluciones confiables y un servicio excepcional para mantener tus dispositivos de impresión funcionando a la perfección.
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
export default EquiposImpresion;