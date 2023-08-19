import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { FaCalendar } from "react-icons/fa";
import "./OfertasWeb.css";

export function OfertasWeb() {
  const [ofertas, setOfertas] = useState([]);
  const [imagenesProductos, setImagenesProductos] = useState({});
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    // Realizar la solicitud a la API cuando el componente se monte
    axios.get(`http://127.0.0.1:8000/api/oferta/`)
      .then(response => {
        setOfertas(response.data); // Almacenar los datos recibidos en el estado
      })
      .catch(error => {
        console.error("Error al obtener las ofertas:", error);
      });
  }, []);

  useEffect(() => {
    // Obtener las imágenes de los productos una vez que las ofertas estén cargadas
    const obtenerImagenesDeProductos = async () => {
      const imagenes = {};
      await Promise.all(
        ofertas.map(async oferta => {
          const imagenProducto = await obtenerImagenProducto(oferta.producto);
          imagenes[oferta.producto] = imagenProducto;
        })
      );
      setImagenesProductos(imagenes);
    };

    obtenerImagenesDeProductos();
  }, [ofertas]); // Se ejecutará nuevamente cuando cambie la lista de ofertas

  const formatFecha = (fecha) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(fecha).toLocaleDateString('es-ES', options);
  };

  const calcularDuracionOferta = (fechaInicio, fechaFin) => {
    const inicio = new Date(fechaInicio);
    const fin = new Date(fechaFin);
    const diferenciaTiempo = fin - inicio;
    const dias = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));
    return dias;
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
                <Link to="/ofertas" className="nav-link home-link-header">
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

      <div className="ofertas-container">
        <h1 className="ofertas-title">Ofertas</h1>
        <ul className="ofertas-list">
          {ofertas.map(({ id, nombreProducto, descripcion, fecha_inicio, fecha_fin, descuento, producto }) => (
            <li key={id} className="oferta-item">
              <Link to={`/ofertas/${id}`} className="oferta-imagen-link">
                <div className="oferta-imagen-container">
                  <div className="oferta-descuento-p">Oferta</div>
                  {imagenesProductos[producto] && (
                    <img
                      className="oferta-imagen"
                      src={imagenesProductos[producto]}
                      alt={nombreProducto}
                    />
                  )}
                  <div className="oferta-descuento">-{Math.floor(descuento)}%</div>
                </div>
              </Link>
              <div className="oferta-contenido">
                <h2 className="oferta-nombre">{nombreProducto}</h2>
                <p className="oferta-descripcion">{descripcion}</p>
                <div className="oferta-fecha-inicio">
                  <span><FaCalendar /></span>
                  Fecha de inicio: {formatFecha(fecha_inicio)}
                </div>
                <div className="oferta-fecha-fin">
                  <span><FaCalendar /></span>
                  Fecha de fin: {formatFecha(fecha_fin)}
                </div>
                <p className="oferta-duracion">
                  {calcularDuracionOferta(fecha_inicio, fecha_fin)} días restantes en oferta
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>


    </div>
  );
}

const obtenerImagenProducto = async (idProducto) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/producto/${idProducto}/`);
    const data = await response.json();
    return data.imagen; // Utilizar "imagen" como nombre del campo
  } catch (error) {
    console.error("Error al obtener la imagen del producto:", error);
    return null;
  }
};

export default OfertasWeb;
