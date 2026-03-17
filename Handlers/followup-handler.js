
const { default: mongoose } = require("mongoose")
const Followup = require("../Database/followup")

async function addFollowup(model) {
    let followup = new Followup({
        ...model
    })

    await followup.save()
    return followup.toObject()
}

async function getFollowups() {
    const followups = await Followup.find().populate({
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
    }).populate("followup_Type")
    return followups.map(c => c.toObject());
}

async function getFollowupByCustomerId(customerId) {
    const followups = await Followup.find({ customer: new mongoose.Types.ObjectId(customerId) })
        .populate({
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
        }).populate("followup_Type")
        .sort({createdAt:-1})
        .limit(2);    //newest first

    if (!followups || followups.length == 0) {
        return [];
    }

    return followups.map(f => f.toObject());
}

async function updateFollowup(id, model) {
    return await Followup.findByIdAndUpdate(id, model, { new: true }).populate({
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
    }).populate("followup_Type")
}

const deleteFollowup = async (id) => {
    return await Followup.findByIdAndDelete(id)
}



module.exports = { addFollowup, getFollowups, getFollowupByCustomerId, updateFollowup, deleteFollowup }