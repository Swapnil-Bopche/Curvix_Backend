
const { default: mongoose } = require("mongoose")
const Sell = require("../Database/sell")

async function addSell(model) {
    let sell = new Sell({
        ...model
    })

    await sell.save()
    return sell.toObject()
}

async function getSells() {
    const sells = await Sell.find().populate({
        path: "customer",
        populate: [
            {
                path: "assignedEmployee",
                populate: { path: "post" }

            },
            {
                path: "selectedProduct",
                populate: [
                    { path: "brand" },
                    { path: "tag" }
                ]

            }
        ]
    })
    return sells.map(c => c.toObject());
}

async function getSellByCustomerId(customerId) {
    const sell = await Sell.findOne({ customer: new mongoose.Types.ObjectId(customerId) }).populate({
        path: "customer",
        populate: [
            {
                path: "assignedEmployee",
                populate: { path: "post" }

            },
            {
                path: "selectedProduct",
                populate: [
                    { path: "brand" },
                    { path: "tag" },
                ]

            }
        ]
    })

    if (!sell) {
        return null
    }

    return sell.toObject();
}

async function updateSell(id, model) {
    return await Sell.findByIdAndUpdate(id, model, { new: true }).populate({
        path: "customer",
        populate: [
            {
                path: "assignedEmployee",
                populate: { path: "post" }

            },
            {
                path: "selectedProduct",
                populate: [
                    { path: "brand" },
                    { path: "tag" },
                ]

            }
        ]
    }).populate("accessories")
}

const deleteSell = async (id) => {
    return await Sell.findByIdAndDelete(id)
}



module.exports = { addSell, getSells, getSellByCustomerId, updateSell, deleteSell }