const mongoose = require('mongoose');

//unique validator pour empecher la création d'un user avec le meme mail
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  username: { type: String, required: true},
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true}
})

//permet d'appliquer uniquevalidator à notre schema de données
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);