import React, { useState } from 'react';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  const handleOnError = () => {
    setHasError(true);
  };

  if (hasError) {
    return <div>Hubo un error al cargar el componente.</div>;
  }

  return (
    <div onError={handleOnError}>
      {children}
    </div>
  );
}

export default ErrorBoundary;
