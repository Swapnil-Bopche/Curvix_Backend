const VehicleOrder = require('../Database/vehicleOrder')

const placeVehicleOrder = async (model) => {
    let order = new VehicleOrder({
        ...model

    })
    await order.save()
    return order.toObject()
}

const getAllVehicleOrders = async () => {
    const orders = await VehicleOrder.find().populate('customerId').populate("productId").populate("employeeId")
    // populate() is used to show full brand and tag object.// .
    return orders.map(p => p.toObject());
}

const getVehicleOrder = async (id) => {
    const vehicleorder = await VehicleOrder.findById(id).populate("customerId").populate("productId").populate("employeeId");
    return vehicleorder
}


const deleteVehicleOrder = async (id) => {
    return await VehicleOrder.findByIdAndDelete(id)
}

// const deleteVehicleOrder = async (id) => {
//     return await VehicleOrder.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
//     //we are not deleting products from momgodb we are just modifying it as deleted
// }

// const getAllVehicleOrdersAdminViewFroAudit = async () => {
//     return await VehicleOrder.find()
//     //returns all, even deleted 
// }




module.exports = { placeVehicleOrder, getAllVehicleOrders, getVehicleOrder, deleteVehicleOrder }



