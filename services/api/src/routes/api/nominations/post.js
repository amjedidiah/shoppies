// Mongoose model imports
const Nominations = require('../../../models/Nominations');
const validator = require('validator');

// Data imports
const categories = require('../../../data/categories');

// Module export
module.exports = (req, res) => {
  const nomination = req.body;
  const {category, movieID, id, email} = nomination;

  console.log(categories);

  const data = null;
  const error = true;

  // Required fields
  if (!category || !movieID || !id || !email) {
    res.status(400).send({
      data,
      message: 'All fields are required',
      error,
    });
  }

  // Email validation
  if (!validator.isEmail(email)) {
    res.status(401).send({
      data,
      message: 'Email is invalid',
      error: true,
    });
  }

  // Category validation
  if (!categories.includes(category)) {
    res.status(402).send({
      data,
      message: 'Invalid category',
      error,
    });
  }

  // Check if nomination already exists
  Nominations.findOne({isDeleted: false, category, email, movieID})
      .then((found) => {
        if (found) {
          return res.status(409).send({
            data,
            message: 'You have already nominated this movie for this category',
            error,
          });
        }

        const finalNomination = new Nominations(nomination);

        // Save nomination && return response
        return finalNomination
            .save()
            .then(async () =>
              res.status(201).send({
                data: nomination,
                message: 'Movie nominated successfully',
                error: false,
              }),
            )
            .catch((err) =>
              res.status(500).send({
                data,
                message: err || 'Internal server error',
                error,
              }),
            );
      })
      .catch((err) =>
        res.status(500).send({
          data,
          message: err || 'Internal server error',
          error,
        }),
      );
};
