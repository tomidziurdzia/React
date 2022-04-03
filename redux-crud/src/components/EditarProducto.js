import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editarProductoAction } from "../actions/productoActions";

const EditarProducto = () => {
  // Nuevo state de producto
  const [producto, guardarProducto] = useState({
    nombre: "",
    precio: "",
  });
  // producto a editar
  const productoeditar = useSelector((state) => state.productos.productoeditar);

  // Llenar el state auto
  useEffect(() => {
    guardarProducto(productoeditar);
  }, [productoeditar]);

  // Leer los datos del formulario
  const onChangeFormulairo = (e) => {
    guardarProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const { nombre, precio, id } = producto;
  const submitEditarProducto = (e) => {
    e.preventDefault();
    editarProductoAction();
  };

  return (
    <div className="row justify-content-center">
      <div col-md-8>
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Nuevo Producto
            </h2>
            <form onSubmit={submitEditarProducto}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={onChangeFormulairo}
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
                  onChange={onChangeFormulairo}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold d-block w-100"
              >
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarProducto;
