
import { Link } from 'react-router-dom';
import serviciotecnico3 from '../assets/audiovideo.png';
import { useState } from 'react';
import Audioimg1 from '../assets/Audioimg1.jpg';
import Audioimg2 from '../assets/audioimg2.jpg';
import Audioimg3 from '../assets/audioimg3.jpg';
import Audioimg4 from '../assets/audioimg4.jpg';
import Audioimg5 from '../assets/audioimg5.jpg';
import Audioimg6 from '../assets/audioimg6.jpg';

import { FaChevronLeft } from 'react-icons/fa';
import './Servicios.css';

export function VideoVigilancia() {
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
                        / Servicio Técnico de Instalación y Configuración de Sistemas de Videovigilancia
                    </Link>
                </div>
                <div className="separador"></div>


                <div className="audio-video-container">
                    <p>Bienvenido a nuestro Servicio Técnico de Instalación y Configuración de Sistemas de Videovigilancia. Sabemos lo importante que es mantener la seguridad de tus espacios tanto en el hogar como en tu negocio. Nuestro equipo de expertos está especializado en la instalación profesional y configuración de sistemas de videovigilancia, brindándote tranquilidad y control sobre la protección de tus propiedades.</p>

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
                        <p> <span>Experiencia en Videovigilancia: </span>
                        Nuestro equipo de técnicos cuenta con amplia experiencia en el campo de la videovigilancia. Estamos familiarizados con las últimas tecnologías y tendencias en sistemas de cámaras de seguridad, lo que nos permite ofrecer soluciones actualizadas y adaptadas a tus necesidades específicas.</p>
                    </div>
                    <div></div>
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg2}
                            alt="Atención Personalizada"
                        />
                        <p> <span>Instalación Profesional: </span> Realizamos una instalación cuidadosa y precisa de tus cámaras de seguridad. Nos aseguramos de ubicar cada cámara estratégicamente para maximizar la cobertura de vigilancia y proteger los puntos críticos de tus espacios.</p>
                    </div>
                </div>
                <div className="audio-video-container">
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg3}
                            alt="Diagnóstico Preciso"
                        />

                        <p> <span>Configuración Personalizada:  </span> Cada cliente tiene necesidades únicas, por lo que personalizamos la configuración de tu sistema de videovigilancia según tus requerimientos específicos. Te proporcionamos una configuración fácil de usar para que puedas acceder y monitorear tus cámaras desde cualquier dispositivo conectado a internet.</p>

                    </div>
                    <div></div>
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg4}
                            alt="Reparaciones Garantizadas"
                        />
                        <p> <span>Sistemas de Alta Calidad: </span> Trabajamos con productos y cámaras de seguridad de alta calidad y marcas reconocidas en el mercado. Esto asegura imágenes nítidas y claras, incluso en condiciones de poca luz, para obtener una vigilancia efectiva en todo momento.</p>
                    </div>
                </div>
                <div className="audio-video-container">
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg5}
                            alt="Rápido Tiempo de Respuesta"
                        />

                        <p> <span>Capacitación y Soporte: </span> No solo instalamos el sistema, sino que también te proporcionamos una capacitación básica para que puedas aprovechar al máximo las funciones de tu sistema de videovigilancia. Además, ofrecemos soporte técnico continuo para resolver cualquier duda o problema que puedas tener.</p>
                    </div>
                    <div></div>
                    <div>
                        <img className="soporte-img-container"
                            src={Audioimg6}
                            alt="Equipo Técnico Actualizado"
                        />
                        <p>
                            <span>Integración de Tecnología: </span> Si lo deseas, podemos integrar tu sistema de videovigilancia con otras soluciones de seguridad, como sistemas de alarmas o acceso, para brindarte una solución completa de seguridad para tu propiedad.
                        </p>
                    </div>
                </div>
                

                <p>
                Confía en nuestro Servicio Técnico de Instalación y Configuración de Sistemas de Videovigilancia para proteger lo que más importa para ti. Estamos dedicados a brindar soluciones confiables y servicios de alta calidad para asegurar la seguridad y tranquilidad de tus espacios.
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
export default VideoVigilancia;