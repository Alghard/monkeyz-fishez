const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');

const monkeyRoutes = require('./routes/monkey');
const userRoutes = require('./routes/user');

require('dotenv/config'); //!! allow acces to .env file



//!! DB connection
mongoose.connect(process.env.DB_URI)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use(cors());

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

// Ici je dis à mon serveur que pour toute requête envoyé sur "serveradress"/api/monkeys il doit utiliser les routes mises en places dans monkeyRoutes
app.use('/api/monkeys', monkeyRoutes);
app.use('/api/auth', userRoutes);

app.use((req, res, next) => {
  console.log('Réponse envoyée avec succès !');
});


// comme sur react on export ce qui doit être exécuté 
module.exports = app;