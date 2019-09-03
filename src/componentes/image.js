import React, { Component, Fragment } from "react";
import ahogada from "./ahogada.jpg";
export class Imagen extends Component {
  render() {
    return (
      <Fragment>
        <p class="text"> hola hola chikibaiby </p>{" "}
        <img src={ahogada} width="250px" height="150px" alt="Logo" />
      </Fragment>
    );
  }
}
export default Imagen;
