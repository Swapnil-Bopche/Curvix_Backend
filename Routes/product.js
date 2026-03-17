const express = require('express');
const { addProduct, getAllProducts, updateProduct, getAllProdutsAdminViewFroAudit, getProduct, deleteProductById } = require('../Handlers/product-handler');
const router = express.Router();

router.post('', async (req, res) => {
    try {
        let model = req.body
        let result = await addProduct(model)
        res.send(result)
    } catch (err) {
        res.status(500).json({ message: 'Error in adding product ', error: err })
    }
})

router.get('', async (req, res) => {
    try {
        const keyword = (req.query.keyword || '').replace(/\s+/g, '');
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 5;
        const result = await getAllProducts(keyword, page, limit)
        res.status(200).json({
            message: "Curvix Products ",
            page: result.page,
            limit: result.limit,
            totalRecords: result.totalRecords,
            totalPages: result.totalPages,
            data: result.products
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        let id = req.params["id"];
        let result = await getProduct(id);
        res.send({
            message: "vehicle by ID!",
            data: result
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
        let model = req.body;
        let id = req.params['id']
        const updatedProduct = await updateProduct(id, model)
        res.status(200).json({
            message: "product updated!",
            data: updatedProduct
        })


    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params["id"]
        const result = await deleteProductById(id);
        res.status(200).json(
            {
                message: "Vehicle data deleted",
                data: result
            }
        )

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})



// router.delete("/:id", async (req, res) => {
//     try {
//         const id = req.params["id"]
//         const result = await deleteProduct(id);
//         res.status(200).json(
//             {
//                 message: "Product soft-deletd",
//                 data: result
//             }
//         )

//     } catch (err) {
//         res.status(500).json({ error: err.message })
//     }
// })



router.get('/AgencyAudit', async (req, res) => {
    try {
        const result = await getAllProdutsAdminViewFroAudit()
        res.status(200).json(result)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

module.exports = router;