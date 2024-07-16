const express = require('express');
const mongoose = require("mongoose");
const username = "julienvarela"; //!! A déplacer
const password = "vZLBQiX1dF2Ye7Ed"; //!! A déplacer
const uri = `mongodb+srv://${username}:${password}@cluster0.xiy2i40.mongodb.net/monkeys_fishes?retryWrites=true&w=majority&appName=Cluster0`;
const mongo = {
  uri: `${uri}`,
};

const Monkey = require('./models/monkey')

mongoose.connect(mongo.uri)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use(express.json());

app.use((req, res, next) => {
   //!! setHeader permet d'accéder à notre API depuis n'importe quelle origine ( '*' )
  res.setHeader('Access-Control-Allow-Origin', '*');
  //!! d'ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With , etc.) ;
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  //!! d'envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.).
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use((req, res, next) => {
  console.log('Requête reçue !');
  next();
});

app.use((req, res, next) => {
  res.status(201);
  next();
});

app.use('/api/monkeys', (req, res, next) => {
  Monkey.find()
    .then(monkeys => res.status(200).json(monkeys))
    .catch(error => res.status(400).json({ error }));
});

app.use((req, res, next) => {
  console.log('Réponse envoyée avec succès !');
});



module.exports = app;