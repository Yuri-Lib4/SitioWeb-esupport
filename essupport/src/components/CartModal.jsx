import React from 'react';

function CartModal({ cartItems, onClose }) {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-content">
          <h2>Carrito de Compras</h2>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.nombre} - Precio: {item.precio}
              </li>
            ))}
          </ul>
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartModal; // Exporta el componente CartModal de forma predeterminada
