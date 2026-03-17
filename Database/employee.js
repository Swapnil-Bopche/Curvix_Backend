const mongoose = require("mongoose")
const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    joinningDate: {
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required :true
    }
})

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;