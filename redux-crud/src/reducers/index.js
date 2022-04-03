import { combineReducers } from "redux";
import productosReducer from "./productosReducer";
import alertarReducer from "./alertarReducer";

export default combineReducers({
  productos: productosReducer,
  alerta: alertarReducer,
});
