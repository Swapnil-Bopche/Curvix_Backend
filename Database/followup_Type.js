const mongoose = require("mongoose")
const followup_TypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
})


const Followup_Type = mongoose.model("Followup_Type", followup_TypeSchema);
module.exports = Followup_Type;