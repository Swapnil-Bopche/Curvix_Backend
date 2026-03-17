const mongoose = require("mongoose")
const followupSchema = new mongoose.Schema({

    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true
    },
    followup_Type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Followup_Type",
        required: true
    },
    followup_Date: {
        type: Date,
        required: true
    },
    remark: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

})

const Followup = mongoose.model("Followup", followupSchema);
module.exports = Followup;