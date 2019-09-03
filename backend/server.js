//para encender el backend necesitas encender el server y la db
//db se enciende con el comando mongod (debes dejar una terminal abierta luego de ejecutar eso)
//el servidor es este archivo así que con el npm start basta
const mongoClient = require("mongodb");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const generateRandom = (min, max) => {
  return Math.ceil(Math.random() * (max - min) + min);
};

app.use(bodyParser.json());

app.get("/api/week", async (req, res) => {
  try {
    const client = await mongoClient.connect("mongodb://localhost:27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    const db = client.db("easyfood");
    //genera ids de las recetas de manera aleatoria
    const idsRecetas = [
      generateRandom(1, 4),
      generateRandom(1, 4),
      generateRandom(1, 4),
      generateRandom(1, 4),
      generateRandom(1, 4)
    ];
    /*Esto no funcion->Investigar por qué?
    const Semanarecetas = idsRecetas.map(async myid => {
      const i = await db.collection("recetas").findOne({ id: myid });
      console.log(i);
      return i;
    });*/

    //debe de hacer 5 peticiones con el nombre y la imagen
    const Semanarecetas = [
      await db.collection("recetas").findOne({ id: idsRecetas[0] }),
      await db.collection("recetas").findOne({ id: idsRecetas[1] }),
      await db.collection("recetas").findOne({ id: idsRecetas[2] }),
      await db.collection("recetas").findOne({ id: idsRecetas[3] })
    ];
    //esto si jala a diferencia de la otra->investigar porque
    //const articleInfo = await db.collection('recetas');
    //luego las debe de enviar como un arrray de objetos
    //const result = await db.collection("recetas").findOne({ id: 1 });
    // console.log(Semanarecetas);
    res.status(200).json(Semanarecetas);
    client.close();
  } catch (error) {
    res.status(500).json({ "Ups! ": error });
  }
});

app.get("/dia/:comida", async (req, res) => {
  //hacer una petición con la receta y la foto

  try {
    //conecta con db
    const client = await mongoClient.connect("mongodb://localhost:27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    const db = client.db("easyfood");

    console.log(req.params.comida);
    //hace un request para obtener los datos del platillo que le pidieron
    const platillo = await db
      .collection("recetas")
      .findOne({ nombre: req.params.comida });
    res.status(200).json(platillo);
    client.close();
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(8000, () => {
  console.log("yare yare daze");
});
