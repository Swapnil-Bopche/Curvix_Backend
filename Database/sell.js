const mongoose = require("mongoose")
const sellSchema = new mongoose.Schema({

    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true
    },
   
    sellingDate: {
        type: Date,
        default: Date.now
    },

})

const Sell = mongoose.model("Sell", sellSchema);
module.exports = Sell;