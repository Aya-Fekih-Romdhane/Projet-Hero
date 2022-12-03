const mongoose = require('mongoose');
const Hero = mongoose.model('Hero',{
    name: String,
    image:String,
    power:Number

})
module.exports = Hero;