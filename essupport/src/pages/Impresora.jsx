import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { LiaLaptopSolid } from "react-icons/lia";
import { PiPrinterLight, PiDesktopTowerLight, PiDesktopThin } from "react-icons/pi";
import './Software.css';

export function Impresora() {
    const [inputValue1, setInputValue1] = useState('');
    const [sliderImages, setSliderImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleInputChange1 = (event) => {
        setInputValue1(event.target.value);
    };

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + sliderImages.length) % sliderImages.length);
    };

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    };

    const changeImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    };
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
    };
  

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/producto/')
            .then(response => {
                const perifericosProductos = response.data.filter(producto => producto.perifericos === 2);
                const imagenes = perifericosProductos.map(producto => producto.imagen);
                setSliderImages(imagenes);
            })
            .catch(error => {
                console.error("Error al obtener los productos:", error);
            });
    }, []);

    useEffect(() => {
        const intervalId = setInterval(changeImage, 3000); // Change image every 3 seconds (adjust as needed)
        return () => clearInterval(intervalId); // Clean up the interval when the component unmounts
    }, [sliderImages]);

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


            <div className="software-container-impresora">
            <Link to="/ruta-para-software" className="back-link">
                    &#8592; Volver
                </Link>
                <div className="impresora-software-container">
                
                    <div>
                        <h3 className="text-software-h3">Software y Controladores: identifique su impresora</h3>
                    </div>
                    <div></div>
                    <div className="impresora-software-iconos-container">
                        <Link to="/impresora">
                            <PiPrinterLight className="impresora-software-icon icon-printer" />
                        </Link>
                        <Link to="/portatil">
                            <LiaLaptopSolid className="impresora-software-icon icon-laptopp" />
                        </Link>
                        <Link to="/sobremesa">
                            <PiDesktopTowerLight className="impresora-software-icon icon-desktop" />
                        </Link>
                        <Link to="/otros">
                            <PiDesktopThin className="impresora-software-icon icon-other" />
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
                    </div>
                    <div className="separator"></div> {/* Barra vertical separadora */}
                    <div className="impresora-slider-containe">
                        <h3 className="text-ejemplo-pieslider">Ejemplos de dónde encontrar el nombre del producto</h3>
                        <div className="impresoras-slider-container">
                            {/* Show the slider with the images obtained */}
                            {sliderImages.map((imagen, index) => (
                                <img
                                    key={index}
                                    src={imagen}
                                    alt={`Imagen ${index + 1}`}
                                    style={{ display: index === currentImageIndex ? 'block' : 'none' }}
                                />
                            ))}
                            {/* Agregar los iconos "<" y ">" al slider */}
                            <div className="slider-controls prev" onClick={handlePrev}>
                                &lt; {/* Icono "<" */}
                            </div>
                            <div className="slider-controls next" onClick={handleNext}>
                                &gt; {/* Icono ">" */}
                            </div>
                        </div>

                    </div>

                </div>
                <div className="impresora-separator"></div> {/* Barra vertical separadora */}

            </div>
        </div>
    );
}

export default Impresora;
