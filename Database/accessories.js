const mongoose = require("mongoose")
const accessoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
})


const Accessories = mongoose.model("Accessories", accessoriesSchema);
module.exports = Accessories;
