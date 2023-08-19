import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './IniciarSesion.css';
import logoImage from "../assets/logosupporte.png";
import { useClienteContext } from '../components/ClienteContext';

export function IniciarSesion() {
    const { setClienteNombre } = useClienteContext();
    const [correo, setCorreo] = useState('');
    const [nombre, setNombre] = useState('');
    const [errorMensaje, setErrorMensaje] = useState('');
    const [existeCliente, setExisteCliente] = useState(false);

    const handleCorreoChange = (event) => {
        setCorreo(event.target.value);
        setErrorMensaje('');
        setExisteCliente(false);
    };

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
        setErrorMensaje('');
        setExisteCliente(false);
    };

    const handleIniciarSesion = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/cliente/?correo=${correo}`);
            const clientesEncontrados = response.data.filter(cliente => cliente.nombre === nombre);

            if (clientesEncontrados.length > 0) {
                setExisteCliente(true);
                setClienteNombre(nombre); // Actualizar el nombre del cliente en el estado del componente padre
                setErrorMensaje('');
            } else {
                setExisteCliente(false);
                setErrorMensaje('No se encontró ningún cliente con ese correo y nombre. Puedes registrarte para crear una cuenta.');
            }
        } catch (error) {
            setErrorMensaje('Error al buscar cliente');
        }
    };
    

    return (
        <div className="iniciar-sesion-container">
            <h2>Iniciar Sesión</h2>
            <div className="form">
                <img src={logoImage} alt="Logo" />
                <label htmlFor="correo">Correo Electrónico:</label>
                <input
                    type="email"
                    id="correo"
                    value={correo}
                    onChange={handleCorreoChange}
                />
                <label htmlFor="nombre">Nombre:</label>
                <input
                    type="text"
                    id="nombre"
                    value={nombre}
                    onChange={handleNombreChange}
                />
                <button onClick={handleIniciarSesion}>Iniciar Sesión</button>
                <button className="registrarse-button">
                    <Link to="/registro">Registrarse</Link>
                </button>
            </div>
            {errorMensaje && <div className="error-mensaje">{errorMensaje}</div>}
            {existeCliente && (
                <div className="existe-cliente-mensaje">
                    Cliente encontrado. ¡Puedes iniciar sesión!
                </div>
            )}
        </div>
    );
}

export default IniciarSesion;
