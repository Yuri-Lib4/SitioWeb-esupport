import React, { createContext, useContext } from 'react';

export const CartContext = createContext();

export function useCartContext() {
  return useContext(CartContext);
}

export function CartProvider({ children, addToCartFunction }) {
  return <CartContext.Provider value={addToCartFunction}>{children}</CartContext.Provider>;
}

// Agrega la exportación de CartContextProvider
export function CartContextProvider(props) {
  return <CartProvider {...props} />;
}
