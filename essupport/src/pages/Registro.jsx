import { useState } from 'react';
import axios from 'axios';
import './Registro.css';
import logoImage from "../assets/logosupporte.png";
import { Link } from 'react-router-dom';

export function Registro() {
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    telefono: '',
    correo: ''
  });
  const [registrationError, setRegistrationError] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/cliente/', formData);
      setRegistrationSuccess(true);
      setRegistrationError('');

      // Restablecer los campos del formulario después de un registro exitoso
      setFormData({
        nombre: '',
        direccion: '',
        telefono: '',
        correo: ''
      });
    } catch (error) {
      console.error('Error al registrar el cliente:', error);
      setRegistrationError('No se pudo registrar al cliente. Inténtalo de nuevo más tarde.');
    }
  };
  return (
    <div className="registro-container">
      <div className="registro-form">
        <h1>Registro</h1>
        <img src={logoImage} alt="Logo" />
        {registrationError && <div className="alert alert-danger">{registrationError}</div>}
        {registrationSuccess && <div className="alert alert-success">¡Registro exitoso!</div>}
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
              type="email"
              className="form-control"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Registrar</button>
          <button className="btn btn-primary">
            <Link className="btn btn-primary"to="/iniciar-sesion">Iniciar Sesión</Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registro;
