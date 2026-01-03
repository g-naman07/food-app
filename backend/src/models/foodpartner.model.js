const mongoose = require('mongoose');

const foodpartnerschema=new mongoose.Schema({
     name: {
        type: String,
        required: true
    },
    contactname: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const foodpartnermodel=mongoose.model("foodpartner",foodpartnerschema)
module.exports=foodpartnermodel