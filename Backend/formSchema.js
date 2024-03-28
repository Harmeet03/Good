const mongoose = require("mongoose");
const formSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            require: true
        }, 
        fname: {
            type: String,
            require: true
        }, 

        address: {
            type: String,
            require: true
        },

        city: {
            type: String,
            require: true
        },

        state: {
            type: String,
            require: true
        },

        pcode: {
            type: Number,
            require: true
        },

        pno: {
            type: Number,
            require: true
        }
    }, 

    {
        timestamps: true
    }
);

const buyForm = mongoose.model('BuyForm', formSchema);
module.exports = buyForm;