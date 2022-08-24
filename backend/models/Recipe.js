const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.Types.Objectid,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  timeInMinutes: {
    type: Number,
    required: true,
  },
  image: {
    url: String,
    filename: String,
  },
  ingredients: [
    {
      id: mongoose.Schema.Types.ObjectId,
      quantity: Number,
      unit: String,
      required: true,
    },
  ],
  instructions: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
  ],
});

module.exports = mongoose.model('Recipe', RecipeSchema);
