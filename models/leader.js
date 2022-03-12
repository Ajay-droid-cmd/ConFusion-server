const mongoose = require('mongoose')
const Schema = mongoose.Schema;
//TODO make the leader Schema and model
/**
 * {
      "name": "Peter Pan",
      "image": "images/alberto.png",
      "designation": "Chief Epicurious Officer",
      "abbr": "CEO",
      "description": "Our CEO, Peter, . . .",
      "featured": false
}
 */
const leaderSchema = new Schema({
    name:{
        type:String,
        required : true,
        unique : true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    abbr:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        required:true
    },
    featured:{
        type:Boolean,
        default: false,
    }
},{
    timestamp:true
})

var Leaders = mongoose.model('Leader',leaderSchema);
module.exports = Leaders;