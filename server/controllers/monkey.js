const Monkey = require('../models/Monkey');

exports.addMonkey = (req, res, next) => {
  delete req.body._id;
  const monkey = new Monkey({
    ...req.body
  });
  monkey.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.modifyMonkey = (req, res, next) => {
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