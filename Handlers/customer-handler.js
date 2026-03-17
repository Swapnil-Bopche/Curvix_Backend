const Customer = require("../Database/customer")

async function addCustomer(model) {
    let customer = new Customer({
        ...model
    })

    await customer.save()
    return customer.toObject()
}

async function getCustomers() {
    const customers = await Customer.find().populate({
        path: "assignedEmployee", populate: {
            path: "post"
        },
    }).populate({
        path: "selectedProduct", populate: [{ path: "brand" }, { path: "tag" }],
    })
    return customers.map(c => c.toObject());
}

async function getCustomer(id) {
    const customer = await Customer.findById(id).populate({
        path: "assignedEmployee", populate: {
            path: "post"
        },
    }).populate({
        path: "selectedProduct", populate: [{ path: "brand" }, { path: "tag" }],
    })
    return customer.toObject();
}

async function updateCustomer(id, model) {
    return await Customer.findByIdAndUpdate(id, model, { new: true }).populate({
        path: "assignedEmployee", populate: {
            path: "post"
        },
    }).populate({
        path: "selectedProduct", populate: [{ path: "brand" }, { path: "tag" }],
    })

}

const deleteCustomer = async (id) => {
    return await Customer.findByIdAndDelete(id)
}

const deleteCustomerByFlag = async (id) => {
    return await Customer.findByIdAndDelete(id)
}



module.exports = { addCustomer, getCustomers, getCustomer, updateCustomer, deleteCustomer, deleteCustomerByFlag }