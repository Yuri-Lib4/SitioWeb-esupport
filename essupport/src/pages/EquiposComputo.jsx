
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
import './Servicios.css';
import { useState } from 'react';

export function EquiposComputo() {
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
                    / Servicio Técnico de Mantenimiento Preventivo y Correctivo de Equipos de Cómputo
                    </Link>
                </div>
                <div className="separador"></div>


                <div className="audio-video-container">
                    <p>Bienvenido a nuestro Servicio Técnico de Mantenimiento Preventivo y Correctivo de Equipos de Cómputo.
                         En nuestra empresa, comprendemos la importancia vital que tienen tus equipos de cómputo en tu vida 
                         personal y profesional. Por ello, nuestro equipo altamente capacitado está dedicado a mantener tus dispositivos
                          en óptimas condiciones de funcionamiento, 
                        ofreciendo servicios tanto preventivos como correctivos para garantizar su máximo rendimiento.</p>

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
                        <p> <span>Mantenimiento Preventivo Profesional: </span>
                        Sabemos que prevenir es mejor que curar. Nuestro equipo de técnicos especializados 
                        se encargará de realizar revisiones periódicas y minuciosas para detectar y resolver
                         posibles problemas antes de que se conviertan en fallos graves.
                         Esto ayudará a prolongar la vida útil de tus equipos y evitar costosas reparaciones.</p>
                    </div>
                    <div></div>
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg2}
                            alt="Atención Personalizada"
                        />
                        <p> <span>Diagnóstico Avanzado: </span> Contamos con herramientas y tecnología de última generación para realizar diagnósticos precisos.
                         Identificaremos cualquier anomalía en el rendimiento de tu equipo y te proporcionaremos un informe detallado sobre su estado.</p>
                    </div>
                </div>
                <div className="audio-video-container">
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg3}
                            alt="Diagnóstico Preciso"
                        />

                        <p> <span>Reparaciones Garantizadas: </span> Si tu equipo requiere alguna reparación, puedes confiar 
                        en nuestra habilidad y experiencia. Nuestros técnicos están capacitados para abordar cualquier problema con eficiencia y cuidado. 
                        Además, todas nuestras reparaciones están respaldadas por una garantía para tu tranquilidad.</p>

                    </div>
                    <div></div>
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg4}
                            alt="Reparaciones Garantizadas"
                        />
                        <p> <span>Tiempo de Respuesta Rápido: </span> Entendemos que cada minuto sin tu equipo puede ser crucial. Por ello, nos esforzamos 
                        por proporcionar un servicio ágil y eficiente, para que puedas volver a trabajar con tu computadora lo antes posible.</p>
                    </div>
                </div>
                <div className="audio-video-container">
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg5}
                            alt="Rápido Tiempo de Respuesta"
                        />

                        <p> <span>Actualización de Software y Seguridad: </span> Además de mantener el hardware en óptimas condiciones,
                         también nos preocupamos por el software. 
                        Actualizaremos tus sistemas operativos y programas para mejorar el rendimiento y garantizar la seguridad de tus datos.</p>
                    </div>
                    <div></div>
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg6}
                            alt="Equipo Técnico Actualizado"
                        />
                        <p>
                            <span>Atención Personalizada: </span> Valoramos a nuestros clientes y sus necesidades únicas. 
                            Nos aseguramos de escuchar tus inquietudes y proporcionarte soluciones personalizadas y adaptadas a tus requerimientos.
                        </p>
                    </div>
                </div>
                <div className="audio-video-container-ultimo">
                    <img className="soporte-img-container"
                        src={Audioimg7}
                        alt="Reparamos Diversidad de Equipos"
                    />
                    <p> <span>Reparamos Diversidad de Equipos:</span> Ya sea una computadora de escritorio, una laptop o cualquier 
                    otro dispositivo de cómputo, nuestro equipo está preparado para enfrentar una amplia variedad de equipos y marcas.</p>
                </div>

                <p>
                Confía en nuestro Servicio Técnico de Mantenimiento Preventivo y Correctivo de Equipos de Cómputo para mantener tus dispositivos en perfecto estado y asegurar que puedas aprovechar al máximo su potencial. 
                Estamos comprometidos con tu satisfacción y con brindarte un servicio excepcional para mantener tus equipos funcionando a la perfección.
                </p>
                <p>¡Contáctanos hoy mismo y deja tus equipos en manos de profesionales! Tu comodidad y productividad son nuestra prioridad principal.</p>

                <div>
                <Link to="/garantia-contacto" className="nav-links-audiovideo ">
                        Contactanos<FaChevronLeft className="icon-chevron-left" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default EquiposComputo;