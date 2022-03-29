import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions en Redux
import { crearNuevoProductoAction } from "../actions/productoActions";

const NuevoProducto = () => {
  // Utilizar useDispatch y crea una funcion
  const dispatch = useDispatch();

  // Mandar a llamar el action de productoAction
  const agregarProducto = () => dispatch(crearNuevoProductoAction());

  // Cuando el usuario haga submit
  const submitNuevoProducto = (e) => {
    e.preventDefault();

    // Validar form

    // Eevisar que no hay errores

    // Crear nuevo producto
    agregarProducto();
  };

  return (
    <div className="row justify-content-center">
      <div col-md-8>
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>
            <form onSubmit={submitNuevoProducto}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                />
              </div>
              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold d-block w-100"
              >
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
