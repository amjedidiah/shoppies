// Mongoose model imports
const Nominations = require('../../../models/Nominations');

// Module export
module.exports = (req, res) => {
  const nomination = req.query;
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

  // Check if nomination exists
  Nominations.find({isDeleted: false})
      .then((nominations) => {
        const found = nominations
            .find((n) => n.userID === userID && n.imdbID === imdbID);

        if (!found) {
          return res.status(404).send({
            data,
            message: 'Nomination not found',
            error,
          });
        }

        return Nominations.update(
            {imdbID, isDeleted: false, userID},
            {isDeleted: true},
        )
            .then(async () =>
              res.status(200).send({
                data: nominations.filter(({_id}) => _id !== found._id),
                message: 'Nomination deleted successfully',
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
