
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaCreditCard, FaTruck, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
import slider4 from "../assets/slider4.png";
import { useEffect } from 'react';
import axios from 'axios';
import "./Home.css";
export function Nosotros() {
  // Aquí va la lógica y el contenido del componenteNosotros
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const [categorias, setCategorias] = useState([]);
  const [hoveredCategoryId, setHoveredCategoryId] = useState(null);

  useEffect(() => {
    async function fetchCategorias() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/categoria-producto/');
        setCategorias(response.data);
      } catch (error) {
        console.error('Error fetching categorias:', error);
      }
    }

    fetchCategorias();
  }, []);

  return (
    <div>
      <div className="header-esupport">
        <nav className="navbar ">
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
                <Link to="/home" className="nav-link home-link-header">
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

      <div className="home-container">
        {/* Contenido del componente */}
        {/* Slider */}


        <div className="overlay">
          <div className="slider-container">
            <Carousel
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    className="slider-button slider-button-left"
                  >
                    <FaChevronLeft />
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    className="slider-button slider-button-right"
                  >
                    <FaChevronRight />
                  </button>
                )
              }
            >
              <div>
                <div className="slider-content">
                  <Link to="/descuentos" className="slider-link">
                    <FaCreditCard className="slider-icon" />
                    <span className="slider-text">Hasta 12 cuotas sin intereses</span>
                  </Link>
                  <div className="slider-bar">|</div>
                  <Link to="/envios-gratis" className="slider-link">
                    <FaTruck className="slider-icon" />
                    <span className="slider-text">Envíos gratis</span>
                  </Link>
                </div>
                <img src={slider2} alt="Slider 2" />
              </div>
              <div>
                <div className="slider-content">
                  <FaCreditCard className="slider-icon" />
                  <span>Hasta 12 cuotas sin intereses</span>
                  <div className="slider-bar">|</div>
                  <FaTruck className="slider-icon" />
                  <span>Envíos gratis</span>
                </div>
                <img src={slider3} alt="Slider 3" />
              </div>
              <div>
                <div className="slider-content">
                  <div className="slider-icon">
                    <FaCreditCard />
                  </div>
                  <span>Hasta 12 cuotas sin intereses</span>
                  <div className="slider-bar">|</div>
                  <div className="slider-icon">
                    <FaTruck />
                  </div>
                  <span>Envíos gratis</span>
                </div>
                <img src={slider4} alt="Slider 4" />
              </div>
            </Carousel>
          </div>

        </div>
      </div>

      <div className="categoria-home-container">
        <Carousel showThumbs={false} infiniteLoop autoPlay interval={3000}>
          {categorias.map(categoria => (
            <div
              key={categoria.id}
              onMouseEnter={() => setHoveredCategoryId(categoria.id)}
              onMouseLeave={() => setHoveredCategoryId(null)}
              className="categoria-slider-item"
            >
              <img src={categoria.imagen} alt={categoria.nombre} />
              {hoveredCategoryId === categoria.id && (
                <div className="categoria-slider-overlay">
                  <p>{categoria.nombre}</p>
                  <button className="categoria-ver-mas-button">Ver más</button>
                </div>
              )}
            </div>
          ))}
        </Carousel>
      </div>

    </div>
  );
}

export default Nosotros;
