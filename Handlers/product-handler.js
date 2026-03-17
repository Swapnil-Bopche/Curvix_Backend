const Product = require('../Database/product')

const addProduct = async (model) => {
    let product = new Product({
        ...model
        // name:model.name,
        // price:model.price,
        // discount:model.discount,
        // stock:model.stock,
        // isDeleted:model.isDeleted,
        // brand:model.brand,
        // tag:model.tag
    })
    await product.save()
    return product.toObject()
}

const getAllProducts = async (keyword = '',  page = 1, limit = 5) => {

    let _filter = {
        isDeleted: false
    }

    if (keyword.trim()) {
        _filter.name = { $regex: keyword, $options: 'i' }
    }

    const skip = (page - 1) * limit

    const totalRecords = await Product.countDocuments(_filter)

    const products = await Product.find(_filter)
        .populate('brand')
        .populate('tag')
        .skip(skip)
        .limit(limit)

    return {
        page, limit, totalRecords,
        totalPages: Math.ceil(totalRecords / limit),
        products: products.map(p => p.toObject())
    }
}

const getProduct = async (id) => {
    const product = await Product.findById(id).populate("brand").populate("tag");
    return product
}

const updateProduct = async (id, model) => {
    return await Product.findByIdAndUpdate(id, model, { new: true })
}

// const deleteProduct = async (id) => {
//     return await Product.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
//     //we are not deleting products from momgodb we are just modifying it as deleted
// }

const deleteProductById = async (id) => {
    return await Product.findByIdAndDelete(id)
}

const getAllProdutsAdminViewFroAudit = async () => {
    return await Product.find()
    //returns all, even deleted 
}



module.exports = { addProduct, getAllProducts, getProduct, updateProduct, deleteProductById, getAllProdutsAdminViewFroAudit }



