import soportepcsImg from '../assets/pcs1.png';
import soportefaxImg from '../assets/laptopsoporteimg.png';
import pcsoportimew from '../assets/pcsoportimgew.png';
import printerofflineimg from '../assets/solucion.jpg';
import usarimpresora from '../assets/laptopsoportee.jpg';
import { FaDownload, FaCheckCircle, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { FaPrint, FaLaptop } from 'react-icons/fa';
import { VscSearch } from 'react-icons/vsc';

import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Software.css';



export function Soportepcs() {
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

            <div className="soporteimpresoras-container">
            <Link to="/soporte" className="back-link">
                    &#8592; Volver
                </Link>
                <div className="soportepcs-imagen-container">
               
                    <div>
                        <h2>Soporte para impresoras de e&esuporte</h2>
                    </div>
                    <img className="soporte-img-container"
                        src={soportepcsImg}
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
                        <div className="soporteimpresora-preguntasobrewindows ">
                            <h3>
                                ¿Está pensando en actualizar a Windows 11?
                            </h3>
                            <p>
                                Antes de hacerlo, tendrá que ver si su ordenador puede ejecutar Windows 11. Algunos ordenadores pueden tener componentes que no cumplen con los requisitos mínimos de hardware de Windows 11.
                                Asegúrese de leer la Guía de actualización a Windows 11 (vea los siguientes enlaces) para obtener más información.
                            </p>
                            <button>Guía de actualización de Windows 11</button>
                            <p>Más opciones de soporte para este tema</p>
                            <Link to="/saber-mas" className="link">Más información de soporte de Windows 11</Link>
                            <Link to="/saber-mas" className="link">¿Necesitas soporte para Windows 10?</Link>

                        </div>
                    </div>
                    <div className="soporteimpresora-separator "></div>
                    <div className="informacion-soportepsc-imagen-container">
                        <div>
                            <img
                                src={printerofflineimg}
                                alt="trabajos atascados en la cola de impresión"
                            />
                            <h3>Solucione problemas de arranque o encendido de su PC</h3>
                            <p className="informacion-parrafosegundodiv">Aprenda qué debe hacer si obtiene una pantalla en blanco o negro, luces parpadeantes o sonidos de alarma,
                                si el arranque falla en la pantalla con el logo, o si obtiene un mensaje de error en una pantalla negra o azul.</p>
                            <button>
                                Solucionar problemas de arra..</button>
                        </div>
                        <div></div>
                        <div>
                            <img
                                src={soportefaxImg}
                                alt="Imagen de Fax"
                            />
                            <h3>Solucione problemas relacionados con el audio</h3>
                            <p className="informacion-parrafosegundodiv">Use nuestra solución automatizada, rápida y fácil para resolver problemas de audio comunes en su PC.
                                Encuentre soluciones para problemas de audio, altavoces y auriculares.</p>
                            <button className="informacion-parrafosegundobuttom">
                                Solucione problemas de audio</button>
                        </div>
                        <div></div>
                        <div>
                            <img
                                src={pcsoportimew}
                                alt="Imagen de Fax"
                            />
                            <h3>Solucione problemas de monitor y pantalla táctil</h3>
                            <p className="informacion-parrafosegundodiv">Solucione problemas con su monitor o pantalla táctil, y aprenda cómo configurarlo correctamente.</p>
                            <button className="informacion-parrafosegundobuttom2">
                                Solucione problemas de moni..</button>
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

    );
}

export default Soportepcs;
