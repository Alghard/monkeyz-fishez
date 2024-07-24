//fichier router qui sert à rediriger les requêtes vers leur fonction respective

const express = require('express');

// le contrôleur comme en php qui va interagir avec le modèle de monkey
const monkeyCtrl = require('../controllers/monkey');

const router = express.Router();



//ici on dit au router que pour chaque requête de type POST, comme un formulaire par ex, d'utiliser les fonction addMonkey du controller
router.post('/', monkeyCtrl.addMonkey);

//notons que avant de lui dire on spécifi toujours le chemin, ici "/" 
//ce caractère vient se mettre juste après la route qu'on a indiqué dans app.js 
//route qui commençait par "serverAdress"/api/monkeys
router.get('/', monkeyCtrl.findAllMonkey);


//et donc pour chaque route suivi d'un id on va exécuter la fonction de findOneMonkey
router.get('/:id', monkeyCtrl.findOneMonkey);

//Très important l'id du coup
//Requête PUT permet de modifier un monkey 
router.put('/:id', monkeyCtrl.modifyMonkey);

router.delete('/:id', monkeyCtrl.deleteOneMonkey);


module.exports = router;