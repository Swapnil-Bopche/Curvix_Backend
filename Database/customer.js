const mongoose = require("mongoose")
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    visitingDate: {
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    assignedEmployee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true
    },
    selectedProduct: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    tentativeDate: {
        type: Date,
        required: true
    },
    remark: {
        type: String,
        required: true
    },
}, { timestamps: true })

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;