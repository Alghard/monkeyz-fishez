const express = require ('express');
const mongoose = require("mongoose");
const cors = require('cors');
const app= express();
const username = "julienvarela"; //!! A déplacer
const password = "vZLBQiX1dF2Ye7Ed"; //!! A déplacer
const db = mongoose.connection;
const Monkey = require("./models/monkey");

const PORT = 3001;

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${username}:${password}@cluster0.xiy2i40.mongodb.net/monkeys_fishes?retryWrites=true&w=majority&appName=Cluster0`;
const mongo = {
  uri: `${uri}`,
};

mongoose.connect(mongo.uri)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(cors());

app.get("/api/home", (req, res, next) => {
  res.json({ message: "Hello world !", monkey: ["sadMonke", "happyMonke", "blaiseMonke"]});
});


app.listen(PORT, () =>{
  console.log(`Server started on port ${PORT}`);
})
