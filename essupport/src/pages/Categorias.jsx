import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function Categorias() {
  const [categorias, setCategorias] = useState([]);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };


  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/categoria-producto/")
      .then((response) => setCategorias(response.data))
      .catch((error) => console.error("Error fetching categorias:", error));
  }, []);

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
                <Link to="/categorias" className="nav-link home-link-header">
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
      
      <div className="categorias-container">
        <h1 className="categorias-title">Categorias</h1>
        <ul className="categorias-list">
          {categorias.map((categoria) => (
            <li key={categoria.id} className="categoria-item">
              <Link to={`/categorias/${categoria.id}`}>
                <div className="categoria-content">
                  <div className="categoria-nombre">{categoria.nombre}</div>
                  <img
                    className="categoria-imagen"
                    src={categoria.imagen}
                    alt={categoria.nombre}
                  />
                  <Link to={`/categorias/${categoria.id}`}><div className="categoria-vermas">Ver más</div></Link>


                </div>
              </Link>


            </li>
          ))}
        </ul>
      </div>
    </div>

  );
}

export default Categorias;
