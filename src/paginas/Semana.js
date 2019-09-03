import React, { Fragment, useState, useEffect } from "react";
import ahogada from "../assets/ahogada.jpg";
import logo from "../assets/book.png";
import Dia from "../componentes/dia";
import Opciones from "../componentes/SemanaMenu";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  container: {
    padding: "100px"
  }
}));

const Semana = () => {
  //receta dias es nuestra request con todas las recetas de la semana
  const [RecetaDias, setRecetaDias] = useState([
    {
      id: "",
      nombre: "",
      ingredientes: [],
      procedimiento: [],
      imagen: "../images/Gyros.jpg"
    },
    {
      id: "",
      nombre: "",
      ingredientes: [],
      procedimiento: [],
      imagen: "Gyros.jpg"
    },
    {
      id: "",
      nombre: "",
      ingredientes: [],
      procedimiento: [],
      imagen: "Gyros.jpg"
    },
    {
      id: "",
      nombre: "",
      ingredientes: [],
      procedimiento: [],
      imagen: "Gyros.jpg"
    }
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("/api/week");
      const body = await result.json();
      setRecetaDias(body);
      // console.log(body);
    };
    fetchData();
  }, []);

  const lunes = RecetaDias[0];
  const martes = RecetaDias[1];
  const miercoles = RecetaDias[2];
  const jueves = RecetaDias[3];
  //  console.log(lunes);
  //console.log(Object.prototype.toString.call(lunes) == "[object Array]");
  console.log("1" + lunes.imagen + " mide: " + lunes.imagen.length);
  console.log(
    "2" + "./images/Gyros.jpg" + " mide: " + "./images/Gyros.jpg".length
  );
  console.log(lunes.imagen);
  const imgl = lunes.imagen;
  return (
    <Fragment>
      <div id="header">
        <img src={logo} id="lheader" width="50px" height="45px" alt="lonche" />
      </div>
      <div>
        <Opciones style={useStyles.container} />
        <Dia
          nombreDia={"Lunes"}
          platilloNombre={"Gyros"}
          platilloFoto={require("../images/Gyros.jpg")}
        />
        <Dia
          nombreDia={"Martes"}
          platilloNombre={martes.nombre}
          platilloFoto={require("../images/Burritos.jpg")}
        />
        <Dia
          nombreDia={"Miercoles"}
          platilloNombre={"Albondigas"}
          platilloFoto={require("../images/Albondigas.jpg")}
        />
        <Dia
          nombreDia={"Jueves"}
          platilloNombre={"Pollo en hiervas"}
          platilloFoto={require("../images/Pollo-en-hiervas.jpg")}
        />
        <Dia
          nombreDia={"Viernes"}
          platilloNombre={"Lunes"}
          platilloFoto={ahogada}
        />
        <Dia
          nombreDia={"Sabado"}
          platilloNombre={"Lunes"}
          platilloFoto={ahogada}
        />
        <Dia
          nombreDia={"Domingo"}
          platilloNombre={"Lunes"}
          platilloFoto={ahogada}
        />
      </div>
    </Fragment>
  );
};

export default Semana;
