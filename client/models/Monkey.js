const mongoose = require("mongoose");

const monkeySchema = mongoose.Schema({
  title: {type: String, required: [true, "Please provide a title for this monkey"], maxlength: [30, "Title cannot be more than 30 characters"]},
  description: {type: String, required: [true, "Please provide a description for this monkey"], maxlength: [500, "Description cannot be more than 500 characters"]},
  imageUrl: {type: String, required: [true, "Please provide an image url for this monkey"]}
});

monkeySchema.methods.yell = function() {
  const greeting = this.title
  ? this.title + " OHOHHOHOHOOOHOHHOHOH"
  : "I have no name, but it shouldnt be like that";
  console.log(greeting);
}

export default mongoose.models.Monkey || mongoose.model("Monkey", monkeySchema);