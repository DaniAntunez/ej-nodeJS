const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CharacterSchema = new Schema(
    {
        name: {type: String, required: true},
        surname: {type: String, required: true},
        image: {type: String, required: false, default: "https://res.cloudinary.com/dolhtagfq/image/upload/v1679484660/Simpsons/losSimpsons_ua0bbq.png"},
    },{
        timestamps: true
    }
)

const Character = mongoose.model('character', CharacterSchema);
module.exports = Character;