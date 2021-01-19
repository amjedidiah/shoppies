// Mongoose model imports
const Nominations = require('../../../models/Nominations');

// Data imports
const categories = require('../../../data/categories');

// Module export
module.exports = (req, res) => {
  const nomination = req.body;
  const {movieID, id, user} = nomination;

  const data = null;
  const error = true;

  // Required fields
  if (!movieID || !id || !user) {
    res.status(400).send({
      data,
      message: 'All fields are required',
      error,
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
  Nominations.findOne({isDeleted: false, category, user, movieID})
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
