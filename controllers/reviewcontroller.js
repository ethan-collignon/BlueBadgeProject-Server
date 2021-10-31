const Express = require('express');
const router = Express.Router();
const { ReviewModel } = require('../models');
const validateJWT = require('../middleware/validate-jwt');

//Review Create//
router.post('/create', validateJWT, async (req, res) => {
  const { reviewTitle, nameOfMovie, entry, rating } = req.body.review;
  const { id } = req.user;
  const reviewEntry = {
    reviewTitle,
    nameOfMovie,
    entry,
    rating,
    id
  }
  try {
    const newReview = await ReviewModel.create(reviewEntry);
    res.status(200).json(newReview);
  } catch (err) {
    res.status(500).json({ error: err });
  }
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
router.get("/:id", validateJWT, async (req, res) => { 
  let { id } = req.id; //changed req.params from req.user
  try {
    const userReviews = await ReviewModel.findAll({
      where: {
        id,
      }
    });
    res.status(200)
    .json(userReviews);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});


    //Review Update// !Can't get this to work in postman
    router.put("/update/:id", async (req, res) => {
        const { reviewTitle, nameOfMovie, entry, rating } = req.body.review;
        try {
          const updateReview = await ReviewModel.update({ reviewTitle, nameOfMovie, entry, rating },
            { where: {id: req.params.id } })
          res.status(200).json({ message: "updated successfully", updateReview })
      
        } catch (err) {
          res.status(500).json({ message: "update failed", updateReview })
      
        };
      });

    //Review Delete// !Can't get this to work in postman
    router.delete("/delete/:id", async (req, res) => {
        try {
            const query = {
                where: {
                    id: req.params.id,
                    owner_id: req.user.id
                }
            }
            await ReviewModel.destroy(query)
            res.status(200).json({
                message: "Review has successfully been deleted"
            });
        } catch (err) {
            res.status(500).json({
                message: "Error: Review has not been deleted"
            })
        }
    })
      

     module.exports = router;
