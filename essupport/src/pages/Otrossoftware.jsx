import { Link } from 'react-router-dom';
import { useState } from 'react';

import { LiaLaptopSolid } from "react-icons/lia";
import { PiPrinterLight, PiDesktopTowerLight, PiDesktopThin } from "react-icons/pi";
import './Software.css';

export function Otros() {
    const [inputValue1, setInputValue1] = useState('');
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
    };
  

    const handleInputChange1 = (event) => {
        setInputValue1(event.target.value);
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
                                <Link to="/nosotros" className="nav-link">
                                    Nosotros
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


            <div className="software-container-impresora">
            <Link to="/ruta-para-software" className="back-link">
                    &#8592; Volver
                </Link>
                <div className="impresora-software-container">
                    <div>
                        <h3 className="text-software-h3">Software y Controladores: identifique su producto</h3>
                    </div>
                    <div></div>
                    <div className="impresora-software-iconos-container">
                        <Link to="/impresora">
                            <PiPrinterLight className="impresora-software-icon icon-printers" />
                        </Link>
                        <Link to="/portatil">
                            <LiaLaptopSolid className="impresora-software-icon icon-laptopp" />
                        </Link>
                        <Link to="/sobremesa">
                            <PiDesktopTowerLight className="impresora-software-icon icon-desktop" />
                        </Link>
                        <Link to="/otros">
                            <PiDesktopThin className="impresora-software-icon icon-other-software" />
                        </Link>
                    </div>
                </div>
                <div className="impresora-separator"></div> {/* Barra vertical separadora */}
                <div className="impresora-software-pie-separator">
                    <div>
                        <p className="">Introduzca su número de serie, número de producto o nombre del producto</p>
                        <div className="input-container">
                            <input
                                type="text"
                                className="input-text"
                                value={inputValue1}
                                onChange={handleInputChange1}
                                placeholder="Ejemplo: HU265M18V. Laser Jet"
                            />
                            <button className="submit-button">Enviar</button>
                        </div>
                        <p className="">O Bien</p>
                        <div className="input-container">
                            <div className="recuadro" onClick={() => window.location.href = '/home'}>
                                <p>Deja que e&eSupport detecte tu producto</p>
                            </div>
                            <div className="link-container">
                                {/* Suponiendo que estás utilizando React Router */}
                                <Link to="/saber-mas" className="link">Saber más</Link>
                            </div>
                        </div>
                    </div>
                    <div className="separator"></div> {/* Barra vertical separadora */}
                    <div className="impresora-slider-containe">
                        <h3 className="text-ejemplo-pieslider">Ejemplos de dónde encontrar el nombre del producto</h3>
                        <Link to="/registrar-producto">
                            <p>Encuentre la etiqueta de información de su producto</p>
                        </Link>

                        {/* cambiar la url  */}

                        <a href="https://www.youtube.com/watch?v=Sq0fPAkOEF4" target="_blank" rel="noopener noreferrer">
                            <p>Mire el video</p>
                        </a>

                    </div>

                </div>
                <div className="impresora-separator"></div> {/* Barra vertical separadora */}

            </div>
        </div>
    );
}

export default Otros;
