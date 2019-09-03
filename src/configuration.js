import React, { Component, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import vegan from "./almond-milk.png";
import vegetarian from "./pizza.png";
import omnivore from "./vegan-burger.png";

const useStyles = makeStyles(theme => ({
  container: {
    color: "white",
    display: "flex",
    marginTop: "50px",
    textAlign: "center",
    fontSize: "7vh",
    "flex-direction": "column"
  },
  button: {
    backgroundColor: "#ffffff",
    margin: theme.spacing(1),
    width: "200px",
    alignContent: "center"
  },
  input: {
    display: "none"
  },
  bigAvatar: {
    margin: 10,
    width: 40,
    height: 30
  }
}));

const ConfMenu = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <p className="text"> ¿Qué dieta sigues?</p>
      <Button variant="contained" className={classes.button}>
        Omnivoro
        <Grid container justify="center" alignItems="center">
          <Avatar alt="Omnivoro" src={omnivore} className={classes.bigAvatar} />
        </Grid>
      </Button>

      <Button variant="contained" className={classes.button}>
        Vegetariano
        <Grid container justify="center" alignItems="center">
          <Avatar
            alt="Vegetarian"
            src={vegetarian}
            className={classes.bigAvatar}
          />
        </Grid>
      </Button>

      <Button variant="contained" className={classes.button}>
        Vegano
        <Grid container justify="center" alignItems="center">
          <Avatar alt="vegan" src={vegan} className={classes.bigAvatar} />
        </Grid>
      </Button>
    </div>
  );
};
export default ConfMenu;
