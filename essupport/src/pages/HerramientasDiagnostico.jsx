import { Link } from 'react-router-dom';
import { useState } from 'react';
import Herramientasdiagnostico from '../assets/HerramientasDiagnosticos.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer, faBatteryFull, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWifi, faKeyboard, faRedo } from '@fortawesome/free-solid-svg-icons';
import { faDesktop, faVolumeUp, faLock } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff, faMemory } from '@fortawesome/free-solid-svg-icons';

import './HerramientasDiagnostico.css';

export function HerramientasDiagnostico() {
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
                                <Link to="/soporte" className="nav-link home-link-header">
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

            <div className="container-herramientas">
                <div className="container-herramientas-contenido">
                    <div className="container-herramientas-imagen">
                        <img className="soporte-img-container"
                            src={Herramientasdiagnostico}
                            alt="Reparación de Equipos de Audio y Video"
                        />
                    </div>
                    <div className="container-herramientas-imagen">
                        <h2>Diagnosticar y resolver</h2>
                        <p>En este centro de resolución de problemas, encontrará las principales soluciones automatizadas y de autoservicio para los problemas más comunes de equipos e impresoras. Haga clic en las pestañas para cambiar entre los temas del equipo y de la impresora, y luego seleccione un problema para ver las soluciones.</p>
                    </div>
                </div>

                <div className="container-herramientas-link">

                    <Link to="" className="nav-link ">
                        Problemas del equipo
                    </Link>


                </div>

                <div className="icon-grid-container">
                    <div className="icon-group">
                        <div className="icon-item">
                            <FontAwesomeIcon icon={faComputer} /> Problemas con el sistema operativo
                        </div>
                        <div className="icon-item">
                            <FontAwesomeIcon icon={faBatteryFull} /> Problemas de batería o adaptador
                        </div>
                        <div className="icon-item">
                            <FontAwesomeIcon icon={faTachometerAlt} /> El equipo es lento
                        </div>
                    </div>
                    <div className="icon-group">
                        <div className="icon-item">
                            <FontAwesomeIcon icon={faWifi} /> Problema con redes inalámbricas, cableadas y Bluetooth
                        </div>
                        <div className="icon-item">
                            <FontAwesomeIcon icon={faKeyboard} /> Problemas de teclado, ratón, panel táctil y clickpad
                        </div>
                        <div className="icon-item">
                            <FontAwesomeIcon icon={faRedo} /> Ejecute una Recuperación del Sistema
                        </div>
                    </div>
                    <div className="icon-group">
                        <div className="icon-item">
                            <FontAwesomeIcon icon={faDesktop} /> Problemas de monitor y pantalla táctil
                        </div>
                        <div className="icon-item">
                            <FontAwesomeIcon icon={faVolumeUp} /> Problemas de sonido
                        </div>
                        <div className="icon-item">
                            <FontAwesomeIcon icon={faLock} /> Equipo bloqueado o congelado
                        </div>
                    </div>
                    <div className="icon-group">
                        <div className="icon-item">
                            <FontAwesomeIcon icon={faPowerOff} /> El equipo no se enciende ni arranca
                        </div>
                        <div className="icon-item">
                            <FontAwesomeIcon icon={faMemory} /> Problemas de memoria o poco espacio en el disco
                        </div>

                    </div>
                </div>




            </div>

            
        </div>

    );
}