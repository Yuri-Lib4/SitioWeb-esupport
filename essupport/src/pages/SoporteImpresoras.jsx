import soporteImpresorasImg from '../assets/epsomimg.png';
import soportefaxImg from '../assets/faximg.png';
import printerofflineimg from '../assets/printerofflineimg.png';
import usarimpresora from '../assets/usarimpresora.jpg';
import { FaDownload, FaCheckCircle, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { FaPrint, FaLaptop } from 'react-icons/fa';
import { VscSearch } from 'react-icons/vsc';

import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Software.css';



export function SoporteImpresoras() {
    const [inputValue1, setInputValue1] = useState('');

    const handleInputChange1 = (event) => {
        setInputValue1(event.target.value);
    };
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

            <div>
                <div className="soporteimpresoras-container">
                <Link to="/soporte" className="back-link">
                    &#8592; Volver
                </Link>
                    <div className="soporte-imagen-container">
                        
                        <div>
                            <h2>Soporte para impresoras de e&esuporte</h2>
                        </div>
                        <img
                            src={soporteImpresorasImg}
                            alt="Imagen de soporte para impresoras"
                        />
                    </div>
                    <div className="soporteimpresora-separator "></div>
                    <div className="impresorasicons-soporte-container">
                        <div className="icons-soporte-container">
                            <div className="impresoras-iconos-container">
                                <Link className="impresoras-icon-container" to="/impresora">
                                    <FaDownload className="iconos iconmn-laptop" />
                                    <p>Descargar controladores</p>
                                </Link>
                            </div>
                            <div className="soporteimpresora-separatorvertical "></div>
                            <div className="impresoras-iconos-container">
                                <Link className="impresoras-icon-container" to="/">
                                    <FaCheckCircle className="iconos iconmn-laptop" />
                                    <p>Comprobar estado de la garantía</p>
                                </Link>
                            </div>

                            <div className="soporteimpresora-separatorvertical "></div>

                            <div className="impresoras-iconos-container">
                                <Link className="impresoras-icon-container" to="/">
                                    <FaPhone className="iconos iconmn-laptop" />
                                    <p>Contacto</p>
                                </Link>
                            </div>
                            <div className="soporteimpresora-separatorvertical "></div>

                            <div className="impresoras-iconos-container">
                                <Link className="impresoras-icon-container" to="/">
                                    <FaWhatsapp className="iconos iconmn-laptop" />
                                    <p>Pregunte a nuestro Agente Virtual</p>
                                </Link>
                            </div>
                        </div>
                        <div className="soporteimpresora-separator "></div>
                        <div className="body-soporte-imagen-container">
                            <img
                                src={usarimpresora}
                                alt="Imagen usando impresoras"
                            />
                            <div></div>
                            <div>
                                <h3>
                                    Cómo configurar su impresora
                                </h3>
                                <p>
                                    Haga clic en Configurar Impresora para obtener instrucciones paso a paso sobre cómo instalar, configurar y registrar su impresora.
                                </p>
                                <button>Configurar Impresora</button>
                            </div>
                        </div>
                        <div className="soporteimpresora-separator "></div>
                        <div className="informacion-soporte-imagen-container">
                            <div>
                                <img
                                    src={printerofflineimg}
                                    alt="trabajos atascados en la cola de impresión"
                                />
                                <h3>¿Desconexiones o trabajos atascados en la cola de impresión?</h3>
                                <p>Use esta herramienta automatizada de Windows para diagnosticar y solucionar problemas de la impresora, tales como
                                    desconexiones y trabajos atascados en la cola de impresión.</p>
                                <button>
                                    Print and Scan Doctor</button>
                            </div>
                            <div></div>
                            <div>
                                <img
                                    src={soportefaxImg}
                                    alt="Imagen de Fax"
                                />
                                <h3>Cómo imprimir, escanear y enviar un fax</h3>
                                <p className="informacion-parrafosegundodiv">Haga clic en Imprimir, Escanear o Enviar fax para obtener instrucciones sobre cómo hacerlo con su impresora,
                                    utilizando los sistemas operativos Windows o Mac.</p>
                                <button>
                                    Imprimir, Escanear y Enviar Fax</button>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="soportimpresoras-contenedor2">
                    <div className="soport-contenedor">
                        <div className="icon-container">
                            <FaPrint className=" icon-print icon-overlap" />
                            <FaLaptop className=" icon-laptop icon-overlap" />
                            <VscSearch className=" icon-search" />
                        </div>
                        <div><h3>Identifique su producto para obtener manuales y información específica del producto</h3></div>
                        <div></div>

                    </div>
                    <div className="soport-contenedor2">
                        <div></div>
                        <div>
                            <p className="">Introduzca su número de serie, número de producto o nombre del producto</p>
                            <div className="input-container">

                                <input type="text"
                                    className="input-text"
                                    value={inputValue1}
                                    onChange={handleInputChange1}
                                    placeholder="Ejemplo: HU265M18V. Laser Jet" />
                                <button className="submit-button">Enviar</button>

                            </div>
                            <div className="input-container">
                                <div className="recuadro" onClick={() => window.location.href = '/home'}>
                                    <p>Deja que e&eSupport detecte tu producto</p>
                                </div>
                                <div className="link-container">
                                    {/* Suponiendo que estás utilizando React Router */}
                                    <Link to="/saber-mas" className="link">Saber más</Link>
                                </div>
                            </div>
                            <div>

                                <Link className="icon-container" to="/saber-mas">
                                    <AiOutlineUser className="icon icon-AiOutlineUser" />
                                    <p>Identifíquese para seleccionar un producto ya guardado</p>
                                </Link>
                            </div>
                        </div>
                        <div className="separator"></div> {/* Barra vertical separadora */}
                        <div>
                            <div>Seleccione un tipo de producto para consejos sobre cómo encontrar su número de serie:</div>
                            <div className="iconos-container">
                                <Link className="icon-container" to="/">

                                    <p>Encuentre la etiqueta de información de su producto</p>
                                </Link>
                            </div>
                            <div className="iconos-container">
                                <Link className="icon-container" to="/">

                                    <p>Mire el video</p>
                                </Link>
                            </div>
                            <div className="iconos-container">
                                <Link className="icon-container" to="/">

                                    <p>Ayuda de la impresora Samsung</p>
                                </Link>
                            </div>

                        </div>

                    </div>
                </div>


            </div>
        </div>

    );
}

export default SoporteImpresoras;
