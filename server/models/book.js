let mongoose = require("mongoose");

// create a model class
let surveyModel = mongoose.Schema(
  {
    name: String,
    titleSurvey: String,
    published: String,
    description: String,
    price: Number,
  },
  {
    collection: "surveys",
  }
);

module.exports = mongoose.model("Survey", surveyModel);
