const Accessories = require("../Database/accessories")

async function addAccessories(model) {
    let accessories = new Accessories({
        name: model.name,
        price: model.price
    })
    await accessories.save();
    return accessories.toObject()

}

async function getAccessories() {
    return await Accessories.find()

}

async function updateAccessories(id, model) {
    return await Accessories.findByIdAndUpdate(id, model, { new: true })

}

module.exports = { addAccessories, getAccessories, updateAccessories }