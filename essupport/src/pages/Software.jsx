
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { LiaLaptopSolid } from "react-icons/lia";
import { PiPrinterLight, PiDesktopTowerLight, PiDesktopThin } from "react-icons/pi";
import './Software.css';

export function Software() {
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


            <div className="software-container">
               
            <div className="software-volver">
            <Link to="/soporte" className="back-link">
                    &#8592; Volver
                </Link>
                <p>
                    
                    ¿Ya tiene una cuenta de e&esupport? Seleccione uno de sus productos.
                    <Link to="/iniciar-sesion">Iniciar sesión</Link> / <Link to="/registro">Registrarse</Link>
                </p>
            </div>

                <h2>Bienvenido a Software y Controladores, vamos a identificar su producto para comenzar</h2>

                <div className="software-iconos-container">
                    <Link to="/impresora">
                        <PiPrinterLight className="software-icon icon-printer" />
                        <p className="software-text-parrafo">Impresora</p>
                    </Link>
                    <Link to="/portatil">
                        <LiaLaptopSolid className="software-icon icon-laptop" />
                        <p className="software-text-parrafo">Portátil</p>
                    </Link>
                    <Link to="/sobremesa">
                        <PiDesktopTowerLight className="software-icon icon-desktop" />
                        <p className="software-text-parrafo">Equipos de sobremesa</p>
                    </Link>
                    <Link to="/otros">
                        <PiDesktopThin className="software-icon icon-other" />
                        <p className="software-text-parrafo" >Otros</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Software;
