// Mongoose model imports
const Nominations = require('../../../models/Nominations');

// Module export
module.exports = (req, res) => {
  const nomination = req.body;
  const {movieID, user} = nomination;

  const data = null;
  const error = true;

  // Required fields
  if (!movieID || !user) {
    res.status(400).send({
      data,
      message: 'All fields are required',
      error,
    });
  }

  // Category validation
  // if (!categories.includes(category)) {
  //   res.status(402).send({
  //     data,
  //     message: 'Invalid category',
  //     error,
  //   });
  // }

  // Check if nomination already exists
  Nominations.find({isDeleted: false})
      .then((nominations) => {
        const found = nominations.find(
            (nom) => nom.user === user && nom.movieID === movieID,
        );

        console.log(found);

        if (found) {
          return res.status(409).send({
            data,
            message: 'You have already nominated this movie',
            error,
          });
        }


        const finalNomination = new Nominations(nomination);

        console.log(finalNomination, nominations, found);

        // Save nomination && return response
        return finalNomination
            .save()
            .then(async () =>
              res.status(201).send({
                data: nominations,
                message: 'Movie nominated successfully',
                error: false,
              }),
            )
            .catch((err) =>{
              console.log('her', err);
              return res.status(500).send({
                data,
                message: err || 'Internal server error',
                error,
              })
              ;
            },
            );
      })
      .catch((err) =>{
        console.log(err);
        return res.status(500).send({
          data,
          message: err || 'Internal server error',
          error,
        })
        ;
      },
      );
};
