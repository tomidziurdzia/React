import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions en Redux
import { crearNuevoProductoAction } from "../actions/productoActions";

import { mostrarAlerta } from "../actions/alertaActions";

const NuevoProducto = ({ history }) => {
  // State del componente
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);

  // Utilizar useDispatch y crea una funcion
  const dispatch = useDispatch();

  // Acceder al state del store
  const cargando = useSelector((state) => state.productos.loading);
  const error = useSelector((state) => state.productos.error);
  const alerta = useSelector((state) => state.alerta.alerta);

  // Mandar a llamar el action de productoAction
  const agregarProducto = (producto) =>
    dispatch(crearNuevoProductoAction(producto));

  // Cuando el usuario haga submit
  const submitNuevoProducto = (e) => {
    e.preventDefault();

    // Validar form
    if (nombre.trim() === "" || precio <= 0) {
      const alerta = {
        msg: "Ambos campos son obligatorios",
        classes: "alert alert-danger text-center p3",
      };
      dispatch(mostrarAlerta(alerta));
      return;
    }

    // Revisar que no hay errores

    // Crear nuevo producto
    agregarProducto({
      nombre,
      precio,
    });

    // Redireccionar
    history.push("/");
  };

  return (
    <div className="row justify-content-center">
      <div col-md-8>
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>
            {alerta ? <p className={alerta.classes}>{alerta.msg}</p> : null}
            <form onSubmit={submitNuevoProducto}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  value={precio}
                  onChange={(e) => setPrecio(Number(e.target.value))}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold d-block w-100"
              >
                Agregar
              </button>
            </form>
            {cargando ? <p>Cargando</p> : null}
            {error ? (
              <p className="alert alert-danger p-2 mt-4 text-center">
                Hubo un error
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
