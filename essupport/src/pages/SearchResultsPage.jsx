import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function SearchResultsPage  () {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get('query');
  
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Realiza la búsqueda de resultados utilizando searchTerm en tus APIs
    // y actualiza el estado de searchResults con los resultados obtenidos.
    // Por ejemplo:
    // const results = await searchApi(apiUrl, searchTerm);
    // setSearchResults(results);
  }, [searchTerm]);

  return (
    <div>
      <h2>Resultados de búsqueda para: {searchTerm}</h2>
      <div>
        {searchResults.map((result, index) => (
          <div key={index} className="search-result-item">
            {/* Renderizar los campos específicos de los resultados */}
            <h3>{result.title}</h3>
            <p>{result.description}</p>
            {/* ... Otros campos ... */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;
