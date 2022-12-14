const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'IngredientCategory',
    required: true,
  },
});

module.exports = mongoose.model('Item', ItemSchema);
