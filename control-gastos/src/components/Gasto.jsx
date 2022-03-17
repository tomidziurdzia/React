const Gasto = ({gasto}) => {
  
  const {categoria, nombre, cantidad, id} = gasto

  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <div className="descripcion-gasto">
          <p className="categoria">{categoria}</p>
          <p className="gasto">{nombre}</p>
          <p className="cantidad">{cantidad}</p>
        </div>
      </div>
    </div>
  )
}

export default Gasto