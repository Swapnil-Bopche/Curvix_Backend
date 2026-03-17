const Tag = require("../Database/tag")

async function addTag(model) {
    let brand = new Tag({
        name: model.name
    })
    await brand.save();
    return brand.toObject()

}

async function getTags() {
    return await Tag.find()

}

async function updateTag(id, model) {
    return await Tag.findByIdAndUpdate(id, model, { new: true })

}

module.exports = { addTag, getTags, updateTag }