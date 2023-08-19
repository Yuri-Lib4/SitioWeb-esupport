import { Link } from 'react-router-dom';
import './Desktops.css';
import { useState, useEffect } from 'react';
import serviciotecnologia from '../assets/pc-desktocs.jpg';
import personaLaptop from '../assets/persona-laptop.jpg';
import terceraImgen from '../assets/terceraimagen.jpg';
export function Desktops() {
  
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  //PRODUCTOS
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/producto/')
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredProductos = productos.filter(producto => producto.perifericos === 5);
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
                <Link to="/desktops" className="nav-link home-link-header">
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


      <div className="desktops-container">
        <div className="desktops-container-home">
          <div className="desktops-container-primero">
            <h3 className="desktops-container-h3">Computadores Todo en Uno y Torres</h3>
            <div className="desktops-container-separador"></div>

            <p className="desktops-container-p">La solución ideal para crear, trabajar y jugar cómodamente.</p>
            <Link to="/">
              <button className="desktops-container-buttom">Ver todos los equipos</button>
            </Link>
          </div>

          <div className="desktops-container-imagenes">

            <img
              className=""
              src={serviciotecnologia}
              alt="Imagen de soporte para impresoras"
            />
          </div>
        </div>

        <div className="desktops-container-parrafos">
          <p className="desktops-container-parrafo">Ya están disponibles los equipos con Windows 11</p>
        </div>


        <div >
          <div className="desktops-container-hp">
            <h1 >HP Pavilion</h1>
          </div>

          <div className="desktops-container2">
            <div>
              <div className="desktops-container2-h2">
                <h2>Creatividad y entretenimiento sin límites</h2>

              </div>
              <div className="desktops-container2-parrafos">
                <p>Diviértete, crea y disfruta</p>
                <p>Con procesadores de última generación y opciones de hasta gráficos NVIDIA RTX</p>
                <div className="desktops-subseparador"></div>
                <p>Perfecta para video llamadas</p>
                <div className="desktops-subseparador"></div>
                <p>Diseño sustentable</p>
                <div className="desktops-subseparador"></div>

                <Link to="/ruta-de-destino">
                  <button className="desktops-buttom2">Más Información</button>
                </Link>
              </div>
            </div>
            <div className="imagen-persona">
              <img
                className=""
                src={personaLaptop}
                alt="Imagen de soporte para impresoras"
              />

            </div>
          </div>
        </div>

        <div >


          <div className="desktops-container2-home">
            <div className="desktops-imagen-container">
              <img
                className=""
                src={terceraImgen}
                alt="Imagen de soporte para impresoras"
              />

            </div>
            <div>
              <div className="desktops-container2-h2">
                <h2>Desktops e&esupport</h2>

              </div>
              <div className="desktops-container2-h2">
                <h2>Alta productividad, multitasking, juegos, y trabajo</h2>

              </div>
              <div className="desktops-container2-parrafos">
                <p>La solución ideal para todo tipo de tareas del día a día.</p>
                <p>Gran calidad de audio con cancelación de ruido y cámara emergente</p>
                <div className="desktops-subseparador"></div>
                <p>Pantalla con certificación TÜV de baja luz azul y libre parpadeo. </p>
                <div className="desktops-subseparador"></div>
                <p>Diseño sustentable</p>
                <div className="desktops-subseparador"></div>


              </div>
            </div>

          </div>
        </div>


      </div>

      <div className="container-productos">
  <h1 className="title-productos">Explora todas las desktops</h1>
  <ul className="product-list-horizontal">
    {filteredProductos.map(producto => (
      <li className="product-item-horizontal" key={producto.id}>
        <div className="product-content-horizontal">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="product-image-horizontal"
          />
          <div className="product-info-horizontal">
            <h2 className="product-name-horizontal">{producto.nombre}</h2>
            <p className="product-description-horizontal">Descripción: {producto.descripcion}</p>
            <p className="product-price-horizontal">Precio: ${producto.precio}</p>
            <div className="product-stock">
  <p className="product-stock-horizontal">
    Stock: <span className="product-stock-horizontal-contenido">{producto.stock}</span>
  </p>
</div>


          </div>
          <button className="product-button-horizontal">Comprar</button>
        </div>
      </li>
    ))}
  </ul>
</div>




    </div>
  );
}

export default Desktops;
