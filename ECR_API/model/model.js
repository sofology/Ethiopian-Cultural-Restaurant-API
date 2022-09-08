const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    description: {
        type: String,
        default : ""
    },
    price: {
        type: Number,
        required : true
    }
})

module.exports = mongoose.model('Data', dataSchema)
