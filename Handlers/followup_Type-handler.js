const Followup_Type = require("../Database/followup_Type")

async function addfollowup_Type(model) {
    let followup_Type = new Followup_Type({
        name:model.name
    })
    await followup_Type.save();
    return followup_Type.toObject()

}

async function getfollowup_Types() {
    return await Followup_Type.find()

}

async function updatefollowup_Type(id, model) {
    return await Followup_Type.findByIdAndUpdate(id, model, { new: true })

}

module.exports = { addfollowup_Type, getfollowup_Types, updatefollowup_Type }