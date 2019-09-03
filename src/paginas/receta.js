import React from "react";
import tempImg from "../images/Pollo-en-hiervas.jpg";
import arrow from "../assets/arrow.png";
import logo from "../assets/book.png";
import RecetaText from "../componentes/ingredientesProcedimiento.js";
import "../styles/recetaPage.css";
//algoritmo que encuentre un número en una cadena de texto y lo múltiplique por X sí piensas cocinar para más personas
const Ingredientes = [
  "Limones - 2 piezas",
  "Jugo de limón - 2 taazas",
  "Semillas de chile - 1 cucharada",
  "Romero fresco - 3 ramas",
  "Ajo - 3 dientes",
  "Orégano fresco - 3 ramas",
  "Mantequilla - 180 gramos",
  "Tomillo fresco - 2 cucharadas",
  "Sal - 1 cucharadas",
  "Pechuga de pollo - 1 pieza",
  "Papas - 2 piezas",
  "Aceitunas - 1 taza",
  "Pimienta negra molida - 1 cucharada"
];

const Procedimiento = [
  "Picamos finamente el romero fresco, el ajo y el orégano. Derretimos la mantequilla.",
  "En un tazón mezclamos el jugo de limón, el chile quebrado, el romero fresco picado, los dientes de ajo picados, los oréganos frescos, el tomillo fresco, la mantequilla derretida. Rallamos los dos limones y también incorporamos a nuestro marinado. Mezclamos muy bien hasta que todo quede integrado.",
  "Retiramos toda la piel y huesos al pollo y untamos nuestra mezcla anterior. Dejamos marinando.",
  "Cortamos las papas al gusto y colocamos en la charola a como de cama, añadimos aceitunas y ponemos las pechugas marinadas sobre las papas. Añadimos más marinado a toda nuestra charola",
  "Horneamos nuestra charola a 220° Centígrados durante 5 minutos.",
  "Transcurrido ese tiempo, bajamos la temperatura a 170° C., y dejamos hornear durante 45 minutos o hasta que la pechuga esté completamente cocida por dentro, para ello podemos comprobar introduciendo un palillo, el cual debe salir seco y limpio.",
  "Servimos acompañado con papas y aceitunas horneadas."
];

const Receta = ({ foodImg, foodName }) => {
  return (
    <div>
      <div id="header">
        <a href="../week">
          <img src={arrow} width="50px" id="arrow" />
        </a>
        <img src={logo} id="lheader" width="50px" height="45px" alt="lonche" />
      </div>

      <img src={tempImg} id="food-image" width="100%" alt={foodName} />
      <div className="recipeOpt">
        <h1 id="platilloName">Pollo en hiervas </h1>
        <div className="botones">
          <button id="share" width="50px" height="45px">
            Compartir
          </button>
          <button id="rewind" width="100px" height="45px">
            Cambiar Platillo
          </button>
        </div>
      </div>
      <RecetaText Procedimiento={Procedimiento} Ingredientes={Ingredientes} />
    </div>
  );
};

export default Receta;
