//Bienvenu dans le contrôler, c'est ici qu'on va définir les fonctions qu'on a besoin, dans notre cas le CRUD( créateur, read, update, delete)

const Monkey = require('../models/Monkey');


//fonction pour ajouter un monkey en bdd
//on a toujours besoin des paramètres req res et next(pas sur du next à verifier) req pour requête c'est à dire la demande côté front/client et res pour la réponse du serveur 

exports.addMonkey = (req, res, next) => {
// delete body ici va servir à nettoyer les données reçu par le serveur, en gros si il y avait déjà une id de monkey enregistré dans le body on va la supprimer pour pas créer de pb
  delete req.body._id;

// on créer un nouvel objet Monkey basé sur son modèle en récupèrant toutes les infos transmises dans le body du serveur c'est à dire le formulaire d'ajout 
  const monkey = new Monkey({
    ...req.body
  });

// save va enregistrer le monkey en bdd 
  monkey.save()

    .then(() =>
//on envoi un message de validation si tout s'est bien passé 
 res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error =>
//sinon on envoi un message d'erreur 
 res.status(400).json({ error }));
};


// ici la seul chose qui va changer c'est qu'on va avoir besoin de l'id du monkey pour modifier supprimer ou afficher
exports.modifyMonkey = (req, res, next) => {

//c'est dans les paramètres de cette fonction qu'on va demander l'id qui est qq part dans le body
  Monkey.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Monkey mis à jour' }))
    .catch(error => res.status(400).json({ error }))
};

exports.findAllMonkey = (req, res, next) => {
  Monkey.find()
    .then(monkeys => res.status(200).json(monkeys))
    .catch(error => res.status(400).json({ error }));
};

exports.findOneMonkey = (req ,res ,next) => {
  Monkey.findOne({ _id: req.params.id })
    .then(monkey => res.status(200).json(monkey))
    .catch(error => res.status(404).json({ error }))
};

exports.deleteOneMonkey = (req, res, next) => {
  Monkey.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Monkey deleted :(' }))
    .catch(error => res.status(400).json({ error }))
};