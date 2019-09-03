import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Receta from "./paginas/receta";
import "./App.css";
import Imagen from "./assets/ahogada.jpg";
import Login from "./paginas/login";
//import ConfMenu from "./configuration";
//import Login from "./login";
//import color from "@material-ui/core/colors/green";
import Semana from "./paginas/Semana";
class App extends Component {
  platillos = ["ahogada.jpg"];
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/week" component={Semana} exact />
          <Route path="/dia/:comida" component={Receta} exact />
          <Route path="/options" component="" exact />
        </Switch>
      </Router>
    );
  }
}

/*<Receta foodImg={Imagen} />;
 */

export default App;
