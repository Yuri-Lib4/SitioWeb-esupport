
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaDesktop, FaHeadphonesAlt, FaPrint, FaLaptop, FaQuestion } from 'react-icons/fa';
import { BsWindowStack } from "react-icons/bs";
import { PiDesktopThin } from "react-icons/pi";
import { AiOutlineUser } from 'react-icons/ai';
import { useState } from 'react';
import { VscSearch } from "react-icons/vsc";
import './Soporte.css'; // Importa el archivo CSS con los estilos personalizados

export function Soporte() {

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

      <div className="soporte-container">
        {/* Contenido del componente */}
        <h3>
          Bienvenido(a) al Soporte al cliente <Link to="/">e&e support</Link>. {/* Reemplaza "/ruta-en-otra-pagina" con la ruta de la otra página */}
          ¿Cómo podemos ayudarle?
        </h3>
        <div className="soporte-h3">
          <div className="soporte-h3-item soporte-h3-imagen1 soporte-h3-margin1">
            <Link to="/ruta-para-software">
              <h3>Software y controladores</h3>
              <FaChevronLeft className="icon-chevron-left" />
            </Link>
          </div>

          <div className="soporte-h3-item soporte-h3-imagen2 soporte-h3-margin2">
            <Link to="/ruta-para-impresoras">
              <h3>Soporte para impresoras</h3>
              <FaChevronLeft className="icon-chevron-left" />
            </Link>
          </div>

          <div className="soporte-h3-item soporte-h3-imagen3 soporte-h3-margin3">
            <Link to="/ruta-para-pcs">
              <h3>Soporte para PCs</h3>
              <FaChevronLeft className="icon-chevron-left" />
            </Link>
          </div>
        </div>

        <div className="soport-container">

          <div className="sport-container">
            <div className="soporte-p">
              <Link to="/herramientas-diagnostico">
                <PiDesktopThin className="icon-chevron-left" />
              </Link>
              <span>Use herramientas de diagnóstico para encontrar y solucionar problemas</span>
            </div>
            <div className="soporte-p">
              <Link to="/garantia">
                <BsWindowStack className="icon-chevron-left" />
              </Link>
              <span>Compruebe el estado de la garantía</span>
            </div>
            <div className="soporte-p">
              <Link to="/garantia-contacto">
                <FaHeadphonesAlt className="icon-chevron-left" />
              </Link>
              <span>Contacte un agente de HP para soporte</span>
            </div>
          </div>
          <div className="separator"></div> {/* Barra vertical separadora */}
          <div>

            <p>MÁS RECURSOS DE SOPORTE</p>
            <Link to="/compatibilidad-windows-11">
              <p>Información de compatibilidad con Windows 11</p>
            </Link>

            <Link to="/registrar-producto">
              <p>Registre su producto</p>
            </Link>

            <Link to="/centro-reparacion">
              <p>Visitar el Centro de reparación</p>
            </Link>
          </div>
        </div>


        <div className="soporte-contenedor">
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
            <div className="container-iconos-links">
              <div>Seleccione un tipo de producto para consejos sobre cómo encontrar su número de serie:</div>
              <div className="iconos-container">
                <Link className="icon-container" to="/impresora">
                  <FaPrint className="icon icon-printers" />
                  <p>Impresora</p>
                </Link>
              </div>
              <div className="iconos-container">
                <Link className="icon-container" to="/portatil">
                  <FaLaptop className="icon iconmn-laptop" />
                  <p>Portátil</p>
                </Link>
              </div>
              <div className="iconos-container">
                <Link className="icon-container" to="/sobremesa">
                  <FaDesktop className="icon icon-desktop" />
                  <p>Equipos de sobremesa</p>
                </Link>
              </div>
              <div className="iconos-container">
                <Link className="icon-container" to="/otros">
                  <FaQuestion className="icon icon-other" />
                  <p>Otros</p>
                </Link>
              </div>


            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Soporte;
