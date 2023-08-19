import  { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CartContext } from "../components/CartContext";

import { useParams } from "react-router-dom";


export function ProductosPorCategoria() {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);
  const [categoria, setCategoria] = useState(null);
  const [marcas, setMarcas] = useState({});
  const cartContext = useContext(CartContext);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/categoria-producto/${id}/`)
      .then((response) => {
        setCategoria(response.data);
  
        axios
          .get(`http://127.0.0.1:8000/api/categorias/${id}/productos/`) // Asegúrate de usar la URL correcta
          .then((response) => {
            setProductos(response.data);
          })
          .catch((error) => console.error("Error fetching productos:", error));
      })
      .catch((error) => console.error("Error fetching categoria:", error));
  }, [id]);

  useEffect(() => {
    // Obtener nombres de las marcas de los productos
    if (productos.length > 0) {
      const marcaIds = productos.map((producto) => producto.marca);
      const uniqueMarcaIds = [...new Set(marcaIds)];

      Promise.all(
        uniqueMarcaIds.map(async (marcaId) => {
          try {
            const response = await axios.get(
              `http://127.0.0.1:8000/api/marca-producto/${marcaId}/`
            );
            setMarcas((prevMarcas) => ({
              ...prevMarcas,
              [marcaId]: response.data.nombre,
            }));
          } catch (error) {
            console.error("Error fetching marca:", error);
          }
        })
      );
    }
  }, [productos]);

  // Función para agregar un producto al carrito de compras
  const handleBuyClick = (product) => {
    cartContext.addToCart(product);
  };

  return (
    <div className="productos-container">
      <Link to="/categorias" className="back-link">
        &#8592; Volver a la página principal
      </Link>
      {categoria ? (
        <div>
          <h1 className="productos-title">
            Productos de la categoría {categoria.nombre}
          </h1>
          <ul className="productos-list">
            {productos.length === 0 ? (
              <p>No hay productos en esta categoría.</p>
            ) : (
              productos.map((producto) => (
                <li key={producto.id} className="producto-item">
                  <div className="producto-image-container">
                    <img
                      className="producto-imagen"
                      src={producto.imagen}
                      alt={producto.nombre}
                    />
                  </div>
                  <div
                    className="producto-nombre"
                    title={categoria.descripcion}
                  >
                    {producto.nombre}
                  </div>
                  <div className="producto-descripcion">
                    {producto.descripcion}
                  </div>
                  <div className="producto-precio">
                    Precio: S/{producto.precio}
                  </div>
                  <div className="producto-stock">Stock: {producto.stock}</div>
                  <div className="producto-marca">
                    Marca: {marcas[producto.marca] || "Cargando nombre de marca..."}
                  </div>
                  <button className="comprar-btn" onClick={() => handleBuyClick(producto)}>Comprar</button>
                </li>
              ))
            )}
          </ul>
        </div>
      ) : (
        <h1>Cargando...</h1>
      )}
    </div>
  );
}

export default ProductosPorCategoria;
