import React, { createContext, useContext, useState } from 'react';

const ClienteContext = createContext();

export function useClienteContext() {
  return useContext(ClienteContext);
}

export function ClienteContextProvider({ children }) {
  const [clienteNombre, setClienteNombre] = useState('');

  return (
    <ClienteContext.Provider value={{ clienteNombre, setClienteNombre }}>
      {children}
    </ClienteContext.Provider>
  );
}
