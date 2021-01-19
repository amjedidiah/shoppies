// Mongoose model imports
const Nominations = require('../../../models/Nominations');

// Module export
module.exports = (req, res) => {
  const nomination = req.body;
  const {imdbID, userID} = nomination;

  const data = null;
  const error = true;

  // Required fields
  if (!imdbID || !userID) {
    return res.status(400).send({
      data,
      message: 'All fields are required',
      error,
    });
  }

  // Check if nomination already exists
  Nominations.find({isDeleted: false})
      .then((nominations) => {
        const found = nominations.find(
            (nom) => nom.userID === userID && nom.imdbID === imdbID,
        );

        if (found) {
          return res.status(409).send({
            data,
            message: 'You have already nominated this movie',
            error,
          });
        }

        const userNominations = nominations.filter(
            (nom) => nom.userID === userID && nom.imdbID === imdbID,
        );

        if (userNominations.length === 5) {
          return res.status(410).send({
            data,
            message: 'You have made the maximum number of nominations',
            error,
          });
        }

        const finalNomination = new Nominations(nomination);

        // Save nomination && return response
        return finalNomination
            .save()
            .then(async () =>
              res.status(201).send({
                data: [...nominations, finalNomination],
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
      .catch((err) => {
        console.log(err);
        return res.status(500).send({
          data,
          message: err || 'Internal server error',
          error,
        });
      });
};
