import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    color: "red",
    marginRight: "10px",
    display: "block"
  },
  container: {
    margin: "100px"
  }
}));

const Opciones = () => {
  return (
    <div className="containers" style={useStyles.container}>
      <a class="boton" href="" className="button">
        Configuración
      </a>
      <a class="boton" href="" className="button">
        Tu Semana
      </a>

      <a class="boton" href="" className="button">
        Descubre
      </a>
    </div>
  );
};

export default Opciones;
