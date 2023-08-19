import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


import './Header.css';
import { useClienteContext } from '../components/ClienteContext';
import { FaSearch, FaTimes } from 'react-icons/fa';
import logoImage from "../assets/logosupporte.png";

export function Header({ cartItemCount }) {
  const { clienteNombre, setClienteNombre } = useClienteContext();
  const navigate = useNavigate();

  // BUSCADOR

  const [api1Results, setApi1Results] = useState([]);
  const [api2Results, setApi2Results] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [filteredApi1Results, setFilteredApi1Results] = useState([]); // Resultados filtrados de API 1
  const [filteredApi2Results, setFilteredApi2Results] = useState([]); // Resultados filtrados de API 2


  useEffect(() => {
    // Obtener resultados de la primera API
    axios.get('http://127.0.0.1:8000/api/marca-producto')
      .then(response => {
        setApi1Results(response.data);
      })
      .catch(error => {
        console.error('Error al obtener resultados de la primera API', error);
      });

    // Obtener resultados de la segunda API
    axios.get('http://127.0.0.1:8000/api/producto')
      .then(response => {
        setApi2Results(response.data);
      })
      .catch(error => {
        console.error('Error al obtener resultados de la segunda API', error);
      });

    // ... realizar solicitudes para otras APIs ...
  }, []);
  // Usar searchTerm en la función handleSearchInputChange


  const handleSearchInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    filterResults(newSearchTerm);
  };


  const filterResults = (query) => {
    const filteredApi1Results = api1Results.filter((result) =>
      result.marca.toLowerCase().includes(query.toLowerCase())
    );

    const filteredApi2Results = api2Results.filter((result) =>
      result.nombre.toLowerCase().includes(query.toLowerCase())
    );

    // Actualizar los resultados filtrados
    setFilteredApi1Results(filteredApi1Results);
    setFilteredApi2Results(filteredApi2Results);
  };


  const clearSearch = () => {
    setSearchTerm('');
    filterResults(''); // Borrar el contenido del campo y mostrar todos los resultados
  };


  const closeResults = () => {
    setShowResults(false);
  };



  const [isSticky, setIsSticky] = useState(false); // Estado para controlar si la barra es pegajosa


  const [cartItems, setCartItems] = useState([]); // Estado para almacenar los productos en el carrito
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    telefono: '',
    correo: ''
  });
  const [registeredUserName, setRegisteredUserName] = useState(''); // Estado para almacenar el nombre del cliente registrado
  const [registrationError, setRegistrationError] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [showNotification, setShowNotification] = useState(false); // Estado para mostrar la notificación

  const handleRegisterButtonClick = () => {
    setShowRegisterModal(true);
  };

  const handleCartButtonClick = () => {
    setShowCartModal(true);
  };

  const handleModalClose = () => {
    setShowRegisterModal(false);
    setShowCartModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };



  // buscador

  const apiUrls = {
    api1: 'http://127.0.0.1:8000/api/producto',
    api2: 'http://127.0.0.1:8000/api/marca-producto',
    // Agrega más URLs si es necesario
  };
  const searchApi = async (apiUrl, searchTerm) => {
    const response = await fetch(`${apiUrl}?query=${searchTerm}`);
    const data = await response.json();
    // Asegúrate de que data contenga los resultados en un arreglo
    // y que cada resultado tenga propiedades como 'title' y 'description'
    return data.results || []; // Si data.results es undefined, retornar un arreglo vacío
  };

  const handleSearch = async () => {
    const apiResults = [];

    for (const apiSource in apiUrls) {
      const apiUrl = apiUrls[apiSource];
      const results = await searchApi(apiUrl, searchTerm);
      console.log('Results from', apiSource, results); // Verificar los resultados
      apiResults.push(...results.map(result => ({ source: apiSource, ...result })));
    }

    setShowResults(true);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/cliente/', formData);
      setShowRegisterModal(false);
      setRegisteredUserName(formData.nombre);
      setFormData({
        nombre: '',
        direccion: '',
        telefono: '',
        correo: ''
      });
      setRegistrationError('');
      setRegistrationSuccess(true);

      // Ocultar la notificación de registro después de 5 segundos
      setTimeout(() => {
        setRegistrationSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error al registrar el cliente:', error);
      setRegistrationError('No se pudo registrar al cliente. Inténtalo de nuevo más tarde.');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const headerHeight = document.querySelector('.header').offsetHeight;
      setIsSticky(scrollTop >= headerHeight);
    };

    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/cliente/');
        if (response.data && response.data.length > 0) {
          setUserData(response.data[0]);
        }
      } catch (error) {
        console.error('Error al obtener los datos del cliente:', error);
      }
    };
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 2000);

    const notificationTimer = setTimeout(() => {
      setShowNotification(false);
    });

    // Agregar un listener al evento 'scroll' para llamar a la función handleScroll
    window.addEventListener('scroll', handleScroll);

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      clearTimeout(timer);
      clearTimeout(notificationTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


// Carritoo
const handleLogin = () => {
  // Simulación de inicio de sesión
  const loggedInClienteNombre = 'NombreDelCliente'; // Cambiar esto por el nombre real del cliente
  setClienteNombre(loggedInClienteNombre);
};

const handleLogout = () => {
  // Simulación de cierre de sesión
  setClienteNombre('');
};



  return (
    <div className={`header-container${isSticky ? ' sticky-bar' : ''}`}>
      <header className="header">
        {showNotification && !registrationSuccess && (
          <div className="notification">
            <p className="notification-text">
              {clienteNombre ? `¡Hola, ${clienteNombre}!` : 'Regístrate ahora para obtener ofertas especiales.'}
            </p>
            <button className="notification-button" onClick={handleRegisterButtonClick}>
              {clienteNombre ? (
                <span onClick={() => navigate('/home')}>Ver mi carrito</span>
              ) : (
                <span onClick={() => setShowRegisterModal(true)}>Registrarse</span>
              )}
            </button>
          </div>
        )}

        {registrationSuccess && (
          <div className="success-notification">
            <p className="notification-text">¡Bienvenido(a) {registeredUserName}! Gracias por registrarte.</p>
          </div>
        )}

        <div className="top-bar container-fluid">
          <Link to="/home" className="navbar-brand">
            <img src={logoImage} alt="Logo" />
          </Link>





          <div>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={handleSearchInputChange}
              />
              {searchTerm && (
                <button className="clear-button" onClick={clearSearch}>
                  <FaTimes />
                </button>
              )}
              <button className="search-button" onClick={handleSearch}>
                Buscar
                <FaSearch />
              </button>
            </div>

            {showResults && (
              <div className="search-results">
                <button className="close-button" onClick={closeResults}>
                  Cerrar
                </button>
                {filteredApi1Results.length === 0 && filteredApi2Results.length === 0 ? (
                  <p>No se encontraron resultados.</p>
                ) : (
                  <>
                    {/* Resultados de la primera API */}
                    {filteredApi1Results.map((result, index) => (
                      <div key={`api1-${index}`} className="search-result-item">
                        <h3>{result.marca}</h3>
                        <p>Producto: {result.productoproveedor.producto}</p>
                        <p>Fuente: API1</p>
                      </div>
                    ))}

                    {/* Resultados de la segunda API */}
                    {filteredApi2Results.map((result, index) => (
                      <div key={`api2-${index}`} className="search-result-item">
                        <h3>{result.nombre}</h3>
                        <p>Descripción: {result.descripcion}</p>
                        <p>Fuente: API2</p>
                      </div>
                    ))}

                    {/* ... resultados de otras APIs ... */}
                  </>
                )}
              </div>
            )}
          </div>




          <div className="navbar-contact">
          <ul className="social-icons list-inline mb-0">
            <li className="item">
              {clienteNombre ? (
                <>
                  <span className="link">Hola, {clienteNombre}</span>
                  <button className="logout-button" onClick={handleLogout}>
                    Cerrar sesión
                  </button>
                </>
              ) : (
                <a href="/iniciar-sesion" className="link" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-person"></i> Iniciar sesión
                </a>
              )}
            </li>

            <li className="item">
              <a href="/" className="link" target="_blank" rel="noopener noreferrer" onClick={handleCartButtonClick}>
                <i className="bi bi-cart"></i>Carrito ({cartItemCount})
              </a>
            </li>
          </ul>
        </div>
        </div>
      </header>

      {showRegisterModal && (
        <div className="modal-background">
          <div className="modal-container">
            <div className="modal-content">
              <h2>Formulario de Registro</h2>
              {registrationError && (
                <div className="alert alert-danger" role="alert">
                  {registrationError}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="direccion" className="form-label">Dirección:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="direccion"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="telefono" className="form-label">Teléfono:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="correo" className="form-label">Correo:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="correo"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="buttons-container">
                  <button type="submit" className="btn btn-primary">Registrar</button>
                  <button type="button" className="btn btn-secondary" onClick={handleModalClose}>Cerrar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {showCartModal && (
        <div className="cart-modal-background">
          <div className="cart-modal-container">
            <div className="cart-modal-content">
              <h2>Carrito de compras</h2>
              {/* Renderizar aquí la lista de productos en el carrito */}
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id}>{item.nombre} - {item.precio}</li>
                ))}
              </ul>
              <button type="button" className="btn btn-secondary" onClick={handleModalClose}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;

