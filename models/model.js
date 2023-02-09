const mongoose = require('mongoose')


const EcomSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    }

})

module.exports = mongoose.model('Ecom',EcomSchema)