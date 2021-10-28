    const Express = require('express');
     const router = Express.Router();
    const validateJWT = require("../middleware/validate-jwt");
     
    const {ReviewModel} = require('../models');

     router.get('/practice', validateJWT, (req, res) => {
        res.send('Hey!! This is a practice route!')
     });
     
   //Review Create//
    router.post('/create', validateJWT, async (req, res) => {
      const { reviewTitle, nameOfMovie, entry, rating } = req.body.review;
      const { id } = req.user;
      const reviewEntry = {
        reviewTitle,
        nameOfMovie,
        entry,
        rating,
        owner: id
      }
      try {
        const newReview = await ReviewModel.create(reviewEntry);
        res.status(200).json(newReview);
      } catch (err) {
        res.status(500).json({ error: err });
      }
      ReviewModel.create(reviewEntry)
    });
      






     module.exports = router;