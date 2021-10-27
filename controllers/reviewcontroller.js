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
      
//Get All Reviews//
     router.get("/", async (req, res) => {
         try {
            const entries = await ReviewModel.findAll();
            res.status(200).json(entries);
          } catch (err) {
            res.status(500).json({ error: err });
          }
        });

//Get reviews by user//
  //?Placeholder 
    router.get("/mine", validateJWT, async (req, res) => {
          let { id } = req.user;
          try {
            const userReviews = await ReviewModel.findAll({
              where: {
                user: id, //!Doesn't return individual user review
              }
            });
            res.status(200).json(userReviews);
          } catch (err) {
            res.status(500).json({ error: err });
          }
        });
    //?Placeholder



     module.exports = router;