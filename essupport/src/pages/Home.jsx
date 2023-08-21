import { useState, useEffect } from 'react';
import {Header} from '../components/Header';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { FaCreditCard, FaTruck, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
import slider4 from "../assets/slider4.png";
import { useClienteContext } from '../components/ClienteContext';
import { useDispatch } from 'react-redux';

import axios from 'axios';


import "./Home.css";

export function Home({ addToCart }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [perifericosProduto, setPerifericos] = useState([]);
  const [selectedPerifericoId, setSelectedPerifericoId] = useState(null);
  const [perifericoProducts, setPerifericoProducts] = useState({});

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const perifericosResponse = await axios.get('http://127.0.0.1:8000/api/perifericos/');
        setPerifericos(perifericosResponse.data);

        if (perifericosResponse.data.length > 0) {
          setSelectedPerifericoId(perifericosResponse.data[0].id);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      try {
        if (selectedPerifericoId !== null) {
          const response = await axios.get(`http://127.0.0.1:8000/api/producto/?perifericos=${selectedPerifericoId}`);
          setPerifericoProducts({ ...perifericoProducts, [selectedPerifericoId]: response.data });

          // Actualiza el estado products con los productos obtenidos
          setProducts(response.data);
        }
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    }

    fetchProducts();
  }, [selectedPerifericoId, perifericoProducts]);

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

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex < categorias.length - 4) {
      setStartIndex(startIndex + 1);
    }
  };

  //Ofertas
  const [ofertas, setOfertas] = useState([]);
  const [imagenesProductos, setImagenesProductos] = useState({});

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/oferta/`)
      .then(response => {
        setOfertas(response.data);
      })
      .catch(error => {
        console.error("Error al obtener las ofertas:", error);
      });
  }, []);

  useEffect(() => {
    const fetchProductImages = async () => {
      const imagesObj = {};

      for (const oferta of ofertas) {
        try {
          const image = await obtenerImagenProducto(oferta.producto);
          imagesObj[oferta.producto] = image;
        } catch (error) {
          console.error(`Error al obtener la imagen del producto ${oferta.producto}:`, error);
        }
      }

      setImagenesProductos(imagesObj);
    };

    fetchProductImages();
  }, [ofertas]);

  const obtenerImagenProducto = async (idProducto) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/producto/${idProducto}/`);
      const data = await response.json();
      return data.imagen; // Asegúrate de usar el campo correcto en tu API para la imagen
    } catch (error) {
      console.error("Error al obtener la imagen del producto:", error);
      return null;
    }
  };



  const visibleProducts = showAll ? products : products.slice();

  //Comprar


  const { clienteId, setClienteId } = useClienteContext();
  const [cartItemCount, setCartItemCount] = useState(0);
  const [showCaritoModal, setShowCaritoModal] = useState(false);
  const dispatch = useDispatch(); // Asegúrate de tener esto configurado correctamente

 const obtenerClienteId = () => {
  // Lógica para obtener el clienteId
  console.log("Cliente ID obtenido:", clienteId);
  // ...
  return clienteId;
};

  const fetchCartItemCount = async () => {
    try {
      const clienteId = obtenerClienteId();
      const cartResponse = await axios.get(`http://127.0.0.1:8000/api/carrito/?cliente=${clienteId}`);
      const itemCount = cartResponse.data.length > 0 ? cartResponse.data[0].items_count : 0;
      return itemCount;
    } catch (error) {
      console.error('Error al obtener la cantidad de ítems en el carrito:', error);
      return 0;
    }
  };

  useEffect(() => {
    const clienteId = obtenerClienteId();
    if (clienteId) {
      setClienteId(clienteId);
    }
  }, []);

  const handleAddToCart = async (product) => {
    try {
      if (!clienteId) {
        console.error('Usuario no ha iniciado sesión.'); // Manejo de caso donde no se ha iniciado sesión
        return;
      }
  
      // Obtener el carrito del cliente
      const cartResponse = await axios.get(`http://127.0.0.1:8000/api/carrito/?cliente=${clienteId}`);
      let cartId;
  
      if (cartResponse.data.length === 0) {
        // Si no hay un carrito existente, crea uno nuevo
        const newCartResponse = await axios.post('http://127.0.0.1:8000/api/carrito/', { cliente: clienteId });
        cartId = newCartResponse.data.id;
      } else {
        // Si hay un carrito existente, usa su ID
        cartId = cartResponse.data[0].id;
      }
  
      // Agregar el producto al carrito
      await axios.post(`http://127.0.0.1:8000/api/item-carrito/`, { carrito: cartId, producto: product.id, cantidad: 1 });
  
      const itemCount = await fetchCartItemCount();
      setCartItemCount(itemCount);
  
      setShowCaritoModal(true);
    } catch (error) {
      console.error('Error al agregar producto al carrito:', error);
    }
  };
  






  return (
    <div className="home">
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





      <div className="ofertas-container">
        <h1 className="ofertas">Los productos que estan en descuento </h1>
        <ul className="ofertas-list">
          {ofertas.map(({ id, nombreProducto, descuento, producto }) => (
            <li key={id} className="oferta-item">
              <div className="oferta-imagen-container">
                {imagenesProductos[producto] && (
                  <img
                    className="oferta-imagen"
                    src={imagenesProductos[producto]}
                    alt={nombreProducto}
                  />
                )}
              </div>
              <div className="oferta-contenido">
                <h2 className="oferta-nombre">{nombreProducto}</h2>
                <p className="oferta-descuento-home">Descuento del {Math.floor(descuento)}%</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="categoria-home-container">
        <h2 className="categoria-home-h2">Categorias</h2>
        <div className="categoria-home-separador"></div>
        <div className="categoria-slider-container">

          <FaChevronLeft
            className={`icon ${startIndex === 0 ? 'disabled' : ''}`}
            onClick={handlePrev}
          />
          {categorias.slice(startIndex, startIndex + 4).map((categoria) => (
            <div key={categoria.id} className="categoria-item">
              <div className="categoria-imagen-container">
                <img src={categoria.imagen} alt={categoria.nombre} className="categoria-imagen" />
                <div className="categoria-overlay">
                  <p>{categoria.nombre}</p>
                  <Link to="/categorias">
                  <button className="categoria-ver-mas-button">Ver más</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <FaChevronRight
            className={`icon ${startIndex >= categorias.length - 4 ? 'disabled' : ''}`}
            onClick={handleNext}
          />
        </div>
      </div>


      <div>
         <Header cartItemCount={cartItemCount} />
        {perifericosProduto.map(periferico => (

          <div key={periferico.id} className="product-list-container">
            <h2 className="categoria-home-h2">
              {periferico.nombre}
            </h2>
            <div className="categoria-home-separador"></div>
            
            <ul className="product-list">
              
              {visibleProducts
                .filter(product => product.perifericos === periferico.id)
                .slice(-6)
                .map(product => (
                  <li key={product.id} className="product-item">
                    <img src={product.imagen} alt={product.nombre} className="product-image" />
                    <div className="product-info">
                      <p className="product-name">Nombre: {product.nombre}</p>
                     
                      <p className="product-price">Precio: ${product.precio}</p>
                      <p className="product-stock">Stock: {product.stock}</p>

                      <button className="buy-link" onClick={() => handleAddToCart(product)}>Agregar al carrito</button>



                    </div>
                  </li>
                ))}
            </ul>
            {!showAll && (
              <Link to={`/todos-los-productos/${periferico.id}`} className="show-all-link">
                <button className="show-all-button">Ver todos</button>
              </Link>
            )}
          </div>
        ))}
      </div>













    </div>
  );
}

export default Home;
