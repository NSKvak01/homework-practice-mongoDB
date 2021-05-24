const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    recipeName:String
})

module.exports = mongoose.model("recipe", recipeSchema)