import "../styles/recetaT.css";
import React from "react";
const RecetaText = ({ Ingredientes, Procedimiento }) => {
  return (
    <div className="main">
      <div className="contenedor Ingredientes">
        <h1>Ingredientes</h1>
        <ul className="nomargin">
          {Ingredientes.map(x => {
            return <li>{x}</li>;
          })}
        </ul>
      </div>
      <div className="contenedor Procedimientos">
        <h1>Receta</h1>
        {Procedimiento.map(item => {
          return <p className="nomargin">{item}</p>;
        })}
        <div id="closing" />
      </div>
    </div>
  );
};

export default RecetaText;
