const mongoose = require("mongoose");

const monkeySchema = mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  imageUrl: {type: String, required: true}
});

monkeySchema.methods.yell = function() {
  const greeting = this.title
  ? this.title + " OHOHHOHOHOOOHOHHOHOH"
  : "I have no name, but it shouldnt be like that";
  console.log(greeting);
}

module.exports = mongoose.model('monkey', monkeySchema);