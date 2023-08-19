
export function CategoriaDetalle  ({ categoria })  {
  // Aquí puedes acceder a la información de la categoría seleccionada
  const { nombre, descripcion, imagen } = categoria;

  return (
    <div className="categoria-detalle-container">
      <h1 className="categoria-detalle-title">{nombre}</h1>
      <img className="categoria-detalle-imagen" src={imagen} alt={nombre} />
      <p className="categoria-detalle-descripcion">{descripcion}</p>
    </div>
  );
}

export default CategoriaDetalle;
