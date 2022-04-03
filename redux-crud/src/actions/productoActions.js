import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_ERROR,
  DESCARGA_PRODUCTOS_EXITO,
  PRODUCTO_ELIMINADO_ERROR,
  PRODUCTO_ELIMINADO_EXITO,
  OBTENER_PRODUCTO_ELIMINAR,
  OBTENER_PRODUCTO_EDITAR,
  PRODUCTO_EDITADO_EXITO,
  PRODUCTO_EDITADO_ERROR,
  COMENZAR_EDICION_PRODUCTO,
} from "../types";

import clienteAxios from "../config/axios";
import Swal from "sweetalert2";

// Crear nuevos productos
export function crearNuevoProductoAction(producto) {
  return async (dispatch) => {
    dispatch(agregarProducto());

    try {
      // insertar en la API
      await clienteAxios.post("/productos", producto);

      // Si todo sale bien actualizar el state
      dispatch(agregarProductoExito(producto));

      // Alerta
      Swal.fire("Correcto", "El producto se agrego correctamente", "success");
    } catch (error) {
      console.log(error);

      // Si hay un error cambiar el state
      dispatch(agregarProductoError(true));

      // Alerta de error
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error, intenta de nuevo",
      });
    }
  };
}

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
  payload: true,
});

// Si el producto se guarda en la base de datos
const agregarProductoExito = (producto) => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto,
});

// Si hubo error
const agregarProductoError = (estado) => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: estado,
});

// Funcion que descarga los productos de la BD
export function obtenerProductosAction() {
  return async (dispatch) => {
    dispatch(descargarProductos());

    try {
      const respuesta = await clienteAxios.get("/productos");
      dispatch(descargaProductosExitosa(respuesta.data));
    } catch (error) {
      dispatch(descargarProductosError());
    }
  };
}

const descargarProductos = () => ({
  type: COMENZAR_DESCARGA_PRODUCTOS,
  payload: true,
});

const descargaProductosExitosa = (productos) => ({
  type: DESCARGA_PRODUCTOS_EXITO,
  payload: productos,
});

const descargarProductosError = () => ({
  type: DESCARGA_PRODUCTOS_ERROR,
  payload: true,
});

// Seelcciona y elimina el producto
export function borrarProductoAction(id) {
  return async (dispatch) => {
    dispatch(obtenerProductoElimiar(id));
    try {
      await clienteAxios.delete(`/productos/${id}`);
      dispatch(eliminarProductoExito());

      // SE elimina, mostrar alerta
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
    } catch (error) {
      console.log(error);
      dispatch(eliminarProductoError());
    }
  };
}

const obtenerProductoElimiar = (id) => ({
  type: OBTENER_PRODUCTO_ELIMINAR,
  payload: id,
});

const eliminarProductoExito = () => ({
  type: PRODUCTO_ELIMINADO_EXITO,
});

const eliminarProductoError = () => ({
  type: PRODUCTO_ELIMINADO_ERROR,
  payload: true,
});

// COLOCAR PRODUCTO EN EDICION
export function obtenerProductoEditar(producto) {
  return (dispatch) => {
    dispatch(obtenerProductoEditarAction(producto));
  };
}

const obtenerProductoEditarAction = (producto) => ({
  type: OBTENER_PRODUCTO_EDITAR,
  payload: producto,
});

// Edita un registro en la api y state
export function editarProductoAction(producto) {
  return async (dispatch) => {
    dispatch(editarProducto(producto));
    try {
      await clienteAxios.put(`/productos/${producto.id}`, producto);
      dispatch(editarProductoExito(producto));
    } catch (error) {}
  };
}

const editarProducto = () => ({
  type: COMENZAR_DESCARGA_PRODUCTOS,
});

const editarProductoExito = (producto) => ({
  type: PRODUCTO_EDITADO_EXITO,
  payload: producto,
});
