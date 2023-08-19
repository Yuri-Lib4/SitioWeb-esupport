import serviciotecnologia from '../assets/servicot.jpg';
import serviciotecnico from '../assets/serviciotecnico2.jpg';
import serviciotecnico3 from '../assets/serviciotecnico3.jpg';
import serviciotecnico4 from '../assets/serviciotecnico4.jpg';
import serviciotecnico5 from '../assets/serviciotecnico5.jpg';
import serviciotecnico6 from '../assets/serviciotecnico6.jpg';
import serviciotecnico7 from '../assets/serviciotecnico7.jpg';
import serviciotecnico8 from '../assets/serviciotecnico8.jpg';
import serviciotecnico9 from '../assets/serviciotecnico9.jpg';
import serviciotecnico10 from '../assets/serviciotecnico10.jpg';
import serviciotecnico11 from '../assets/serviciotecnico11.jpg';
import serviciotecnico12 from '../assets/serviciotecnico12.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Servicios.css';



export function Servicios() {

  const [showMoreImage1, setShowMoreImage1] = useState(false);
  const [showMoreImage2, setShowMoreImage2] = useState(false);
  const [showMoreImage3, setShowMoreImage3] = useState(false);
  const [showMoreImage4, setShowMoreImage4] = useState(false);
  const [showMoreImage5, setShowMoreImage5] = useState(false);
  const [showMoreImage6, setShowMoreImage6] = useState(false);
  const [showMoreImage7, setShowMoreImage7] = useState(false);
  const [showMoreImage8, setShowMoreImage8] = useState(false);
  const [showMoreImage9, setShowMoreImage9] = useState(false);
  const [showMoreImage10, setShowMoreImage10] = useState(false);
  const [showMoreImage11, setShowMoreImage11] = useState(false);
  const [showMoreImage12, setShowMoreImage12] = useState(false);

  const handleMouseEnterImage1 = () => {
    setShowMoreImage1(true);
  };

  const handleMouseLeaveImage1 = () => {
    setShowMoreImage1(false);
  };

  const handleMouseEnterImage2 = () => {
    setShowMoreImage2(true);
  };

  const handleMouseLeaveImage2 = () => {
    setShowMoreImage2(false);
  };
  const handleMouseEnterImage3 = () => {
    setShowMoreImage3(true);
  };

  const handleMouseLeaveImage3 = () => {
    setShowMoreImage3(false);
  };

  const handleMouseEnterImage4 = () => {
    setShowMoreImage4(true);
  };

  const handleMouseLeaveImage4 = () => {
    setShowMoreImage4(false);
  };
  const handleMouseEnterImage5 = () => {
    setShowMoreImage5(true);
  };

  const handleMouseLeaveImage5 = () => {
    setShowMoreImage5(false);
  };

  const handleMouseEnterImage6 = () => {
    setShowMoreImage6(true);
  };

  const handleMouseLeaveImage6 = () => {
    setShowMoreImage6(false);
  };
  const handleMouseEnterImage7 = () => {
    setShowMoreImage7(true);
  };

  const handleMouseLeaveImage7 = () => {
    setShowMoreImage7(false);
  };

  const handleMouseEnterImage8 = () => {
    setShowMoreImage8(true);
  };

  const handleMouseLeaveImage8 = () => {
    setShowMoreImage8(false);
  };
  const handleMouseEnterImage9 = () => {
    setShowMoreImage9(true);
  };

  const handleMouseLeaveImage9 = () => {
    setShowMoreImage9(false);
  };

  const handleMouseEnterImage10 = () => {
    setShowMoreImage10(true);
  };

  const handleMouseLeaveImage10 = () => {
    setShowMoreImage10(false);
  };
  const handleMouseEnterImage11 = () => {
    setShowMoreImage11(true);
  };

  const handleMouseLeaveImage11 = () => {
    setShowMoreImage11(false);
  };
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnterImage12 = () => {
    setShowMoreImage12(true);
  };

  const handleMouseLeaveImage12 = () => {
    setShowMoreImage12(false);
  };




  return (
    <div>
      {/* Contenido del componente */}
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
        <h1>Servicios </h1>
        <h3 className="servicio-item-parrafo">Presentamos los servicios que brinda nuestra empresa E&E SUPPORT al público en general,
          contamos con los mejores técnicos para brindarles el mejor servicio.</h3>

        <div className="servicios-container-body">
          <div
            className="servicio-item"
            onMouseEnter={handleMouseEnterImage1}
            onMouseLeave={handleMouseLeaveImage1}
          >
            <img
              className="soporte-img-container"
              src={serviciotecnologia}
              alt="Imagen de soporte para impresoras"
            />
            <p >SERVICIO TECNICO DE MANTENIMIENTO PREVENTIVO Y CORRECTIVO DE EQUIPOS DE CÓMPUTO.</p>
            {showMoreImage1 && (
              <Link to="/equipos-computo" className="ver-mas-servicios">
                Ver más
              </Link>
            )}
          </div>
          <div
            className="servicio-item"
            onMouseEnter={handleMouseEnterImage2}
            onMouseLeave={handleMouseLeaveImage2}
          >
            <img
              className="soporte-img-container"
              src={serviciotecnico}
              alt="Imagen de soporte para impresoras"
            />
            <p>SERVICIO TÉCNICO DE MANTENIMIENTO PREVENTIVO Y CORRECTIVO DE EQUIPOS DE IMPRESIÓN.</p>
            {showMoreImage2 && (
              <Link to="/equipos-impresion" className="ver-mas-servicios">
                Ver más
              </Link>
            )}
          </div>
          {/* Agrega más elementos <div> y opciones de ver más para otras imágenes */}
        </div>
        <div className="servicios-container-body">
          <div className="servicio-item"
            onMouseEnter={handleMouseEnterImage3}
            onMouseLeave={handleMouseLeaveImage3}>
            <img className="soporte-img-container"
              src={serviciotecnico3}
              alt="Reparación de Equipos de Audio y Video"
            />
            <p>SERVICIO TÉCNICO DE MANTENIMIENTO PREVENTIVO Y CORRECTIVO DE EQUIPOS DE AUDIO Y VIDEO.</p>
            {showMoreImage3 && (
              <Link to="/audio-video" className="ver-mas-servicios">
                Ver más
              </Link>
            )}
          </div>
          <div className="servicio-item"
            onMouseEnter={handleMouseEnterImage4}
            onMouseLeave={handleMouseLeaveImage4}>
            <img className="soporte-img-container"
              src={serviciotecnico4}
              alt="Imagen de soporte para impresoras"
            />
            <p>SERVICIO TÉCNICO DE CABLEADO DE RED DE TELEFONÍA.</p>
            {showMoreImage4 && (
              <Link to="/red-telefonia" className="ver-mas-servicios">
                Ver más
              </Link>
            )}
          </div>

        </div>
        <div className="servicios-container-body">
          <div className="servicio-item"
            onMouseEnter={handleMouseEnterImage5}
            onMouseLeave={handleMouseLeaveImage5}>
            <img className="soporte-img-container"
              src={serviciotecnico5}
              alt="Imagen de soporte para impresoras"
            />
            <p>SERVICIO TÉCNICO DE CABLEADO DE RED ELECTRICA.</p>
            {showMoreImage5 && (
              <Link to="/red-electrica" className="ver-mas-servicios">
                Ver más
              </Link>
            )}
          </div>
          <div className="servicio-item"
            onMouseEnter={handleMouseEnterImage6}
            onMouseLeave={handleMouseLeaveImage6}>
            <img className="soporte-img-container"
              src={serviciotecnico6}
              alt="Imagen de soporte para impresoras"
            />
            <p>SERVICIO TÉCNICO DE CABLEADO DE RED DE DATOS.</p>
            {showMoreImage6 && (
              <Link to="/red-datos" className="ver-mas-servicios">
                Ver más
              </Link>
            )}
          </div>

        </div>
        <div className="servicios-container-body">
          <div className="servicio-item"
            onMouseEnter={handleMouseEnterImage7}
            onMouseLeave={handleMouseLeaveImage7}>
            <img className="soporte-img-container"
              src={serviciotecnico7}
              alt="Imagen de soporte para impresoras"
            />
            <p>SERVICIO TÉCNICO DE INSTALACIÓN DE PUESTAS A TIERRA.</p>
            {showMoreImage7 && (
              <Link to="/puestatierra" className="ver-mas-servicios">
                Ver más
              </Link>
            )}
          </div>
          <div
            className="servicio-item"
            onMouseEnter={handleMouseEnterImage8}
            onMouseLeave={handleMouseLeaveImage8}>
            <img className="soporte-img-container"
              src={serviciotecnico8}
              alt="Imagen de soporte para impresoras"
            />
            <p>SERVICIO TÉCNICO DE INSTALACIÓN Y CONFIGURACIÓN DE SISTEMA DE VIDEOVIGILANCIA.</p>
            {showMoreImage8 && (
              <Link to="/video-vigilancia" className="ver-mas-servicios">
                Ver más
              </Link>
            )}
          </div>

        </div>
        <div className="servicios-container-body">
          <div className="servicio-item"
            onMouseEnter={handleMouseEnterImage9}
            onMouseLeave={handleMouseLeaveImage9}>
            <img className="soporte-img-container"
              src={serviciotecnico9}
              alt="Imagen de soporte para impresoras"
            />
            <p>SERVICIO TÉCNICO DE REPARACIÓN DE COMPUTADORAS DE ESCRITORIO.</p>
            {showMoreImage9 && (
              <Link to="/escritorio" className="ver-mas-servicios">
                Ver más
              </Link>
            )}
          </div>
          <div className="servicio-item"
            onMouseEnter={handleMouseEnterImage10}
            onMouseLeave={handleMouseLeaveImage10}>
            <img className="soporte-img-container"
              src={serviciotecnico10}
              alt="Imagen de soporte para impresoras"
            />
            <p>SERVICIO TÉCNICO DE REPARACIÓN DE COMPUTADORAS PORTATILES Y TABLET.</p>
            {showMoreImage10 && (
              <Link to="/portatiles-tablets" className="ver-mas-servicios">
                Ver más
              </Link>
            )}
          </div>

        </div>
        <div className="servicios-container-body">
          <div
            className="servicio-item"
            onMouseEnter={handleMouseEnterImage11}
            onMouseLeave={handleMouseLeaveImage11}
          >
            <img
              className="soporte-img-container"
              src={serviciotecnico11}
              alt="Imagen de soporte para impresoras"
            />
            <p>SERVICIO TÉCNICO DE REPARACIÓN DE EQUIPOS DE AUDIO Y VIDEO.</p>
            {showMoreImage11 && (
              <Link to="/reparacion-equipos" className="ver-mas-servicios">
                Ver más
              </Link>
            )}
          </div>
          <div
            className="servicio-item"
            onMouseEnter={handleMouseEnterImage12}
            onMouseLeave={handleMouseLeaveImage12}
          >
            <img
              className="soporte-img-container"
              src={serviciotecnico12}
              alt="Imagen de soporte para impresoras"
            />
            <p>SERVICIO TÉCNICO DE RECUPERACIÓN DE DATOS.</p>
            {showMoreImage12 && (
              <Link to="/recuperacion-datos" className="ver-mas-servicios">
                Ver más
              </Link>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}

export default Servicios;
