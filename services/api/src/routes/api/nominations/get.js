// Mongoose model imports
const Nominations = require('../../../models/Nominations');

// Module export
module.exports = async (req, res) =>
  Nominations.find({isDeleted: false})
      .then((data) =>
      data.length > 0 ?
        res.status(200).send({
          data,
          message: 'Nominations fetched successfully',
          error: false,
        }) :
        res.status(404).send({
          data: null,
          message: 'No nominations found',
          error: true,
        }),
      )
      .catch((err) =>
        res.status(500).send({
          data: null,
          message: err || 'Internal server error',
          error: true,
        }),
      );
