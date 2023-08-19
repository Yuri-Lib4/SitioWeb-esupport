import { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap'; // Importa los componentes necesarios de react-bootstrap
import axios from 'axios';

export function CategorySlider() {
  const [categorias, setCategorias] = useState([]);

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
    <div className="categoria-slider">
      <h2>Categorías</h2>
      <Row>
        {categorias.map((categoria) => (
          <Col key={categoria.id} md={3} sm={6}>
            <Card className="categoria-card">
              <Card.Img variant="top" src={categoria.imagen} alt={categoria.nombre} />
              <Card.Body>
                <Card.Title>{categoria.nombre}</Card.Title>
                <button className="categoria-ver-mas-button">Ver más</button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CategorySlider;
