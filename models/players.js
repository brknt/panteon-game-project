
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({

    playerId :{
        type:Schema.Types.ObjectId,
        require:true
    },
    money:{
        type:Number,
        require:true
    },
    name :{
        type:String,
        require:true
    },
    country :{
        type:String,
        require:true
    }

},{timestamps:true});

const Player = mongoose.model('Player',playerSchema);
module.exports = Player