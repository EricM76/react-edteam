import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

const root = document.getElementById("root");

//const element = React.createElement(componente,propiedades,hijos)

/* elemento creado con JS y HTML */
//const element = React.createElement("h1",{className : "h1 text-primary"},"Hola mundo")

/* elemento creado con JSX 
ReactDOM.render(<h1>Hola mundo con JSX</h1>,root)*/

ReactDOM.render(<App />, root);
