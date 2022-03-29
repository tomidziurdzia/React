import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Productos from "./components/Productos";
import NuevoProducto from "./components/NuevoProducto";
import EditarProducto from "./components/EditarProducto";
function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-5">
        <Routes>
          <Route exact path="/" element={<Productos />} />
          <Route exact path="/productos/nuevo" element={<NuevoProducto />} />
          <Route
            exact
            path="/productos/editar/:id"
            element={<EditarProducto />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
