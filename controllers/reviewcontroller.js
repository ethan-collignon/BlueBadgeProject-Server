    const Express = require('express');
    const router = Express.Router();
     
    const { ReviewModel } = require('../models');
     
   //Review Create//
    router.post('/create', async (req, res) => {
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
    });

    //Review Update//
    router.put("/update/:id", async (req, res) => {
        const { reviewTitle, nameOfMovie, entry, rating } = req.body.review
        try {
          const updateReview = await ReviewModel.update({ reviewTitle, nameOfMovie, entry, rating },
            { where: {id: req.params.id } })
          res.status(200).json({ message: "updated successfully", updateReview })
      
        } catch (err) {
          res.status(500).json({ message: "update failed", updateReview })
      
        };
      });

    //Review Delete//
    router.delete("/delete/:id", async (req, res) => {
        try {
            const query = {
                where: {
                    id: req.params.id
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