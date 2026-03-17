const Brand = require('../Database/brand')

async function addBrand(model) {
    let brand = new Brand({
        name:model.name
    })
    await brand.save();
    return brand.toObject()

}

async function getBrands() {
    return await Brand.find()
}

module.exports = { addBrand, getBrands }