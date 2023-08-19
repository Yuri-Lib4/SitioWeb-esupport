import  { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './TodosLosProductos.css'; // Importar el archivo de estilos

export function TodosLosProductos() {
  const { id } = useParams(); // Obtener el ID del periférico desde los parámetros de la URL
  const [perifericoProducts, setPerifericoProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [periferico, setPeriferico] = useState({ id: '', nombre: '' });

  useEffect(() => {
    async function fetchData() {
      try {
        const perifericoResponse = await fetch(`http://127.0.0.1:8000/api/perifericos/${id}`);
        const perifericoData = await perifericoResponse.json();
        setPeriferico(perifericoData);

        const productsResponse = await fetch('http://127.0.0.1:8000/api/producto/');
        const productsData = await productsResponse.json();
        setAllProducts(productsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [id]);

  useEffect(() => {
    const filteredProducts = allProducts.filter(product => {
      return (
        product.perifericos === id ||
        product.perifericos === periferico.id
      );
    });
    setPerifericoProducts(filteredProducts);
  }, [allProducts, id, periferico.id]);

  return (
    <div className="productos-perifericos-web">
      <Link to="/" className="back-link">
        &#8592; Volver a la página principal
      </Link>
      <h2 className="periferico-title">Productos del Periférico {periferico.nombre}</h2>
      <ul className="productos-lista">
        {perifericoProducts.map(product => (
          <li key={product.id} className="productos-item">
            <img src={product.imagen} alt={product.nombre} className="product-image" />
            <div className="product-info">
              <p className="product-name">Nombre: {product.nombre}</p>
              <p className="product-description">Descripción: {product.descripcion}</p>
              <p className="product-price">Precio: ${product.precio}</p>
              <p className="product-stock">Stock: {product.stock}</p>
              <a href={`/producto/${product.id}`} className="buy-link">
                Comprar
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodosLosProductos;
