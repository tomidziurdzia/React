import React, { Fragment, useEffect } from "react";
import Producto from "./Producto";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { obtenerProductosAction } from "../actions/productoActions";

const Productos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Consultar la APi
    const cargarProductos = () => {
      dispatch(obtenerProductosAction());
    };
    cargarProductos();
  }, []);

  // Obtener el state
  const productos = useSelector((state) => state.productos.productos);

  return (
    <Fragment>
      <h2 className="text-center my-5">Listado de Productos</h2>
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th className="text-center" scope="col">
              Nombre
            </th>
            <th className="text-center" scope="col">
              Precio
            </th>
            <th className="text-center" scope="col">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {productos.length === 0
            ? "No hay productos"
            : productos.map((producto) => (
                <Producto key={producto.id} producto={producto} />
              ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Productos;
