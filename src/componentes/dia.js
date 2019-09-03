import React from "react";
//import ahogada from "../assets/ahogada.jpg";
import gyro from "../images/Gyros.jpg";
//este componente necesitará de 3 variables, una que le pase la img, el nombre del dia y el del platillo
//este componente necesitará de 3 variables, una que le pase la img, el nombre del dia y el del platillo

/*const clases = makeStyles(theme => ({
  container: { position: "relative", textAlign: "center", color: "white" },
  text: {
    position: "absolute",
    top: "50",
    left: "50%"
  }
}));*/

const Dia = ({ nombreDia, platilloNombre, platilloFoto }) => {
  return (
    <div className="container">
      <img src={platilloFoto} width="100%" alt="ahogada" />
      <div className="text" id="dia">
        {nombreDia}
      </div>
      <div className="text">
        <a href="./dia/" className="diaLink">
          {platilloNombre}
        </a>
      </div>
    </div>
  );
};

export default Dia;
