
import './Footer.css';
import logoImage from "../assets/logosupporte.png";
import { Link} from 'react-router-dom';
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h1>Logo</h1>
            <Link to="/home" className="navbar-brand">
            <img src={logoImage} alt="Logo" />
          </Link>
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="/home">Inicio</a></li>
              <li><a href="/servicios">Servicios</a></li>
             
              <li><a href="/contacto">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h2>Contacto</h2>
            <p><i className="fa fa-map-marker"></i> Jr. Zepita #728 Of. 108 , Trujillo</p>
            <p><i className="fa fa-phone"></i> Teléfono:  (044) – 200291</p>
            <p><i className="fa fa-envelope"></i> Correo: asistente.gerencia@eyesupportperu.com</p>
          </div>
          <div className="footer-social-icons">
            <h2>Síguenos en redes sociales</h2>
            <ul className="social-icons-footer">
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="footer-nosotros">
          <div>
            <h2>Nosotros</h2>
            <p>Somos la empresa líder en toda la libertad, en soporte y ventas de insumos con más de 15 años de experiencia en el mercado, contando con técnicos especializados en el rubro.</p>
          </div>
          <div></div>
          <div>
            <h3>Misión:</h3>
            <p>Ofrecer a nuestros clientes equipos informáticos de las mejores marcas, con el mejor servicio de post-venta, garantizado por un staff de profesionales con más de 15 años de experiencia, permitiendo actuar con eficiencia y eficacia ante cualquier eventualidad, salvaguardando de esta manera el valor de su inversión.</p>
          </div>
          <div></div>
          <div><h3>Visión:</h3>
            <p>Convertirnos en una empresa líder en la región norte del Perú, brindando soluciones integrales, en soporte de infraestructura y operatividad informática.</p></div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Pasantes de Tecsup Yuri C. & Luis A. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
