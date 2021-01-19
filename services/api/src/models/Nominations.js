// Module imports
const mongoose = require('mongoose');


// Mongoose Schema
const {Schema} = mongoose;

// Mongoose User Schema
const NominationsSchema = new Schema(
    {
      imdbID: String,
      isDeleted: {
        default: false,
        type: Boolean,
      },
      userID: String,
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
        id: this.id,
        exp: parseInt(expirationDate.getTime() / 1000, 10),
      },
      'secret',
  );
};

NominationsSchema.methods.toAuthJSON = () => {
  return {
    id: this.id,
    imdbID: this.imdbID,
    userID: this.userID,
  };
};

// Export Schema Model
module.exports = mongoose.model('Nominations', NominationsSchema);
