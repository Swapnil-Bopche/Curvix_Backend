const mongoose = require("mongoose")
const vehicleOrderSchema = new mongoose.Schema({

    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true
    },
    accessories: {
        type: [String],
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    additionalDiscount: {
        type: Number,
        required: true
    },
    totalPayable: {
        type: Number,
        required: true
    },
     isDeleted: {
        type: Boolean,
        default: false
    }
})

const VehicleOrder = mongoose.model("VehicleOrder", vehicleOrderSchema);
module.exports = VehicleOrder;