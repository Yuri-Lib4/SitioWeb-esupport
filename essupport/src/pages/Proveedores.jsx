import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Proveedores.css';

function DetallesProducto({ productoId }) {
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/proveedores-producto/${productoId}/`)
      .then(response => setProducto(response.data))
      .catch(error => console.error('Error fetching proveedores-producto data:', error));
  }, [productoId]);

  if (!producto) {
    return null;
  }

  return (
    <div className="marca-details">
      <h3>Producto: {producto.producto}</h3>

    </div>
  );
}

export function Proveedores() {
  const [productos, setProductos] = useState([]);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/proveedores/')
      .then(response => setProductos(response.data))
      .catch(error => console.error('Error fetching proveedores data:', error));
  }, []);

  //Marca

  const [marcaProductos, setMarcaProductos] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/marca-producto/')
      .then(response => response.json())
      .then(data => setMarcaProductos(data))
      .catch(error => console.error('Error fetching data:', error));
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
                <Link to="/proveedores" className="nav-link home-link-header">
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

      

      <div className="container-proveedores">
        <h1 className="titulo-principal">Lista de Productos y Marcas</h1>
        <div>
       
        <ul className="horizontal-list">
          {marcaProductos.map(marca => (
            <li key={marca.id}>{marca.nombre}</li>
          ))}
        </ul>
      </div>
        <div className="productos-list">
          {productos.map(producto => (
            <div key={producto.id} className="producto">
              <h2 className="marca">{producto.marca}</h2>
              <img src={producto.imagen} alt={producto.producto} className="imagen-producto" />
              <DetallesProducto productoId={producto.productoproveedor.id} />
            </div>
          ))}
        </div>
      </div>




    </div>
  );
}

export default Proveedores;
