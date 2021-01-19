// Module imports
const mongoose = require('mongoose');


// Mongoose Schema
const {Schema} = mongoose;

// Mongoose User Schema
const NominationsSchema = new Schema(
    {
      isDeleted: {
        default: false,
        type: Boolean,
      },
      movieID: String,
      user: {
        type: String,
        required: true,
        unique: false,
        trim: true,
      },
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
        user: this.user,
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
    user: this.user,
  };
};

// Export Schema Model
module.exports = mongoose.model('Nominations', NominationsSchema);
