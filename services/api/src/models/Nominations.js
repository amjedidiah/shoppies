// Module imports
const mongoose = require('mongoose');

// Data imports
const categories = require('../data/categories');

// Mongoose Schema
const {Schema} = mongoose;

// Mongoose User Schema
const NominationsSchema = new Schema(
    {
      category: {
        type: String,
        enum: categories,
      },
      email: {
        type: String,
        match:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        required: true,
        unique: true,
        trim: true,
      },
      isDeleted: {
        default: false,
        type: Boolean,
      },
      movieID: String,
    },
    {
      timestamps: true,
    },
);

NominationsSchema.methods.generateJWT = () => {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign(
      {
        email: this.email,
        id: this.id,
        exp: parseInt(expirationDate.getTime() / 1000, 10),
      },
      'secret',
  );
};

NominationsSchema.methods.toAuthJSON = () => {
  return {
    id: this.id,
    category: this.category,
    movieID: this.movieID,
    email: this.email,
  };
};

// Export Schema Model
module.exports = mongoose.model('Nominations', NominationsSchema);
