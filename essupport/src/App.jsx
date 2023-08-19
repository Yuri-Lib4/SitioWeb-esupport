import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  { useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer"; 
import { Home } from "./pages/Home";

import {SearchResultsPage} from './pages/SearchResultsPage';
import { Categorias } from "./pages/Categorias";
import { ProductosPorCategoria } from "./pages/ProductosPorCategoria";
import { OfertasWeb } from "./pages/Ofertas";
import { Proveedores } from "./pages/Proveedores";
import { Desktops } from "./pages/Desktops";
import { Servicios } from "./pages/Servicios";
import { AudioVideo } from "./pages/AudioVideo";
import { EquiposComputo } from "./pages/EquiposComputo";
import { EquiposImpresion } from "./pages/EquiposImpresion";
import { Redtelefonia } from "./pages/Redtelefonia";
import { RedElectrica } from "./pages/RedElectrica";
import { RedDatos } from "./pages/RedDatos";
import { PuestasTierra } from "./pages/PuestasTierra";
import { VideoVigilancia } from "./pages/VideoVigilancia";
import { Escritorio } from "./pages/Escritorio";
import { PortatilesTablets } from "./pages/PortatilesTablets";
import { ReparacionEquipos } from "./pages/ReparacionEquipos";
import { RecuperacionDatos } from "./pages/RecuperacionDatos";
import { Nosotros } from "./pages/Nosotros";
import { Soporte } from "./pages/Soporte";
import { Software } from "./pages/Software";
import { Impresora } from "./pages/Impresora";
import { SoporteImpresoras } from "./pages/SoporteImpresoras";
import { Soportepcs } from "./pages/Soportepcs";
import { Portatil } from "./pages/Portatil";
import { Sobremesa } from "./pages/Sobremesa";
import { Otros } from "./pages/Otrossoftware";
import { Contacto } from "./pages/Contacto";
import { TodosLosProductos } from "./pages/TodosLosProductos";
import { Garantiacontacto } from "./pages/Garantiacontacto";
import { Registro } from "./pages/Registro";
import { IniciarSesion } from "./pages/IniciarSesion";
import { MensajesChat } from "./pages/MensajesChat";
import { HerramientasDiagnostico } from "./pages/HerramientasDiagnostico";
import { MultiplesProductos } from "./pages/MultiplesProductos";
import { Garantia } from "./pages/Garantia";
import { CategorySlider } from "./pages/CategorySlider";
import { CartContextProvider } from './components/CartContext';
import { ClienteContextProvider } from './components/ClienteContext';

import "./App.css";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    // Add the product to the cartItems state
    setCartItems([...cartItems, product]);
    // ... additional logic related to updating the cart ...
  };
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };


  return (
    <Router>
      <ClienteContextProvider>
      <CartContextProvider addToCartFunction={addToCart}>

        <div className="app-container">
          <Header addToCart={addToCart} />
          <div className="chat-icon" onClick={toggleChat}>
            <div className="chat-icon-content">Chat</div>
          </div>
          {isChatOpen && (
            <div className="chat-modal">
              <MensajesChat />
            </div>
          )}
          <Routes>
          <Route path="/" element={<Home addToCart={addToCart}/>} />
            <Route path="/home" element={<Home addToCart={addToCart} />} />
            <Route path="/categorias" element={<Categorias />} />
           
            <Route path="/categorias/:id"
              element={<ProductosPorCategoria />}
            />
            <Route path="/todos-los-productos/:id" element={<TodosLosProductos />} />
            <Route path="/resultados" element={<SearchResultsPage />} />
            <Route path="/garantia" element={<Garantia />} />
            <Route path="/multiples-productos" element={<MultiplesProductos/>} />
            <Route path="/Mensajes-chat" element={<MensajesChat />} />
            <Route path="/categorias-slider" element={<CategorySlider />} />
            <Route path="/ofertas" element={<OfertasWeb />} />
            <Route path="/proveedores" element={<Proveedores />} />
            <Route path="/desktops" element={<Desktops />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/audio-video" element={<AudioVideo/>} />
            <Route path="/equipos-computo" element={<EquiposComputo/>} />
            <Route path="/equipos-impresion" element={<EquiposImpresion />} />
            <Route path="/red-telefonia" element={<Redtelefonia />} />
            <Route path="/red-electrica" element={<RedElectrica/>} />
            <Route path="/red-datos" element={<RedDatos/>} />
            <Route path="/puestatierra" element={<PuestasTierra/>} />
            <Route path="/video-vigilancia" element={<VideoVigilancia/>} />
            <Route path="/escritorio" element={<Escritorio/>} />
            <Route path="/portatiles-tablets" element={<PortatilesTablets/>} />
            <Route path="/reparacion-equipos" element={<ReparacionEquipos/>} />
            <Route path="/recuperacion-datos" element={<RecuperacionDatos/>} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/soporte" element={<Soporte />} />
            <Route path="/ruta-para-software" element={<Software />} />
            <Route path="/impresora" element={<Impresora/>} />
            <Route path="/portatil" element={<Portatil/>} />
            <Route path="/sobremesa" element={<Sobremesa/>} />
            <Route path="/otros" element={<Otros/>} />
            <Route path="/herramientas-diagnostico" element={<HerramientasDiagnostico/>} />
            <Route path="/ruta-para-impresoras" element={<SoporteImpresoras/>} />
            <Route path="/ruta-para-pcs" element={<Soportepcs/>} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/garantia-contacto" element={<Garantiacontacto/>} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/iniciar-sesion" element={<IniciarSesion />} />
          </Routes>
          <Footer />
        </div>
      </CartContextProvider>
      </ClienteContextProvider>
    </Router>
  );
}

export default App;
