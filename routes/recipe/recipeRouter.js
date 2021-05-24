var express = require('express');
var router = express.Router();

var recipeController = require('./controller/recipeController')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    test:true
  });
});

router.get('/get-all-recipe', function (req, res){
  recipeController.getAllRecipe(function(err, payload){
    if (err){
      res.status(500).json({message:"Error", error:err})
    } else {
      res.json({message:"Success", data:payload})
    }
  })
})

router.post('/create-recipe', function (req, res){
  recipeController.createRecipe(req.body, function (err, payload){
    if (err){
      res.status(500).json({message:"Error", error:err})
    } else {
      res.json({message:"Success", data:payload})
    }
  })
})

module.exports = router;
